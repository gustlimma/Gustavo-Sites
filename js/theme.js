/* Light / dark theme. Runs in <head> so the saved choice is applied before the page paints.
   Independent from app.js: the click uses event delegation, so it works no matter the load order. */
(function(){
  var root = document.documentElement, KEY = 'gp-theme', theme = 'dark';
  try{ if(localStorage.getItem(KEY) === 'light') theme = 'light'; }catch(e){}
  function apply(){
    if(theme === 'light') root.setAttribute('data-theme','light'); else root.removeAttribute('data-theme');
    var mc = document.querySelector('meta[name="theme-color"]');
    if(mc) mc.setAttribute('content', theme === 'light' ? '#f4f7fb' : '#0d1b2a');
    var b = document.getElementById('theme');
    if(b){
      var en = /^en/i.test(root.lang || '');
      var t = theme === 'light' ? (en ? 'Switch to dark mode' : 'Ativar modo escuro') : (en ? 'Switch to light mode' : 'Ativar modo claro');
      b.setAttribute('aria-label', t); b.title = t;
    }
  }
  apply();
  document.addEventListener('DOMContentLoaded', apply);
  document.addEventListener('click', function(e){
    if(!(e.target && e.target.closest && e.target.closest('#theme'))) return;
    theme = theme === 'light' ? 'dark' : 'light';
    try{ localStorage.setItem(KEY, theme); }catch(err){}
    apply();
  });
  /* keep the button label in the visitor's language when EN/PT changes */
  new MutationObserver(apply).observe(root, {attributes:true, attributeFilter:['lang']});
})();
