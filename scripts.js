(function () {
  "use strict";

  var sections = Array.prototype.slice.call(document.querySelectorAll(".file-section"));
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".tab"));
  var treeFiles = Array.prototype.slice.call(document.querySelectorAll(".tree-file[data-target]"));
  var crumb = document.getElementById("crumbFile");
  var editorScroll = document.getElementById("editorScroll");
  var gutter = document.getElementById("gutter");
  var sidebar = document.getElementById("sidebar");
  var menuToggle = document.getElementById("menuToggle");
  var tabbar = document.getElementById("tabbar");

  var fileNames = {
    home: "home.tsx",
    about: "about.test.js",
    experience: "experience.postman_collection.json",
    projects: "projects.board.jira",
    skills: "skills.json",
    certifications: "certifications.yml",
    contact: "contact.css"
  };

  function setActive(id) {
    var activeTab = null;
    tabs.forEach(function (t) {
      var isActive = t.dataset.target === id;
      t.classList.toggle("active", isActive);
      if (isActive) activeTab = t;
    });
    treeFiles.forEach(function (f) { f.classList.toggle("active", f.dataset.target === id); });
    if (crumb && fileNames[id]) crumb.textContent = fileNames[id];
    if (activeTab && tabbar) {
      var barRect = tabbar.getBoundingClientRect();
      var tabRect = activeTab.getBoundingClientRect();
      var tabLeft = tabRect.left - barRect.left + tabbar.scrollLeft;
      var tabRight = tabLeft + tabRect.width;
      var viewLeft = tabbar.scrollLeft;
      var viewRight = viewLeft + tabbar.clientWidth;
      if (tabLeft < viewLeft) {
        tabbar.scrollTo({ left: tabLeft - 16, behavior: "smooth" });
      } else if (tabRight > viewRight) {
        tabbar.scrollTo({ left: tabRight - tabbar.clientWidth + 16, behavior: "smooth" });
      }
    }
  }

  function scrollToSection(id) {
    var el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
    if (window.innerWidth <= 720) sidebar.classList.remove("open");
  }

  tabs.forEach(function (t) {
    t.addEventListener("click", function () { scrollToSection(t.dataset.target); });
  });
  treeFiles.forEach(function (f) {
    f.addEventListener("click", function (e) {
      e.preventDefault();
      scrollToSection(f.dataset.target);
    });
  });
  Array.prototype.slice.call(document.querySelectorAll("a[data-target]")).forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      scrollToSection(a.dataset.target);
    });
  });

  // scroll-spy: whichever section's top has most recently passed the
  // "active line" near the top of the viewport wins
  var spyTicking = false;
  function updateActiveOnScroll() {
    spyTicking = false;
    var line = editorScroll.getBoundingClientRect().top + 120;
    var current = sections[0].id;
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].getBoundingClientRect().top <= line) current = sections[i].id;
    }
    setActive(current);
  }
  editorScroll.addEventListener("scroll", function () {
    if (!spyTicking) {
      spyTicking = true;
      requestAnimationFrame(updateActiveOnScroll);
    }
  });
  updateActiveOnScroll();

  // mobile sidebar toggle
  if (menuToggle) {
    menuToggle.addEventListener("click", function () {
      sidebar.classList.toggle("open");
    });
  }

  // decorative gutter line numbers, sized to total content height
  function buildGutter() {
    if (!gutter || window.innerWidth <= 720) return;
    var contentEl = document.querySelector(".content");
    var lineHeight = 20;
    var total = Math.ceil(contentEl.scrollHeight / lineHeight);
    var html = "";
    for (var i = 1; i <= total; i++) {
      html += "<div>" + i + "</div>";
    }
    gutter.innerHTML = html;
  }
  buildGutter();
  window.addEventListener("resize", debounce(buildGutter, 200));

  // ============ case-study accordions ============
  var caseStudies = Array.prototype.slice.call(document.querySelectorAll(".case-study"));
  function setCaseOpen(cs, open) {
    var btn = cs.querySelector(".case-toggle-btn");
    var panel = cs.querySelector(".case-panel");
    var label = cs.querySelector(".case-toggle");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    cs.classList.toggle("open", open);
    if (label) label.textContent = open ? "Hide case study" : "Show detailed case study";
    panel.style.maxHeight = open ? panel.scrollHeight + "px" : "0px";
    setTimeout(buildGutter, 350);
  }
  caseStudies.forEach(function (cs) {
    var btn = cs.querySelector(".case-toggle-btn");
    btn.addEventListener("click", function () {
      setCaseOpen(cs, !cs.classList.contains("open"));
    });
  });
  function openCaseFromHash() {
    var id = window.location.hash.slice(1);
    var cs = document.getElementById(id);
    if (cs && cs.classList.contains("case-study") && !cs.classList.contains("open")) {
      setCaseOpen(cs, true);
      setTimeout(function () {
        cs.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 60);
    }
  }
  window.addEventListener("hashchange", openCaseFromHash);
  openCaseFromHash();

  // ============ folder-style accordions (experience jobs + featured projects) ============
  function setFolderOpen(container, triggerSel, open) {
    var btn = container.querySelector(triggerSel);
    var panel = container.querySelector(".case-panel");
    var chevronText = btn.querySelector(".folder-chevron") || (btn.classList.contains("folder-chevron") ? btn : null);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    container.classList.toggle("open", open);
    if (chevronText) chevronText.childNodes[0].textContent = open ? "Hide " : "Details ";
    panel.style.maxHeight = open ? panel.scrollHeight + "px" : "0px";
    setTimeout(buildGutter, 350);
  }
  var pmFolders = Array.prototype.slice.call(document.querySelectorAll(".pm-folder"));
  pmFolders.forEach(function (folder, i) {
    var btn = folder.querySelector(".pm-folder-head");
    btn.addEventListener("click", function () {
      setFolderOpen(folder, ".pm-folder-head", !folder.classList.contains("open"));
    });
    setFolderOpen(folder, ".pm-folder-head", i === 0);
  });
  var featureCards = Array.prototype.slice.call(document.querySelectorAll(".feature-card"));
  featureCards.forEach(function (card) {
    var btn = card.querySelector(".feature-toggle");
    btn.addEventListener("click", function () {
      setFolderOpen(card, ".feature-toggle", !card.classList.contains("open"));
    });
    setFolderOpen(card, ".feature-toggle", false);
  });

  function debounce(fn, wait) {
    var t;
    return function () {
      clearTimeout(t);
      t = setTimeout(fn, wait);
    };
  }

  // ============ toast ============
  var toastEl = document.getElementById("toast");
  var toastTimer;
  function showToast(html) {
    if (!toastEl) return;
    toastEl.innerHTML = html;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.classList.remove("show");
    }, 2600);
  }

  // contact form -> mailto
  var contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = document.getElementById("cf-name").value.trim();
      var email = document.getElementById("cf-email").value.trim();
      var message = document.getElementById("cf-message").value.trim();
      var subject = encodeURIComponent("Portfolio contact from " + name);
      var body = encodeURIComponent(message + "\n\n— " + name + " (" + email + ")");
      showToast('<span class="ok">&#10003;</span> Opening your email app to send this...');
      window.location.href = "mailto:nahidhossainmd99@gmail.com?subject=" + subject + "&body=" + body;
    });
  }

  // copy email to clipboard
  var copyBtns = Array.prototype.slice.call(document.querySelectorAll(".copy-email-btn"));
  copyBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var email = btn.getAttribute("data-email");
      function done() { showToast('<span class="ok">&#10003;</span> Email copied to clipboard!'); }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(done, done);
      } else {
        var tmp = document.createElement("textarea");
        tmp.value = email;
        tmp.style.position = "fixed";
        tmp.style.opacity = "0";
        document.body.appendChild(tmp);
        tmp.select();
        try { document.execCommand("copy"); } catch (err) {}
        document.body.removeChild(tmp);
        done();
      }
    });
  });

  // ============ terminal: "Run Tests" ============
  var terminalPanel = document.getElementById("terminalPanel");
  var terminalBody = document.getElementById("terminalBody");
  var runBtn = document.getElementById("runTestsBtn");
  var terminalClose = document.getElementById("terminalClose");
  var running = false;

  var script = [
    { t: "cmd", text: "npm run test:portfolio" },
    { t: "gap" },
    { t: "pass", file: "about.test.js", label: "communicates clearly under pressure" },
    { t: "pass", file: "experience.test.js", label: "delivers under real production constraints" },
    { t: "pass", file: "projects.test.js", label: "ships, tests, and documents the work" },
    { t: "pass", file: "skills.test.js", label: "covers manual, API, automation & performance" },
    { t: "pass", file: "certifications.test.js", label: "keeps learning on a schedule" },
    { t: "pass", file: "contact.test.js", label: "actually responds to messages" },
    { t: "gap" },
    { t: "dim", text: "Test Suites: 6 passed, 6 total" },
    { t: "dim", text: "Tests:       42 passed, 42 total" },
    { t: "yellow", text: "Coverage:    attention-to-detail 100% · patience-for-edge-cases 100%" },
    { t: "dim", text: "Time:        3.57s (yes, that's the CGPA joke)" },
    { t: "gap" },
    { t: "final", text: "✔ Candidate is production-ready." }
  ];

  function typeLine(entry, done) {
    if (entry.t === "gap") {
      var gap = document.createElement("div");
      gap.innerHTML = "&nbsp;";
      terminalBody.appendChild(gap);
      return done();
    }
    var line = document.createElement("div");
    if (entry.t === "cmd") line.className = "l-cmd";
    if (entry.t === "dim") line.className = "l-dim";
    if (entry.t === "yellow") line.className = "l-yellow";
    if (entry.t === "final") line.className = "l-pass";
    terminalBody.appendChild(line);

    var full = entry.t === "pass"
      ? "PASS  src/" + entry.file
      : entry.text;

    var i = 0;
    var speed = entry.t === "cmd" ? 35 : 8;
    (function step() {
      if (entry.t === "pass") {
        line.innerHTML = '<span class="l-pass">PASS</span>  src/' + entry.file.slice(0, Math.max(0, i - 6));
      } else {
        line.textContent = full.slice(0, i);
      }
      i++;
      if (i <= full.length) {
        setTimeout(step, speed);
      } else {
        if (entry.t === "pass") {
          line.innerHTML = '<span class="l-pass">PASS</span>  src/' + entry.file + '  <span class="l-dim">— ' + entry.label + "</span>";
        }
        terminalBody.scrollTop = terminalBody.scrollHeight;
        done();
      }
      terminalBody.scrollTop = terminalBody.scrollHeight;
    })();
  }

  function runSequence(index) {
    if (index >= script.length) {
      running = false;
      return;
    }
    typeLine(script[index], function () {
      runSequence(index + 1);
    });
  }

  function openTerminal() {
    terminalPanel.classList.add("open");
    if (running) return;
    running = true;
    terminalBody.innerHTML = "";
    runSequence(0);
  }

  if (runBtn) runBtn.addEventListener("click", openTerminal);
  if (terminalClose) terminalClose.addEventListener("click", function () {
    terminalPanel.classList.remove("open");
  });

  // auto-run once, shortly after load, so first-time visitors see it happen —
  // but not on small screens, where the panel would cover the whole page
  setTimeout(function () {
    if (!running && window.innerWidth > 720) openTerminal();
  }, 1200);
})();
