/*!
 * Card Stack - vanilla JS + GSAP port of React Bits <Stack />
 *
 * Usage in Webflow:
 *   1. Paste stack.css into Site Settings -> Custom Code -> Head (inside <style>)
 *      OR link it via <link rel="stylesheet" href="...stack.css">.
 *   2. Paste this file into Site Settings -> Custom Code -> Footer (inside <script>)
 *      OR link it via <script src="...stack.js" defer></script>.
 *   3. Drop an HTML Embed with markup like:
 *
 *      <div
 *        data-stack
 *        data-stack-random-rotation="true"
 *        data-stack-sensitivity="180"
 *        data-stack-send-to-back-on-click="true"
 *        data-stack-autoplay="false"
 *        data-stack-autoplay-delay="3000"
 *        data-stack-pause-on-hover="false"
 *        style="width:280px;height:280px;"
 *      >
 *        <div data-stack-card><img src="..." alt=""></div>
 *        <div data-stack-card><img src="..." alt=""></div>
 *        <div data-stack-card><img src="..." alt=""></div>
 *        <div data-stack-card><img src="..." alt=""></div>
 *      </div>
 *
 * The script auto-loads GSAP from CDN if window.gsap isn't already present,
 * then auto-initializes every [data-stack] on DOMContentLoaded. You can also
 * call window.CardStack.init() manually after injecting markup dynamically.
 */
(function () {
  'use strict';

  var GSAP_CDN = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';

  function loadGsap() {
    return new Promise(function (resolve, reject) {
      if (window.gsap) return resolve(window.gsap);
      var existing = document.querySelector('script[data-cs-gsap]');
      if (existing) {
        existing.addEventListener('load', function () { resolve(window.gsap); });
        existing.addEventListener('error', reject);
        return;
      }
      var s = document.createElement('script');
      s.src = GSAP_CDN;
      s.async = true;
      s.setAttribute('data-cs-gsap', '');
      s.onload = function () { resolve(window.gsap); };
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  function clampMap(v, inMin, inMax, outMin, outMax) {
    var t = Math.max(inMin, Math.min(inMax, v));
    return outMin + ((t - inMin) / (inMax - inMin)) * (outMax - outMin);
  }

  function readOpts(el) {
    var d = el.dataset;
    return {
      randomRotation: d.stackRandomRotation === 'true',
      sensitivity: Number(d.stackSensitivity) || 200,
      sendToBackOnClick: d.stackSendToBackOnClick === 'true',
      autoplay: d.stackAutoplay === 'true',
      autoplayDelay: Number(d.stackAutoplayDelay) || 3000,
      pauseOnHover: d.stackPauseOnHover === 'true',
      // back.out controls the "spring" feel of the layout settle.
      // Higher = snappier; lower = softer.
      springOvershoot: Number(d.stackOvershoot) || 1.4
    };
  }

  function CardStack(el, opts, gsap) {
    this.el = el;
    this.opts = opts;
    this.gsap = gsap;
    this.cards = Array.prototype.slice.call(el.querySelectorAll('[data-stack-card]'));
    // order[0] = bottom of the stack, order[last] = top (the one you grab)
    this.order = this.cards.slice();
    this.paused = false;
    this.autoplayTimer = null;
    this.init();
  }

  CardStack.prototype.init = function () {
    var self = this;
    this.cards.forEach(function (card) {
      card._randomRot = self.opts.randomRotation ? Math.random() * 10 - 5 : 0;
      self.gsap.set(card, { transformOrigin: '90% 90%' });
      self.attachInteractions(card);
    });
    this.layout(true);
    if (this.opts.autoplay) this.startAutoplay();
    if (this.opts.pauseOnHover) {
      this.el.addEventListener('mouseenter', function () { self.paused = true; });
      this.el.addEventListener('mouseleave', function () { self.paused = false; });
    }
  };

  CardStack.prototype.layout = function (immediate) {
    var len = this.order.length;
    var gsap = this.gsap;
    var ease = 'back.out(' + this.opts.springOvershoot + ')';
    this.order.forEach(function (card, i) {
      var fromTop = len - i - 1; // 0 = top card, len-1 = bottom
      var rotZ = fromTop * 4 + (card._randomRot || 0);
      var scale = 1 + i * 0.06 - len * 0.06;
      gsap.to(card, {
        rotateZ: rotZ,
        scale: scale,
        zIndex: i,
        duration: immediate ? 0 : 0.55,
        ease: ease,
        overwrite: 'auto'
      });
    });
  };

  CardStack.prototype.topCard = function () {
    return this.order[this.order.length - 1];
  };

  CardStack.prototype.sendToBack = function (card) {
    var idx = this.order.indexOf(card);
    if (idx === -1) return;
    this.order.splice(idx, 1);
    this.order.unshift(card);
    if (this.opts.randomRotation) {
      card._randomRot = Math.random() * 10 - 5;
    }
    this.layout(false);
  };

  CardStack.prototype.attachInteractions = function (card) {
    var self = this;
    var gsap = this.gsap;
    var dragging = false;
    var startX = 0;
    var startY = 0;
    var pointerId = null;
    var moved = false;

    function onDown(e) {
      // only the top card responds
      if (self.topCard() !== card) return;
      dragging = true;
      moved = false;
      startX = e.clientX;
      startY = e.clientY;
      pointerId = e.pointerId;
      card.classList.add('cs-grabbing');
      try { card.setPointerCapture(e.pointerId); } catch (_) {}
    }

    function onMove(e) {
      if (!dragging || e.pointerId !== pointerId) return;
      var dx = e.clientX - startX;
      var dy = e.clientY - startY;
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) moved = true;
      // dragElastic 0.6 — soften the motion past origin
      var ex = dx * 0.6;
      var ey = dy * 0.6;
      gsap.set(card, {
        x: ex,
        y: ey,
        rotateX: clampMap(ey, -100, 100, 60, -60),
        rotateY: clampMap(ex, -100, 100, -60, 60)
      });
    }

    function onUp(e) {
      if (!dragging) return;
      dragging = false;
      card.classList.remove('cs-grabbing');
      try { card.releasePointerCapture(pointerId); } catch (_) {}
      var dx = e.clientX - startX;
      var dy = e.clientY - startY;
      var threshold = self.opts.sensitivity;
      var shouldSend = Math.abs(dx) > threshold || Math.abs(dy) > threshold;
      if (shouldSend) {
        // Reorder first, then let the position-reset spring run in parallel
        // with the layout's scale/rotateZ tween so the card glides directly
        // to the back of the stack without flashing upright on top.
        self.sendToBack(card);
        gsap.to(card, {
          x: 0, y: 0, rotateX: 0, rotateY: 0,
          duration: 0.55,
          ease: 'back.out(' + self.opts.springOvershoot + ')',
          overwrite: 'auto'
        });
      } else {
        gsap.to(card, {
          x: 0, y: 0, rotateX: 0, rotateY: 0,
          duration: 0.55, ease: 'elastic.out(1, 0.5)'
        });
      }
    }

    card.addEventListener('pointerdown', onDown);
    card.addEventListener('pointermove', onMove);
    card.addEventListener('pointerup', onUp);
    card.addEventListener('pointercancel', onUp);

    if (this.opts.sendToBackOnClick) {
      card.addEventListener('click', function () {
        // ignore the click that ends a drag
        if (moved) return;
        if (self.topCard() === card) self.sendToBack(card);
      });
    }

    // prevent native image drag from hijacking the gesture
    card.addEventListener('dragstart', function (e) { e.preventDefault(); });
  };

  CardStack.prototype.startAutoplay = function () {
    var self = this;
    clearInterval(this.autoplayTimer);
    this.autoplayTimer = setInterval(function () {
      if (self.paused || self.order.length < 2) return;
      self.sendToBack(self.topCard());
    }, this.opts.autoplayDelay);
  };

  CardStack.prototype.destroy = function () {
    clearInterval(this.autoplayTimer);
    this.el.__cardStack = null;
  };

  function initAll() {
    loadGsap().then(function (gsap) {
      var nodes = document.querySelectorAll('[data-stack]');
      nodes.forEach(function (el) {
        if (el.__cardStack) return;
        el.__cardStack = new CardStack(el, readOpts(el), gsap);
      });
    }).catch(function (err) {
      console.error('[CardStack] Failed to load GSAP:', err);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }

  window.CardStack = { init: initAll };
})();
