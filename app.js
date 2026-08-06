// CAASPP Practice Center - test runner engine
(function () {
  "use strict";

  let TEST = null;
  let FLAT = [];        // flattened question list with section/passage context
  let testId = "";
  let answers = {};      // questionId -> selected index / array / string
  let flagged = new Set();
  let currentIndex = 0;
  let timeRemaining = 0; // seconds
  let timerHandle = null;
  let submitted = false;

  function storageKey(id) { return "caaspp_progress_" + id; }

  function flattenTest(test) {
    const out = [];
    test.sections.forEach((section, sIdx) => {
      (section.questions || []).forEach((q, qIdx) => {
        out.push({
          globalIndex: out.length,
          sectionIndex: sIdx,
          sectionName: section.name,
          passageTitle: section.passageTitle || null,
          passage: section.passage || null,
          q: q
        });
      });
    });
    return out;
  }

  function loadProgress() {
    try {
      const raw = localStorage.getItem(storageKey(testId));
      if (!raw) return null;
      return JSON.parse(raw);
    } catch (e) { return null; }
  }

  function saveProgress() {
    try {
      localStorage.setItem(storageKey(testId), JSON.stringify({
        answers, flagged: Array.from(flagged), currentIndex, timeRemaining
      }));
    } catch (e) { /* ignore quota errors */ }
  }

  function clearProgress() {
    try { localStorage.removeItem(storageKey(testId)); } catch (e) {}
  }

  function fmtTime(sec) {
    sec = Math.max(0, Math.floor(sec));
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return m + ":" + String(s).padStart(2, "0");
  }

  function startTimer() {
    const timerEl = document.getElementById("timer");
    timerHandle = setInterval(() => {
      timeRemaining--;
      if (timerEl) {
        timerEl.textContent = fmtTime(timeRemaining);
        timerEl.classList.toggle("low", timeRemaining <= 120);
      }
      if (timeRemaining % 15 === 0) saveProgress();
      if (timeRemaining <= 0) {
        clearInterval(timerHandle);
        submitTest(true);
      }
    }, 1000);
  }

  function isAnswered(item) {
    const v = answers[item.q.id];
    if (v === undefined || v === null) return false;
    if (Array.isArray(v)) return v.length > 0;
    if (typeof v === "string") return v.trim().length > 0;
    return true;
  }

  function renderPalette() {
    const el = document.getElementById("palette-grid");
    if (!el) return;
    el.innerHTML = FLAT.map(item => {
      const cls = ["palette-item"];
      if (isAnswered(item)) cls.push("answered");
      if (flagged.has(item.q.id)) cls.push("flagged");
      if (item.globalIndex === currentIndex) cls.push("current");
      return `<button class="${cls.join(" ")}" data-idx="${item.globalIndex}" title="${item.sectionName}">${item.globalIndex + 1}</button>`;
    }).join("");
    el.querySelectorAll(".palette-item").forEach(btn => {
      btn.addEventListener("click", () => goTo(parseInt(btn.dataset.idx, 10)));
    });
    const answeredCount = FLAT.filter(isAnswered).length;
    const progEl = document.getElementById("palette-progress");
    if (progEl) progEl.textContent = answeredCount + " of " + FLAT.length + " answered";
  }

  function choiceHtml(item) {
    const q = item.q;
    const selected = answers[q.id];
    if (q.type === "num") {
      const val = typeof selected === "string" ? selected : "";
      return `<div class="numeric-input">
        <input type="text" id="numeric-answer" placeholder="Type your answer" value="${val.replace(/"/g, "&quot;")}" autocomplete="off">
      </div>`;
    }
    const multi = q.type === "ms";
    return q.choices.map((choice, i) => {
      const isSel = multi ? (Array.isArray(selected) && selected.includes(i)) : selected === i;
      return `<label class="choice ${isSel ? "selected" : ""}" data-i="${i}">
        <input type="${multi ? "checkbox" : "radio"}" name="choice" ${isSel ? "checked" : ""}>
        <span>${choice}</span>
      </label>`;
    }).join("");
  }

  function renderQuestion() {
    const item = FLAT[currentIndex];
    const root = document.getElementById("app-root");
    const q = item.q;

    root.innerHTML = `
      <div class="runner-layout">
        <div class="question-panel">
          <div class="section-label">${item.sectionName}</div>
          ${item.passage ? `<div class="passage-box"><h4>${item.passageTitle || "Reading Passage"}</h4>${item.passage}</div>` : ""}
          <div class="q-number">Question ${currentIndex + 1} of ${FLAT.length}${q.standard ? " &middot; Standard " + q.standard : ""}</div>
          <div class="q-prompt">${q.prompt}</div>
          <div id="choices">${choiceHtml(item)}</div>
          <div class="btn-row">
            <button class="btn btn-outline" id="flag-btn">${flagged.has(q.id) ? "⚑ Unflag for review" : "⚐ Flag for review"}</button>
          </div>
          <div class="nav-buttons">
            <button class="btn btn-secondary" id="prev-btn" ${currentIndex === 0 ? "disabled" : ""}>&larr; Previous</button>
            ${currentIndex === FLAT.length - 1
              ? `<button class="btn btn-primary" id="submit-btn">Submit Test</button>`
              : `<button class="btn btn-primary" id="next-btn">Next &rarr;</button>`}
          </div>
        </div>
        <div class="palette">
          <h5>Question Map</h5>
          <div id="palette-progress" class="test-meta" style="margin-bottom:8px;"></div>
          <div id="palette-grid" class="palette-grid"></div>
          <div class="legend">
            <div><span class="dot" style="background:var(--blue-light);border:1px solid var(--blue);"></span>Answered</div>
            <div><span class="dot" style="background:#fff;border:1px solid var(--accent);"></span>Flagged</div>
            <div><span class="dot" style="background:#fff;outline:2px solid var(--accent);"></span>Current</div>
          </div>
          <div class="btn-row" style="margin-top:10px;">
            <button class="btn btn-outline" id="submit-early-btn" style="width:100%;">Submit Test Now</button>
          </div>
        </div>
      </div>`;

    document.getElementById("test-title").textContent = TEST.title;

    if (q.type === "num") {
      const input = document.getElementById("numeric-answer");
      input.addEventListener("input", () => {
        answers[q.id] = input.value;
        saveProgress();
        renderPalette();
      });
    } else {
      root.querySelectorAll(".choice").forEach(label => {
        label.addEventListener("click", () => {
          const i = parseInt(label.dataset.i, 10);
          if (q.type === "ms") {
            const cur = Array.isArray(answers[q.id]) ? answers[q.id].slice() : [];
            const pos = cur.indexOf(i);
            if (pos >= 0) cur.splice(pos, 1); else cur.push(i);
            answers[q.id] = cur;
          } else {
            answers[q.id] = i;
          }
          saveProgress();
          renderQuestion();
        });
      });
    }

    document.getElementById("flag-btn").addEventListener("click", () => {
      if (flagged.has(q.id)) flagged.delete(q.id); else flagged.add(q.id);
      saveProgress();
      renderQuestion();
    });

    const prevBtn = document.getElementById("prev-btn");
    if (prevBtn) prevBtn.addEventListener("click", () => goTo(currentIndex - 1));
    const nextBtn = document.getElementById("next-btn");
    if (nextBtn) nextBtn.addEventListener("click", () => goTo(currentIndex + 1));
    const submitBtn = document.getElementById("submit-btn");
    if (submitBtn) submitBtn.addEventListener("click", () => confirmSubmit());
    document.getElementById("submit-early-btn").addEventListener("click", () => confirmSubmit());

    renderPalette();
  }

  function confirmSubmit() {
    const unanswered = FLAT.length - FLAT.filter(isAnswered).length;
    const msg = unanswered > 0
      ? `You have ${unanswered} unanswered question(s). Submit anyway?`
      : "Submit your test now?";
    if (confirm(msg)) submitTest(false);
  }

  function goTo(idx) {
    if (idx < 0 || idx >= FLAT.length) return;
    currentIndex = idx;
    saveProgress();
    renderQuestion();
  }

  function normNum(v) {
    if (v === undefined || v === null) return "";
    return String(v).trim().toLowerCase().replace(/\s+/g, "");
  }

  function gradeQuestion(item) {
    const q = item.q;
    const given = answers[q.id];
    if (q.type === "num") {
      const accepted = Array.isArray(q.correct) ? q.correct : [q.correct];
      const g = normNum(given);
      const gNum = parseFloat(g);
      const isRight = accepted.some(a => {
        const an = normNum(a);
        if (an === g) return true;
        const aNum = parseFloat(a);
        return !isNaN(gNum) && !isNaN(aNum) && Math.abs(gNum - aNum) < 1e-6;
      });
      return isRight;
    }
    if (q.type === "ms") {
      const correct = (q.correct || []).slice().sort();
      const gv = (Array.isArray(given) ? given.slice() : []).sort();
      return JSON.stringify(correct) === JSON.stringify(gv);
    }
    return given === q.correct;
  }

  function submitTest(auto) {
    if (submitted) return;
    submitted = true;
    if (timerHandle) clearInterval(timerHandle);
    clearProgress();
    renderResults(auto);
  }

  function renderResults(autoSubmitted) {
    const bySection = {};
    let totalCorrect = 0;

    FLAT.forEach(item => {
      const right = gradeQuestion(item);
      if (right) totalCorrect++;
      if (!bySection[item.sectionName]) bySection[item.sectionName] = { correct: 0, total: 0 };
      bySection[item.sectionName].total++;
      if (right) bySection[item.sectionName].correct++;
    });

    const pct = Math.round((totalCorrect / FLAT.length) * 100);

    let domainRows = "";
    Object.keys(bySection).forEach(name => {
      const d = bySection[name];
      domainRows += `<tr><td>${name}</td><td>${d.correct} / ${d.total}</td><td>${Math.round((d.correct / d.total) * 100)}%</td></tr>`;
    });

    let reviewHtml = "";
    FLAT.forEach(item => {
      const q = item.q;
      const right = gradeQuestion(item);
      const given = answers[q.id];
      let yourAnswerText, correctAnswerText;

      if (q.type === "num") {
        yourAnswerText = (given === undefined || given === null || given === "") ? "(no answer)" : given;
        correctAnswerText = Array.isArray(q.correct) ? q.correct[0] : q.correct;
      } else if (q.type === "ms") {
        const gv = Array.isArray(given) ? given : [];
        yourAnswerText = gv.length ? gv.map(i => q.choices[i]).join("; ") : "(no answer)";
        correctAnswerText = (q.correct || []).map(i => q.choices[i]).join("; ");
      } else {
        yourAnswerText = (given === undefined || given === null) ? "(no answer)" : q.choices[given];
        correctAnswerText = q.choices[q.correct];
      }

      reviewHtml += `
        <div class="review-item ${right ? "correct" : "incorrect"}">
          <div class="q-number">Question ${item.globalIndex + 1} &middot; ${item.sectionName}${q.standard ? " &middot; " + q.standard : ""}</div>
          <div class="q-prompt" style="font-size:1rem;">${q.prompt}</div>
          <div>${right ? '<span class="tag-correct">&#10003; Correct</span>' : '<span class="tag-incorrect">&#10007; Incorrect</span>'}</div>
          <div><strong>Your answer:</strong> ${yourAnswerText}</div>
          ${right ? "" : `<div><strong>Correct answer:</strong> ${correctAnswerText}</div>`}
          ${q.explanation ? `<div class="explanation">${q.explanation}</div>` : ""}
        </div>`;
    });

    document.getElementById("test-header").style.display = "none";
    document.getElementById("test-title").textContent = TEST.title + " - Results";

    document.getElementById("app-root").innerHTML = `
      <main style="max-width:900px;margin:0 auto;padding:20px 16px 60px;">
        <div class="score-summary">
          ${autoSubmitted ? '<p style="color:var(--red);font-weight:600;">Time expired &mdash; test was submitted automatically.</p>' : ""}
          <div>${TEST.title}</div>
          <div class="score-big">${totalCorrect} / ${FLAT.length} (${pct}%)</div>
          <table class="domain-table">
            <tr><th>Topic Area</th><th>Score</th><th>Percent</th></tr>
            ${domainRows}
          </table>
          <div class="btn-row" style="justify-content:center;margin-top:16px;">
            <a class="btn btn-primary" href="index.html">Back to Practice Center</a>
            <button class="btn btn-secondary" id="retake-btn">Retake This Test</button>
          </div>
        </div>
        <h3>Question-by-Question Review</h3>
        ${reviewHtml}
      </main>`;

    document.getElementById("retake-btn").addEventListener("click", () => {
      clearProgress();
      location.reload();
    });
  }

  window.initTestRunner = function (id) {
    testId = id;
    TEST = window.TEST_DATA;
    if (!TEST) {
      document.getElementById("app-root").innerHTML = "<main><p>Test data missing.</p></main>";
      return;
    }
    FLAT = flattenTest(TEST);

    const saved = loadProgress();
    if (saved) {
      answers = saved.answers || {};
      flagged = new Set(saved.flagged || []);
      currentIndex = Math.min(saved.currentIndex || 0, FLAT.length - 1);
      timeRemaining = typeof saved.timeRemaining === "number" ? saved.timeRemaining : TEST.durationMinutes * 60;
    } else {
      answers = {};
      flagged = new Set();
      currentIndex = 0;
      timeRemaining = TEST.durationMinutes * 60;
    }

    document.getElementById("test-title").textContent = TEST.title;
    document.getElementById("timer").textContent = fmtTime(timeRemaining);
    renderQuestion();
    startTimer();
  };
})();
