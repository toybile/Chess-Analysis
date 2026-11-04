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
 languagePicker.refresh();$('#ui-zoom').value=state.zoom;$('#zoom-value').value=state.zoom+'%';$('#zoom-out').disabled=state.zoom<=70;$('#zoom-in').disabled=state.zoom>=150;
 translateDOM();
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
// Shared window owns gesture.
const flags = {
  pt: '<svg viewBox="0 0 30 20" aria-hidden="true" style="stroke:none;width:26px;height:18px"><rect width="30" height="20" rx="2" fill="#229e45"/><path d="M15 2 28 10 15 18 2 10Z" fill="#ffdf42"/><circle cx="15" cy="10" r="5" fill="#24459b"/><path d="M10.5 8.5q5-1 9 3" fill="none" stroke="#fff" stroke-width="1"/></svg>',
  en: '<svg viewBox="0 0 30 20" aria-hidden="true" style="stroke:none;width:26px;height:18px"><rect width="30" height="20" rx="2" fill="#243b79"/><path d="m0 0 30 20M30 0 0 20" stroke="#fff" stroke-width="5"/><path d="m0 0 30 20M30 0 0 20" stroke="#ce3545" stroke-width="2"/><path d="M15 0v20M0 10h30" stroke="#fff" stroke-width="7"/><path d="M15 0v20M0 10h30" stroke="#ce3545" stroke-width="4"/></svg>',
};
const languagePicker=window.ToybileLanguagePicker(document.getElementById('settings-language'),flags,()=>language,code=>{language=code;try{localStorage.setItem('chess-atlas-language',language);}catch{}applyCatalogLanguage();renderOverview();render();translateDOM();apply();});
window.ToybileChessAppearance={get:()=>({...state,language}),scheme,extraTheme:()=>{const p=appearancePalettes.find(p=>p.id==='atlas');return{...p,labelEn:'Atlas',light:{...p.light,id:'atlas-light',scheme:'light',family:'atlas'},dark:{...p.dark,id:'atlas-dark',scheme:'dark',family:'atlas'}};},apply:s=>{Object.assign(state,s);save();apply();},setZoom:changeZoom,setLanguage:code=>{language=code;try{localStorage.setItem('chess-atlas-language',code);}catch{}applyCatalogLanguage();renderOverview();render();translateDOM();apply();}};
apply();
})();
