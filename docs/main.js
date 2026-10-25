(() => {
  'use strict';

  const GH = 'https://github.com/hvarnadoe';
  const KIND = { exp: 'Experience', proj: 'Project', acad: 'Academic & extras', sun: 'Home base' };

  // ring: 0 inner, 1 middle, 2 outer
  const BODIES = [
    {
      id: 'plume', ring: 0, kind: 'exp', glyph: '🛡️', surface: 's-exp1', bands: true, size: 92,
      name: 'Plume Security', title: 'Plume Security',
      sub: 'Ransomware defense · Summer 2025 – present',
      roles: [
        { t: 'Junior Software Engineer', d: 'Aug 2025 – Present' },
        { t: 'Software Engineering Intern', d: 'Summer 2025' },
      ],
      bullets: [
        'Ongoing primary developer of the company\'s Windows platform applications in <b>C#</b>.',
        'Trained a <b>TensorFlow/Keras</b> model that detects when a file has been encrypted and renamed with a random extension.',
        'Shipped that model inside a <b>Go</b> service by exporting it to <b>ONNX</b>.',
        'Built <b>Go</b> support for <b>NetApp ONTAP</b> NAS hardware.',
        'Used the <b>Win32 API</b> to collect forensic data on processes flagged as ransomware, helping customers clean up after an attack.',
      ],
      tags: ['C#', '.NET', 'Go', 'Win32 API', 'TensorFlow', 'Keras', 'ONNX', 'NetApp ONTAP', 'Machine Learning'],
    },
    {
      id: 'ncr', ring: 0, kind: 'exp', glyph: '🔎', surface: 's-exp2', size: 78,
      name: 'NCR Voyix', title: 'NCR Voyix',
      sub: 'Software Engineering Intern · Summer 2024',
      bullets: [
        'Member of the <b>Business Systems Layer</b> team, working on the public <b>developer.ncr.com</b> portal.',
        'Redesigned the front end and improved the <b>search experience</b>.',
        'Created multiple <b>API endpoints</b> backed by an <b>Elasticsearch</b> database.',
      ],
      tags: ['Web Development', 'Elasticsearch', 'REST APIs', 'Front end', 'Back end'],
      links: [['developer.ncr.com', 'https://developer.ncr.com/']],
    },
    {
      id: 'field', ring: 0, kind: 'exp', glyph: '🛠️', surface: 's-exp3', size: 70,
      name: 'Field Ops', title: 'Field Ops',
      sub: 'Hands-on work before and alongside code',
      roles: [
        { t: 'Computer & Cellphone Repair Technician', d: 'Ginstar Computers and Cell Phone · 2022 – 2023' },
        { t: 'Team Leader', d: 'Glisson Camp and Retreat Ministries · Summers 2022, 2023' },
      ],
      bullets: [
        'Built PCs, diagnosed and repaired electronics, replaced phone and tablet screens, and set up macOS and Windows machines.',
        'Led and supported teams of rising college freshmen and camp counselors, helped resolve conflicts, and worked with leadership to keep camp safe and organized.',
        'Eagle Scout.',
      ],
      tags: ['Hardware', 'Troubleshooting', 'Servant leadership', 'Communication'],
    },
    {
      id: 'wndoland', ring: 1, kind: 'proj', glyph: '🪟', surface: 's-proj1', size: 88,
      name: 'WndoLand', title: 'WndoLand',
      sub: 'A Hyprland-style tiling window manager for Windows · GPL-3.0',
      bullets: [
        '<b>Auto-tiling</b>: windows lay out as they open and close, with title bars and borders removed so they sit flush.',
        '<b>Ten workspaces</b> with global hotkeys to switch and to send windows between them.',
        'Keyboard control for focus, swap, float, fullscreen and close, plus moving windows across <b>monitors</b>.',
        'Focus-highlight border, <b>custom hotkeys</b> to launch apps and commands, and <b>per-app rules</b> (float, or pin to a workspace).',
        'Runs from the system tray, ships an installer with auto-update, and can run elevated to tile admin windows.',
      ],
      tags: ['C#', 'Windows', 'Desktop', 'GitHub Actions', 'Open source'],
      links: [['View on GitHub', GH + '/WndoLand', true]],
    },
    {
      id: 'spells', ring: 1, kind: 'proj', glyph: '🃏', surface: 's-acad1', size: 80,
      name: 'Spell Card Viewer', title: 'D&D Spell Card Viewer',
      sub: 'Cross-platform app for 2024-edition 5e spells',
      bullets: [
        'Browse and filter the 2024 D&D 5e spell list by name, class or level.',
        'Export printable <b>PDF spell cards</b> for the table.',
        'Desktop builds for <b>Windows</b> and <b>macOS</b> (Intel and Apple Silicon), plus a <b>browser</b> version.',
        'Built with <b>Avalonia UI</b> on <b>.NET 8</b>.',
      ],
      tags: ['C#', '.NET 8', 'Avalonia UI', 'Cross-platform', 'PDF generation'],
      links: [['View on GitHub', GH + '/dndspellcardviewer', true]],
    },
    {
      id: 'pathfinder', ring: 1, kind: 'proj', glyph: '🧭', surface: 's-proj2', size: 78,
      name: 'Path Finder', title: 'Path Finder',
      sub: 'Senior capstone · Team of four · Flutter',
      bullets: [
        'Mobile app for <b>point-to-point navigation</b> across a map of predefined nodes.',
        '<b>QR-code checkpoints</b> confirm where you are and let you pick up the route if you get lost.',
        'Generates and draws the path to the next node, with live progress feedback.',
        'Built with teammates Zachary Wilson, Lucas Haas and Eddie Payan over <b>70 commits</b>.',
      ],
      tags: ['Flutter', 'Dart', 'Mobile', 'Teamwork', 'Agile'],
      links: [['View on GitHub', 'https://github.com/INDY-5-Team/Path_Finder', true]],
    },
    {
      id: 'wordle', ring: 1, kind: 'proj', glyph: '🟩', surface: 's-proj4', size: 66,
      name: 'Wordle Desktop', title: 'Wordle Desktop',
      sub: 'Wordle clone for Windows',
      bullets: ['A simple, native Wordle game built with <b>Windows Forms</b>, with a GitHub Actions workflow for builds.'],
      tags: ['C#', 'Windows Forms', 'GitHub Actions'],
      links: [['View on GitHub', GH + '/wordledesktop', true]],
    },
    {
      id: 'iris', ring: 2, kind: 'proj', glyph: '🧠', surface: 's-acad2', size: 74,
      name: 'Iris Neural Net', title: 'Iris Artificial Neural Network',
      sub: 'Machine learning from scratch in C#',
      bullets: [
        'A hand-written <b>artificial neural network</b> trained on the classic Iris dataset with <b>gradient descent</b>, with no ML framework doing the work.',
        'Started as a class assignment and became a clean demo of core training concepts.',
      ],
      tags: ['C#', 'Machine Learning', 'Gradient descent'],
      links: [['View on GitHub', GH + '/Iris-Data-Set-Ann', true]],
    },
    {
      id: 'distributed', ring: 2, kind: 'acad', glyph: '🌐', surface: 's-acad3', size: 74,
      name: 'Distributed Computing', title: 'Distributed Computing (CS 4504)',
      sub: 'Networking and parallel algorithms in Java',
      bullets: [
        'TCP <b>client, server and router</b> programs with threaded connection handling.',
        '<b>Strassen matrix multiplication</b>, including chained multiplication and a version that records performance metrics.',
      ],
      tags: ['Java', 'TCP sockets', 'Multithreading', 'Algorithms'],
      links: [['View on GitHub', GH + '/CS4504-DistributedComputingProject2', true]],
    },
    {
      id: 'python', ring: 2, kind: 'proj', glyph: '🐍', surface: 's-proj3', size: 62,
      name: 'Python Utilities', title: 'Python Utility Apps',
      sub: 'Small tools for everyday chores',
      bullets: [
        'Batch-change photo file extensions.',
        'Convert <b>HEIC</b> photos to a standard format.',
        'Merge multiple <b>PDF</b> documents.',
      ],
      tags: ['Python', 'Automation', 'CLI'],
      links: [['View on GitHub', GH + '/pythonUtilityApplications', true]],
    },
    {
      id: 'ksu', ring: 2, kind: 'acad', glyph: '🎓', surface: 's-acad4', ringed: true, size: 76,
      name: 'Kennesaw State', title: 'Kennesaw State University',
      sub: 'B.S. in Computer Science · Graduated May 2025',
      bullets: ['Coursework spanned algorithms, distributed computing, machine learning, mobile development, and a team-built senior capstone.'],
      tags: ['Computer Science', 'Algorithms', 'Distributed systems', 'ML'],
    },
    {
      id: 'arcade', ring: 2, kind: 'acad', glyph: '👾', surface: 's-arcade', arcade: true, size: 58,
      name: 'Arcade', title: 'Arcade',
      sub: 'Every good solar system has one game planet',
      bullets: [],
    },
  ];

  const SUN = {
    kind: 'sun',
    title: 'Harrison Varnadoe',
    sub: 'Software Engineer · Decatur, GA',
    html: `
      <p>Software developer with hands-on experience in C#/.NET and Go building backend systems and security products. At <b>Plume Security</b> I'm the primary developer of the Windows applications and have built machine-learning-powered ransomware detection. I'm looking to deepen my expertise in backend systems and AI, and on the side I'm writing a tiling window manager.</p>
      <h3>Toolbox</h3>
      <p>C# · .NET · Go · Win32 · Python · TensorFlow/Keras · ONNX · Java · Dart/Flutter · Avalonia · Elasticsearch · DynamoDB · EC2 · Git · Jira · Confluence</p>
      <h3>How I work</h3>
      <p>Agile teams, attention to detail, clear writing, and servant leadership. I like turning vague problems into small, shippable pieces.</p>
      <h3>Get in touch</h3>
      <p>Open to opportunities. Email is best.</p>`,
    tags: ['C#', '.NET', 'Go', 'Python', 'Machine Learning'],
    links: [
      ['Download résumé', 'Harrison_Varnadoe_Resume.pdf', true],
      ['Email me', 'mailto:harrison.varnadoe@outlook.com', false],
      ['LinkedIn', 'https://www.linkedin.com/in/harrison-varnadoe-587624312', false],
      ['GitHub', GH, false],
    ],
  };

  const $ = (s) => document.querySelector(s);
  const space = $('#space'), orbitsEl = $('#orbits'), planetsEl = $('#planets');
  const panel = $('#panel'), logEl = $('#log'), arcadeEl = $('#arcade');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- build ----------
  const RING_DESK = [0.36, 0.64, 0.92], RING_MOB = [0.58, 0.8, 1];
  let RING_F = RING_DESK;
  const RING_SPEED = [0.085, 0.055, 0.035]; // radians / sec
  const ringEls = [];
  ['exp', 'proj', 'acad'].forEach((k) => {
    const o = document.createElement('div');
    o.className = 'orbit ' + k;
    orbitsEl.appendChild(o);
    ringEls.push(o);
  });

  const perRing = [0, 0, 0];
  BODIES.forEach((b) => perRing[b.ring]++);
  const seen = [0, 0, 0];
  BODIES.forEach((b, i) => {
    b.phase = (seen[b.ring]++ / perRing[b.ring]) * Math.PI * 2 + b.ring * 0.9;
    const el = document.createElement('button');
    el.type = 'button';
    el.className = `planet ${b.kind} ${b.surface}` + (b.bands ? ' bands' : '');
    el.style.setProperty('--size', b.size + 'px');
    el.style.setProperty('--delay', 0.1 + i * 0.08 + 's');
    el.setAttribute('aria-label', `${b.name}: ${b.sub}`);
    el.innerHTML = `<span class="orb"><span class="ball"></span>${b.ringed ? '<span class="ring"></span>' : ''}<span class="glyph" aria-hidden="true">${b.glyph}</span></span><span class="name">${b.name}</span>`;
    el.addEventListener('click', () => (b.arcade ? openArcade(el) : openPanel(b, el)));
    el.addEventListener('pointerenter', () => (hover = true));
    el.addEventListener('pointerleave', () => (hover = false));
    el.addEventListener('focus', () => (hover = true));
    el.addEventListener('blur', () => (hover = false));
    planetsEl.appendChild(el);
    b.el = el;
  });

  // ---------- layout + animation ----------
  let W = 0, H = 0, hover = false, speed = 1, t = 0, last = performance.now();
  function layout() {
    W = space.clientWidth; H = space.clientHeight;
    const mob = W < 720;
    RING_F = mob ? RING_MOB : RING_DESK;
    BODIES.forEach((b) => b.el.style.setProperty('--size', b.size * (mob ? 0.72 : 1) + 'px'));
    const padX = W < 720 ? 58 : 90, padY = W < 720 ? 100 : 80;
    const hx = W / 2 - padX, hy = H / 2 - padY;
    ringEls.forEach((o, i) => {
      o.style.left = W / 2 + 'px'; o.style.top = H / 2 + 'px';
      o.style.width = hx * 2 * RING_F[i] + 'px'; o.style.height = hy * 2 * RING_F[i] + 'px';
    });
  }
  function frame(now) {
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    const target = hover || !panel.hidden || !logEl.hidden || !arcadeEl.hidden ? 0 : 1;
    speed += (target - speed) * Math.min(1, dt * 5);
    t += reduce ? 0 : dt * speed;
    const padX = W < 720 ? 58 : 90, padY = W < 720 ? 100 : 80;
    const hx = W / 2 - padX, hy = H / 2 - padY;
    for (const b of BODIES) {
      const a = b.phase + t * RING_SPEED[b.ring];
      const sy = Math.sin(a);
      const x = W / 2 + Math.cos(a) * hx * RING_F[b.ring];
      const y = H / 2 + sy * hy * RING_F[b.ring];
      const s = 0.88 + 0.16 * (sy + 1) / 2;
      b.el.style.transform = `translate(${x}px, ${y}px) scale(${s})`;
      b.el.style.zIndex = Math.round(10 + sy * 5);
    }
    requestAnimationFrame(frame);
  }
  addEventListener('resize', layout);
  layout();
  requestAnimationFrame(frame);

  // ---------- panels ----------
  let opener = null;
  function esc(s) { return s; }
  function fillPanel(d) {
    $('#pKicker').textContent = KIND[d.kind];
    $('#pKicker').className = 'p-kicker ' + d.kind;
    $('#pTitle').textContent = d.title;
    $('#pSub').textContent = d.sub;
    let html = '';
    if (d.html) html = d.html;
    else {
      if (d.roles) html += d.roles.map((r) => `<div class="role"><b>${r.t}</b><span>${r.d}</span></div>`).join('');
      if (d.bullets && d.bullets.length) html += (d.roles ? '<h3>Highlights</h3>' : '') + '<ul>' + d.bullets.map((x) => `<li>${x}</li>`).join('') + '</ul>';
    }
    $('#pBody').innerHTML = html;
    $('#pTags').innerHTML = (d.tags || []).map((x) => `<li>${x}</li>`).join('');
    $('#pLinks').innerHTML = (d.links || []).map(([label, href, primary], i) => {
      const ext = /^https?:/.test(href);
      return `<a class="btn${i === 0 && primary !== false ? '' : ' ghost'}" href="${href}"${ext ? ' target="_blank" rel="noopener"' : ''}>${label}</a>`;
    }).join('');
  }
  function openPanel(d, el) {
    closeAll(false);
    opener = el || null;
    fillPanel(d);
    panel.hidden = false;
    panel.scrollTop = 0;
    if (el) el.classList.add('active');
    $('#hint').classList.add('gone');
    $('#pClose').focus({ preventScroll: true });
  }
  function closeAll(restore = true) {
    panel.hidden = true; logEl.hidden = true; arcadeEl.hidden = true;
    stopGame();
    BODIES.forEach((b) => b.el.classList.remove('active'));
    if (restore && opener) opener.focus({ preventScroll: true });
    if (restore) opener = null;
    hover = false;
  }
  $('#pClose').addEventListener('click', () => closeAll());
  $('#logClose').addEventListener('click', () => closeAll());
  $('#arcClose').addEventListener('click', () => closeAll());
  addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAll(); });
  $('#sun').addEventListener('click', (e) => openPanel(SUN, e.currentTarget));
  $('#brand').addEventListener('click', (e) => { e.preventDefault(); closeAll(); });
  space.addEventListener('click', (e) => { if (e.target === space || e.target === orbitsEl || e.target === planetsEl) closeAll(); });

  // mission log
  $('#logBtn').addEventListener('click', (e) => {
    closeAll(false);
    opener = e.currentTarget;
    const groups = [['exp', 'Experience'], ['proj', 'Projects'], ['acad', 'Academic & extras']];
    $('#logList').innerHTML = groups.map(([k, label]) =>
      `<h3 class="${k}">${label}</h3>` + BODIES.filter((b) => b.kind === k && !b.arcade).map((b) =>
        `<button type="button" class="log-item" data-id="${b.id}"><b>${b.name}</b><span>${b.sub}</span></button>`).join('')).join('');
    logEl.hidden = false;
    $('#logClose').focus({ preventScroll: true });
  });
  $('#logList').addEventListener('click', (e) => {
    const item = e.target.closest('.log-item');
    if (!item) return;
    const b = BODIES.find((x) => x.id === item.dataset.id);
    openPanel(b, b.el);
  });

  // ---------- starfield ----------
  const sc = $('#stars'), sx = sc.getContext('2d');
  let stars = [], shooters = [], mx = 0, my = 0, smx = 0, smy = 0;
  function initStars() {
    const dpr = Math.min(2, devicePixelRatio || 1);
    sc.width = innerWidth * dpr; sc.height = innerHeight * dpr;
    sx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.floor((innerWidth * innerHeight) / 4500);
    stars = Array.from({ length: n }, () => {
      const z = Math.random();
      return { x: Math.random() * innerWidth, y: Math.random() * innerHeight, z, r: 0.3 + z * 1.3, tw: Math.random() * 6.28, hue: Math.random() < 0.15 ? 'rgba(255,200,160,' : Math.random() < 0.3 ? 'rgba(170,200,255,' : 'rgba(255,255,255,' };
    });
  }
  addEventListener('resize', initStars);
  addEventListener('pointermove', (e) => { mx = e.clientX / innerWidth - 0.5; my = e.clientY / innerHeight - 0.5; });
  let nextShot = 2;
  function drawStars(now) {
    const sec = now / 1000;
    smx += (mx - smx) * 0.05; smy += (my - smy) * 0.05;
    sx.clearRect(0, 0, innerWidth, innerHeight);
    // nebula glows
    const g1 = sx.createRadialGradient(innerWidth * 0.2, innerHeight * 0.25, 0, innerWidth * 0.2, innerHeight * 0.25, innerWidth * 0.45);
    g1.addColorStop(0, 'rgba(120,60,200,.16)'); g1.addColorStop(1, 'rgba(120,60,200,0)');
    sx.fillStyle = g1; sx.fillRect(0, 0, innerWidth, innerHeight);
    const g2 = sx.createRadialGradient(innerWidth * 0.82, innerHeight * 0.78, 0, innerWidth * 0.82, innerHeight * 0.78, innerWidth * 0.4);
    g2.addColorStop(0, 'rgba(40,140,220,.13)'); g2.addColorStop(1, 'rgba(40,140,220,0)');
    sx.fillStyle = g2; sx.fillRect(0, 0, innerWidth, innerHeight);
    for (const s of stars) {
      const px = ((s.x - smx * s.z * 40) % innerWidth + innerWidth) % innerWidth;
      const py = ((s.y - smy * s.z * 40) % innerHeight + innerHeight) % innerHeight;
      const a = reduce ? 0.8 : 0.45 + 0.45 * Math.sin(sec * (0.8 + s.z) + s.tw);
      sx.fillStyle = s.hue + a.toFixed(2) + ')';
      sx.beginPath(); sx.arc(px, py, s.r, 0, 6.283); sx.fill();
    }
    if (!reduce) {
      if (sec > nextShot) {
        nextShot = sec + 3 + Math.random() * 6;
        shooters.push({ x: Math.random() * innerWidth, y: Math.random() * innerHeight * 0.5, vx: 500 + Math.random() * 300, vy: 200 + Math.random() * 150, life: 1 });
      }
      shooters = shooters.filter((s) => s.life > 0);
      for (const s of shooters) {
        s.x += s.vx / 60; s.y += s.vy / 60; s.life -= 0.02;
        const grd = sx.createLinearGradient(s.x, s.y, s.x - s.vx * 0.12, s.y - s.vy * 0.12);
        grd.addColorStop(0, `rgba(255,255,255,${s.life})`); grd.addColorStop(1, 'rgba(255,255,255,0)');
        sx.strokeStyle = grd; sx.lineWidth = 1.6;
        sx.beginPath(); sx.moveTo(s.x, s.y); sx.lineTo(s.x - s.vx * 0.12, s.y - s.vy * 0.12); sx.stroke();
      }
    }
    requestAnimationFrame(drawStars);
  }
  initStars();
  requestAnimationFrame(drawStars);

  // ---------- arcade: asteroid defense ----------
  const gc = $('#game'), g = gc.getContext('2d');
  let game = null, raf = 0, best = 0;
  try { best = +localStorage.getItem('hv-best') || 0; } catch (e) { /* storage unavailable */ }
  const keys = {};
  addEventListener('keydown', (e) => { keys[e.key] = true; if (game && e.key.startsWith('Arrow')) e.preventDefault(); });
  addEventListener('keyup', (e) => { keys[e.key] = false; });
  gc.addEventListener('pointermove', (e) => {
    if (!game) return;
    const r = gc.getBoundingClientRect();
    game.ship.x = ((e.clientX - r.left) / r.width) * gc.width;
  });
  gc.addEventListener('pointerdown', (e) => { gc.dispatchEvent(new PointerEvent('pointermove', e)); });
  $('#restart').addEventListener('click', startGame);

  function openArcade(el) {
    closeAll(false);
    opener = el;
    el.classList.add('active');
    arcadeEl.hidden = false;
    $('#arcClose').focus({ preventScroll: true });
    startGame();
  }
  function startGame() {
    cancelAnimationFrame(raf);
    game = { ship: { x: gc.width / 2 }, bullets: [], rocks: [], parts: [], score: 0, over: false, fire: 0, spawn: 0, time: 0 };
    $('#best').textContent = 'Best ' + best;
    let prev = performance.now();
    const step = (now) => {
      const dt = Math.min(0.04, (now - prev) / 1000); prev = now;
      update(dt); draw();
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
  }
  function stopGame() { cancelAnimationFrame(raf); game = null; }
  function update(dt) {
    const s = game;
    if (s.over) return;
    s.time += dt;
    if (keys.ArrowLeft || keys.a) s.ship.x -= 420 * dt;
    if (keys.ArrowRight || keys.d) s.ship.x += 420 * dt;
    s.ship.x = Math.max(20, Math.min(gc.width - 20, s.ship.x));
    s.fire -= dt;
    if (s.fire <= 0) { s.bullets.push({ x: s.ship.x, y: gc.height - 44 }); s.fire = 0.22; }
    s.spawn -= dt;
    if (s.spawn <= 0) {
      const r = 14 + Math.random() * 22;
      s.rocks.push({ x: r + Math.random() * (gc.width - 2 * r), y: -r, r, hp: Math.ceil(r / 14), vy: 50 + Math.random() * 40 + s.time * 1.8, rot: Math.random() * 6, vr: (Math.random() - 0.5) * 2 });
      s.spawn = Math.max(0.35, 1 - s.time * 0.01);
    }
    s.bullets.forEach((b) => (b.y -= 560 * dt));
    s.bullets = s.bullets.filter((b) => b.y > -10);
    s.rocks.forEach((r) => { r.y += r.vy * dt; r.rot += r.vr * dt; });
    for (const r of s.rocks) for (const b of s.bullets) {
      if (!b.dead && Math.hypot(r.x - b.x, r.y - b.y) < r.r) {
        b.dead = true; r.hp--;
        for (let i = 0; i < 4; i++) s.parts.push({ x: b.x, y: b.y, vx: (Math.random() - 0.5) * 160, vy: (Math.random() - 0.5) * 160, l: 0.5 });
        if (r.hp <= 0) { r.dead = true; s.score += Math.round(r.r); for (let i = 0; i < 14; i++) s.parts.push({ x: r.x, y: r.y, vx: (Math.random() - 0.5) * 300, vy: (Math.random() - 0.5) * 300, l: 0.8 }); }
      }
    }
    s.bullets = s.bullets.filter((b) => !b.dead);
    s.rocks = s.rocks.filter((r) => !r.dead);
    s.parts.forEach((p) => { p.x += p.vx * dt; p.y += p.vy * dt; p.l -= dt; });
    s.parts = s.parts.filter((p) => p.l > 0);
    for (const r of s.rocks) {
      if (r.y + r.r > gc.height - 30 && Math.abs(r.x - s.ship.x) < r.r + 14) s.over = true;
      if (r.y - r.r > gc.height) s.over = true;
    }
    if (s.over) {
      if (s.score > best) { best = s.score; try { localStorage.setItem('hv-best', best); } catch (e) { /* ignore */ } }
      $('#best').textContent = 'Best ' + best;
    }
    $('#score').textContent = 'Score ' + s.score;
  }
  function draw() {
    const s = game;
    g.fillStyle = '#03020c'; g.fillRect(0, 0, gc.width, gc.height);
    g.fillStyle = '#fff';
    for (let i = 0; i < 40; i++) g.fillRect((i * 97) % gc.width, (i * 53 + s.time * 30 * ((i % 3) + 1)) % gc.height, 1.5, 1.5);
    g.fillStyle = '#ffd45c';
    s.bullets.forEach((b) => g.fillRect(b.x - 2, b.y, 4, 12));
    s.rocks.forEach((r) => {
      g.save(); g.translate(r.x, r.y); g.rotate(r.rot);
      g.fillStyle = '#6b5f86'; g.strokeStyle = '#b9a9e0'; g.lineWidth = 2;
      g.beginPath();
      for (let i = 0; i < 9; i++) { const a = (i / 9) * 6.283, rr = r.r * (0.82 + 0.18 * Math.sin(i * 2.3)); g.lineTo(Math.cos(a) * rr, Math.sin(a) * rr); }
      g.closePath(); g.fill(); g.stroke(); g.restore();
    });
    s.parts.forEach((p) => { g.fillStyle = `rgba(255,170,80,${p.l})`; g.fillRect(p.x, p.y, 3, 3); });
    if (!s.over) {
      g.fillStyle = '#4fd8ff';
      g.beginPath(); g.moveTo(s.ship.x, gc.height - 46); g.lineTo(s.ship.x - 16, gc.height - 14); g.lineTo(s.ship.x, gc.height - 22); g.lineTo(s.ship.x + 16, gc.height - 14); g.closePath(); g.fill();
    } else {
      g.fillStyle = 'rgba(4,3,13,.7)'; g.fillRect(0, 0, gc.width, gc.height);
      g.fillStyle = '#fff'; g.textAlign = 'center';
      g.font = '700 30px Orbitron, sans-serif'; g.fillText('GAME OVER', gc.width / 2, gc.height / 2 - 6);
      g.font = '16px "Space Grotesk", sans-serif'; g.fillText(`Score ${s.score} · press Restart`, gc.width / 2, gc.height / 2 + 26);
    }
  }
})();
