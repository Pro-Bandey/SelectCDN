import plugin from '../plugin.json';

class SelectCDNPlugin {
  constructor() {
    this.cdnData = [
      { name: "Bulma", logoUrl: "https://cdn.simpleicons.org/bulma/00D1B2", category: "CSS", size: "207KB", versions: ["1.0.4", "0.9.4"], npm: "npm install bulma", docs: "https://bulma.io/documentation/", url: "https://cdn.jsdelivr.net/npm/bulma@{version}/css/bulma.min.css", script: '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@{version}/css/bulma.min.css">', desc: "Modern CSS framework.", peers: [] },
      { name: "Foundation", logoUrl: "https://cdn.simpleicons.org/foundation/2199E8", category: "CSS", size: "288KB", versions: ["6.8.1", "6.7.5"], npm: "npm install foundation-sites", docs: "https://get.foundation/", url: "https://cdn.jsdelivr.net/npm/foundation-sites@{version}/dist/css/foundation.min.css", script: '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/foundation-sites@{version}/dist/css/foundation.min.css">', desc: "Responsive front-end framework.", peers: ["jQuery"] },
      { name: "Animate.css", logoUrl: "https://cdn.simpleicons.org/animate/FF6B6B", category: "Animation", size: "75KB", versions: ["4.1.1"], npm: "npm install animate.css", docs: "https://animate.style/", url: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/{version}/animate.min.css", script: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/{version}/animate.min.css">', desc: "Ready-to-use CSS animations.", peers: [] },
      { name: "AOS", logoUrl: "https://cdn.simpleicons.org/aurelia/ED2B88", category: "Animation", size: "21KB", versions: ["2.3.4"], npm: "npm install aos", docs: "https://michalsnik.github.io/aos/", url: "https://cdnjs.cloudflare.com/ajax/libs/aos/{version}/aos.js", script: '<script src="https://cdnjs.cloudflare.com/ajax/libs/aos/{version}/aos.js"></script>', desc: "Animate on scroll library.", peers: [] },
      { name: "Swiper", logoUrl: "https://cdn.simpleicons.org/swiper/6332F6", category: "Slider", size: "143KB", versions: ["11.2.10", "10.3.1"], npm: "npm install swiper", docs: "https://swiperjs.com/", url: "https://cdn.jsdelivr.net/npm/swiper@{version}/swiper-bundle.min.js", script: '<script src="https://cdn.jsdelivr.net/npm/swiper@{version}/swiper-bundle.min.js"></script>', desc: "Modern touch slider.", peers: [] },
      { name: "Slick Carousel", logoUrl: "https://cdn.simpleicons.org/slickpic/FF8800", category: "Slider", size: "43KB", versions: ["1.8.1"], npm: "npm install slick-carousel", docs: "https://kenwheeler.github.io/slick/", url: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/{version}/slick.min.js", script: '<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/{version}/slick.min.js"></script>', desc: "Responsive carousel plugin.", peers: ["jQuery"] },
      { name: "Lodash", logoUrl: "https://cdn.simpleicons.org/lodash/3492FF", category: "JS", size: "72KB", versions: ["4.17.21"], npm: "npm install lodash", docs: "https://lodash.com/", url: "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/{version}/lodash.min.js", script: '<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/{version}/lodash.min.js"></script>', desc: "JavaScript utility library.", peers: [] },
      { name: "Moment.js", logoUrl: "https://cdn.simpleicons.org/moment/000000", category: "JS", size: "58KB", versions: ["2.30.1", "2.29.4"], npm: "npm install moment", docs: "https://momentjs.com/", url: "https://cdnjs.cloudflare.com/ajax/libs/moment.js/{version}/moment.min.js", script: '<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/{version}/moment.min.js"></script>', desc: "Date and time library.", peers: [] },
      { name: "Day.js", logoUrl: "https://cdn.simpleicons.org/dayjs/FF5F5F", category: "JS", size: "7KB", versions: ["1.11.13"], npm: "npm install dayjs", docs: "https://day.js.org/", url: "https://cdn.jsdelivr.net/npm/dayjs@{version}/dayjs.min.js", script: '<script src="https://cdn.jsdelivr.net/npm/dayjs@{version}/dayjs.min.js"></script>', desc: "Lightweight date library.", peers: [] },
      { name: "D3.js", logoUrl: "https://cdn.simpleicons.org/d3dotjs/F9A03C", category: "Visualization", size: "279KB", versions: ["7.9.0"], npm: "npm install d3", docs: "https://d3js.org/", url: "https://cdn.jsdelivr.net/npm/d3@{version}/dist/d3.min.js", script: '<script src="https://cdn.jsdelivr.net/npm/d3@{version}/dist/d3.min.js"></script>', desc: "Data-driven visualization library.", peers: [] },
      { name: "ECharts", logoUrl: "https://cdn.simpleicons.org/apacheecharts/AA344D", category: "Visualization", size: "1MB", versions: ["5.6.0"], npm: "npm install echarts", docs: "https://echarts.apache.org/", url: "https://cdn.jsdelivr.net/npm/echarts@{version}/dist/echarts.min.js", script: '<script src="https://cdn.jsdelivr.net/npm/echarts@{version}/dist/echarts.min.js"></script>', desc: "Interactive charting library.", peers: [] },
      { name: "Anime.js", logoUrl: "https://cdn.simpleicons.org/anilist/02A9FF", category: "Animation", size: "17KB", versions: ["3.2.2"], npm: "npm install animejs", docs: "https://animejs.com/", url: "https://cdnjs.cloudflare.com/ajax/libs/animejs/{version}/anime.min.js", script: '<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/{version}/anime.min.js"></script>', desc: "Lightweight animation engine.", peers: [] },
      { name: "Particles.js", logoUrl: "https://cdn.simpleicons.org/openverse/00ADEF", category: "Animation", size: "29KB", versions: ["2.0.0"], npm: "npm install particles.js", docs: "https://vincentgarreau.com/particles.js/", url: "https://cdnjs.cloudflare.com/ajax/libs/particles.js/{version}/particles.min.js", script: '<script src="https://cdnjs.cloudflare.com/ajax/libs/particles.js/{version}/particles.min.js"></script>', desc: "Particle background effects.", peers: [] },
      { name: "Typed.js", logoUrl: "https://cdn.simpleicons.org/typescript/3178C6", category: "Animation", size: "13KB", versions: ["2.1.0"], npm: "npm install typed.js", docs: "https://mattboldt.github.io/typed.js/", url: "https://cdn.jsdelivr.net/npm/typed.js@{version}/dist/typed.umd.js", script: '<script src="https://cdn.jsdelivr.net/npm/typed.js@{version}/dist/typed.umd.js"></script>', desc: "Typing animation library.", peers: [] },
      { name: "Highlight.js", logoUrl: "https://cdn.simpleicons.org/highlightdotjs/FF6C37", category: "Syntax Highlighting", size: "122KB", versions: ["11.11.1"], npm: "npm install highlight.js", docs: "https://highlightjs.org/", url: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/{version}/highlight.min.js", script: '<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/{version}/highlight.min.js"></script>', desc: "Code syntax highlighting.", peers: [] },
      { name: "Prism.js", logoUrl: "https://cdn.simpleicons.org/prisma/2D3748", category: "Syntax Highlighting", size: "56KB", versions: ["1.30.0"], npm: "npm install prismjs", docs: "https://prismjs.com/", url: "https://cdnjs.cloudflare.com/ajax/libs/prism/{version}/prism.min.js", script: '<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/{version}/prism.min.js"></script>', desc: "Lightweight syntax highlighter.", peers: [] },
      { name: "SweetAlert2", logoUrl: "https://cdn.simpleicons.org/sweetalert/FF4B4B", category: "UI", size: "76KB", versions: ["11.22.4"], npm: "npm install sweetalert2", docs: "https://sweetalert2.github.io/", url: "https://cdn.jsdelivr.net/npm/sweetalert2@{version}/dist/sweetalert2.all.min.js", script: '<script src="https://cdn.jsdelivr.net/npm/sweetalert2@{version}/dist/sweetalert2.all.min.js"></script>', desc: "Beautiful alert dialogs.", peers: [] },
      { name: "Notyf", logoUrl: "https://cdn.simpleicons.org/notion/000000", category: "UI", size: "9KB", versions: ["3.10.0"], npm: "npm install notyf", docs: "https://github.com/caroso1222/notyf", url: "https://cdn.jsdelivr.net/npm/notyf@{version}/notyf.min.js", script: '<script src="https://cdn.jsdelivr.net/npm/notyf@{version}/notyf.min.js"></script>', desc: "Toast notification library.", peers: [] },
      { name: "SortableJS", logoUrl: "https://cdn.simpleicons.org/javascript/F7DF1E", category: "JS", size: "45KB", versions: ["1.15.6"], npm: "npm install sortablejs", docs: "https://sortablejs.github.io/Sortable/", url: "https://cdn.jsdelivr.net/npm/sortablejs@{version}/Sortable.min.js", script: '<script src="https://cdn.jsdelivr.net/npm/sortablejs@{version}/Sortable.min.js"></script>', desc: "Drag and drop sorting.", peers: [] },
      { name: "PapaParse", logoUrl: "https://cdn.simpleicons.org/files/4A90E2", category: "JS", size: "51KB", versions: ["5.5.3"], npm: "npm install papaparse", docs: "https://www.papaparse.com/", url: "https://cdnjs.cloudflare.com/ajax/libs/PapaParse/{version}/papaparse.min.js", script: '<script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/{version}/papaparse.min.js"></script>', desc: "CSV parser for JavaScript.", peers: [] },
      { name: "Luxon", logoUrl: "https://cdn.simpleicons.org/luxon/FF6600", category: "JS", size: "78KB", versions: ["3.7.2"], npm: "npm install luxon", docs: "https://moment.github.io/luxon/", url: "https://cdn.jsdelivr.net/npm/luxon@{version}/build/global/luxon.min.js", script: '<script src="https://cdn.jsdelivr.net/npm/luxon@{version}/build/global/luxon.min.js"></script>', desc: "Modern date and time library.", peers: [] }
    ];

    this.icons = {
      close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>`,
      star: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>`,
      starF: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z"/></svg>`,
      plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>`,
      check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>`,
      copy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>`,
      link: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 00 7.07 7.07l1.71-1.71"/></svg>`,
      box: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
      download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>`
    };

    this.selected = [];
    this.favorites = JSON.parse(localStorage.getItem('cdn_favs') || '[]');
    this.currentCat = 'All';
    this.cdnVersions = {};
    this.onlineResults = [];
    this.baseUrl = "";
    this.$page = null;
  }

  async init($page, baseUrl) {
    this.$page = $page;
    this.baseUrl = baseUrl;

    const commandConfig = {
      name: 'SCDN',
      description: 'Open SelectCDN Palette',
      bindKey: { win: 'Ctrl-Shift-C', mac: 'Command-Shift-C' },
      exec: () => this.show()
    };

    let commands;
    try {
      commands = acode.require("commands");
    } catch (e) {
      // Graceful error capture if requiring the API fails
    }

    if (commands && typeof commands.addCommand === 'function') {
      commands.addCommand(commandConfig);
      commands.addCommand({ ...commandConfig, name: 'cdn-library' });
    } else if (editorManager.editor && editorManager.editor.commands) {
      editorManager.editor.commands.addCommand(commandConfig);
      editorManager.editor.commands.addCommand({ ...commandConfig, name: 'cdn-library' });
    }
  }

  show() {
    this.currentCat = this.detectFileContext();
    this.render();
    this.$page.show();
  }

  detectFileContext() {
    const file = editorManager.activeFile;
    if (!file || !file.filename) return 'All';
    const ext = file.filename.split('.').pop().toLowerCase();
    if (['css', 'scss', 'sass', 'less'].includes(ext)) return 'CSS';
    if (['js', 'jsx', 'ts', 'tsx', 'mjs'].includes(ext)) return 'JS';
    return 'All';
  }

  getCustomLibraries() {
    return JSON.parse(localStorage.getItem('cdn_custom') || '[]');
  }

  addToRecents(cdn) {
    let recents = JSON.parse(localStorage.getItem('cdn_recents') || '[]');
    recents = recents.filter(item => item.name !== cdn.name);

    const recentItem = {
      name: cdn.name,
      category: "Recents",
      versions: cdn.versions,
      url: cdn.url,
      script: cdn.script,
      docs: cdn.docs || '#',
      logoUrl: cdn.logoUrl || '',
      size: cdn.size || 'N/A',
      npm: cdn.npm || 'N/A',
      desc: cdn.desc || '',
      peers: cdn.peers || []
    };

    recents.unshift(recentItem);
    if (recents.length > 10) recents.pop();
    localStorage.setItem('cdn_recents', JSON.stringify(recents));
  }

  findCDNByName(name) {
    let found = this.cdnData.find(c => c.name === name);
    if (found) return found;

    found = this.getCustomLibraries().find(c => c.name === name);
    if (found) return found;

    const recents = JSON.parse(localStorage.getItem('cdn_recents') || '[]');
    found = recents.find(c => c.name === name);
    if (found) return found;

    found = this.onlineResults.find(c => c.name === name);
    if (found) return found;

    return null;
  }

  isCssFile(url) {
    try {
      const urlObj = new URL(url);
      return /\.css(?:\?.*)?$/i.test(urlObj.pathname);
    } catch (e) {
      return /\.css(?:\?.*)?$/i.test(url);
    }
  }

  render() {
    this.$page.innerHTML = `
      <style>
        .scdn-wrap { display: flex; flex-direction: column; height: 100%; background: var(--bg-color, #1a1a1a); color: var(--text-color, #fff); font-family: sans-serif; }
        .scdn-header { padding: 12px; background: var(--secondary-bg-color, #242424); border-bottom: 1px solid var(--border-color, #333); }
        .scdn-top-bar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; }
        .scdn-brand { display: flex; align-items: center; gap: 10px; font-weight: bold; font-size: 1.1rem; }
        .scdn-logo-img { width: 22px; height: 22px; }
        .scdn-brand-2 { display: flex; align-items: center; gap: 10px; font-weight: bold; font-size: 1rem; }
        .scdn-count-badge { font-size: 0.65rem; background: var(--active-color, #10b981); color: #000; padding: 2px 6px; border-radius: 10px; }
        
        .scdn-search-container { position: relative; margin-bottom: 10px; }
        .scdn-search-input { width: 100%; padding: 10px; border-radius: 6px; border: 1px solid var(--border-color, #444); background: var(--bg-color, #111); color: var(--text-color, #fff); outline: none; }
        
        .scdn-cat-row { display: flex; gap: 6px; overflow-x: auto; scrollbar-width: none; padding-bottom: 4px; }
        .scdn-cat-row::-webkit-scrollbar { display: none; }
        .scdn-cat-chip { padding: 5px 12px; border-radius: 20px; background: var(--secondary-bg-color, #333); font-size: 0.75rem; border: 1px solid transparent; white-space: nowrap; cursor: pointer; color: var(--text-color, #fff); }
        .scdn-cat-chip.scdn-active { background: var(--active-color, #10b981); color: #000; font-weight: bold; }

        .scdn-content { flex: 1; overflow-y: auto; padding: 12px; }
        .scdn-section-title { font-size: 0.7rem; color: var(--active-color, #10b981); text-transform: uppercase; margin: 15px 0 8px 0; letter-spacing: 1px; font-weight: bold; }

        .scdn-loader-spinner { display: flex; justify-content: center; align-items: center; margin: 15px 0; }
        .scdn-spinner { width: 24px; height: 24px; border: 3px solid rgba(255, 255, 255, 0.1); border-top-color: var(--active-color, #10b981); border-radius: 50%; animation: scdn-spin 0.8s linear infinite; }
        @keyframes scdn-spin { to { transform: rotate(360deg); } }

        .scdn-card { background: var(--secondary-bg-color, #242424); border-radius: 8px; padding: 12px; margin-bottom: 10px; border: 1px solid var(--border-color, #333); transition: 0.2s; }
        .scdn-card:hover { border-color: var(--active-color, #10b981); }
        .scdn-card-main { display: flex; justify-content: space-between; align-items: flex-start; }
        .scdn-card-lib { display: flex; align-items: center; gap: 12px; }
        .scdn-card-icon-box { width: 40px; height: 40px; background: var(--bg-color, #1a1a1a); border-radius: 8px; display: flex; align-items: center; justify-content: center; overflow: hidden; position: relative; border: 1px solid var(--border-color, #333); }
        .scdn-card-img { width: 24px; height: 24px; object-fit: contain; z-index: 2; }
        .scdn-card-fallback { position: absolute; font-weight: bold; font-size: 1.2rem; color: var(--active-color, #10b981); z-index: 1; }
        
        .scdn-card-name-wrapper { display: flex; align-items: center; gap: 6px; }
        .scdn-card-name { font-weight: 600; font-size: 0.95rem; }
        .scdn-card-size-badge { font-size: 0.65rem; background: var(--bg-color, #111); padding: 1px 4px; border-radius: 3px; border: 1px solid var(--border-color, #444); color: #aaa; }
        .scdn-card-sub { font-size: 0.7rem; opacity: 0.6; margin-top: 2px; }
        
        .scdn-card-actions { display: flex; align-items: center; gap: 4px; }
        .scdn-btn-action { background: none; border: none; color: var(--text-color, #fff); padding: 5px; cursor: pointer; opacity: 0.4; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; }
        .scdn-btn-action.scdn-active { opacity: 1; color: var(--active-color, #10b981); }
        .scdn-ver-select { background: var(--bg-color, #111); color: var(--text-color, #fff); height: fit-content; border: 1px solid var(--border-color, #444); font-size: 0.7rem; padding: 2px; border-radius: 4px; }

        .scdn-card-footer { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 10px; border-top: 1px solid var(--border-color, #333); padding-top: 10px; }
        .scdn-badge { padding: 4px 8px; font-size: 0.7rem; border-radius: 4px; background: var(--bg-color, #1a1a1a); border: 1px solid var(--border-color, #444); color: var(--text-color, #fff); text-decoration: none; display: flex; align-items: center; gap: 4px; cursor: pointer; }
        .scdn-badge.scdn-primary { border-color: var(--active-color, #10b981); color: var(--active-color, #10b981); font-weight: bold; }
        .scdn-badge svg { width: 12px; height: 12px; }

        .scdn-peer-tip { font-size: 0.7rem; color: var(--active-color, #10b981); opacity: 0.8; margin-top: 5px; display: flex; align-items: center; gap: 4px; }

        .scdn-custom-input { background: var(--bg-color, #111); border: 1px solid var(--border-color, #444); color: #fff; padding: 8px; border-radius: 4px; font-size: 0.8rem; width: 100%; outline: none; }
        .scdn-custom-input:focus { border-color: var(--active-color, #10b981); }

        .scdn-bundle-fab { position: fixed; bottom: 20px; right: 20px; background: var(--active-color, #10b981); color: #000; width: 56px; height: 56px; border-radius: 28px; display: none; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.4); border: none; z-index: 99; cursor: pointer; }
        .scdn-bundle-fab.scdn-show { display: flex; }
        .scdn-bundle-fab svg { width: 24px; height: 24px; }

        .scdn-modal { display: none; position: fixed; inset: 0; background: rgba(0,0,0,0.8); z-index: 1000; align-items: center; justify-content: center; padding: 20px; }
        .scdn-modal.scdn-show { display: flex; }
        .scdn-modal-box { background: var(--secondary-bg-color, #242424); width: 100%; max-width: 400px; padding: 20px; border-radius: 12px; border: 1px solid var(--border-color, #333); }
        .scdn-modal-code { background: #000; padding: 12px; border-radius: 6px; font-family: monospace; font-size: 0.75rem; color: #10b981; overflow: auto; margin: 15px 0; white-space: pre-wrap; word-break: break-all; max-height: 250px; border: 1px solid #333; }
      </style>

      <div class="scdn-wrap">
        <div class="scdn-header">
          <div class="scdn-top-bar">
            <div class="scdn-brand">
              <img src="${this.baseUrl}icon.png" class="scdn-logo-img" onerror="this.style.display='none'"> SelectCDN
            </div>
            <div class="scdn-brand-2">CDNs <span class="scdn-count-badge" id="scdn-count">${this.cdnData.length}</span>
              <button class="scdn-btn-action scdn-active" id="scdn-close">${this.icons.close}</button>
            </div>
          </div>
          <div class="scdn-search-container">
            <input type="text" class="scdn-search-input" id="scdn-search" placeholder="Search curated, custom or cdnjs..." autocomplete="off">
          </div>
          <div class="scdn-cat-row" id="scdn-cat-row"></div>
        </div>

        <div class="scdn-content">
          <div id="scdn-curated-section">
            <div class="scdn-section-title">Curated Packages</div>
            <div id="scdn-curated-list"></div>
          </div>
          
          <div class="scdn-loader-spinner" id="scdn-loader" style="display:none">
            <div class="scdn-spinner"></div>
          </div>

          <div id="scdn-online-section" style="display:none">
            <div class="scdn-section-title">Global results (cdnjs)</div>
            <div id="scdn-online-list"></div>
          </div>
        </div>

        <button class="scdn-bundle-fab" id="scdn-bundle-btn">${this.icons.box}</button>

        <div class="scdn-modal" id="scdn-modal">
          <div class="scdn-modal-box">
            <div class="scdn-brand">HTML Bundle</div>
            <div class="scdn-modal-code" id="scdn-modal-code"></div>
            <div style="display:flex; gap:10px; justify-content: flex-end;">
              <button class="scdn-badge" id="scdn-modal-close">Close</button>
              <button class="scdn-badge scdn-primary" id="scdn-modal-copy">Copy Code</button>
            </div>
          </div>
        </div>
      </div>
    `;

    this.setupEvents();
    this.renderCats();
    this.updateGrid();
  }

  setupEvents() {
    let debounceTimeout;
    this.$page.querySelector('#scdn-search').oninput = (e) => {
      const val = e.target.value;
      this.updateGrid(val);

      clearTimeout(debounceTimeout);
      debounceTimeout = setTimeout(() => {
        if (val.length > 2) {
          this.fetchOnline(val);
        } else {
          this.$page.querySelector('#scdn-online-section').style.display = 'none';
          this.$page.querySelector('#scdn-loader').style.display = 'none';
        }
      }, 450);
    };

    this.$page.querySelector('#scdn-close').onclick = () => this.$page.hide();
    this.$page.querySelector('#scdn-bundle-btn').onclick = () => this.showBundle();
    this.$page.querySelector('#scdn-modal-close').onclick = () => this.$page.querySelector('#scdn-modal').classList.remove('scdn-show');
    this.$page.querySelector('#scdn-modal-copy').onclick = () => {
      this.copy(this.$page.querySelector('#scdn-modal-code').textContent);
      this.$page.querySelector('#scdn-modal').classList.remove('scdn-show');
    };
  }

  async fetchOnline(q) {
    const loader = this.$page.querySelector('#scdn-loader');
    if (loader) loader.style.display = 'block';

    if (!navigator.onLine) {
      if (loader) loader.style.display = 'none';
      window.toast("You are currently offline. Online search is disabled.");
      return;
    }

    try {
      const res = await fetch(`https://api.cdnjs.com/libraries?search=${encodeURIComponent(q)}&fields=version,description`);
      const data = await res.json();

      this.onlineResults = (data.results || []).slice(0, 10).map(item => {
        return {
          name: item.name,
          category: "cdnjs",
          versions: ["latest"],
          url: item.latest,
          script: item.latest.endsWith('.css')
            ? `<link rel="stylesheet" href="${item.latest}">`
            : `<script src="${item.latest}"></script>`,
          docs: `https://cdnjs.com/libraries/${item.name}`,
          logoUrl: "",
          size: "Dynamic",
          npm: `npm install ${item.name}`,
          desc: item.description || "External library from cdnjs index.",
          peers: []
        };
      });

      this.updateOnlineGrid();
    } catch (e) {
      console.error("API Fetch Error: ", e);
    } finally {
      if (loader) loader.style.display = 'none';
    }
  }

  async loadCdnjsVersions(name, selectEl) {
    if (selectEl.dataset.loaded === 'true') return;
    selectEl.disabled = true;
    const fallbackHTML = selectEl.innerHTML;
    selectEl.innerHTML = '<option>Loading...</option>';

    try {
      const res = await fetch(`https://api.cdnjs.com/libraries/${encodeURIComponent(name)}?fields=versions`);
      const data = await res.json();
      if (data && data.versions && data.versions.length) {
        selectEl.innerHTML = data.versions.slice(0, 15).map(v => `<option value="${v}">${v}</option>`).join('');
        selectEl.dataset.loaded = 'true';
        this.cdnVersions[name] = selectEl.value;
      } else {
        selectEl.innerHTML = fallbackHTML;
      }
    } catch (e) {
      console.error("Failed to fetch library versions: ", e);
      selectEl.innerHTML = fallbackHTML;
    } finally {
      selectEl.disabled = false;
    }
  }

  renderCats() {
    const defaultCats = ['All', 'Favorites', 'Recents', 'Custom'];
    const curatedCats = [...new Set(this.cdnData.map(c => c.category))];
    const cats = [...defaultCats, ...curatedCats];

    const row = this.$page.querySelector('#scdn-cat-row');
    row.innerHTML = cats.map(c => `<div class="scdn-cat-chip ${this.currentCat === c ? 'scdn-active' : ''}" data-cat="${c}">${c}</div>`).join('');

    row.querySelectorAll('.scdn-cat-chip').forEach(c => c.onclick = () => {
      this.currentCat = c.dataset.cat;
      this.renderCats();
      this.updateGrid(this.$page.querySelector('#scdn-search').value);
    });
  }

  createCard(cdn, isOnline = false) {
    const isF = this.favorites.includes(cdn.name);
    const isS = this.selected.includes(cdn.name);
    const ver = this.cdnVersions[cdn.name] || cdn.versions[0];

    let deleteBtn = '';
    if (cdn.category === 'Custom') {
      deleteBtn = `
        <button class="scdn-btn-action scdn-del-custom-trigger" data-name="${cdn.name}" style="color: #ef4444; opacity: 1;" title="Delete Custom CDN">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px;"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
        </button>
      `;
    }

    const sizeBadge = cdn.size ? `<span class="scdn-card-size-badge">${cdn.size}</span>` : '';

    let companionTip = '';
    if (cdn.peers && cdn.peers.length > 0) {
      companionTip = `<div class="scdn-peer-tip">💡 Recommended companion: ${cdn.peers.join(', ')}</div>`;
    }

    return `
      <div class="scdn-card">
        <div class="scdn-card-main">
          <div class="scdn-card-lib">
            <div class="scdn-card-icon-box">
              <img src="${isOnline ? 'https://cdn.simpleicons.org/cdnjs/333' : cdn.logoUrl}" class="scdn-card-img" onerror="this.style.display='none'">
              <span class="scdn-card-fallback">${cdn.name[0]}</span>
            </div>
            <div>
              <div class="scdn-card-name-wrapper">
                <span class="scdn-card-name">${cdn.name}</span>
                ${sizeBadge}
              </div>
              <div class="scdn-card-sub">${cdn.category} ${cdn.npm && cdn.npm !== 'N/A' ? '• ' + cdn.npm : ''}</div>
              <p style="font-size: 0.72rem; margin: 4px 0 0 0; opacity: 0.7; max-width: 250px;">${cdn.desc || ''}</p>
              ${companionTip}
            </div>
          </div>
          <div class="scdn-card-actions">
            <select class="scdn-ver-select" data-name="${cdn.name}" ${isOnline ? 'data-online="true"' : ''}>
              ${cdn.versions.map(v => `<option ${v === ver ? 'selected' : ''}>${v}</option>`).join('')}
            </select>
            <button class="scdn-btn-action scdn-fav-trigger ${isF ? 'scdn-active' : ''}" data-name="${cdn.name}">${isF ? this.icons.starF : this.icons.star}</button>
            <button class="scdn-btn-action scdn-sel-trigger ${isS ? 'scdn-active' : ''}" data-name="${cdn.name}">${isS ? this.icons.check : this.icons.plus}</button>
            ${deleteBtn}
          </div>
        </div>
        <div class="scdn-card-footer">
          <button class="scdn-badge scdn-primary scdn-ins-trigger" data-name="${cdn.name}">Insert</button>
          <button class="scdn-badge scdn-copy-url-trigger" data-name="${cdn.name}">${this.icons.link} URL</button>
          <button class="scdn-badge scdn-copy-tag-trigger" data-name="${cdn.name}">${this.icons.copy} Tag</button>
          <button class="scdn-badge scdn-download-trigger" data-name="${cdn.name}" title="Download local file">${this.icons.download} Save</button>
          <a href="${cdn.docs}" target="_blank" class="scdn-badge">Docs</a>
        </div>
      </div>
    `;
  }

  updateGrid(q = "") {
    let data = [];
    if (this.currentCat === 'Favorites') {
      data = this.cdnData.filter(c => this.favorites.includes(c.name));
      const customFavs = this.getCustomLibraries().filter(c => this.favorites.includes(c.name));
      data = [...data, ...customFavs];
    } else if (this.currentCat === 'Recents') {
      data = JSON.parse(localStorage.getItem('cdn_recents') || '[]');
    } else if (this.currentCat === 'Custom') {
      data = this.getCustomLibraries();
    } else if (this.currentCat === 'All') {
      data = [...this.cdnData, ...this.getCustomLibraries()];
    } else {
      data = this.cdnData.filter(c => c.category === this.currentCat);
    }

    if (q) {
      data = data.filter(c => c.name.toLowerCase().includes(q.toLowerCase()));
    }

    const list = this.$page.querySelector('#scdn-curated-list');

    let customFormHTML = '';
    if (this.currentCat === 'Custom') {
      customFormHTML = `
        <div class="scdn-card" style="border-color: var(--active-color, #10b981);">
          <div style="font-weight: bold; font-size: 0.85rem; color: var(--active-color, #10b981); margin-bottom: 8px; display: flex; justify-content: space-between; align-items: center;">
            <span>Add Custom CDN</span>
            <div style="display: flex; gap: 8px;">
              <button class="scdn-badge" id="scdn-custom-export" style="font-size:0.65rem; padding: 2px 6px;">Export All</button>
              <button class="scdn-badge" id="scdn-custom-import" style="font-size:0.65rem; padding: 2px 6px;">Import</button>
            </div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <input type="text" id="scdn-cust-name" placeholder="Library Name (e.g., Lodash)" class="scdn-custom-input" autocomplete="off">
            <input type="text" id="scdn-cust-url" placeholder="CDN Link/URL" class="scdn-custom-input" autocomplete="off">
            <input type="text" id="scdn-cust-script" placeholder="HTML script/link tag (or leave blank to auto-generate)" class="scdn-custom-input" autocomplete="off">
            <input type="text" id="scdn-cust-docs" placeholder="Documentation URL (Optional)" class="scdn-custom-input" autocomplete="off">
            <button class="scdn-badge scdn-primary" id="scdn-save-custom-btn" style="width: 100%; border: none; padding: 10px; display: block; text-align: center;">Save Library</button>
          </div>
        </div>
      `;
    }

    list.innerHTML = customFormHTML + data.map(c => this.createCard(c)).join('');

    const totalCount = this.cdnData.length + this.getCustomLibraries().length;
    this.$page.querySelector('#scdn-count').textContent = totalCount;

    this.bindEvents(list);

    if (this.currentCat === 'Custom') {
      this.bindCustomFormEvents();
    }

    this.updateFab();
  }

  bindCustomFormEvents() {
    const btn = this.$page.querySelector('#scdn-save-custom-btn');
    if (!btn) return;
    btn.onclick = () => {
      const name = this.$page.querySelector('#scdn-cust-name').value.trim();
      const url = this.$page.querySelector('#scdn-cust-url').value.trim();
      let script = this.$page.querySelector('#scdn-cust-script').value.trim();
      const docs = this.$page.querySelector('#scdn-cust-docs').value.trim() || '#';

      if (!name || !url) {
        window.toast("Name and URL fields are required.");
        return;
      }

      if (!script) {
        if (this.isCssFile(url)) {
          script = `<link href="${url}" rel="stylesheet">`;
        } else {
          script = `<script src="${url}"></script>`;
        }
      }

      const newCDN = {
        name,
        category: "Custom",
        versions: ["latest"],
        url,
        script,
        docs,
        logoUrl: "",
        size: "Custom",
        npm: "N/A",
        desc: "User saved CDN link.",
        peers: []
      };

      const customList = this.getCustomLibraries();
      if (customList.some(item => item.name.toLowerCase() === name.toLowerCase())) {
        window.toast("A configuration with this name is already registered.");
        return;
      }

      customList.push(newCDN);
      localStorage.setItem('cdn_custom', JSON.stringify(customList));
      window.toast("Custom CDN saved.");
      this.updateGrid();
    };

    this.$page.querySelector('#scdn-custom-export').onclick = () => {
      const dataString = JSON.stringify(this.getCustomLibraries());
      this.copy(dataString);
      window.toast("Configuration catalog copied to clipboard.");
    };

    this.$page.querySelector('#scdn-custom-import').onclick = async () => {
      let importedStr;
      if (window.acode && typeof acode.prompt === 'function') {
        importedStr = await acode.prompt("Paste imported JSON database structure:", "", "text");
      } else {
        importedStr = prompt("Paste imported JSON database structure:");
      }

      if (!importedStr) return;

      try {
        const parsed = JSON.parse(importedStr);
        if (Array.isArray(parsed)) {
          const merged = [...this.getCustomLibraries(), ...parsed].filter(
            (v, i, a) => a.findIndex(t => t.name.toLowerCase() === v.name.toLowerCase()) === i
          );
          localStorage.setItem('cdn_custom', JSON.stringify(merged));
          window.toast("Databases synced successfully.");
          this.updateGrid();
        } else {
          window.toast("Invalid database configuration structure.");
        }
      } catch (e) {
        window.toast("JSON compilation format error.");
      }
    };
  }

  updateOnlineGrid() {
    const list = this.$page.querySelector('#scdn-online-list');
    this.$page.querySelector('#scdn-online-section').style.display = 'block';
    list.innerHTML = this.onlineResults.map(i => this.createCard(i, true)).join('');
    this.bindEvents(list);
  }

  bindEvents(container) {
    container.querySelectorAll('.scdn-ins-trigger').forEach(b => b.onclick = () => {
      const name = b.dataset.name;
      const cdnObj = this.findCDNByName(name);
      if (cdnObj) {
        const ver = this.cdnVersions[name] || cdnObj.versions[0];
        const url = cdnObj.url.replace('{version}', ver);
        const tag = cdnObj.script.replace('{version}', ver);
        this.insert(url, tag, cdnObj);
      }
    });

    container.querySelectorAll('.scdn-copy-url-trigger').forEach(b => b.onclick = () => {
      const name = b.dataset.name;
      const cdnObj = this.findCDNByName(name);
      if (cdnObj) {
        const ver = this.cdnVersions[name] || cdnObj.versions[0];
        const url = cdnObj.url.replace('{version}', ver);
        this.copy(url, cdnObj);
      }
    });

    container.querySelectorAll('.scdn-copy-tag-trigger').forEach(b => b.onclick = () => {
      const name = b.dataset.name;
      const cdnObj = this.findCDNByName(name);
      if (cdnObj) {
        const ver = this.cdnVersions[name] || cdnObj.versions[0];
        const tag = cdnObj.script.replace('{version}', ver);
        this.copy(tag, cdnObj);
      }
    });

    container.querySelectorAll('.scdn-download-trigger').forEach(b => b.onclick = () => {
      const name = b.dataset.name;
      const cdnObj = this.findCDNByName(name);
      if (cdnObj) {
        const ver = this.cdnVersions[name] || cdnObj.versions[0];
        const url = cdnObj.url.replace('{version}', ver);
        this.downloadLocally(cdnObj, url);
      }
    });

    container.querySelectorAll('.scdn-fav-trigger').forEach(b => b.onclick = () => {
      const n = b.dataset.name;
      const i = this.favorites.indexOf(n);
      i > -1 ? this.favorites.splice(i, 1) : this.favorites.push(n);
      localStorage.setItem('cdn_favs', JSON.stringify(this.favorites));
      this.updateGrid(this.$page.querySelector('#scdn-search').value);
    });

    container.querySelectorAll('.scdn-sel-trigger').forEach(b => b.onclick = () => {
      const n = b.dataset.name;
      const i = this.selected.indexOf(n);
      i > -1 ? this.selected.splice(i, 1) : this.selected.push(n);
      this.updateGrid(this.$page.querySelector('#scdn-search').value);
    });

    container.querySelectorAll('.scdn-ver-select').forEach(s => {
      s.onchange = (e) => {
        this.cdnVersions[s.dataset.name] = e.target.value;
        this.updateGrid(this.$page.querySelector('#scdn-search').value);
      };

      if (s.dataset.online === 'true') {
        s.onfocus = () => {
          this.loadCdnjsVersions(s.dataset.name, s);
        };
        s.onclick = () => {
          this.loadCdnjsVersions(s.dataset.name, s);
        };
      }
    });

    container.querySelectorAll('.scdn-del-custom-trigger').forEach(b => b.onclick = () => {
      const name = b.dataset.name;
      let customList = this.getCustomLibraries();
      customList = customList.filter(item => item.name !== name);
      localStorage.setItem('cdn_custom', JSON.stringify(customList));
      window.toast("Custom CDN config removed.");
      this.updateGrid();
    });
  }

  updateFab() {
    this.$page.querySelector('#scdn-bundle-btn').classList.toggle('scdn-show', this.selected.length > 0);
  }

  insert(url, tag, cdnObject) {
    const ed = editorManager.editor;
    const file = editorManager.activeFile;
    let insertionValue = tag;

    if (file && file.filename) {
      const ext = file.filename.split('.').pop().toLowerCase();
      if (['js', 'jsx', 'ts', 'tsx', 'mjs'].includes(ext)) {
        insertionValue = `import "${url}";`;
      } else if (['css', 'scss', 'sass', 'less'].includes(ext)) {
        insertionValue = `@import url("${url}");`;
      }
    }

    ed.insert(insertionValue);
    window.toast("CDN template injected.");

    if (cdnObject) {
      this.addToRecents(cdnObject);
    }
  }

  async downloadLocally(cdnObj, url) {
    const activeFile = editorManager.activeFile;
    if (!activeFile || !activeFile.filename) {
      window.toast("No active file open to host local storage file.");
      return;
    }

    const currentUri = activeFile.uri;
    if (!currentUri) {
      window.toast("Please save the current editor file first.");
      return;
    }

    const directory = currentUri.substring(0, currentUri.lastIndexOf('/'));
    const targetFilename = url.split('/').pop().split('?')[0] || `${cdnObj.name.toLowerCase().replace(/\s+/g, '-')}.js`;

    try {
      window.toast(`Fetching asset: ${targetFilename}...`);
      const response = await fetch(url);
      if (!response.ok) throw new Error("Network communication issue.");
      const text = await response.text();

      let fs = null;
      if (window.acode && typeof acode.fsOperation === 'function') {
        fs = acode.fsOperation(directory);
      } else if (window.acode && typeof acode.require === 'function') {
        const fsOp = acode.require('fsOperation') || acode.require('fs');
        fs = typeof fsOp === 'function' ? await fsOp(directory) : null;
      }

      if (fs) {
        await fs.createFile(targetFilename, text);
        const isCss = targetFilename.endsWith('.css');
        const localTag = isCss
          ? `<link rel="stylesheet" href="./${targetFilename}">`
          : `<script src="./${targetFilename}"></script>`;

        editorManager.editor.insert(localTag);
        window.toast(`Dependency saved to: ./${targetFilename}`);
      } else {
        console.log(`[Offline Simulator] Saved File to current workspace directory: ./${targetFilename}\nContent size: ${text.length} chars.`);
        window.toast(`Simulated Local Download: ./${targetFilename}`);
      }

      this.addToRecents(cdnObj);
    } catch (err) {
      console.error(err);
      window.toast(`Download failed: ${err.message}`);
    }
  }

  copy(text, cdnObject) {
    navigator.clipboard.writeText(text).then(() => {
      window.toast("Copied!");
      if (cdnObject) {
        this.addToRecents(cdnObject);
      }
    }).catch(() => {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      window.toast("Copied to clipboard.");
      if (cdnObject) {
        this.addToRecents(cdnObject);
      }
    });
  }

  showBundle() {
    const allLibs = [...this.cdnData, ...this.getCustomLibraries()];
    const sel = allLibs.filter(c => this.selected.includes(c.name));

    const css = sel
      .filter(c => c.script.includes('<link') || this.isCssFile(c.url))
      .map(c => `  ${c.script.replace('{version}', this.cdnVersions[c.name] || c.versions[0])}`)
      .join('\n');

    const js = sel
      .filter(c => !c.script.includes('<link') && !this.isCssFile(c.url))
      .map(c => `  ${c.script.replace('{version}', this.cdnVersions[c.name] || c.versions[0])}`)
      .join('\n');

    const html = `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>CDN Bundle</title>\n${css}\n</head>\n<body>\n\n${js}\n</body>\n</html>`;

    this.$page.querySelector('#scdn-modal-code').textContent = html;
    this.$page.querySelector('#scdn-modal').classList.add('scdn-show');
  }
}

if (window.acode) {
  const acodePlugin = new SelectCDNPlugin();
  acode.setPluginInit(plugin.id, (baseUrl, $page) => acodePlugin.init($page, baseUrl));
  acode.setPluginUnmount(plugin.id, () => {
    let commands;
    try {
      commands = acode.require("commands");
    } catch (e) {
      // Graceful error capture if module missing
    }

    if (commands && typeof commands.removeCommand === 'function') {
      commands.removeCommand('SCDN');
      commands.removeCommand('cdn-library');
    } else if (editorManager.editor && editorManager.editor.commands) {
      editorManager.editor.commands.removeCommand('SCDN');
      editorManager.editor.commands.removeCommand('cdn-library');
    }
  });
}