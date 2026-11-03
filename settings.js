(()=>{
'use strict';
const root=document.documentElement,key='chess-atlas-appearance-v1',system=matchMedia('(prefers-color-scheme: dark)'),reducedGlass=matchMedia('(prefers-reduced-transparency: reduce)'),dialog=document.getElementById('themes-dialog');
let state={family:'atlas',mode:'system',background:'solid',zoom:100};
try{const s=JSON.parse(localStorage.getItem(key)||'{}');if(s&&typeof s==='object'){if(appearancePalettes.some(p=>p.id===s.family))state.family=s.family;if(['system','light','dark'].includes(s.mode))state.mode=s.mode;if(['solid','glass'].includes(s.background))state.background=s.background;if(Number.isFinite(s.zoom))state.zoom=Math.max(70,Math.min(150,s.zoom));}}catch{}
function save(){try{localStorage.setItem(key,JSON.stringify(state));}catch{}}
function scheme(){return state.mode==='system'?(system.matches?'dark':'light'):state.mode;}
function responsive(){root.dataset.layout=innerWidth/(state.zoom/100)<760?'mobile':innerWidth/(state.zoom/100)<1190?'compact':'wide';}
function apply(){
 const theme=appearancePalettes.find(p=>p.id===state.family)[scheme()];root.dataset.theme=scheme();root.style.colorScheme=scheme();root.dataset.palette=state.family;root.dataset.background=reducedGlass.matches?'solid':state.background;
 const vars={bg:theme.canvas,surface:theme.paper,ink:theme.ink,muted:theme.quiet,line:theme.edge,pale:theme.soft,green:theme.accent,accent:state.family==='atlas'?(scheme()==='dark'?'#e29b7b':'#b64527'):theme.accent};for(const [k,v]of Object.entries(vars))root.style.setProperty('--'+k,v);
 root.style.zoom=String(state.zoom/100);root.style.setProperty('--interface-zoom',state.zoom/100);responsive();
 document.querySelector('meta[name="theme-color"]').content=theme.canvas;
 document.querySelectorAll('[data-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mode===state.mode)));
 document.querySelectorAll('[data-palette]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.palette===state.family)));
 document.querySelectorAll('[data-background]').forEach(b=>{b.setAttribute('aria-pressed',String(b.dataset.background===(reducedGlass.matches?'solid':state.background)));b.disabled=b.dataset.background==='glass'&&reducedGlass.matches;});
 $('#surface-hint').textContent=reducedGlass.matches?'A preferência do sistema reduz a transparência.':'Luz e cores suaves no fundo e sob os cartões.';
 $('#ui-zoom').value=state.zoom;$('#zoom-value').value=state.zoom+'%';$('#zoom-out').disabled=state.zoom<=70;$('#zoom-in').disabled=state.zoom>=150;
 document.querySelectorAll('[data-language]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.language===language)));translateDOM();
}
$('#theme-grid').innerHTML=appearancePalettes.map(p=>`<button type="button" data-palette="${p.id}" class="theme-option" aria-pressed="false"><span class="palette-preview" aria-hidden="true" style="--preview-bg:${p.light.canvas};--preview-paper:${p.light.paper};--preview-accent:${p.light.accent};--preview-dark:${p.dark.canvas}"><i></i><b></b><em></em></span><span>${p.name}</span><span class="palette-check" aria-hidden="true">✓</span></button>`).join('');
function changeZoom(v){state.zoom=Math.max(70,Math.min(150,Math.round(v/5)*5));save();apply();}
function open(){if(document.querySelector('dialog[open]'))return;dialog.showModal();}
$('#appearance-open').addEventListener('click',open);$('#settings-done').addEventListener('click',()=>dialog.close());
document.querySelectorAll('[data-mode]').forEach(b=>b.addEventListener('click',()=>{state.mode=b.dataset.mode;save();apply();}));
document.querySelectorAll('[data-palette]').forEach(b=>b.addEventListener('click',()=>{state.family=b.dataset.palette;save();apply();}));
document.querySelectorAll('[data-background]').forEach(b=>b.addEventListener('click',()=>{state.background=b.dataset.background;save();apply();}));
document.querySelectorAll('[data-language]').forEach(b=>b.addEventListener('click',()=>{language=b.dataset.language;try{localStorage.setItem('chess-atlas-language',language);}catch{}applyCatalogLanguage();renderOverview();render();translateDOM();apply();}));
$('#ui-zoom').addEventListener('input',e=>changeZoom(Number(e.target.value)));$('#zoom-out').addEventListener('click',()=>changeZoom(state.zoom-5));$('#zoom-in').addEventListener('click',()=>changeZoom(state.zoom+5));$('#zoom-reset').addEventListener('click',()=>changeZoom(100));
$('#appearance-reset').addEventListener('click',()=>{state={family:'atlas',mode:'system',background:'solid',zoom:100};language='en';save();try{localStorage.removeItem('chess-atlas-language');}catch{}applyCatalogLanguage();renderOverview();render();apply();});
system.addEventListener('change',apply);reducedGlass.addEventListener('change',apply);addEventListener('resize',responsive);
// Match the Portfolio: hold toggles display; tap + hold opens settings.
let lastTap=null,hold=null,timer=null;
const isBackground=e=>e.target instanceof Element&&!document.querySelector('dialog[open]')&&!e.target.closest('button,a,input,select,label,textarea,article,h1,h2,h3,p,dialog,[contenteditable]')&&!!e.target.closest('body,main,section,aside,header');
const feedback=document.createElement('div');feedback.className='hold-feedback';feedback.setAttribute('aria-hidden','true');document.body.append(feedback);
function cancel(){clearTimeout(timer);hold=null;feedback.classList.remove('visible');}
document.addEventListener('pointerdown',e=>{if(!e.isPrimary||e.button!==0||!isBackground(e)){lastTap=null;return;}const now=performance.now(),second=lastTap&&now-lastTap.time<420&&Math.hypot(e.clientX-lastTap.x,e.clientY-lastTap.y)<32;hold={id:e.pointerId,x:e.clientX,y:e.clientY,time:now,second,done:false};lastTap=null;feedback.textContent=second?'⚙':'◐';feedback.style.left=`${e.clientX/(state.zoom/100)}px`;feedback.style.top=`${e.clientY/(state.zoom/100)}px`;feedback.classList.add('visible');timer=setTimeout(()=>{if(!hold)return;hold.done=true;feedback.classList.remove('visible');if(second)open();else{state.mode=scheme()==='dark'?'light':'dark';save();apply();}},500);},{passive:true});
document.addEventListener('pointermove',e=>{if(hold&&Math.hypot(e.clientX-hold.x,e.clientY-hold.y)>14){cancel();lastTap=null;}},{passive:true});
document.addEventListener('pointerup',e=>{if(!hold||e.pointerId!==hold.id)return;const h=hold;if(!h.done&&!h.second&&performance.now()-h.time<300)lastTap={x:h.x,y:h.y,time:performance.now()};cancel();},{passive:true});
document.addEventListener('pointercancel',()=>{cancel();lastTap=null;},{passive:true});addEventListener('blur',()=>{cancel();lastTap=null;});document.addEventListener('scroll',()=>{if(hold&&!hold.done){cancel();lastTap=null;}},{capture:true,passive:true});
document.addEventListener('keydown',e=>{if(e.altKey&&!e.ctrlKey&&!e.metaKey&&e.code==='KeyT'&&!e.repeat){e.preventDefault();cancel();open();}});
apply();
})();
