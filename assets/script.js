/* ==========================================================================
   Visa & Work Permit — FDI Accounting & Advisory
   Page behaviour: i18n, section rendering, nav, AOS, Swiper, lightbox.
   Loaded at the end of <body> after Swiper, Lucide, AOS and assets/i18n.js.
   ========================================================================== */
/* ============ Helpers ============ */
const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);
const pad = n => String(n).padStart(2, '0');
const unsplash = (id, w) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`;
const render = (sel, items, tpl) => { $(sel).innerHTML = items.map(tpl).join(''); };
const WORKS_COUNT = CONTENT.th.WORKS.length;

/* ============ i18n (TH / EN) ============ */
// Thai lives in the HTML; English comes from I18N_EN / CONTENT.en (assets/i18n.js)
const LANGS = ['th', 'en'];
const storage = {
  get: k => { try { return localStorage.getItem(k); } catch { return null; } },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch {} }
};
// ?lang=en (the indexable English URL) wins over the saved choice
let lang = [new URLSearchParams(location.search).get('lang'), storage.get('lang')].find(l => LANGS.includes(l)) ?? 'th';
let aosReady = false;
const thHtml = new WeakMap(), thAttr = new WeakMap();

function translateStatic() {
  document.documentElement.lang = lang;
  $$('[data-i18n]').forEach(el => {
    if (!thHtml.has(el)) thHtml.set(el, el.innerHTML);
    el.innerHTML = lang === 'th' ? thHtml.get(el) : I18N_EN[el.dataset.i18n] ?? thHtml.get(el);
  });
  $$('[data-i18n-attr]').forEach(el => {
    if (!thAttr.has(el)) thAttr.set(el, {});
    const orig = thAttr.get(el);
    el.dataset.i18nAttr.split(';').forEach(pair => {
      const [attr, key] = pair.split(':');
      if (!(attr in orig)) orig[attr] = el.getAttribute(attr);
      el.setAttribute(attr, lang === 'th' ? orig[attr] : I18N_EN[key] ?? orig[attr]);
    });
  });
}

/* ============ Render sections ============ */
function renderContent() {
  const { SVC_MAIN, SVC_INBOUND, SVC_OUTBOUND, SVC_DOCS, WHY, STEPS, FAQ } = CONTENT[lang];
  // Services
  render('#svcMain', SVC_MAIN, ([ic, t, d]) => `
    <div data-aos="fade-up" class="group bg-white rounded-[28px] md:rounded-[32px] p-6 md:p-7 flex flex-col gap-3 shadow-card hover:-translate-y-1 hover:shadow-lift transition duration-300">
      <span class="w-12 h-12 rounded-2xl bg-sky text-brand text-[22px] flex items-center justify-center group-hover:bg-brand group-hover:text-white transition"><i data-lucide="${ic}"></i></span>
      <h3 class="mt-auto text-[17px] leading-[1.4] font-extrabold">${t}</h3>
      <p class="text-[14.5px] leading-[1.65] text-muted">${d}</p>
    </div>`);

  const checkItem = iconClass => t => `
    <li class="flex items-start gap-2.5 text-[15px] leading-[1.6]"><i data-lucide="circle-check" class="mt-1 flex-none ${iconClass}"></i>${t}</li>`;
  render('#svcInbound', SVC_INBOUND, checkItem('text-white'));
  render('#svcOutbound', SVC_OUTBOUND, checkItem('text-accent'));
  render('#svcDocs', SVC_DOCS, t => `
    <span class="rounded-full bg-white/10 border border-white/15 px-3 py-1.5 text-[13.5px]">${t}</span>`);

  // Why us
  render('#whyGrid', WHY, ([ic, t, d], i) => `
    <div data-aos="fade-up" class="group bg-accent-soft rounded-[28px] md:rounded-[36px] p-7 md:p-9 flex flex-col sm:flex-row sm:items-center gap-5 md:gap-7 hover:bg-sky transition duration-300">
      <span class="flex-none w-16 h-16 md:w-18 md:h-18 rounded-2xl bg-white text-accent-dark text-3xl flex items-center justify-center shadow-card group-hover:text-brand transition"><i data-lucide="${ic}"></i></span>
      <div class="flex flex-col gap-2">
        <span class="font-bold text-xs tracking-[.14em] text-accent-dark group-hover:text-brand transition">REASON ${pad(i + 1)}</span>
        <h3 class="font-extrabold text-xl md:text-[22px] leading-[1.4]">${t}</h3>
        <p class="text-[15px] leading-[1.7] text-muted">${d}</p>
      </div>
    </div>`);

  // Process
  render('#steps', STEPS, ([ic, t, d, tags], i) => {
    const last = i === STEPS.length - 1;
    return `
    <li data-aos="fade-up" class="group relative rounded-[24px] border border-sky ${last ? 'bg-sky' : 'bg-white'} p-5 md:p-6 flex flex-col gap-4 hover:border-line hover:shadow-card transition duration-300">
      <div class="flex items-center justify-between">
        <span class="w-12 h-12 rounded-2xl ${last ? 'bg-brand text-white' : 'bg-sky text-brand'} text-2xl flex items-center justify-center"><i data-lucide="${ic}"></i></span>
        <span class="font-extrabold text-[28px] leading-none ${last ? 'text-brand' : 'text-mint group-hover:text-line'} transition">${pad(i + 1)}</span>
      </div>
      <div class="flex flex-col gap-1">
        <h3 class="text-lg leading-[1.4] font-extrabold">${t}</h3>
        ${d ? `<p class="text-[15px] leading-[1.6] font-semibold text-brand">${d}</p>` : ''}
        ${tags ? `<div class="flex flex-wrap gap-1.5 mt-1">${tags.map(x => `<span class="rounded-full bg-brand text-white px-3 py-1 text-[13px] font-semibold">${x}</span>`).join('')}</div>` : ''}
      </div>
    </li>`;
  });

  // FAQ
  render('#faqList', FAQ, ([q, a], i) => `
    <details class="faq group rounded-2xl border border-sky bg-white open:bg-sky/50 open:border-line transition-colors"${i === 0 ? ' open' : ''}>
      <summary class="flex items-center justify-between gap-4 cursor-pointer list-none px-5 md:px-6 py-4 md:py-5">
        <span class="font-bold text-base md:text-lg leading-snug">${q}</span>
        <span class="faq-ic flex-none w-8 h-8 rounded-full bg-sky text-brand flex items-center justify-center transition"><i data-lucide="plus"></i></span>
      </summary>
      <p class="px-5 md:px-6 pb-5 -mt-1 text-[15px] md:text-base leading-relaxed text-muted">${a}</p>
    </details>`);
}

// Our work (slides duplicated so Swiper's loop has enough slides)
render('#workSlides', [...CONTENT.th.WORKS, ...CONTENT.th.WORKS], ([id, tag], j) => `
  <div class="swiper-slide !h-auto">
    <button data-lb="${j % WORKS_COUNT}" class="group block w-full text-left cursor-zoom-in">
      <div class="relative aspect-[4/5] rounded-[36px] overflow-hidden shadow-card bg-sky">
        <img src="${unsplash(id, 700)}" alt="" loading="lazy" class="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105">
        <div class="absolute inset-x-0 bottom-0 pt-12 px-5 pb-5 bg-gradient-to-b from-transparent to-[rgba(21,70,160,.82)] flex flex-col gap-1">
          <span class="font-semibold text-[11px] tracking-[.1em] text-line">${tag}</span>
          <span class="w-cap text-base font-bold leading-snug text-white"></span>
        </div>
      </div>
    </button>
  </div>`);

function localizeWorks() {
  $$('#workSlides [data-lb]').forEach(b => {
    const cap = CONTENT[lang].WORKS[b.dataset.lb][2];
    b.querySelector('img').alt = cap;
    b.querySelector('.w-cap').textContent = cap;
  });
}

// Keep the URL, canonical and FAQ schema in step with the language
const canonical = $('link[rel="canonical"]');
const canonicalBase = canonical?.href.split('?')[0];
function syncSeo() {
  const url = new URL(location.href);
  if (lang === 'th') url.searchParams.delete('lang'); else url.searchParams.set('lang', lang);
  history.replaceState(history.state, '', url);
  if (canonical) canonical.href = canonicalBase + (lang === 'th' ? '' : `?lang=${lang}`);
  const ld = $('#ld-faq');
  if (ld) ld.textContent = JSON.stringify(faqJsonLd(lang));
}

function applyLang() {
  translateStatic();
  syncSeo();
  renderContent();
  localizeWorks();
  lucide.createIcons();
  $('#langCur').textContent = lang.toUpperCase();
  $$('[data-lang]').forEach(b => b.setAttribute('aria-checked', b.dataset.lang === lang));
  // Re-rendered cards are already on screen — show them without replaying AOS
  if (aosReady) { $$('[data-aos]:not(.aos-animate)').forEach(el => el.classList.add('aos-animate')); AOS.refresh(); }
}
function setLang(next) {
  if (!LANGS.includes(next) || next === lang) return;
  lang = next;
  storage.set('lang', lang);
  applyLang();
}
applyLang();

/* ============ Interactions ============ */
// Navbar shrink + floating CTA visibility
const nav = $('#nav'), navInner = $('#navInner'), floatCta = $('#floatCta');
const onScroll = () => {
  const scrolled = scrollY > 8;
  nav.classList.toggle('shadow-card', scrolled);
  navInner.classList.toggle('h-[66px]', scrolled);
  navInner.classList.toggle('h-[76px]', !scrolled);
  floatCta.classList.toggle('show', scrollY > 100);
};
addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile menu
const menu = $('#mobileMenu'), menuBtn = $('#menuBtn');
function setMenu(open) {
  menu.classList.toggle('open', open);
  menuBtn.classList.toggle('open', open);
  menuBtn.setAttribute('aria-expanded', open);
  menu.inert = !open;
}
menuBtn.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
$$('.m-link').forEach(a => a.addEventListener('click', () => setMenu(false)));
matchMedia('(min-width: 1091px)').addEventListener('change', e => e.matches && setMenu(false));

// Language dropdown
const langSwitch = $('#langSwitch'), langBtn = $('#langBtn');
const isLangOpen = () => langSwitch.classList.contains('open');
function setLangMenu(open) {
  langSwitch.classList.toggle('open', open);
  langBtn.setAttribute('aria-expanded', open);
}
langBtn.addEventListener('click', () => setLangMenu(!isLangOpen()));
$$('[data-lang]').forEach(b => b.addEventListener('click', () => {
  setLang(b.dataset.lang);
  setLangMenu(false);
  langBtn.focus();
}));
document.addEventListener('click', e => { if (!langSwitch.contains(e.target)) setLangMenu(false); });

// Reveal on scroll (AOS) — start after the preloader so the hero animates in view
const initAos = () => (aosReady = true, AOS.init({
  once: true, duration: 600, easing: 'ease-out-cubic', offset: 60,
  disable: () => matchMedia('(prefers-reduced-motion: reduce)').matches
}));
if (window.preloaderDone) initAos();
else addEventListener('preloader:done', initAos, { once: true });

// Overlay helpers (lightbox)
function openLayer(el) {
  el.classList.replace('hidden', 'flex');
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => requestAnimationFrame(() => el.classList.remove('opacity-0')));
}
function closeLayer(el) {
  el.classList.add('opacity-0');
  setTimeout(() => {
    el.classList.replace('flex', 'hidden');
    document.body.style.overflow = '';
  }, 300);
}

// Swiper
const swiper = new Swiper('#workSwiper', {
  loop: true, speed: 550, spaceBetween: 20, slidesPerView: 1, grabCursor: true,
  autoplay: { delay: 3200, disableOnInteraction: false, pauseOnMouseEnter: true },
  breakpoints: { 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 }, 1280: { slidesPerView: 4 } },
  navigation: { prevEl: '#wPrev', nextEl: '#wNext' },
  pagination: { el: '#wPag', clickable: true, renderBullet: (i, cls) => i < WORKS_COUNT ? `<span class="${cls}"></span>` : '' },
  on: { slideChange(s) { s.pagination.bullets.forEach((b, k) => b.classList.toggle('swiper-pagination-bullet-active', k === s.realIndex % WORKS_COUNT)); } }
});

// Lightbox
const lb = $('#lightbox');
let lbIndex = 0;
function fillLb(i) {
  lbIndex = (i + WORKS_COUNT) % WORKS_COUNT;
  const [id, , cap] = CONTENT[lang].WORKS[lbIndex];
  Object.assign($('#lbImg'), { src: unsplash(id, 1400), alt: cap });
  $('#lbCap').textContent = cap;
  $('#lbCount').textContent = `${lbIndex + 1} / ${WORKS_COUNT}`;
}
function closeLb() { closeLayer(lb); swiper.autoplay.start(); }
document.addEventListener('click', e => {
  const b = e.target.closest('[data-lb]');
  if (!b) return;
  fillLb(+b.dataset.lb);
  swiper.autoplay.stop();
  openLayer(lb);
});
lb.addEventListener('click', e => { if (e.target === lb || e.target.closest('[data-lb-close]')) closeLb(); });
$('#lbPrev').addEventListener('click', e => { e.stopPropagation(); fillLb(lbIndex - 1); });
$('#lbNext').addEventListener('click', e => { e.stopPropagation(); fillLb(lbIndex + 1); });

// ESC closes top layer
addEventListener('keydown', e => {
  if (e.key !== 'Escape') return;
  if (isLangOpen()) { setLangMenu(false); langBtn.focus(); }
  else if (!lb.classList.contains('hidden')) closeLb();
  else setMenu(false);
});
