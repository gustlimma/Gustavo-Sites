/* Gustavo Proenca site | app v6. WhatsApp number is set only in index.html */
(function(){
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = matchMedia('(hover:hover) and (pointer:fine)').matches;
  var $ = function(s,r){return (r||document).querySelector(s)};

  /* language: PT (default) / EN */
  var lang = 'pt';
  try{ lang = localStorage.getItem('gp-lang') === 'en' ? 'en' : 'pt'; }catch(e){}
  function L(pt,en){ return lang==='en' ? en : pt; }
  var MAP = {
    'Landing page':'Landing page','Exemplos':'Examples','Serviços':'Services','Inteligência artificial':'Artificial intelligence','Contato':'Contact','Análise gratuita':'Free analysis',
    'Gustavo Proença, início':'Gustavo Proença, home','Abrir menu':'Open menu','Principal':'Main',
    'Veja como pode ficar o site do seu negócio':'See how your business website could look',
    'Arraste, use as setas ou clique em um exemplo para trazê-lo para a frente.':'Drag, use the arrows, or click an example to bring it to the front.',
    'Exemplos de sites e landing pages':'Website and landing page examples','Exemplo anterior':'Previous example','Próximo exemplo':'Next example','Escolher exemplo':'Choose example',
    'Para quem presta serviço':'For service providers',
    'Uma página simples e direta, feita para o cliente que encontrou você no Google chamar no WhatsApp ou pedir um orçamento.':'A simple, direct page made so the customer who found you on Google can message you on WhatsApp or ask for a quote.',
    'Rápida e fácil de usar no celular.':'Fast and easy to use on a phone.',
    'Botão de WhatsApp e de ligação sempre à vista.':'WhatsApp and call buttons always in view.',
    'Seus serviços, sua região e suas avaliações em um só lugar.':'Your services, your area and your reviews in one place.',
    'Quero minha landing page':'I want my landing page','Falar no WhatsApp':'Chat on WhatsApp',
    'Marketing digital e inteligência artificial para colocar sua empresa na frente de quem está procurando.':'Digital marketing and artificial intelligence to put your business in front of the people searching for it.',
    'Exemplo ilustrativo de landing page.':'Illustrative landing page example.',
    'Exemplo de landing page para prestador de serviço':'Example landing page for a service provider',
    'Seu serviço na sua cidade':'Your service in your city','Atendimento rápido e orçamento sem compromisso.':'Fast service and a no-obligation quote.',
    'Chamar no WhatsApp':'Message on WhatsApp','Ligar agora':'Call now','5,0 no Google':'5.0 on Google',
    'Serviço 1':'Service 1','Serviço 2':'Service 2','Serviço 3':'Service 3',
    'Com a página pronta, coloque sua empresa na frente de quem está procurando':'With the page ready, put your business in front of the people searching',
    'Mais visibilidade no Google, mais clientes e resultados reais para o seu negócio.':'More visibility on Google, more customers and real results for your business.',
    'Quero minha análise gratuita':'I want my free analysis',
    'Simulação de busca no Google':'Google search simulation','Resultados perto de você':'Results near you',
    'Simulação ilustrativa, com empresas fictícias.':'Illustrative simulation with fictional businesses.','Ver de novo':'Replay',
    'Tudo o que sua empresa precisa para ser encontrada':'Everything your business needs to be found',
    'Escolha um serviço para ver o que está incluído.':'Pick a service to see what’s included.',
    'Inteligência artificial a favor do seu negócio':'Artificial intelligence working for your business',
    'Usamos IA para criar conteúdos, otimizar sua presença no Google, atrair o público certo e aumentar seus resultados.':'We use AI to create content, optimize your Google presence, attract the right audience and grow your results.',
    'Mais clientes, mais visibilidade e mais resultados.':'More customers, more visibility and more results.',
    '100% online: atendemos qualquer empresa do Brasil.':'100% online: we serve any business in Brazil.',
    'Soluções personalizadas para o seu negócio e seu objetivo.':'Solutions tailored to your business and your goal.',
    'Exemplo de texto criado com IA':'Example of text created with AI','Exemplo ilustrativo de texto criado com IA.':'Illustrative example of text created with AI.',
    'Análise gratuita da sua presença no Google':'Free analysis of your Google presence',
    'Descubra como sua empresa pode aparecer mais e atrair mais clientes.':'Find out how your business can show up more and attract more customers.',
    'Fale comigo no WhatsApp':'Message me on WhatsApp',
    'Sua empresa':'Your business','5,0':'5.0','no Google':'on Google','Visibilidade':'Visibility','Ligações':'Calls','Rotas no mapa':'Map directions',
    'Exemplo ilustrativo de perfil de empresa.':'Illustrative business profile example.',
    '© 2026 Gustavo Proença. Marketing Digital & IA.':'© 2026 Gustavo Proença. Digital Marketing & AI.','Ligar':'Call'
  };
  var WA_MSG = {
    landing:['Olá, Gustavo! Presto serviços e ainda não tenho site. Quero uma landing page.','Hi Gustavo! I offer services and don’t have a website yet. I’d like a landing page.'],
    analysis:['Olá, Gustavo! Quero minha análise gratuita da presença no Google.','Hi Gustavo! I’d like my free analysis of my Google presence.'],
    dock:['Olá, Gustavo! Quero minha análise gratuita.','Hi Gustavo! I’d like my free analysis.']
  };
  function walk(){
    var w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {acceptNode:function(n){ var t=n.parentNode.nodeName; return (t==='SCRIPT'||t==='STYLE') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT; }});
    var n;
    while((n = w.nextNode())){
      if(n.__o === undefined){ var t = n.nodeValue.trim(); if(t && MAP[t] !== undefined){ n.__o = n.nodeValue; n.__k = t; } else n.__o = null; }
      if(n.__o){ n.nodeValue = n.__o.split(n.__k).join(lang==='en' ? MAP[n.__k] : n.__k); }
    }
    document.querySelectorAll('[aria-label]').forEach(function(el){
      if(el.__al === undefined){ var v = el.getAttribute('aria-label'); el.__al = MAP[v] !== undefined ? v : null; }
      if(el.__al) el.setAttribute('aria-label', lang==='en' ? MAP[el.__al] : el.__al);
    });
  }
  function applyLang(){
    document.documentElement.lang = lang==='en' ? 'en' : 'pt-BR';
    document.title = L('Gustavo Proença | Marketing Digital e Inteligência Artificial','Gustavo Proença | Digital Marketing and Artificial Intelligence');
    var md = document.querySelector('meta[name="description"]');
    if(md) md.setAttribute('content', L('Google Meu Negócio, Google Ads, SEO local, sites, landing pages, redes sociais e IA para colocar sua empresa na frente de quem está procurando. Atendimento 100% online.','Google Business Profile, Google Ads, local SEO, websites, landing pages, social media and AI to put your business in front of the people searching for it. 100% online service.'));
    walk();
    document.querySelectorAll('[data-wa]').forEach(function(a){ a.href = a.href.split('?')[0] + '?text=' + encodeURIComponent(WA_MSG[a.getAttribute('data-wa')][lang==='en'?1:0]); });
    document.querySelectorAll('.lang button').forEach(function(b){ b.setAttribute('aria-pressed', String(b.getAttribute('data-lang')===lang)); });
  }
  function setLang(l){
    if(l===lang) return; lang = l;
    try{ localStorage.setItem('gp-lang', l); }catch(e){}
    applyLang(); renderH1(); renderServices(); renderMarquee(); renderChat(); rebuildSerp(); refreshCarousel();
  }
  document.querySelectorAll('.lang button').forEach(function(b){ b.addEventListener('click', function(){ setLang(b.getAttribute('data-lang')); }); });

  var root = document.documentElement; /* theme itself lives in js/theme.js */

  /* headline: words rise one by one */
  var H1 = ['Presta serviço e ainda não tem site? Eu crio a sua landing page.','Offer a service but don\u2019t have a website yet? I build your landing page.'];
  var h1 = $('#h1');
  function renderH1(){
    var t = L(H1[0],H1[1]);
    h1.setAttribute('aria-label', t);
    h1.innerHTML = t.split(' ').map(function(w,i){return '<span class="w" aria-hidden="true"><span style="--i:'+i+'">'+w+'</span></span> '}).join('');
  }
  renderH1();

  /* progress + nav */
  var bar = $('#bar'), nav = $('#nav'), dock = $('#dock'), contact = $('#contato');
  function onScroll(){
    var h = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = 'scaleX(' + (h>0 ? scrollY/h : 0) + ')';
    nav.classList.toggle('is-solid', scrollY > 20);
    var r = contact.getBoundingClientRect();
    dock.classList.toggle('hide', r.top < innerHeight*0.6);
  }
  addEventListener('scroll', onScroll, {passive:true}); onScroll();

  /* mobile menu */
  var burger = $('#burger'), menu = $('#menu');
  burger.addEventListener('click', function(){
    var o = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', o);
  });
  menu.addEventListener('click', function(e){ if(e.target.closest('a')){ menu.classList.remove('open'); burger.setAttribute('aria-expanded','false'); } });

  /* services */
  var services = [
    {n:['Google Business Profile','Google Business Profile'],i:[['Otimização para o Google Maps','Google Maps optimization'],['Mais visibilidade local','More local visibility'],['Gestão e atualizações','Management and updates']]},
    {n:['Google Ads','Google Ads'],i:[['Anúncios que geram clientes','Ads that bring in customers'],['Segmentação precisa','Precise targeting'],['Alto retorno sobre o investimento','High return on investment']]},
    {n:['Google Local Services','Google Local Services'],i:[['Google Guaranteed','Google Guaranteed'],['Mais confiança para o cliente','More trust for the customer'],['Leads qualificados','Qualified leads']]},
    {n:['SEO Local','Local SEO'],i:[['Melhor posicionamento','Better ranking'],['Mais tráfego orgânico','More organic traffic'],['Autoridade no seu mercado','Authority in your market']]},
    {n:['Criação de sites e landing pages','Website and landing page creation'],i:[['Design moderno e responsivo','Modern, responsive design'],['Foco em conversão','Conversion focus'],['Sites e páginas que vendem','Sites and pages that sell']]},
    {n:['Gestão de redes sociais','Social media management'],i:[['Instagram e Facebook','Instagram and Facebook'],['Conteúdo estratégico','Strategic content'],['Engajamento real','Real engagement']]},
    {n:['Meta Ads','Meta Ads'],i:[['Anúncios no Instagram e Facebook','Instagram and Facebook ads'],['Público certo','The right audience'],['Mais leads e vendas','More leads and sales']]},
    {n:['Artes e design','Art and design'],i:[['Posts, banners e flyers','Posts, banners and flyers'],['Identidade visual','Visual identity'],['Sua marca mais profissional','A more professional brand']]},
    {n:['Edição profissional de vídeos','Professional video editing'],i:[['Vídeos para redes sociais','Videos for social media'],['Anúncios e comerciais','Ads and commercials'],['Mais engajamento e conversão','More engagement and conversion']]},
    {n:['Imagens com IA','AI images'],i:[['Artes e imagens personalizadas','Custom art and images'],['Alta qualidade','High quality'],['Mais criatividade para sua marca','More creativity for your brand']]},
    {n:['Textos com IA','AI copywriting'],i:[['Conteúdos otimizados','Optimized content'],['Mais atratividade e engajamento','More appeal and engagement'],['Comunicação estratégica','Strategic communication']]}
  ];
  var svc = $('#svc');
  function renderServices(){
    var open = svc.querySelector('.row.open'), oi = open ? [].indexOf.call(svc.children, open) : -1;
    svc.innerHTML = services.map(function(s,i){
      var on = i===oi;
      return '<div class="row'+(on?' open':'')+'"><button type="button" aria-expanded="'+on+'" aria-controls="p'+i+'"><h3>'+L(s.n[0],s.n[1])+'</h3><span class="plus" aria-hidden="true"></span></button>'
        + '<div class="panel" id="p'+i+'" role="region"><div><ul>'+s.i.map(function(x){return '<li>'+L(x[0],x[1])+'</li>'}).join('')+'</ul></div></div></div>';
    }).join('');
  }
  renderServices();
  svc.addEventListener('click', function(e){
    var b = e.target.closest('button'); if(!b) return;
    var row = b.parentElement, open = !row.classList.contains('open');
    svc.querySelectorAll('.row.open').forEach(function(r){ r.classList.remove('open'); r.querySelector('button').setAttribute('aria-expanded','false'); });
    if(open){ row.classList.add('open'); b.setAttribute('aria-expanded','true'); }
  });
  svc.addEventListener('pointermove', function(e){
    var row = e.target.closest('.row'); if(!row) return;
    var r = row.getBoundingClientRect();
    row.style.setProperty('--mx', (e.clientX-r.left)+'px');
    row.style.setProperty('--my', (e.clientY-r.top)+'px');
  });

  /* marquee */
  function renderMarquee(){
    var html = services.map(function(x){return '<span>'+L(x.n[0],x.n[1])+'</span>'}).join('');
    $('#mq').innerHTML = html + html;
  }
  renderMarquee();

  /* reveal */
  var io = new IntersectionObserver(function(es){
    es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:.15});
  document.querySelectorAll('.reveal, .google-card, .lp-mock').forEach(function(el){ io.observe(el); });

  /* AI chat: types once when visible */
  var chat = $('#chat'), chatDone = false;
  function msgsNow(){ return [
    ['u', L('Escreva uma postagem para o Google Meu Negócio de uma desentupidora que atende 24 horas.','Write a Google Business Profile post for a drain cleaning company that works 24 hours.')],
    ['a', '<small>'+L('Texto criado com IA','Text created with AI')+'</small>'+L('Entupimento fora de hora? Atendemos 24 horas, inclusive aos domingos. Chame no WhatsApp, descreva o problema e receba a visita de um técnico ainda hoje.','Clogged drain at odd hours? We are available 24 hours, Sundays included. Message us on WhatsApp, describe the problem and get a technician visit today.')]
  ]; }
  function runChat(){
    if(chatDone) return; chatDone = true;
    msgsNow().forEach(function(m,i){
      var b = document.createElement('div'); b.className = 'bubble ' + m[0]; b.style.display = 'none'; b.innerHTML = m[1]; chat.appendChild(b);
      setTimeout(function(){ b.style.display = 'block'; if(!reduce) b.animate([{opacity:0,transform:'translateY(8px)'},{opacity:1,transform:'none'}],{duration:450,easing:'ease-out'}); }, reduce ? 0 : 500 + i*1500);
    });
  }
  function renderChat(){
    if(!chatDone) return;
    chat.innerHTML = '';
    msgsNow().forEach(function(m){ var b = document.createElement('div'); b.className = 'bubble ' + m[0]; b.innerHTML = m[1]; chat.appendChild(b); });
  }
  new IntersectionObserver(function(es,o){ if(es[0].isIntersecting){ runChat(); o.disconnect(); } },{threshold:.35}).observe(chat);

  /* hero: search simulation (the one orchestrated moment) */
  var list = $('#list'), qEl = $('#q'), stateEl = $('#state'), replay = $('#replay');
  var H = 84, GAP = 10, QUERY = '';
  var rows = [], els = [];
  function buildRows(){
    QUERY = L('desentupidora perto de mim','drain cleaning near me');
    rows = [
      {n:L('Hidráulica Silva','Silva Plumbing'), fill:92, rev:L('4,6 (213)','4.6 (213)'), sub:L('Aberto agora','Open now')},
      {n:L('Desentupidora Rápida','Quick Drain Cleaning'), fill:84, rev:L('4,2 (98)','4.2 (98)'), sub:L('Fecha às 18h','Closes at 6 pm')},
      {n:L('Casa Limpa Serviços','Clean House Services'), fill:76, rev:L('3,8 (41)','3.8 (41)'), sub:L('Aberto agora','Open now')},
      {n:L('Sua empresa','Your business'), fill:36, rev:L('1,8 (3)','1.8 (3)'), sub:L('Fechado','Closed'), me:true}
    ];
    list.innerHTML = rows.map(function(r,i){
      return '<div class="res'+(r.me?' me':'')+'" data-i="'+i+'"><span class="pin"></span><div class="info"><div class="name">'+r.n+'</div><div class="sub"><span class="stars" style="--fill:'+r.fill+'%"><i style="width:'+r.fill+'%"></i></span><span class="rv">'+r.rev+'</span><span class="st">'+r.sub+'</span></div></div>'+(r.me?'<span class="tag hide">'+L('1º no mapa','#1 on the map')+'</span>':'')+'</div>';
    }).join('');
    els = list.querySelectorAll('.res');
    stateEl.textContent = L('Antes da otimização','Before optimization');
  }
  buildRows();
  function place(order){
    els.forEach(function(el,i){
      var pos = order[i];
      el.style.transform = 'translateY('+(pos*(H+GAP))+'px)';
      el.querySelector('.pin').textContent = pos+1;
    });
  }
  function setMe(top){
    var me = els[3], r = rows[3];
    me.classList.toggle('is-top', top);
    me.querySelector('.stars').style.setProperty('--fill', (top?100:r.fill)+'%');
    me.querySelector('.stars i').style.width = (top?100:r.fill)+'%';
    me.querySelector('.rv').textContent = top ? L('5,0 (87)','5.0 (87)') : r.rev;
    me.querySelector('.st').textContent = top ? L('Aberto agora','Open now') : r.sub;
  }
  var timers = [];
  function later(fn,ms){ timers.push(setTimeout(fn,ms)); }
  function play(){
    timers.forEach(clearTimeout); timers = [];
    qEl.textContent = ''; stateEl.textContent = L('Antes da otimização','Before optimization');
    setMe(false);
    list.querySelectorAll('.res').forEach(function(e){e.style.transitionDuration='0s'});
    place([0,1,2,3]);
    requestAnimationFrame(function(){ requestAnimationFrame(function(){ list.querySelectorAll('.res').forEach(function(e){e.style.transitionDuration=''}); }); });
    if(reduce){ qEl.textContent = QUERY; stateEl.textContent = L('Depois da otimização','After optimization'); setMe(true); place([1,2,3,0]); return; }
    var i = 0;
    (function type(){
      if(i <= QUERY.length){ qEl.textContent = QUERY.slice(0,i++); later(type, 55); }
      else {
        later(function(){ stateEl.textContent = L('Otimizando perfil, avaliações e anúncios','Optimizing profile, reviews and ads'); }, 700);
        later(function(){ place([1,2,3,0]); setMe(true); stateEl.textContent = L('Depois da otimização','After optimization'); }, 2200);
      }
    })();
  }
  place([0,1,2,3]); qEl.textContent = QUERY.slice(0,0);
  var started = false;
  new IntersectionObserver(function(es){ if(es[0].isIntersecting && !started){ started = true; later(play, 1100); } },{threshold:.3}).observe($('#serp'));
  replay.addEventListener('click', play);
  function rebuildSerp(){ buildRows(); if(started){ play(); } else { place([0,1,2,3]); qEl.textContent = ''; } }

  /* hero background: connected points that lean toward the pointer */
  var cv = $('#net'), cx = cv.getContext('2d'), pts = [], mouse = {x:-999,y:-999}, W=0, Hh=0, dpr = Math.min(devicePixelRatio||1,2), live = true;
  function size(){
    var r = cv.getBoundingClientRect(); W = r.width; Hh = r.height;
    cv.width = W*dpr; cv.height = Hh*dpr; cx.setTransform(dpr,0,0,dpr,0,0);
    var n = Math.round(Math.min(90, W*Hh/16000));
    pts = []; for(var i=0;i<n;i++) pts.push({x:Math.random()*W,y:Math.random()*Hh,vx:(Math.random()-.5)*.25,vy:(Math.random()-.5)*.25});
  }
  size(); addEventListener('resize', size);
  addEventListener('pointermove', function(e){ var r = cv.getBoundingClientRect(); mouse.x = e.clientX-r.left; mouse.y = e.clientY-r.top; }, {passive:true});
  new IntersectionObserver(function(es){ live = es[0].isIntersecting; if(live && !reduce) frame(); }).observe(cv);
  function frame(){
    if(!live) return;
    cx.clearRect(0,0,W,Hh);
    for(var i=0;i<pts.length;i++){
      var p = pts[i];
      p.x += p.vx; p.y += p.vy;
      if(p.x<0||p.x>W) p.vx*=-1; if(p.y<0||p.y>Hh) p.vy*=-1;
      var dx = mouse.x-p.x, dy = mouse.y-p.y, d = Math.hypot(dx,dy);
      if(d<160){ p.x += dx*.004; p.y += dy*.004; }
      var lt = root.getAttribute('data-theme')==='light';
      cx.fillStyle = d<160 ? (lt ? 'rgba(217,164,0,.95)' : 'rgba(255,210,63,.9)') : (lt ? 'rgba(13,27,42,.32)' : 'rgba(169,184,200,.55)');
      cx.beginPath(); cx.arc(p.x,p.y,d<160?2.2:1.6,0,6.283); cx.fill();
      for(var j=i+1;j<pts.length;j++){
        var q = pts[j], l = Math.hypot(p.x-q.x,p.y-q.y);
        if(l<110){ cx.strokeStyle = (lt ? 'rgba(42,125,225,' : 'rgba(78,161,255,')+((lt?0.3:0.22)*(1-l/110))+')'; cx.lineWidth = 1; cx.beginPath(); cx.moveTo(p.x,p.y); cx.lineTo(q.x,q.y); cx.stroke(); }
      }
    }
    if(!reduce) requestAnimationFrame(frame);
  }
  frame();

  /* examples: 3D carousel (edit this list; put images in the img folder) */
  var EXAMPLES = [
    {title:'Landing page para prestador de serviço', titleEn:'Landing page for a service provider', type:'Landing page', typeEn:'Landing page', img:'img/site-1', url:''},
    {title:'Site institucional para empresa local', titleEn:'Corporate website for a local business', type:'Site institucional', typeEn:'Corporate website', img:'img/site-2', url:''},
    {title:'Página de orçamento com WhatsApp', titleEn:'Quote page with WhatsApp', type:'Landing page', typeEn:'Landing page', img:'img/site-3', url:''},
    {title:'Site para clínica e consultório', titleEn:'Website for a clinic or practice', type:'Site institucional', typeEn:'Corporate website', img:'img/site-4', url:''},
    {title:'Página para anúncios no Google', titleEn:'Landing page for Google ads', type:'Landing page', typeEn:'Landing page', img:'img/site-5', url:''},
    {title:'Site para loja e comércio', titleEn:'Website for a store', type:'Site institucional', typeEn:'Corporate website', img:'img/site-6', url:''},
    {title:'Portfólio de serviços e obras', titleEn:'Portfolio of services and projects', type:'Site de portfólio', typeEn:'Portfolio website', img:'img/site-7', url:''}
  ];
  var PAL = [['#ffd23f','#14263a'],['#4ea1ff','#0d1b2a'],['#5fd39a','#10231f'],['#ff8a65','#2a1a16'],['#b58cff','#1a1430'],['#3dd6d0','#0e2429'],['#e8eef5','#1e2a38']];
  var stage = $('#xs'), box = $('#xsCards'), N = EXAMPLES.length, act = 0, cards = [], prevPos = [];
  var capT = $('#xsTitle'), capY = $('#xsType'), pager = $('#xsPager');
  function placeholder(i){
    var c = PAL[i % PAL.length];
    return '<div class="ph" style="--c1:'+c[0]+';--c2:'+c[1]+'"><div class="ph-bar"><i></i><i></i><i></i></div><div class="ph-hero"><b></b><b></b><span></span></div><div class="ph-grid"><i></i><i></i><i></i></div><small>'+L('Imagem do projeto ','Project image ')+(i+1)+'</small></div>';
  }
  EXAMPLES.forEach(function(ex,i){
    var b = document.createElement('button'); b.type='button'; b.className='xcard'; b.tabIndex=-1;
    var t = document.createElement('div'); t.className='tilt'; t.innerHTML = placeholder(i);
    if(ex.img){
      /* tries img/site-N.webp, .jpg, .jpeg, .png in this order; keeps the placeholder if none exists */
      (function(base,k){
        var exts = ['.webp','.jpg','.jpeg','.png'], im = new Image();
        im.alt=''; im.decoding='async'; im.draggable=false;
        im.onload = function(){ t.innerHTML=''; t.appendChild(im); };
        im.onerror = function(){ if(++k < exts.length) im.src = base + exts[k]; };
        im.src = base + exts[0];
      })(ex.img,0);
    }
    b.appendChild(t); box.appendChild(b); cards.push(b); prevPos.push(0);
    var pb = document.createElement('button'); pb.type='button'; pb.textContent=i+1; 
    pb.addEventListener('click', function(){ go(i); }); pager.appendChild(pb);
  });
  function wrap(d){ var h=N/2; while(d>=h) d-=N; while(d<-h) d+=N; return d; }
  function render(frac, instant){
    var mobile = innerWidth <= 900, cw = cards[0].offsetWidth, k1 = mobile?.74:.78, k2 = mobile?.38:.5, vis = mobile?1.25:3.25;
    cards.forEach(function(el,i){
      var pos = wrap(i - act + (frac||0)), a = Math.abs(pos), sg = pos<0?-1:1, a1 = Math.min(a,1), ax = Math.max(0,Math.min(a,3)-1), ex = Math.max(0,a-1);
      var x = sg*(a1*cw*k1 + ex*cw*k2), z = 60 - a1*150 - ex*60, rot = -sg*(a1*40 + ax*4), sc = 1.12 - a1*.18;
      var op = a<=vis ? 1 : Math.max(0, 1-(a-vis)*1.4);
      var jump = Math.abs(pos - prevPos[i]) > N/2 - .5;
      if(jump || instant){ el.style.transition='none'; }
      el.style.transform = 'translate(-50%,-50%) translate3d('+x.toFixed(1)+'px,0,'+z.toFixed(1)+'px) rotateY('+rot.toFixed(1)+'deg) scale('+sc.toFixed(3)+')';
      el.style.opacity = op.toFixed(2);
      el.style.filter = 'brightness('+(1-a1*.4).toFixed(2)+')';
      el.style.zIndex = String(100 - Math.round(a*10));
      el.style.pointerEvents = op<.2 ? 'none' : '';
      el.classList.toggle('is-active', Math.round(pos)===0 && a<.5);
      if(jump || instant){ void el.offsetWidth; el.style.transition=''; }
      prevPos[i] = pos;
    });
  }
  function caption(){
    var ex = EXAMPLES[act]; capT.textContent = L(ex.title,ex.titleEn); capY.textContent = L(ex.type,ex.typeEn);
    pager.querySelectorAll('button').forEach(function(b,i){ if(i===act) b.setAttribute('aria-current','true'); else b.removeAttribute('aria-current'); });
  }
  function refreshCarousel(){
    cards.forEach(function(c,i){
      c.setAttribute('aria-label', L('Exemplo ','Example ')+(i+1)+L(' de ',' of ')+N+': '+L(EXAMPLES[i].title,EXAMPLES[i].titleEn));
      var sm = c.querySelector('.ph small'); if(sm) sm.textContent = L('Imagem do projeto ','Project image ')+(i+1);
    });
    pager.querySelectorAll('button').forEach(function(b,i){ b.setAttribute('aria-label', L('Ir para o exemplo ','Go to example ')+(i+1)); });
    caption();
  }
  function go(i){ act = ((i % N) + N) % N; render(0); caption(); }
  render(0,true); refreshCarousel();
  $('#xsPrev').addEventListener('click', function(){ go(act-1); restart(); });
  $('#xsNext').addEventListener('click', function(){ go(act+1); restart(); });
  stage.addEventListener('keydown', function(e){
    if(e.key==='ArrowLeft'){ e.preventDefault(); go(act-1); restart(); }
    if(e.key==='ArrowRight'){ e.preventDefault(); go(act+1); restart(); }
  });
  /* drag / swipe with live follow */
  var sx=0, dx=0, down=false, moved=false, pid=null;
  stage.addEventListener('pointerdown', function(e){
    if(e.target.closest('.xs-nav')) return;
    down=true; moved=false; sx=e.clientX; dx=0; pid=e.pointerId;
  });
  stage.addEventListener('pointermove', function(e){
    if(down){
      dx = e.clientX - sx;
      if(!moved && Math.abs(dx)>6){ moved=true; stage.classList.add('drag'); try{stage.setPointerCapture(pid);}catch(_){} }
      if(moved){ var step = cards[0].offsetWidth*.7; render(Math.max(-1.2,Math.min(1.2,dx/step))); }
    } else if(fine && !reduce){
      var r = stage.getBoundingClientRect();
      var tx = ((e.clientX-r.left)/r.width-.5)*2, ty = ((e.clientY-r.top)/r.height-.5)*2;
      cards[act].firstChild.style.setProperty('--tx',tx.toFixed(2));
      cards[act].firstChild.style.setProperty('--ty',ty.toFixed(2));
    }
  });
  function endDrag(e){
    if(!down) return; down=false; stage.classList.remove('drag');
    try{stage.releasePointerCapture(pid);}catch(_){}
    if(moved){
      var step = cards[0].offsetWidth*.7, n = Math.round(-dx/step); if(n===0 && Math.abs(dx)>40) n = dx<0?1:-1;
      go(act+Math.max(-1,Math.min(1,n))); restart();
    }
  }
  stage.addEventListener('pointerup', endDrag); stage.addEventListener('pointercancel', endDrag);
  stage.addEventListener('pointerleave', function(){ cards.forEach(function(c){ c.firstChild.style.setProperty('--tx',0); c.firstChild.style.setProperty('--ty',0); }); });
  stage.addEventListener('click', function(e){
    if(moved){ moved=false; return; }
    var c = e.target.closest('.xcard'); if(!c) return;
    var i = cards.indexOf(c);
    if(i!==act){ go(i); restart(); }
    else if(EXAMPLES[i].url){ window.open(EXAMPLES[i].url,'_blank','noopener'); }
  });
  addEventListener('resize', function(){ render(0,true); });
  /* gentle autoplay: only while visible and untouched */
  var auto=null, seen=false, paused=false;
  function restart(){ clearInterval(auto); if(seen && !paused && !reduce) auto = setInterval(function(){ go(act+1); }, 4500); }
  new IntersectionObserver(function(es){ seen = es[0].isIntersecting; restart(); },{threshold:.4}).observe(stage);
  stage.addEventListener('pointerenter', function(){ paused=true; restart(); });
  stage.addEventListener('pointerleave', function(){ paused=false; restart(); });
  stage.addEventListener('focusin', function(){ paused=true; restart(); });
  stage.addEventListener('focusout', function(){ paused=false; restart(); });

  /* desktop only: cursor ring + magnetic buttons */
  if(fine && !reduce){
    var cur = $('#cur'), dot = $('#dot'), tx=0, ty=0, x=0, y=0;
    addEventListener('pointermove', function(e){ tx=e.clientX; ty=e.clientY; dot.style.transform='translate('+(tx-3)+'px,'+(ty-3)+'px)'; }, {passive:true});
    (function loop(){ x += (tx-x)*.18; y += (ty-y)*.18; cur.style.transform='translate('+(x-17)+'px,'+(y-17)+'px)'; requestAnimationFrame(loop); })();
    document.addEventListener('pointerover', function(e){ cur.classList.toggle('big', !!e.target.closest('a,button')); });
    document.querySelectorAll('[data-magnetic]').forEach(function(b){
      b.addEventListener('pointermove', function(e){ var r=b.getBoundingClientRect(); b.style.transform='translate('+((e.clientX-r.left-r.width/2)*.18)+'px,'+((e.clientY-r.top-r.height/2)*.3)+'px)'; });
      b.addEventListener('pointerleave', function(){ b.style.transform=''; });
    });
  }
  applyLang();
})();
