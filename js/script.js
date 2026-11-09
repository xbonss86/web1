"use strict";
/* ============ DATA (edit di sini) ============ */
const DATA = {
  chips: ["Web Development", "Network Infrastructure", "Database Management", "System Administration", "IT Support", "Troubleshooting"],
  spec: [
    ["01", "Web Development", ["HTML", "CSS", "JavaScript", "PHP", "Responsive Web Design", "REST API", "Web Application", "Authentication System"]],
    ["02", "Network", ["LAN", "WLAN", "TCP/IP", "MikroTik", "Router", "Switch", "DHCP", "DNS", "Network Troubleshooting", "Bandwidth Management"]],
    ["03", "Database", ["MySQL", "MariaDB", "Database Design", "SQL", "CRUD", "Backup & Restore", "Query Optimization", "Relational Database"]],
    ["04", "System & IT Support", ["Windows", "Linux", "Hardware Troubleshooting", "Software Troubleshooting", "Installation", "Maintenance", "System Configuration", "Technical Support"]]
  ],
  // [nama, level 1-100]. Sesuaikan dengan kemampuan Anda yang sebenarnya.
  skills: {
    Programming: [["HTML5", 85], ["CSS3", 80], ["JavaScript", 70], ["PHP", 75], ["SQL", 75]],
    Web: [["Responsive Design", 80], ["REST API", 60], ["Authentication", 70], ["CRUD", 85], ["Admin Dashboard", 75]],
    Database: [["MySQL", 80], ["MariaDB", 70], ["Database Design", 75], ["Backup", 70], ["Restore", 70]],
    Network: [["MikroTik", 80], ["LAN / WLAN", 80], ["TCP/IP", 75], ["DHCP / DNS", 75], ["Routing", 65], ["Firewall", 65], ["Bandwidth Mgmt", 70]],
    System: [["Windows", 85], ["Linux", 65], ["Server", 60], ["Local Network", 80], ["Troubleshooting", 85]],
    Tools: [["VS Code", 85], ["Git", 65], ["GitHub", 65], ["Laragon / XAMPP", 85], ["phpMyAdmin", 85], ["Winbox", 80]]
  },
  net: ["Network configuration", "IP addressing", "DHCP", "DNS", "NAT", "Firewall", "Routing", "Bandwidth management", "Troubleshooting", "LAN infrastructure"],
  db: ["Database architecture", "Table design", "Relationships", "Primary key", "Foreign key", "SQL query", "CRUD", "Backup", "Restore", "Optimization"],
  web: ["Company website", "Portfolio website", "School website", "Library system", "Admin dashboard", "Inventory system", "Information system", "Login system", "CRUD application"],
  projects: [
    { cat: "web", t: "School Library Management System", tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"], feat: ["Login", "User management", "Book management", "Borrowing system", "Reports", "Dashboard"], o: "Sistem perpustakaan sekolah berbasis web.", p: "Pencatatan peminjaman manual rawan kesalahan.", s: "Aplikasi web terintegrasi dengan database terpusat.", r: "Full stack developer", res: "[ISI HASIL, mis. proses peminjaman lebih cepat]" },
    { cat: "web", t: "School Information System", tech: ["PHP", "MySQL", "JavaScript"], feat: ["Data siswa", "Data guru", "Dashboard"], o: "Sistem informasi data sekolah.", p: "Data tersebar di banyak file.", s: "Sistem terpusat dengan hak akses.", r: "Developer", res: "[ISI HASIL]" },
    { cat: "network", t: "Network Infrastructure", tech: ["MikroTik", "LAN", "DHCP", "Firewall", "Bandwidth Management"], feat: ["Konfigurasi router", "DHCP server", "Firewall rule", "Limit bandwidth"], o: "Perancangan dan konfigurasi jaringan LAN.", p: "Jaringan tidak stabil dan bandwidth tidak terkontrol.", s: "Konfigurasi MikroTik, DHCP, firewall, dan manajemen bandwidth.", r: "Network administrator", res: "[ISI HASIL]" },
    { cat: "web", t: "Inventory Management System", tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"], feat: ["Stok barang", "Barang masuk/keluar", "Laporan"], o: "Aplikasi pengelolaan stok barang.", p: "Stok sulit dilacak.", s: "Sistem inventaris berbasis web.", r: "Full stack developer", res: "[ISI HASIL]" },
    { cat: "web", t: "Student Examination / CBT System", tech: ["PHP", "MySQL", "JavaScript"], feat: ["Student login", "Question management", "Exam timer", "Automatic scoring", "Admin dashboard"], o: "Ujian berbasis komputer untuk siswa.", p: "Koreksi manual memakan waktu.", s: "Ujian online dengan timer dan penilaian otomatis.", r: "Developer", res: "[ISI HASIL]" },
    { cat: "database", t: "Database Management System", tech: ["MySQL", "PHP", "SQL"], feat: ["Desain tabel", "Relasi", "Backup & restore"], o: "Perancangan dan pengelolaan database relasional.", p: "Struktur data tidak konsisten.", s: "Normalisasi, relasi, dan prosedur backup.", r: "Database administrator", res: "[ISI HASIL]" },
    { cat: "web", t: "Company / Business Website", tech: ["HTML", "CSS", "JavaScript"], feat: ["Responsive", "SEO dasar", "Form kontak"], o: "Website profil perusahaan.", p: "Belum ada kehadiran online.", s: "Website responsif dan cepat.", r: "Web developer", res: "[ISI HASIL]" },
    { cat: "system", t: "IT Infrastructure & Troubleshooting", tech: ["Windows", "Linux", "Network", "Hardware"], feat: ["Instalasi OS", "Maintenance", "Diagnosis hardware"], o: "Dukungan teknis dan perawatan infrastruktur IT.", p: "Gangguan perangkat mengganggu operasional.", s: "Diagnosis sistematis dan maintenance berkala.", r: "IT support / system admin", res: "[ISI HASIL]" }
  ],
  filters: ["all", "web", "database", "network", "system", "it support"],
  jobs: [
    ["IT Developer / Web Developer", "2026 — Present", ["Mengembangkan aplikasi web", "Mengelola database"], ["[ISI PENCAPAIAN]"], "PHP, MySQL, JavaScript"],
    ["IT Support / System Administrator", "2024 — 2026", ["Maintenance sistem dan jaringan", "Troubleshooting hardware/software"], ["[ISI PENCAPAIAN]"], "Windows, Linux, MikroTik"],
    ["Junior Web Developer", "2022 — 2024", ["Membangun website dan fitur CRUD"], ["[ISI PENCAPAIAN]"], "HTML, CSS, JavaScript"]
  ],
  certs: ["MikroTik · Network Fundamentals", "Web Development · Full Stack", "Database · SQL & DB Management", "IT Support · HW & SW Troubleshooting"],
  stats: [[20, "+", "Projects"], [5, "+", "Web Applications"], [10, "+", "Network Projects"], [5, "+", "Database Projects"], [100, "%", "Commitment"]],
  steps: ["Understand", "Analyze", "Design", "Develop", "Test", "Deploy", "Maintain"],
  solve: [["Hardware", "Diagnosis & troubleshooting hardware."], ["Software", "Operating system & application troubleshooting."], ["Network", "Connectivity, routing, DHCP, DNS, bandwidth."], ["Database", "SQL, data integrity, backup, restore."]],
  term: ["$ whoami", "IT Developer", "", "$ skills", "Web Development", "Network", "Database", "System Administration", "", "$ status", "Available for projects..."]
};

/* ============ HELPERS ============ */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const tags = a => a.map(x => `<li>${esc(x)}</li>`).join("");
const store = {
  get: k => { try { return localStorage.getItem(k); } catch { return null; } },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch { /* ignore */ } }
};

/* ============ RENDER ============ */
function render() {
  $("#chips").innerHTML = DATA.chips.map(c => `<span class="chip">${esc(c)}</span>`).join("");
  $("#spec").innerHTML = DATA.spec.map(([n, t, l]) => `<article class="card reveal"><span class="num">${n}</span><h3>${esc(t)}</h3><ul class="tags">${tags(l)}</ul></article>`).join("");
  $("#skillgrid").innerHTML = Object.entries(DATA.skills).map(([cat, l]) =>
    `<article class="card reveal"><h3>${esc(cat)}</h3><ul class="bars">${l.map(([n, v]) => `<li>${esc(n)}<div class="bar"><i data-w="${v}"></i></div></li>`).join("")}</ul></article>`).join("");
  $("#nettags").innerHTML = tags(DATA.net);
  $("#dbtags").innerHTML = tags(DATA.db);
  $("#webtags").innerHTML = tags(DATA.web);
  $("#filters").innerHTML = DATA.filters.map((f, i) => `<button type="button" data-f="${f}" class="${i ? "" : "on"}">${f.toUpperCase()}</button>`).join("");
  $("#projgrid").innerHTML = DATA.projects.map((p, i) =>
    `<button type="button" class="card" data-cat="${p.cat}" data-i="${i}" aria-label="Detail ${esc(p.t)}"><div class="pthumb">0${i + 1}</div><h3>${esc(p.t)}</h3><p>${esc(p.tech.join(" · "))}</p></button>`).join("");
  $("#timeline").innerHTML = DATA.jobs.map(([t, per, r, a, tech]) =>
    `<article class="card tl reveal"><span class="num">${per}</span><h3>${t}</h3><p class="mut">[NAMA PERUSAHAAN]</p><ul>${r.map(x => `<li>${esc(x)}</li>`).join("")}${a.map(x => `<li><strong>Achievement:</strong> ${esc(x)}</li>`).join("")}</ul><p class="mut">Tech: ${esc(tech)}</p></article>`).join("");
  $("#certs").innerHTML = tags(DATA.certs);
  $("#stats").innerHTML = DATA.stats.map(([n, s, l]) => `<div class="card reveal"><b data-n="${n}" data-s="${s}">0${s}</b>${l}</div>`).join("");
  $("#steps").innerHTML = DATA.steps.map((s, i) => `<li class="reveal"><b>0${i + 1}</b>${s}</li>`).join("");
  $("#solve").innerHTML = DATA.solve.map(([t, d]) => `<article class="card reveal"><h3>${t}</h3><p class="mut">${d}</p></article>`).join("");
  $("#year").textContent = new Date().getFullYear();
}

/* ============ NAV, THEME, SCROLL ============ */
function initNav() {
  const nav = $("#nav"), menu = $("#menu"), burger = $("#burger"), top = $("#top");
  const links = $$("#menu a"), secs = links.map(a => $(a.getAttribute("href")));
  const setOpen = o => { menu.classList.toggle("open", o); burger.classList.toggle("open", o); burger.setAttribute("aria-expanded", o); };
  burger.addEventListener("click", () => setOpen(!menu.classList.contains("open")));
  links.forEach(a => a.addEventListener("click", () => setOpen(false)));
  const onScroll = () => {
    nav.classList.toggle("scrolled", scrollY > 20);
    top.hidden = scrollY < 500;
    const y = scrollY + 120;
    secs.forEach((s, i) => links[i].classList.toggle("active", s && s.offsetTop <= y && s.offsetTop + s.offsetHeight > y));
  };
  addEventListener("scroll", onScroll, { passive: true }); onScroll();
  top.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
}

function initTheme() {
  const root = document.documentElement, btn = $("#theme");
  const apply = t => { root.dataset.theme = t; btn.textContent = t === "dark" ? "☀" : "☾"; };
  apply(store.get("theme") || "dark");
  btn.addEventListener("click", () => { const t = root.dataset.theme === "dark" ? "light" : "dark"; apply(t); store.set("theme", t); });
}

/* ============ REVEAL, BARS, COUNTERS ============ */
function initObservers() {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target; el.classList.add("in");
    $$("i[data-w]", el).forEach(b => b.style.width = b.dataset.w + "%");
    const c = $("b[data-n]", el); if (c) count(c);
    io.unobserve(el);
  }), { threshold: .15 });
  $$(".reveal").forEach(el => io.observe(el));
}
function count(el) {
  const end = +el.dataset.n, s = el.dataset.s, t0 = performance.now();
  const step = t => { const p = Math.min((t - t0) / 1400, 1); el.textContent = Math.round(end * p) + s; if (p < 1) requestAnimationFrame(step); };
  requestAnimationFrame(step);
}

/* ============ PROJECT FILTER + MODAL ============ */
function filterProjects(f) {
  $$("#filters button").forEach(b => b.classList.toggle("on", b.dataset.f === f));
  $$("#projgrid .card").forEach(c => {
    const show = f === "all" || c.dataset.cat === f;
    c.hidden = !show;
    if (show) { c.style.animation = "none"; void c.offsetWidth; c.style.animation = ""; }
  });
}
function initProjects() {
  $("#filters").addEventListener("click", e => { const b = e.target.closest("button"); if (b) filterProjects(b.dataset.f); });
  $("[data-filter-link]").addEventListener("click", () => filterProjects("network"));
  const modal = $("#modal"); let last = null;
  const close = () => { modal.hidden = true; document.body.style.overflow = ""; if (last) last.focus(); };
  $("#projgrid").addEventListener("click", e => {
    const c = e.target.closest(".card"); if (!c) return;
    const p = DATA.projects[c.dataset.i]; last = c;
    $("#m-body").innerHTML = `<h3 id="m-title">${esc(p.t)}</h3>
      <h4>Overview</h4><p>${esc(p.o)}</p><h4>Problem</h4><p>${esc(p.p)}</p><h4>Solution</h4><p>${esc(p.s)}</p>
      <h4>Features</h4><ul>${p.feat.map(x => `<li>${esc(x)}</li>`).join("")}</ul>
      <h4>Technology</h4><ul class="tags">${tags(p.tech)}</ul><h4>My Role</h4><p>${esc(p.r)}</p><h4>Result</h4><p>${esc(p.res)}</p>
      <div class="btns" style="margin-top:20px"><a class="btn primary" href="[LIVE DEMO URL]" target="_blank" rel="noopener">LIVE DEMO</a><a class="btn" href="[GITHUB]" target="_blank" rel="noopener">GITHUB</a></div>`;
    modal.hidden = false; document.body.style.overflow = "hidden"; $("#m-close").focus();
  });
  $("#m-close").addEventListener("click", close);
  modal.addEventListener("click", e => { if (e.target === modal) close(); });
  addEventListener("keydown", e => { if (e.key === "Escape" && !modal.hidden) close(); });
}

/* ============ TERMINAL TYPING ============ */
function initTerminal() {
  const out = $("#term"), lines = DATA.term; let l = 0, c = 0, text = "";
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) { out.textContent = lines.join("\n"); return; }
  (function tick() {
    if (l >= lines.length) return;
    const line = lines[l];
    if (c < line.length) { text += line[c++]; out.textContent = text + "▌"; setTimeout(tick, line.startsWith("$") ? 70 : 25); }
    else { text += "\n"; l++; c = 0; out.textContent = text + "▌"; setTimeout(tick, 350); }
  })();
}

/* ============ CONTACT FORM (simulasi, belum ada backend) ============ */
function initForm() {
  const form = $("#form"), st = $("#form-status");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const fields = $$("input,textarea", form); let bad = 0;
    fields.forEach(f => {
      const v = f.value.trim();
      const invalid = !v || (f.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));
      f.classList.toggle("err", invalid); bad += invalid;
    });
    st.className = bad ? "bad" : "ok";
    st.textContent = bad ? "Mohon lengkapi semua kolom dengan benar (termasuk format email)." : "Simulasi berhasil: pesan TIDAK benar-benar terkirim karena belum ada backend. Hubungkan ke Formspree/PHP mail untuk mengaktifkannya.";
    if (!bad) form.reset();
  });
}

/* ============ INIT ============ */
render(); initTheme(); initNav(); initObservers(); initProjects(); initTerminal(); initForm();
