// Florex Group — shared interactions
(function () {
  // sticky header state
  var hdr = document.querySelector('header');
  if (hdr) {
    var onScroll = function () { hdr.classList.toggle('scrolled', window.scrollY > 20); };
    window.addEventListener('scroll', onScroll); onScroll();
  }

  // mobile menu
  var burger = document.getElementById('burger');
  var menu = document.getElementById('menu');
  if (burger && menu) {
    burger.addEventListener('click', function () { menu.classList.toggle('open'); });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { menu.classList.remove('open'); });
    });
  }

  // scroll reveal
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  // count-up stats
  var nums = document.querySelectorAll('.num[data-target]');
  if ('IntersectionObserver' in window && nums.length) {
    var co = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) return; co.unobserve(e.target);
        var el = e.target, t = +el.dataset.target, sfx = el.dataset.suffix || '', s = null;
        var step = function (n) {
          if (!s) s = n;
          var p = Math.min((n - s) / 1200, 1);
          el.textContent = Math.floor(p * t) + (p === 1 ? sfx : '');
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    }, { threshold: 0.6 });
    nums.forEach(function (el) { co.observe(el); });
  }

  // projects filter
  var fbtns = document.querySelectorAll('#filters button');
  var cards = document.querySelectorAll('.proj');
  if (fbtns.length && cards.length) {
    fbtns.forEach(function (b) {
      b.addEventListener('click', function () {
        fbtns.forEach(function (x) { x.classList.remove('active'); });
        b.classList.add('active');
        var f = b.dataset.f;
        cards.forEach(function (c) {
          var show = f === 'all' || c.dataset.cat === f;
          c.style.display = show ? 'flex' : 'none';
          if (show) { c.classList.remove('in'); requestAnimationFrame(function () { c.classList.add('in'); }); }
        });
      });
    });
  }
})();
