// Motion layer: GSAP + ScrollTrigger reveals/parallax and optional Lenis smooth scroll.
// Targets [data-anim="hero-text|hero-piece|hero-bg|parallax|mask|card|rise|scrim|panel-drawer|panel-modal|panel-menu"]
// plus every h1/h2 heading block inside <main>. Modes: expressive | subtle | off. Honours prefers-reduced-motion.
const EASE = 'power3.out';
const PANEL_EASE = 'cubic-bezier(.22,.61,.36,1)';
const CLEARED = 'transform,opacity,visibility';
const MOBILE_WIDTH = 640;
const POLL_MS = 100;
const LENIS_GRACE_MS = 2000;
const GIVE_UP_MS = 10000;

class ShowroomMotion {
  constructor({ frame, scroller, mode }) {
    this.frame = frame;
    this.scroller = scroller;
    this.seen = new Set();
    const reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.mode = reduced ? 'off' : (mode || 'expressive');
    if (this.mode === 'off') return;
    this.full = this.mode === 'expressive';
    gsap.registerPlugin(ScrollTrigger);
    if (this.full && window.Lenis) this.startSmoothScroll();
    this.mutations = new MutationObserver(() => this.scheduleScan());
    this.mutations.observe(frame, { childList: true, subtree: true });
    this.resizes = new ResizeObserver(() => this.scheduleRefresh());
    this.resizes.observe(scroller);
    const main = scroller.querySelector('main');
    if (main) this.resizes.observe(main);
    this.routeChanged();
    this.scan();
  }

  startSmoothScroll() {
    const s = this.scroller;
    this.lenis = new Lenis({ wrapper: s, content: s, duration: 1.15, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
    this.lenis.on('scroll', ScrollTrigger.update);
    this.tick = time => this.lenis.raf(time * 1000);
    gsap.ticker.add(this.tick);
    gsap.ticker.lagSmoothing(0);
  }

  scheduleScan() { clearTimeout(this.scanTimer); this.scanTimer = setTimeout(() => this.scan(), 60); }
  scheduleRefresh() {
    clearTimeout(this.refreshTimer);
    this.refreshTimer = setTimeout(() => { if (this.lenis) this.lenis.resize(); ScrollTrigger.refresh(); }, 140);
  }

  claim(selector) {
    return [...this.frame.querySelectorAll(selector)].filter(el => !this.seen.has(el)).map(el => (this.seen.add(el), el));
  }

  parallax(el, from, to, start, trigger) {
    gsap.fromTo(el, { yPercent: from }, { yPercent: to, ease: 'none', scrollTrigger: { trigger: trigger || el, scroller: this.scroller, start, end: 'bottom top', scrub: true } });
  }

  reveal(els, distance, stagger) {
    if (!els.length) return;
    gsap.set(els, { y: distance, autoAlpha: 0 });
    ScrollTrigger.batch(els, {
      scroller: this.scroller, start: 'top 92%', once: true,
      onEnter: batch => gsap.to(batch, { y: 0, autoAlpha: 1, duration: this.full ? 1.1 : .7, ease: EASE, stagger, overwrite: true, clearProps: CLEARED })
    });
  }

  pruneDetached() {
    ScrollTrigger.getAll().forEach(t => { if (t.trigger && !t.trigger.isConnected) t.kill(); });
    this.seen.forEach(el => { if (!el.isConnected) this.seen.delete(el); });
  }

  animateOverlays() {
    const mobile = this.frame.clientWidth < MOBILE_WIDTH;
    this.claim('[data-anim="scrim"]').forEach(el => el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 320, easing: 'ease-out' }));
    this.claim('[data-anim^="panel"]').forEach(el => {
      const kind = el.dataset.anim;
      const from = kind === 'panel-menu' ? { translate: '100% 0', opacity: 1 }
        : mobile ? { translate: '0 100%', opacity: 1 }
        : kind === 'panel-drawer' ? { translate: '-100% 0', opacity: 1 }
        : { translate: '0 28px', opacity: 0 };
      const slides = mobile || kind !== 'panel-modal';
      el.animate([from, { translate: '0 0', opacity: 1 }], { duration: slides ? 520 : 420, easing: PANEL_EASE });
    });
  }

  animateHero() {
    const full = this.full;
    this.claim('[data-anim="hero-text"]').forEach(el => {
      gsap.fromTo([...el.children], { y: full ? 32 : 14, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: full ? 1.1 : .7, stagger: .09, delay: .1, ease: EASE, clearProps: CLEARED });
    });
    this.claim('[data-anim="hero-piece"]').forEach(el => {
      gsap.fromTo(el, { y: full ? 90 : 0, autoAlpha: 0 }, {
        y: 0, autoAlpha: 1, duration: full ? 1.4 : .8, delay: .3, ease: 'expo.out', clearProps: CLEARED,
        onComplete: () => { if (full && el.isConnected) this.parallax(el, 0, -12, 'top top', el.closest('section')); }
      });
    });
    this.claim('[data-anim="hero-bg"]').forEach(el => {
      if (!full) return;
      gsap.fromTo(el, { scale: 1.14 }, { scale: 1.06, duration: 2.6, ease: 'power2.out' });
      this.parallax(el, 0, 10, 'top top', el.closest('section'));
    });
    this.claim('[data-anim="parallax"]').forEach(el => {
      if (!full) return;
      gsap.set(el, { scale: 1.16 });
      this.parallax(el, -7, 7, 'top bottom', el.parentElement);
    });
  }

  animateMasks() {
    const masks = this.claim('[data-anim="mask"]');
    if (!masks.length) return;
    const full = this.full;
    gsap.set(masks, full ? { clipPath: 'inset(100% 0% 0% 0%)' } : { autoAlpha: 0 });
    ScrollTrigger.batch(masks, {
      scroller: this.scroller, start: 'top 92%', once: true,
      onEnter: batch => {
        if (!full) { gsap.to(batch, { autoAlpha: 1, duration: .7, stagger: .08, ease: EASE, clearProps: 'opacity,visibility' }); return; }
        gsap.to(batch, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.3, ease: 'expo.out', stagger: .1, clearProps: 'clipPath' });
        const images = batch.map(m => m.querySelector('img')).filter(Boolean);
        gsap.fromTo(images, { scale: 1.25 }, { scale: 1, duration: 1.6, ease: 'expo.out', stagger: .1, clearProps: 'transform' });
      }
    });
  }

  animateBlocks() {
    const headings = new Set();
    this.frame.querySelectorAll('main h1, main h2').forEach(h => {
      const block = h.parentElement;
      if (block && !block.closest('[data-anim]')) headings.add(block);
    });
    const rising = [...headings, ...this.frame.querySelectorAll('[data-anim="rise"]')].filter(el => !this.seen.has(el));
    rising.forEach(el => this.seen.add(el));
    this.reveal(rising, this.full ? 36 : 16, .12);
    this.reveal(this.claim('[data-anim="card"]'), this.full ? 48 : 18, .09);
  }

  scan() {
    if (this.mode === 'off') return;
    this.pruneDetached();
    this.animateOverlays();
    this.animateHero();
    this.animateMasks();
    this.animateBlocks();
    this.scheduleRefresh();
  }

  routeChanged() {
    if (this.mode === 'off') return;
    const main = this.scroller.querySelector('main');
    if (main) gsap.fromTo(main, { autoAlpha: 0 }, { autoAlpha: 1, duration: .5, ease: 'power1.out', clearProps: 'opacity,visibility' });
  }

  toTop() {
    if (this.lenis) this.lenis.scrollTo(0, { immediate: true, force: true });
    this.scroller.scrollTop = 0;
  }

  destroy() {
    clearTimeout(this.scanTimer);
    clearTimeout(this.refreshTimer);
    if (this.mutations) this.mutations.disconnect();
    if (this.resizes) this.resizes.disconnect();
    if (this.mode === 'off') return;
    ScrollTrigger.getAll().forEach(t => t.kill());
    if (this.tick) { gsap.ticker.remove(this.tick); gsap.ticker.lagSmoothing(500, 33); }
    if (this.lenis) this.lenis.destroy();
    const touched = [...this.frame.querySelectorAll('main, [data-anim], [data-anim] > *, [data-anim] img'), ...this.seen];
    gsap.killTweensOf(touched);
    gsap.set(touched, { clearProps: 'transform,opacity,visibility,clipPath' });
    this.seen.clear();
  }
}

// Starts motion once GSAP is loaded (Lenis is optional). Returns a handle that is safe to use before start.
export function startMotion(options) {
  const startedAt = Date.now();
  let instance = null, timer = null, stopped = false;
  const attempt = () => {
    if (stopped) return;
    const elapsed = Date.now() - startedAt;
    const ready = window.gsap && window.ScrollTrigger && (window.Lenis || elapsed >= LENIS_GRACE_MS);
    if (ready) instance = new ShowroomMotion(options);
    else if (elapsed < GIVE_UP_MS) timer = setTimeout(attempt, POLL_MS);
  };
  attempt();
  return {
    toTop: () => { if (instance) instance.toTop(); else options.scroller.scrollTop = 0; },
    routeChanged: () => { if (instance) instance.routeChanged(); },
    destroy: () => { stopped = true; clearTimeout(timer); if (instance) instance.destroy(); }
  };
}
