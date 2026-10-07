// Magic Look showroom motion layer — GSAP + ScrollTrigger (reveals, parallax) and Lenis (smooth scroll).
// Targets: [data-anim="hero-text|hero-piece|hero-bg|parallax|mask|card|rise|scrim|panel-drawer|panel-modal"],
// plus every main h1/h2 header block. Modes: expressive | subtle | off. Honours prefers-reduced-motion.
(function () {
  const E = 'power3.out', CLR = 'transform,opacity,visibility';
  class ShowroomMotion {
    constructor({ frame, scroller, mode }) {
      this.frame = frame; this.scroller = scroller; this.seen = new Set();
      const reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
      this.mode = reduced ? 'off' : (mode || 'expressive');
      if (this.mode === 'off') return;
      this.full = this.mode === 'expressive';
      gsap.registerPlugin(ScrollTrigger);
      if (this.full && window.Lenis) {
        this.lenis = new Lenis({ wrapper: scroller, content: scroller, duration: 1.15, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true });
        this.lenis.on('scroll', ScrollTrigger.update);
        this.tick = t => this.lenis.raf(t * 1000);
        gsap.ticker.add(this.tick); gsap.ticker.lagSmoothing(0);
      }
      this.mo = new MutationObserver(() => this.schedule());
      this.mo.observe(frame, { childList: true, subtree: true });
      this.ro = new ResizeObserver(() => this.refreshSoon());
      this.ro.observe(scroller);
      const main = scroller.querySelector('main'); if (main) this.ro.observe(main);
      this.route(); this.scan();
    }
    schedule() { clearTimeout(this.t); this.t = setTimeout(() => this.scan(), 60); }
    refreshSoon() { clearTimeout(this.rt); this.rt = setTimeout(() => { if (this.lenis) this.lenis.resize(); ScrollTrigger.refresh(); }, 140); }
    fresh(sel) { return [...this.frame.querySelectorAll(sel)].filter(el => !this.seen.has(el)).map(el => (this.seen.add(el), el)); }
    parallax(el, a, b, start, trigger) {
      gsap.fromTo(el, { yPercent: a }, { yPercent: b, ease: 'none', scrollTrigger: { trigger: trigger || el, scroller: this.scroller, start, end: 'bottom top', scrub: true } });
    }
    reveal(els, y, stagger) {
      if (!els.length) return;
      gsap.set(els, { y, autoAlpha: 0 });
      ScrollTrigger.batch(els, { scroller: this.scroller, start: 'top 92%', once: true,
        onEnter: b => gsap.to(b, { y: 0, autoAlpha: 1, duration: this.full ? 1.1 : .7, ease: E, stagger, overwrite: true, clearProps: CLR }) });
    }
    scan() {
      if (this.mode === 'off') return;
      const full = this.full, S = this.scroller;
      ScrollTrigger.getAll().forEach(t => { if (t.trigger && !t.trigger.isConnected) t.kill(); });
      this.seen.forEach(el => { if (!el.isConnected) this.seen.delete(el); });

      const mob = this.frame.clientWidth < 640, ez = 'cubic-bezier(.22,.61,.36,1)';
      this.fresh('[data-anim="scrim"]').forEach(el => el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 320, easing: 'ease-out' }));
      this.fresh('[data-anim^="panel"]').forEach(el => {
        const drawer = el.dataset.anim === 'panel-drawer';
        const from = mob ? { translate: '0 100%', opacity: 1 } : drawer ? { translate: '-100% 0', opacity: 1 } : { translate: '0 28px', opacity: 0 };
        el.animate([from, { translate: '0 0', opacity: 1 }], { duration: mob || drawer ? 520 : 420, easing: ez });
      });

      this.fresh('[data-anim="hero-text"]').forEach(el => {
        gsap.fromTo([...el.children], { y: full ? 32 : 14, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: full ? 1.1 : .7, stagger: .09, delay: .1, ease: E, clearProps: CLR });
      });
      this.fresh('[data-anim="hero-piece"]').forEach(el => {
        gsap.fromTo(el, { y: full ? 90 : 0, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: full ? 1.4 : .8, delay: .3, ease: 'expo.out', clearProps: CLR,
          onComplete: () => { if (full && el.isConnected) this.parallax(el, 0, -12, 'top top', el.closest('section')); } });
      });
      this.fresh('[data-anim="hero-bg"]').forEach(el => {
        if (!full) return;
        gsap.fromTo(el, { scale: 1.14 }, { scale: 1.06, duration: 2.6, ease: 'power2.out' });
        this.parallax(el, 0, 10, 'top top', el.closest('section'));
      });
      this.fresh('[data-anim="parallax"]').forEach(el => {
        if (!full) return;
        gsap.set(el, { scale: 1.16 });
        this.parallax(el, -7, 7, 'top bottom', el.parentElement);
      });

      const masks = this.fresh('[data-anim="mask"]');
      if (masks.length) {
        gsap.set(masks, full ? { clipPath: 'inset(100% 0% 0% 0%)' } : { autoAlpha: 0 });
        ScrollTrigger.batch(masks, { scroller: S, start: 'top 92%', once: true, onEnter: b => {
          if (full) {
            gsap.to(b, { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.3, ease: 'expo.out', stagger: .1, clearProps: 'clipPath' });
            gsap.fromTo(b.map(m => m.querySelector('img')).filter(Boolean), { scale: 1.25 }, { scale: 1, duration: 1.6, ease: 'expo.out', stagger: .1, clearProps: 'transform' });
          } else gsap.to(b, { autoAlpha: 1, duration: .7, stagger: .08, ease: E, clearProps: 'opacity,visibility' });
        } });
      }

      const heads = new Set();
      this.frame.querySelectorAll('main h1, main h2').forEach(h => { const p = h.parentElement; if (p && !p.closest('[data-anim]')) heads.add(p); });
      const rise = [...heads, ...this.frame.querySelectorAll('[data-anim="rise"]')].filter(el => !this.seen.has(el));
      rise.forEach(el => this.seen.add(el));
      this.reveal(rise, full ? 36 : 16, .12);
      this.reveal(this.fresh('[data-anim="card"]'), full ? 48 : 18, .09);
      this.refreshSoon();
    }
    route() {
      if (this.mode === 'off') return;
      const m = this.scroller.querySelector('main');
      if (m) gsap.fromTo(m, { autoAlpha: 0 }, { autoAlpha: 1, duration: .5, ease: 'power1.out', clearProps: 'opacity,visibility' });
    }
    toTop() { if (this.lenis) this.lenis.scrollTo(0, { immediate: true, force: true }); this.scroller.scrollTop = 0; }
    destroy() {
      clearTimeout(this.t); clearTimeout(this.rt);
      if (this.mo) this.mo.disconnect(); if (this.ro) this.ro.disconnect();
      if (this.mode === 'off') return;
      ScrollTrigger.getAll().forEach(t => t.kill());
      if (this.tick) { gsap.ticker.remove(this.tick); gsap.ticker.lagSmoothing(500, 33); }
      if (this.lenis) this.lenis.destroy();
      const els = [...this.frame.querySelectorAll('main, [data-anim], [data-anim] > *, [data-anim] img'), ...this.seen];
      gsap.killTweensOf(els);
      gsap.set(els, { clearProps: 'transform,opacity,visibility,clipPath' });
      this.seen.clear();
    }
  }
  window.ShowroomMotion = ShowroomMotion;
})();
