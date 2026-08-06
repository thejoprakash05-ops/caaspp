// Renders a printable (blank or answer-key) version of a test.
(function () {
  "use strict";

  function letter(i) { return String.fromCharCode(65 + i); }

  function renderQuestionBlock(q, num, mode) {
    let body = "";
    if (q.type === "num") {
      body = `<div style="margin:6px 0 0 20px;">Answer: <span class="print-answer-line"></span></div>`;
      if (mode === "key") {
        const ans = Array.isArray(q.correct) ? q.correct[0] : q.correct;
        body += `<div style="margin-left:20px;"><strong>Answer key: ${ans}</strong></div>`;
      }
    } else {
      const correctSet = q.type === "ms" ? (q.correct || []) : [q.correct];
      body = q.choices.map((choice, i) => {
        const mark = mode === "key" && correctSet.includes(i) ? " &#10003;" : "";
        const weight = mode === "key" && correctSet.includes(i) ? "font-weight:600;" : "";
        return `<div class="print-choice" style="${weight}"><span class="box"></span>${letter(i)}) ${choice}${mark}</div>`;
      }).join("");
    }
    const explanation = (mode === "key" && q.explanation) ? `<div style="margin-left:20px;color:#333;"><em>${q.explanation}</em></div>` : "";
    return `<div class="print-q">
      <div><strong>${num}.</strong> ${q.prompt} ${q.standard ? `<span style="color:#777;font-size:0.8rem;">[${q.standard}]</span>` : ""}</div>
      ${body}
      ${explanation}
    </div>`;
  }

  window.renderPrintView = function (testId, mode) {
    const test = window.TEST_DATA;
    const root = document.getElementById("print-root");
    if (!test) { root.textContent = "Test data missing."; return; }

    let num = 1;
    let html = `
      <div class="print-header">
        <h1>${test.title}</h1>
        <div>${test.subject} &middot; Grade ${test.grade} &middot; ${test.durationMinutes} minutes</div>
        <div>${mode === "key" ? "ANSWER KEY" : "Name: _______________________   Date: ______________"}</div>
      </div>`;

    test.sections.forEach(section => {
      html += `<h3>${section.name}</h3>`;
      if (section.passage) {
        html += `<div style="border:1px solid #ccc;padding:12px;margin-bottom:14px;">
          <h4>${section.passageTitle || "Reading Passage"}</h4>${section.passage}
        </div>`;
      }
      (section.questions || []).forEach(q => {
        html += renderQuestionBlock(q, num, mode);
        num++;
      });
    });

    root.innerHTML = html;
  };
})();
