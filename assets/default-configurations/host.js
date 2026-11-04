window.ToybileSettingsSite="chess";
/* Site-specific state remains owned by each app; the shared window owns its controls. */
(()=>{'use strict';
const site=document.currentScript.dataset.site,native=window.SiteAppearance,chess=window.ToybileChessAppearance,legacy=window.ToybileSignatureConfig||{},language=window.ToybileHostLanguage;
const saved=key=>{try{return JSON.parse(localStorage.getItem(key)||'{}')||{};}catch{return {};}};
const originalStyles=new Map();
function applyVariables(p,restore){for(const target of [document.documentElement,document.body])for(const [name,value]of Object.entries({bg:p.canvas,canvas:p.canvas,card:p.paper,panel:p.paper,surface:p.paper,ink:p.ink,text:p.ink,tx:p.ink,muted:p.quiet,mu:p.quiet,line:p.edge,edge:p.edge,border:p.edge,ln:p.edge,soft:p.soft,pale:p.soft,accent:p.accent,a:p.accent,green:p.accent})){const key=(target===document.body?'body:':'html:')+name;if(!originalStyles.has(key))originalStyles.set(key,{value:target.style.getPropertyValue('--'+name),priority:target.style.getPropertyPriority('--'+name)});const old=originalStyles.get(key);if(restore){if(old.value)target.style.setProperty('--'+name,old.value,old.priority);else target.style.removeProperty('--'+name);}else target.style.setProperty('--'+name,value);}}
window.ToybileSettingsHost={
 extraTheme:chess?()=>chess.extraTheme():null,
 getPreferences(families){let family=0,mode='auto',dark=matchMedia('(prefers-color-scheme:dark)').matches,glass=false;
  if(native){family=Math.max(0,native.families.findIndex(f=>f.id===native.family));mode=native.mode==='system'?'auto':native.mode;dark=native.scheme()==='dark';glass=document.documentElement.dataset.surfaceMode==='glass';}
  else if(chess){const s=chess.get();family=Math.max(0,families.findIndex(f=>f.id===s.family));mode=s.mode==='system'?'auto':s.mode;dark=chess.scheme()==='dark';glass=s.background==='glass';}
  else{const s=saved('toybile-settings-appearance-v2:'+location.pathname);family=Math.max(0,families.findIndex(f=>f.id===s.family));const nativeScheme=legacy.getScheme?.()||document.documentElement.dataset.theme;mode=s.mode==='system'?'auto':s.mode==='light'||s.mode==='dark'?s.mode:['light','dark'].includes(nativeScheme)?nativeScheme:'auto';dark=nativeScheme==='dark';glass=document.documentElement.dataset.toybileGlass==='on';}
  return{theme:families[family][dark?'dark':'light'].id,themeMode:mode,backgroundTranslucency:glass,language:language?.get()||chess?.get().language||'en'};
 },
 setLanguage(code){if(language)language.set(code);else chess?.setLanguage(code);},
 applyAppearance(ui,family,families){const dark=families.some(f=>f.dark.id===ui.theme),scheme=dark?'dark':'light',mode=ui.themeMode==='auto'?'system':ui.themeMode,p=family[scheme];
  if(native){const i=families.indexOf(family);native.family=native.families[i]?.id||native.families[0].id;native.mode=mode;native.persist();native.apply();const surface=document.querySelector('#themes-dialog .surface-control');if(surface&&surface.getAttribute('aria-checked')!==String(!!ui.backgroundTranslucency))surface.click();}
  else if(chess)chess.apply({family:family.id,mode,background:ui.backgroundTranslucency?'glass':'solid'});
  else{legacy.setScheme?.(scheme,mode);applyVariables(p,family===families[0]&&!legacy.forcePalette);document.documentElement.dataset.toybileGlass=ui.backgroundTranslucency?'on':'off';document.documentElement.style.setProperty('--toybile-accent',p.accent);}
 },
 extend(root,api){if(site==='portfolio'){window.PortfolioAudio?.mountSettings?.(root);root.querySelector('#settings-default').addEventListener('click',()=>window.PortfolioAudio?.resetSettings?.());}
  if(chess){const panel=document.createElement('section');panel.className='hy-setting shared-zoom-setting';panel.innerHTML='<h3 class="hy-theme-group-title">Interface scale</h3><div class="shared-zoom-controls"><button class="hy-button" id="shared-zoom-out" aria-label="Zoom out">−</button><input id="shared-zoom" type="range" min="70" max="150" step="5" aria-label="Interface scale"><button class="hy-button" id="shared-zoom-in" aria-label="Zoom in">+</button><output id="shared-zoom-value"></output></div><button class="hy-button" id="shared-zoom-reset">Reset to 100%</button>';root.querySelector('#cursor-settings').before(panel);
   api.addTranslations({'Escala da interface':'Interface scale','Diminuir zoom':'Zoom out','Aumentar zoom':'Zoom in','Restaurar para 100%':'Reset to 100%'});
   const update=()=>{const zoom=chess.get().zoom;panel.querySelector('input').value=zoom;panel.querySelector('output').value=zoom+'%';root.style.setProperty('--host-zoom',zoom/100);};
   const set=value=>{chess.setZoom(value);update();};panel.querySelector('input').oninput=e=>set(Number(e.target.value));panel.querySelector('#shared-zoom-out').onclick=()=>set(chess.get().zoom-5);panel.querySelector('#shared-zoom-in').onclick=()=>set(chess.get().zoom+5);panel.querySelector('#shared-zoom-reset').onclick=()=>set(100);root.querySelector('#settings-default').addEventListener('click',()=>set(100));update();
  }
 }
};
})();
