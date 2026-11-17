/* ==========================================================================
   美拉德色系 · 视觉设计作品集 —— 交互与数据
   ========================================================================== */
(function () {
  'use strict';

  var STORAGE_KEY = 'maillard-portfolio.v1';
  var MIN_WORKS = 1;
  var MAX_WORKS = 8;

  /* ---------------------------------------------------------------- 默认封面 */
  function uri(svg) {
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }

  var COVERS = [
    /* 01 品牌识别 */
    uri('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">' +
      '<defs><linearGradient id="a" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="#4A2E1E"/><stop offset="1" stop-color="#24140D"/>' +
      '</linearGradient></defs>' +
      '<rect width="800" height="600" fill="url(#a)"/>' +
      '<g fill="none" stroke="#C98A5B" stroke-width="1.4">' +
      '<circle cx="400" cy="300" r="196" stroke-opacity=".72"/>' +
      '<circle cx="400" cy="300" r="146" stroke-opacity=".46"/>' +
      '<circle cx="400" cy="300" r="96" stroke-opacity=".28"/></g>' +
      '<circle cx="400" cy="300" r="48" fill="#D8A473"/>' +
      '<path d="M400 62V538M124 300H676" stroke="#EFDCC3" stroke-opacity=".16"/>' +
      '<text x="400" y="512" text-anchor="middle" font-family="Georgia,serif" font-size="14" letter-spacing="7" fill="#EFDCC3" opacity=".6">ROASTERY IDENTITY</text>' +
      '</svg>'),

    /* 02 海报 */
    uri('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">' +
      '<rect width="800" height="600" fill="#EADCC6"/>' +
      '<path d="M498 0H800V600H362Z" fill="#38220F"/>' +
      '<circle cx="628" cy="196" r="86" fill="none" stroke="#D8A473" stroke-width="1.4" stroke-opacity=".8"/>' +
      '<circle cx="628" cy="196" r="40" fill="#D8A473"/>' +
      '<path d="M74 452H336" stroke="#38220F" stroke-width="2"/>' +
      '<text x="74" y="352" font-family="Georgia,serif" font-size="132" letter-spacing="2" fill="#38220F">CALM</text>' +
      '<text x="74" y="408" font-family="Georgia,serif" font-size="24" letter-spacing="12" fill="#8C5433">POSTER SERIES</text>' +
      '<text x="404" y="520" font-family="Georgia,serif" font-size="13" letter-spacing="6" fill="#E2C4A0" opacity=".8">2023 / THREE PRINTS</text>' +
      '</svg>'),

    /* 03 插画 */
    uri('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">' +
      '<rect width="800" height="600" fill="#F1E5D2"/>' +
      '<path d="M118 430C158 262 300 196 418 246c96 41 132-58 226-16 62 28 84 108 48 168-52 88-176 116-290 112-118-4-284-22-284-80Z" fill="#B0714A" opacity=".9"/>' +
      '<path d="M166 470c26-96 118-152 198-118 62 27 84-30 148-6" fill="none" stroke="#F1E5D2" stroke-width="2.4" stroke-opacity=".8"/>' +
      '<circle cx="596" cy="150" r="54" fill="none" stroke="#8C5433" stroke-width="1.4"/>' +
      '<circle cx="596" cy="150" r="14" fill="#8C5433"/>' +
      '<path d="M92 118h96M92 142h60" stroke="#8C5433" stroke-width="1.6" stroke-opacity=".7"/>' +
      '<text x="92" y="546" font-family="Georgia,serif" font-size="13" letter-spacing="6" fill="#6B4A33" opacity=".75">CLAY NOTES / 12 PLATES</text>' +
      '</svg>'),

    /* 04 界面 */
    uri('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">' +
      '<defs><linearGradient id="b" x1="0" y1="0" x2="1" y2="1">' +
      '<stop offset="0" stop-color="#3B2519"/><stop offset="1" stop-color="#1F110B"/>' +
      '</linearGradient></defs>' +
      '<rect width="800" height="600" fill="url(#b)"/>' +
      '<g fill="#F5E9D8" fill-opacity=".07">' +
      '<rect x="96" y="118" width="196" height="150" rx="20"/>' +
      '<rect x="316" y="118" width="388" height="150" rx="20"/>' +
      '<rect x="96" y="292" width="608" height="88" rx="20"/>' +
      '<rect x="96" y="404" width="290" height="120" rx="20"/>' +
      '<rect x="410" y="404" width="294" height="120" rx="20"/></g>' +
      '<rect x="316" y="118" width="388" height="150" rx="20" fill="#C08154" fill-opacity=".28"/>' +
      '<circle cx="146" cy="168" r="18" fill="#D8A473"/>' +
      '<path d="M126 210h96" stroke="#EFDCC3" stroke-opacity=".5" stroke-width="3" stroke-linecap="round"/>' +
      '<path d="M126 228h56" stroke="#EFDCC3" stroke-opacity=".28" stroke-width="3" stroke-linecap="round"/>' +
      '<text x="96" y="546" font-family="Georgia,serif" font-size="13" letter-spacing="6" fill="#EFDCC3" opacity=".55">LENTO / MOBILE UI</text>' +
      '</svg>'),

    /* 05 备用 */
    uri('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">' +
      '<rect width="800" height="600" fill="#E6D6C0"/>' +
      '<g stroke="#B0714A" stroke-width="26" stroke-opacity=".85">' +
      '<path d="M-60 520 260 120"/><path d="M60 620 380 220"/><path d="M180 720 500 320"/></g>' +
      '<rect x="404" y="0" width="396" height="600" fill="#2F1D12"/>' +
      '<circle cx="602" cy="300" r="120" fill="none" stroke="#D8A473" stroke-width="1.5"/>' +
      '<circle cx="602" cy="300" r="66" fill="#D8A473" fill-opacity=".9"/>' +
      '</svg>')
  ];

  /* ---------------------------------------------------------------- 默认数据 */
  var DEFAULT_DATA = {
    profile: {
      brandMark: 'M',
      brand: 'Maillard Studio',
      greeting: '你好，我是',
      name: '林知远',
      role: '视觉设计师 · 品牌与编辑设计',
      intro: '专注品牌视觉与编辑设计，擅长把复杂的信息整理成克制、耐看的画面。目前以独立设计师身份，为文化、生活方式与咖啡烘焙领域的品牌工作。',
      location: '上海 · 可远程协作'
    },
    worksIntro: '四组视觉设计项目，涵盖品牌识别、海报、插画与界面。每一组都从材料与色彩出发，先确定语气，再处理细节。',
    works: [
      {
        title: '「暮色烘焙」品牌视觉识别',
        category: '品牌识别',
        year: '2024',
        desc: '为一家社区咖啡烘焙工坊建立完整视觉系统，从标志、包装到门店物料，用焦糖色阶传递温度与手作感。',
        tags: ['品牌识别', '包装', '字体'],
        cover: ''
      },
      {
        title: '「慢下来」主题海报系列',
        category: '海报设计',
        year: '2023',
        desc: '以大字排版与手写笔触构成的三张海报，讨论城市生活节奏与停顿之间的关系，套色限定为三色。',
        tags: ['海报', '排版', '丝网印'],
        cover: ''
      },
      {
        title: '「陶土笔记」插画与出版物',
        category: '插画 / 出版',
        year: '2025',
        desc: '为独立出版刊物绘制的十二幅系列插画，以陶土、赭石、石灰三种主色构成温和而连贯的叙事线索。',
        tags: ['插画', '出版物', '色彩'],
        cover: ''
      },
      {
        title: 'Lento 手冲咖啡 App 界面',
        category: '界面设计',
        year: '2026',
        desc: '把点单流程压缩到三次点击，界面以米白为底、深棕为锚，尽可能保留手冲咖啡本身的仪式感。',
        tags: ['UI', '移动端', '视觉规范'],
        cover: ''
      }
    ],
    heroPanel: {
      kicker: 'Selected\nWorks',
      years: '2021 — 2026',
      sign: 'MMXXVI',
      availability: '现可接受新项目'
    },
    labels: {
      heroEyebrow: 'Visual Design Portfolio',
      navWorks: '作品',
      navAbout: '关于',
      navContact: '联系',
      btnWorks: '查看作品',
      btnContact: '聊聊合作',
      worksEyebrow: 'Selected Works',
      worksTitle: '精选作品',
      worksCountLabel: 'Projects',
      aboutEyebrow: 'About',
      aboutTitle: '关于我',
      contactEyebrow: 'Contact'
    },
    about: {
      lead: '我是林知远，一名居住在上海的视觉设计师。',
      body: '过去六年，我在品牌咨询公司与独立工作室之间来回，做过包装、画册、展览视觉和界面。我相信设计的价值不在信息量，而在秩序感——把要说的东西放对位置，让颜色与留白替它说话。',
      skills: ['品牌视觉', '编辑与排版', '包装设计', '插画', '界面设计'],
      stats: [
        { num: '06', label: '年视觉设计经验' },
        { num: '32', label: '个已落地项目' }
      ]
    },
    contact: {
      title: '有项目想聊聊？',
      desc: '我目前接受品牌视觉、出版物与展览相关的合作邀约，通常会在两个工作日内回复。',
      email: 'hello@linzhiyuan.design',
      links: [
        { label: '站酷', href: 'https://www.zcool.com.cn' },
        { label: 'Behance', href: 'https://www.behance.net' },
        { label: 'Instagram', href: 'https://www.instagram.com' }
      ]
    },
    footer: {
      text: '© 2026 林知远 · 保留所有权利',
      note: '点击右上角「编辑内容」即可修改文字与作品封面'
    }
  };

  /* ---------------------------------------------------------------- 状态 */
  var data = load();
  var editing = false;
  var pendingIndex = null;
  var toastTimer = null;

  /* ---------------------------------------------------------------- DOM */
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var header = $('#siteHeader');
  var toggleBtn = $('#editToggle');
  var toggleText = $('#editToggleText');
  var editorBar = $('#editorBar');
  var grid = $('#workGrid');
  var workCountEl = $('#workCount');
  var lightbox = $('#lightbox');
  var lightboxImg = $('#lightboxImg');
  var toastEl = $('#toast');
  var imageInput = $('#imageInput');
  var jsonInput = $('#jsonInput');

  var CE_MODE = (function () {
    var probe = document.createElement('div');
    probe.setAttribute('contenteditable', 'plaintext-only');
    return probe.contentEditable === 'plaintext-only' ? 'plaintext-only' : 'true';
  })();

  /* ---------------------------------------------------------------- 工具 */
  function clone(obj) { return JSON.parse(JSON.stringify(obj)); }

  function esc(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function getByPath(obj, path) {
    var keys = String(path).split('.');
    var cur = obj;
    for (var i = 0; i < keys.length; i++) {
      if (cur == null) return undefined;
      cur = cur[keys[i]];
    }
    return cur;
  }

  function setByPath(obj, path, value) {
    var keys = String(path).split('.');
    var cur = obj;
    for (var i = 0; i < keys.length - 1; i++) {
      var k = keys[i];
      if (cur[k] == null || typeof cur[k] !== 'object') {
        cur[k] = /^\d+$/.test(keys[i + 1]) ? [] : {};
      }
      cur = cur[k];
    }
    cur[keys[keys.length - 1]] = value;
  }

  function mergeDeep(base, patch) {
    if (!patch || typeof patch !== 'object') return base;
    Object.keys(patch).forEach(function (k) {
      var v = patch[k];
      if (Array.isArray(v)) {
        base[k] = v.slice();
      } else if (v && typeof v === 'object') {
        if (!base[k] || typeof base[k] !== 'object' || Array.isArray(base[k])) base[k] = {};
        mergeDeep(base[k], v);
      } else if (v !== undefined) {
        base[k] = v;
      }
    });
    return base;
  }

  function coverFor(index) {
    return COVERS[index % COVERS.length];
  }

  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.hidden = false;
    requestAnimationFrame(function () { toastEl.classList.add('show'); });
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.classList.remove('show');
      setTimeout(function () { toastEl.hidden = true; }, 320);
    }, 2400);
  }

  /* ---------------------------------------------------------------- 存储 */
  function load() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return clone(DEFAULT_DATA);
      var parsed = JSON.parse(raw);
      if (!parsed || !Array.isArray(parsed.works)) return clone(DEFAULT_DATA);
      return mergeDeep(clone(DEFAULT_DATA), parsed);
    } catch (err) {
      return clone(DEFAULT_DATA);
    }
  }

  function save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      return true;
    } catch (err) {
      toast('本地存储空间不足，建议压缩封面图或导出备份');
      return false;
    }
  }

  /* ---------------------------------------------------------------- 渲染 */
  /* 写入文本，保留用户输入的换行 */
  function setText(node, value) {
    var str = String(value);
    if (str.indexOf('\n') > -1) {
      node.innerHTML = esc(str).replace(/\n/g, '<br>');
    } else {
      node.textContent = str;
    }
  }

  function paintStatic() {
    document.querySelectorAll('[data-edit]').forEach(function (node) {
      var path = node.dataset.edit;
      if (!path || path.indexOf('works.') === 0) return;
      var val = getByPath(data, path);
      if (val === undefined || val === null) return;
      setText(node, val);
      if (node.tagName === 'A' && node.dataset.mail) node.setAttribute('href', 'mailto:' + val);
    });
    document.querySelectorAll('[data-href]').forEach(function (node) {
      var val = getByPath(data, node.dataset.href);
      if (typeof val === 'string' && val) node.setAttribute('href', val);
    });
    document.title = data.profile.name + ' · 视觉设计作品集';
  }

  function cardHTML(work, i) {
    var cover = work.cover || coverFor(i);
    var tags = Array.isArray(work.tags) ? work.tags.join(' / ') : (work.tags || '');
    return '' +
      '<article class="work-card reveal" data-index="' + i + '">' +
        '<div class="work-media">' +
          '<img src="' + esc(cover) + '" alt="' + esc(work.title) + '" loading="lazy">' +
          '<span class="work-num">' + String(i + 1).padStart(2, '0') + '</span>' +
          '<div class="work-tools" data-editor-only>' +
            '<button type="button" data-action="cover">更换封面</button>' +
            '<button type="button" data-action="remove">删除</button>' +
          '</div>' +
        '</div>' +
        '<div class="work-body">' +
          '<p class="work-meta">' +
            '<span data-edit="works.' + i + '.category">' + esc(work.category) + '</span>' +
            '<span class="dot">·</span>' +
            '<span data-edit="works.' + i + '.year">' + esc(work.year) + '</span>' +
          '</p>' +
          '<h3 class="work-title" data-edit="works.' + i + '.title">' + esc(work.title) + '</h3>' +
          '<p class="work-desc" data-edit="works.' + i + '.desc">' + esc(work.desc) + '</p>' +
          '<p class="work-tags" data-edit="works.' + i + '.tags" data-type="tags">' + esc(tags) + '</p>' +
        '</div>' +
      '</article>';
  }

  function renderWorks() {
    grid.innerHTML = data.works.map(cardHTML).join('');
    if (workCountEl) workCountEl.textContent = String(data.works.length).padStart(2, '0');
    refreshEditable();
    observeReveals();
  }

  function renderAll() {
    paintStatic();
    renderWorks();
  }

  /* ---------------------------------------------------------------- 编辑态 */
  function applyEditable(node) {
    if (editing) {
      node.setAttribute('contenteditable', CE_MODE);
      node.setAttribute('spellcheck', 'false');
    } else {
      node.removeAttribute('contenteditable');
      node.removeAttribute('spellcheck');
    }
  }

  function refreshEditable() {
    document.querySelectorAll('[data-edit]').forEach(applyEditable);
  }

  function setEditing(on) {
    editing = on;
    document.body.classList.toggle('is-editing', on);
    toggleBtn.setAttribute('aria-pressed', String(on));
    toggleText.textContent = on ? '退出编辑' : '编辑内容';
    editorBar.hidden = !on;
    refreshEditable();
    if (on) toast('已进入编辑模式，点击文字即可修改');
  }

  /* ---------------------------------------------------------------- 编辑写入 */
  function commitNode(node) {
    var path = node.dataset.edit;
    if (!path) return;
    var value = node.innerText.replace(/\u00a0/g, ' ').replace(/\r/g, '').trim();
    if (node.dataset.type === 'tags') {
      value = value.split(/[\/,，、|]+/).map(function (s) { return s.trim(); }).filter(Boolean);
    }
    setByPath(data, path, value);
    save();
  }

  document.addEventListener('focusout', function (e) {
    var node = e.target;
    if (!node || node.nodeType !== 1 || !node.hasAttribute('contenteditable')) return;
    commitNode(node);
  });

  document.addEventListener('keydown', function (e) {
    var node = e.target;
    if (!editing || !node.hasAttribute || !node.hasAttribute('contenteditable')) return;
    if (e.key === 'Enter' && node.tagName !== 'P' && node.dataset.type !== 'tags') {
      e.preventDefault();
      node.blur();
    }
    if (e.key === 'Escape') node.blur();
  });

  /* 编辑模式下点击文字：阻止链接跳转；点击邮箱/外链则修改地址 */
  document.addEventListener('click', function (e) {
    if (!editing) return;
    var target = e.target.closest('[data-edit]');
    if (!target) return;
    var link = target.closest('a');
    if (!link) return;
    e.preventDefault();

    if (link.dataset.mail) {
      var nextMail = window.prompt('修改联系邮箱', data.contact.email);
      if (nextMail && nextMail.trim()) {
        data.contact.email = nextMail.trim();
        save();
        paintStatic();
        toast('邮箱已更新');
      }
      return;
    }
    if (link.dataset.href) {
      var path = link.dataset.href;
      var current = getByPath(data, path) || link.getAttribute('href');
      var nextHref = window.prompt('修改「' + link.textContent.trim() + '」的链接地址', current);
      if (nextHref && nextHref.trim()) {
        setByPath(data, path, nextHref.trim());
        save();
        paintStatic();
        toast('链接已更新');
      }
    }
  });

  /* ---------------------------------------------------------------- 作品操作 */
  grid.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-action]');
    if (btn) {
      var card = btn.closest('.work-card');
      var index = Number(card.dataset.index);
      if (btn.dataset.action === 'cover') pickImage(index);
      if (btn.dataset.action === 'remove') removeWork(index);
      return;
    }
    var img = e.target.closest('img');
    if (img && !editing) openLightbox(img.getAttribute('src'));
  });

  function pickImage(index) {
    pendingIndex = index;
    imageInput.click();
  }

  function removeWork(index) {
    if (data.works.length <= MIN_WORKS) {
      toast('至少保留一份作品');
      return;
    }
    var work = data.works[index];
    if (!window.confirm('确定删除作品「' + (work ? work.title : '') + '」吗？')) return;
    data.works.splice(index, 1);
    save();
    renderWorks();
    toast('作品已删除');
  }

  function addWork() {
    if (data.works.length >= MAX_WORKS) {
      toast('最多展示 ' + MAX_WORKS + ' 份作品');
      return;
    }
    data.works.push({
      title: '新的作品标题',
      category: '项目类型',
      year: String(new Date().getFullYear()),
      desc: '在这里写下项目背景、你的角色与最终成果。点击文字即可修改。',
      tags: ['标签一', '标签二'],
      cover: ''
    });
    save();
    renderWorks();
    var cards = grid.querySelectorAll('.work-card');
    var last = cards[cards.length - 1];
    if (last) {
      last.classList.add('in');
      last.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    toast('已添加新作品，点击文字修改内容');
  }

  /* ---------------------------------------------------------------- 图片处理 */
  function compressImage(file, maxSize, quality) {
    maxSize = maxSize || 1600;
    quality = quality || 0.85;
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();
      reader.onload = function () {
        var img = new Image();
        img.onload = function () {
          var scale = Math.min(1, maxSize / Math.max(img.width, img.height));
          var w = Math.max(1, Math.round(img.width * scale));
          var h = Math.max(1, Math.round(img.height * scale));
          var canvas = document.createElement('canvas');
          canvas.width = w;
          canvas.height = h;
          var ctx = canvas.getContext('2d');
          ctx.fillStyle = '#F7F1E6';
          ctx.fillRect(0, 0, w, h);
          ctx.drawImage(img, 0, 0, w, h);
          resolve(canvas.toDataURL('image/jpeg', quality));
        };
        img.onerror = function () { reject(new Error('decode failed')); };
        img.src = reader.result;
      };
      reader.onerror = function () { reject(reader.error); };
      reader.readAsDataURL(file);
    });
  }

  imageInput.addEventListener('change', function (e) {
    var file = e.target.files && e.target.files[0];
    imageInput.value = '';
    if (!file || pendingIndex === null) return;
    compressImage(file).then(function (dataUrl) {
      if (data.works[pendingIndex]) {
        data.works[pendingIndex].cover = dataUrl;
        save();
        renderWorks();
        toast('封面已更新');
      }
      pendingIndex = null;
    }).catch(function () {
      toast('图片读取失败，请换一张试试');
      pendingIndex = null;
    });
  });

  /* ---------------------------------------------------------------- 导入导出 */
  function exportJSON() {
    var blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'portfolio-data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
    toast('数据已导出');
  }

  jsonInput.addEventListener('change', function (e) {
    var file = e.target.files && e.target.files[0];
    jsonInput.value = '';
    if (!file) return;
    file.text().then(function (text) {
      var parsed = JSON.parse(text);
      if (!parsed || !Array.isArray(parsed.works)) throw new Error('bad format');
      data = mergeDeep(clone(DEFAULT_DATA), parsed);
      save();
      renderAll();
      toast('数据导入成功');
    }).catch(function () {
      toast('导入失败：文件格式不正确');
    });
  });

  function resetAll() {
    if (!window.confirm('确定恢复默认内容吗？当前所有修改都会被清除。')) return;
    data = clone(DEFAULT_DATA);
    try { localStorage.removeItem(STORAGE_KEY); } catch (err) { /* ignore */ }
    renderAll();
    toast('已恢复默认内容');
  }

  /* ---------------------------------------------------------------- 灯箱 */
  function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.hidden = true;
    lightboxImg.removeAttribute('src');
    document.body.style.overflow = '';
  }

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox || e.target.id === 'lightboxClose') closeLightbox();
  });

  /* ---------------------------------------------------------------- 交互绑定 */
  toggleBtn.addEventListener('click', function () { setEditing(!editing); });

  editorBar.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-cmd]');
    if (!btn) return;
    var cmd = btn.dataset.cmd;
    if (cmd === 'add') addWork();
    if (cmd === 'export') exportJSON();
    if (cmd === 'import') jsonInput.click();
    if (cmd === 'reset') resetAll();
    if (cmd === 'done') setEditing(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
  });

  /* ---------------------------------------------------------------- 滚动效果 */
  var io = null;
  if ('IntersectionObserver' in window) {
    io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  }

  function observeReveals() {
    var nodes = document.querySelectorAll('.reveal:not(.in)');
    if (!io) {
      nodes.forEach(function (n) { n.classList.add('in'); });
      return;
    }
    nodes.forEach(function (n) { io.observe(n); });
  }

  function onScroll() {
    header.classList.toggle('scrolled', window.scrollY > 14);
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------------------------------------------------------------- 启动 */
  renderAll();
  document.querySelectorAll('.hero-copy > *, .hero-visual, .section-head, .about-left, .about-right, .contact-panel, .site-footer').forEach(function (node) {
    node.classList.add('reveal');
  });
  observeReveals();
  onScroll();
})();
