(function () {
  var WA = '5515997693348';

  // Links do WhatsApp com mensagem personalizada por botão
  document.querySelectorAll('[data-wa]').forEach(function (el) {
    el.href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(el.dataset.wa);
    el.target = '_blank';
    el.rel = 'noopener';
  });

  // Cabeçalho com fundo ao rolar
  var header = document.getElementById('header');
  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 20); }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Menu mobile
  var burger = document.getElementById('burger');
  var nav = document.getElementById('nav');
  function toggle(open) {
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    nav.classList.toggle('open', open);
  }
  burger.addEventListener('click', function () {
    toggle(burger.getAttribute('aria-expanded') !== 'true');
  });
  nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { toggle(false); });
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') toggle(false); });

  // Revelação suave das seções
  var targets = document.querySelectorAll('.sec h2, .list li, .rows article, .chips span, .steps li, .cta__in > *');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.15 });
    targets.forEach(function (t) { t.classList.add('reveal'); io.observe(t); });
  }

  document.getElementById('ano').textContent = new Date().getFullYear();
})();
