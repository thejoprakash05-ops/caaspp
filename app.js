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

  // A question locks the moment you answer it and step away — you can still
  // change your answer freely while it's the one on screen. Skipped (unanswered)
  // questions stay open forever so you can still go fill them in.
  function isLocked(item) {
    return item.globalIndex !== currentIndex && isAnswered(item);
  }

  function renderPalette() {
    const el = document.getElementById("palette-grid");
    if (!el) return;
    el.innerHTML = FLAT.map(item => {
      const cls = ["palette-item"];
      const lockedItem = isLocked(item);
      if (isAnswered(item)) cls.push("answered");
      if (flagged.has(item.q.id)) cls.push("flagged");
      if (item.globalIndex === currentIndex) cls.push("current");
      if (lockedItem) cls.push("locked");
      const label = lockedItem ? "&#128274;" : (item.globalIndex + 1);
      const title = lockedItem ? "Locked - already answered" : item.sectionName;
      return `<button class="${cls.join(" ")}" data-idx="${item.globalIndex}" title="${title}" ${lockedItem ? "disabled" : ""}>${label}</button>`;
    }).join("");
    el.querySelectorAll(".palette-item").forEach(btn => {
      if (!btn.disabled) btn.addEventListener("click", () => goTo(parseInt(btn.dataset.idx, 10)));
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
            <button class="btn btn-secondary" id="prev-btn" ${(currentIndex === 0 || isLocked(FLAT[currentIndex - 1])) ? "disabled" : ""}>&larr; Previous</button>
            ${currentIndex === FLAT.length - 1
              ? `<button class="btn btn-primary" id="submit-btn">Submit Test</button>`
              : `<button class="btn btn-primary" id="next-btn" ${isLocked(FLAT[currentIndex + 1]) ? "disabled" : ""}>Next &rarr;</button>`}
          </div>
        </div>
        <div class="palette">
          <h5>Question Map</h5>
          <div id="palette-progress" class="test-meta" style="margin-bottom:8px;"></div>
          <div id="palette-grid" class="palette-grid"></div>
          <div class="legend">
            <div><span class="dot" style="background:var(--blue-light);border:1px solid var(--blue);"></span>Answered</div>
            <div><span class="dot" style="background:var(--surface);border:1px solid var(--accent);"></span>Flagged</div>
            <div><span class="dot" style="background:var(--surface);outline:2px solid var(--accent);"></span>Current</div>
            <div><span class="dot" style="background:var(--gray-bg);opacity:0.6;border:1px solid var(--border);"></span>Locked (already answered)</div>
          </div>
          <div class="test-meta" style="margin-top:8px;">Once you answer a question and move on, it locks &mdash; you can still fill in any you skipped.</div>
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
    if (isLocked(FLAT[idx])) return; // already answered and no longer on screen - no revisiting
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

  function truncate(s, n) {
    return s.length > n ? s.slice(0, n).trim() + "…" : s;
  }

  function recordResult(id, correct, total, pct) {
    try {
      const all = JSON.parse(localStorage.getItem("caaspp_results")) || {};
      const prev = all[id] || { attempts: 0, best: null, last: null };
      const entry = { correct, total, pct, date: new Date().toISOString() };
      prev.attempts = (prev.attempts || 0) + 1;
      prev.last = entry;
      if (!prev.best || pct > prev.best.pct) prev.best = entry;
      all[id] = prev;
      localStorage.setItem("caaspp_results", JSON.stringify(all));
    } catch (e) { /* ignore storage errors */ }
  }

  function buildReviewSections(missedItems) {
    const bySectionIdx = new Map();
    missedItems.forEach(item => {
      if (!bySectionIdx.has(item.sectionIndex)) {
        bySectionIdx.set(item.sectionIndex, {
          name: item.sectionName,
          passageTitle: item.passageTitle,
          passage: item.passage,
          questions: []
        });
      }
      bySectionIdx.get(item.sectionIndex).questions.push(item.q);
    });
    return Array.from(bySectionIdx.values());
  }

  function startMistakeReview() {
    const missedItems = FLAT.filter(item => !gradeQuestion(item));
    if (!missedItems.length) return;
    const reviewData = {
      id: "review_" + TEST.id + "_" + Date.now(),
      grade: TEST.grade,
      subject: TEST.subject,
      title: TEST.title + " — Mistake Review",
      durationMinutes: Math.max(10, missedItems.length * 2),
      sections: buildReviewSections(missedItems)
    };
    try {
      localStorage.setItem("caaspp_active_review", JSON.stringify(reviewData));
      location.href = "test.html?review=1";
    } catch (e) {
      alert("Could not start the mistake review (storage error). Try again.");
    }
  }

  function renderResults(autoSubmitted) {
    const bySection = {};
    let totalCorrect = 0;

    FLAT.forEach(item => {
      const right = gradeQuestion(item);
      if (right) totalCorrect++;
      if (!bySection[item.sectionName]) bySection[item.sectionName] = { correct: 0, total: 0, missedStandards: new Set() };
      bySection[item.sectionName].total++;
      if (right) bySection[item.sectionName].correct++;
      else if (item.q.standard) bySection[item.sectionName].missedStandards.add(item.q.standard);
    });

    const pct = Math.round((totalCorrect / FLAT.length) * 100);
    recordResult(TEST.id, totalCorrect, FLAT.length, pct);

    let domainRows = "";
    Object.keys(bySection).forEach(name => {
      const d = bySection[name];
      domainRows += `<tr><td>${name}</td><td>${d.correct} / ${d.total}</td><td>${Math.round((d.correct / d.total) * 100)}%</td></tr>`;
    });

    const weakSections = Object.keys(bySection)
      .map(name => ({ name, ...bySection[name], pctRight: bySection[name].correct / bySection[name].total }))
      .filter(s => s.correct < s.total)
      .sort((a, b) => a.pctRight - b.pctRight);

    let improveHtml = "";
    if (weakSections.length) {
      improveHtml = `<h3>Topics to Improve</h3><div class="score-summary" style="text-align:left;">` +
        weakSections.map(s => {
          const missedCount = s.total - s.correct;
          const standardsList = Array.from(s.missedStandards).join(", ");
          return `<div class="tip-box">
            <strong>${s.name}</strong> &mdash; missed ${missedCount} of ${s.total} (${Math.round(s.pctRight * 100)}% correct)
            ${standardsList ? `<div class="test-meta">Standards to review: ${standardsList}</div>` : ""}
          </div>`;
        }).join("") + `</div>`;
    } else {
      improveHtml = `<div class="tip-box"><strong>Great work &mdash; no weak topic areas this time!</strong></div>`;
    }

    const missedItems = FLAT.filter(item => !gradeQuestion(item));
    let mistakesGlanceHtml = "";
    if (missedItems.length) {
      mistakesGlanceHtml = `<h3>Mistakes at a Glance</h3><div class="score-summary" style="text-align:left;">` +
        missedItems.map(item => `<div style="padding:6px 0;border-bottom:1px solid var(--border);">
          <strong>Q${item.globalIndex + 1}</strong> &middot; ${item.sectionName}${item.q.standard ? " (" + item.q.standard + ")" : ""}: ${truncate(item.q.prompt, 110)}
        </div>`).join("") + `</div>`;
    }

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
            ${missedItems.length ? `<button class="btn btn-primary" id="mistake-review-btn">🎯 Practice My Mistakes (${missedItems.length})</button>` : ""}
          </div>
        </div>
        ${improveHtml}
        ${mistakesGlanceHtml}
        <h3>Question-by-Question Review</h3>
        ${reviewHtml}
      </main>`;

    document.getElementById("retake-btn").addEventListener("click", () => {
      clearProgress();
      location.reload();
    });
    const mistakeBtn = document.getElementById("mistake-review-btn");
    if (mistakeBtn) mistakeBtn.addEventListener("click", startMistakeReview);
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
