/* Shared approved Logic Editor appearance window, locally bundled from private source. */
(()=>{'use strict';const hostSite=window.ToybileSettingsSite;const realDocument=window.document,host=window.ToybileSettingsHost||{},baseURL=new URL('.',realDocument.currentScript.src);if(realDocument.getElementById('toybile-settings-host'))return;const mount=realDocument.createElement('div');mount.id='toybile-settings-host';mount.style.cssText='position:fixed;inset:0;pointer-events:none;z-index:1000';realDocument.body.append(mount);const shadow=mount.attachShadow({mode:'open'}),sheet=realDocument.createElement('link');sheet.rel='stylesheet';sheet.href=new URL('panel.css?v=shared1',baseURL).href;shadow.append(sheet);const template=realDocument.createElement('template');template.innerHTML="<div id=\"lp-hybrid\" class=\"default-configurations-root\" data-theme=\"light\" data-palette=\"original\"><div popover=\"\" id=\"editor-settings\" class=\"hy-size-popover\" aria-labelledby=\"settings-title\" role=\"dialog\"><div class=\"hy-settings-head\"><div class=\"hy-settings-identity\"><span class=\"hy-settings-identity-icon\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M4 7h16M4 17h16M8 4v6M16 14v6\"></path></svg></span><h2 id=\"settings-title\">Settings</h2></div>\n            <div class=\"hy-settings-actions\"><button type=\"button\" class=\"hy-button hy-icon-button hy-language\" id=\"settings-language\" aria-label=\"Idioma / Language\" data-hint-text=\"Idioma / Language\" popovertarget=\"site-language-picker\" aria-haspopup=\"menu\" aria-expanded=\"false\" data-language=\"en\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 5h12M9 2v3M5 5c1 5 4 8 8 10M13 5c-1 5-4 8-8 10m9 6 4-10 4 10m-6.5-4h5\"></path></svg></button><button type=\"button\" class=\"hy-button hy-icon-button hy-dialog-close\" popovertarget=\"editor-settings\" popovertargetaction=\"hide\" aria-label=\"Close settings\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m6 6 12 12M18 6 6 18\"></path></svg></button></div></div>\n            \n            \n            \n          <div class=\"hy-settings-body\"><nav class=\"hy-settings-tabs\" role=\"tablist\" aria-orientation=\"vertical\" aria-label=\"Settings sections\"><button type=\"button\" id=\"settings-appearance-tab\" role=\"tab\" aria-controls=\"settings-appearance\" aria-selected=\"true\" tabindex=\"0\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"8\"></circle><circle cx=\"9\" cy=\"9\" r=\"1\"></circle><circle cx=\"15\" cy=\"9\" r=\"1\"></circle><path d=\"M9 16h6\"></path></svg><span>Appearance</span></button></nav><div class=\"hy-settings-pages\"><section id=\"settings-appearance\" class=\"hy-settings-panel\" role=\"tabpanel\" aria-labelledby=\"settings-appearance-tab\"><fieldset class=\"hy-theme-choices\"><legend class=\"hy-settings-section-heading\"><button type=\"button\" class=\"hy-theme-section-toggle\" aria-controls=\"settings-theme-options\" aria-expanded=\"true\"><span>Themes</span><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"m9 5 7 7-7 7\"></path></svg></button><button type=\"button\" class=\"hy-icon-button hy-settings-info\" aria-label=\"Theme information\" title=\"Hold the background to switch light/dark. Tap, then hold to open settings.\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"9\"></circle><path d=\"M12 11v6M12 7h.01\"></path></svg></button></legend><div class=\"hy-theme-collapse\" id=\"settings-theme-options\" data-open=\"true\" aria-hidden=\"false\"><div class=\"hy-theme-collapse-inner\"><div class=\"hy-theme-options\"><h3 class=\"hy-theme-group-title\">Display mode</h3><div class=\"hy-theme-modes\" role=\"group\" aria-label=\"Display mode\"><button type=\"button\" class=\"hy-theme-mode\" data-theme-mode=\"auto\" aria-pressed=\"false\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"13\" rx=\"2\"></rect><path d=\"M8 21h8M12 17v4\"></path></svg><span>Automatic</span></button><button type=\"button\" class=\"hy-theme-mode\" data-theme-mode=\"light\" aria-pressed=\"true\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"4\"></circle><path d=\"M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5\"></path></svg><span>Light</span></button><button type=\"button\" class=\"hy-theme-mode\" data-theme-mode=\"dark\" aria-pressed=\"false\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z\"></path></svg><span>Dark</span></button></div><p class=\"hy-theme-mode-note\">Choose a palette below.</p><label class=\"hy-theme-translucency\"><span class=\"hy-theme-translucency-copy\"><strong>Translucent background</strong><span>Soft light and colors beneath the panels.</span></span><span class=\"hy-theme-translucency-status\">Off</span><input type=\"checkbox\" class=\"hy-theme-translucency-input\" role=\"switch\" aria-label=\"Translucent background\"></label><h3 class=\"hy-theme-group-title\">Themes</h3><div class=\"hy-theme-grid\"><button type=\"button\" class=\"hy-theme-option\" data-theme-family=\"original\" data-theme-value=\"light\" aria-pressed=\"true\"><span class=\"hy-theme-swatch\" aria-hidden=\"true\" style=\"background: rgb(243, 245, 248); border-color: rgb(233, 235, 239); --mini-paper: #f0f2f5; --mini-accent: #3d526e; --mini-muted: #626b76;\"><span class=\"hy-theme-mini-bar\"></span><span class=\"hy-theme-mini-side\"></span><span class=\"hy-theme-mini-line\"></span><span class=\"hy-theme-mini-line hy-theme-mini-short\"></span></span><span>Original</span></button><button type=\"button\" class=\"hy-theme-option\" data-theme-family=\"indigo\" data-theme-value=\"indigo-light\" aria-pressed=\"false\"><span class=\"hy-theme-swatch\" aria-hidden=\"true\" style=\"background: rgb(244, 244, 253); border-color: rgb(220, 223, 241); --mini-paper: #eef0fc; --mini-accent: #4c57c9; --mini-muted: #626b86;\"><span class=\"hy-theme-mini-bar\"></span><span class=\"hy-theme-mini-side\"></span><span class=\"hy-theme-mini-line\"></span><span class=\"hy-theme-mini-line hy-theme-mini-short\"></span></span><span>Indigo</span></button><button type=\"button\" class=\"hy-theme-option\" data-theme-family=\"petroleum\" data-theme-value=\"petroleum-light\" aria-pressed=\"false\"><span class=\"hy-theme-swatch\" aria-hidden=\"true\" style=\"background: rgb(232, 242, 241); border-color: rgb(196, 218, 216); --mini-paper: #dcecea; --mini-accent: #177a73; --mini-muted: #4c6c71;\"><span class=\"hy-theme-mini-bar\"></span><span class=\"hy-theme-mini-side\"></span><span class=\"hy-theme-mini-line\"></span><span class=\"hy-theme-mini-line hy-theme-mini-short\"></span></span><span>Petroleum and turquoise</span></button><button type=\"button\" class=\"hy-theme-option\" data-theme-family=\"graphite\" data-theme-value=\"graphite-light\" aria-pressed=\"false\"><span class=\"hy-theme-swatch\" aria-hidden=\"true\" style=\"background: rgb(242, 239, 233); border-color: rgb(221, 211, 194); --mini-paper: #eee5d4; --mini-accent: #856122; --mini-muted: #70634e;\"><span class=\"hy-theme-mini-bar\"></span><span class=\"hy-theme-mini-side\"></span><span class=\"hy-theme-mini-line\"></span><span class=\"hy-theme-mini-line hy-theme-mini-short\"></span></span><span>Graphite and amber</span></button><button type=\"button\" class=\"hy-theme-option\" data-theme-family=\"sand\" data-theme-value=\"sand\" aria-pressed=\"false\"><span class=\"hy-theme-swatch\" aria-hidden=\"true\" style=\"background: rgb(242, 234, 223); border-color: rgb(222, 212, 197); --mini-paper: #e8edf2; --mini-accent: #416b99; --mini-muted: #6b6861;\"><span class=\"hy-theme-mini-bar\"></span><span class=\"hy-theme-mini-side\"></span><span class=\"hy-theme-mini-line\"></span><span class=\"hy-theme-mini-line hy-theme-mini-short\"></span></span><span>Sand and blue</span></button><button type=\"button\" class=\"hy-theme-option\" data-theme-family=\"sage\" data-theme-value=\"sage\" aria-pressed=\"false\"><span class=\"hy-theme-swatch\" aria-hidden=\"true\" style=\"background: rgb(237, 242, 232); border-color: rgb(212, 222, 207); --mini-paper: #e5ecdf; --mini-accent: #55734a; --mini-muted: #5e6b5d;\"><span class=\"hy-theme-mini-bar\"></span><span class=\"hy-theme-mini-side\"></span><span class=\"hy-theme-mini-line\"></span><span class=\"hy-theme-mini-line hy-theme-mini-short\"></span></span><span>Sage and olive</span></button><button type=\"button\" class=\"hy-theme-option\" data-theme-family=\"rose\" data-theme-value=\"rose-light\" aria-pressed=\"false\"><span class=\"hy-theme-swatch\" aria-hidden=\"true\" style=\"background: rgb(247, 238, 241); border-color: rgb(234, 212, 222); --mini-paper: #f2e2e9; --mini-accent: #a34064; --mini-muted: #795d6a;\"><span class=\"hy-theme-mini-bar\"></span><span class=\"hy-theme-mini-side\"></span><span class=\"hy-theme-mini-line\"></span><span class=\"hy-theme-mini-line hy-theme-mini-short\"></span></span><span>Rose and wine</span></button><button type=\"button\" class=\"hy-theme-option\" data-theme-family=\"plum\" data-theme-value=\"plum-light\" aria-pressed=\"false\"><span class=\"hy-theme-swatch\" aria-hidden=\"true\" style=\"background: rgb(242, 238, 248); border-color: rgb(223, 212, 237); --mini-paper: #eae2f4; --mini-accent: #79509d; --mini-muted: #6f5e7d;\"><span class=\"hy-theme-mini-bar\"></span><span class=\"hy-theme-mini-side\"></span><span class=\"hy-theme-mini-line\"></span><span class=\"hy-theme-mini-line hy-theme-mini-short\"></span></span><span>Plum and lavender</span></button></div><div class=\"hy-theme-actions\"><button type=\"button\" class=\"hy-button hy-theme-reset\">Restore default</button></div></div></div></div></fieldset></section></div></div><footer class=\"hy-settings-footer\"><button type=\"button\" id=\"settings-default\" class=\"hy-button\" aria-label=\"Restore defaults\"><svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M3 11a9 9 0 1 1 2.7 7M3 4v7h7\"></path></svg><span>Restore defaults</span></button><span>Changes apply automatically</span></footer></div></div>";shadow.append(template.content);const globalStyle=realDocument.createElement('style');globalStyle.textContent="@media(hover:hover) and (pointer:fine){\r\nhtml[data-site-cursor=\"custom\"],html[data-site-cursor=\"custom\"] body,html[data-site-cursor=\"custom\"] body :where(*){cursor:var(--site-cursor),auto!important}\r\nhtml[data-site-cursor=\"custom\"]:active,html[data-site-cursor=\"custom\"]:active body,html[data-site-cursor=\"custom\"]:active body :where(*){cursor:var(--site-cursor-pressed),pointer!important}\r\nhtml[data-site-cursor=\"custom\"] body input,html[data-site-cursor=\"custom\"] body textarea,html[data-site-cursor=\"custom\"] body [contenteditable=\"true\"],html[data-site-cursor=\"custom\"] body [contenteditable=\"true\"] *{cursor:text!important}\r\nhtml[data-site-cursor=\"custom\"] body button:disabled,html[data-site-cursor=\"custom\"] body [aria-disabled=\"true\"]{cursor:not-allowed!important}\r\n}\r\n.cursor-size-row{display:flex;justify-content:space-between;gap:16px;margin:18px 0 10px;font-size:13px}\r\n#cursor-size{width:100%;accent-color:var(--accent,#8b80b0)}\r\n#cursor-settings:has(#cursor-system[aria-pressed=\"true\"]) .cursor-size-row{opacity:.5}\r\n\r\n#cursor-settings .mode-options{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:4px}\r\n#cursor-settings .mode-option{width:100%;min-width:0;justify-content:center}\r\n#cursor-size{display:block;appearance:none;-webkit-appearance:none;box-sizing:border-box;height:24px;margin:0;background:transparent;outline:none;padding:0}\r\n#cursor-size::-webkit-slider-runnable-track{height:5px;border-radius:99px;background:linear-gradient(to right,var(--accent,#a7a0ef) 0 var(--cursor-progress,40%),color-mix(in srgb,currentColor 15%,transparent) var(--cursor-progress,40%) 100%)}\r\n#cursor-size::-webkit-slider-thumb{appearance:none;-webkit-appearance:none;width:16px;height:16px;margin-top:-5.5px;border-radius:50%;background:var(--accent,#a7a0ef);border:2px solid color-mix(in srgb,currentColor 25%,white);box-shadow:0 2px 6px #0003;transition:box-shadow .15s}\r\n#cursor-size::-moz-range-track{height:5px;border-radius:99px;background:color-mix(in srgb,currentColor 15%,transparent)}\r\n#cursor-size::-moz-range-progress{height:5px;border-radius:99px;background:var(--accent,#a7a0ef)}\r\n#cursor-size::-moz-range-thumb{width:13px;height:13px;border-radius:50%;background:var(--accent,#a7a0ef);border:2px solid white;box-shadow:0 2px 6px #0003}\r\n#cursor-size:focus-visible::-webkit-slider-thumb{box-shadow:0 0 0 5px color-mix(in srgb,var(--accent,#a7a0ef) 25%,transparent)}\r\n#cursor-size:disabled{opacity:.35}\r\n\r\n#cursor-size{cursor:pointer!important}\r\nhtml[data-site-cursor=\"custom\"] body #cursor-size{cursor:var(--site-cursor),pointer!important}\r\nhtml[data-site-cursor=\"custom\"]:active body #cursor-size{cursor:var(--site-cursor-pressed),pointer!important}\r\n\n#appearance-open[hidden]{display:none!important}html[data-toybile-glass=on] body{background:radial-gradient(ellipse at 12% 5%,color-mix(in srgb,var(--toybile-accent,#667) 12%,transparent),transparent 60%),var(--bg,var(--canvas));background-attachment:fixed}";realDocument.head.append(globalStyle);const document=new Proxy(realDocument,{get(target,key){if(key==='querySelector')return s=>shadow.querySelector(s);if(key==='querySelectorAll')return s=>shadow.querySelectorAll(s);if(key==='getElementById')return id=>shadow.getElementById(id);const value=Reflect.get(target,key,target);return typeof value==='function'?value.bind(target):value;},set(target,key,value){if(key==='title')return true;Reflect.set(target,key,value,target);return true;}});
const LPThemeFamilies = [
  {
    "id": "original",
    "name": "Original",
    "light": {
      "id": "light",
      "name": "Original",
      "scheme": "light",
      "canvas": "#f3f5f8",
      "paper": "#ffffff",
      "ink": "#26292e",
      "quiet": "#626b76",
      "edge": "#e9ebef",
      "soft": "#f0f2f5",
      "accent": "#3d526e",
      "family": "original"
    },
    "dark": {
      "id": "dark",
      "name": "Original",
      "scheme": "dark",
      "canvas": "#16181c",
      "paper": "#202124",
      "ink": "#e9ebef",
      "quiet": "#9da3ad",
      "edge": "#34363b",
      "soft": "#303238",
      "accent": "#b6c9e1",
      "family": "original"
    },
    "labelEn": "Original"
  },
  {
    "id": "indigo",
    "name": "Índigo",
    "light": {
      "id": "indigo-light",
      "name": "Índigo",
      "scheme": "light",
      "canvas": "#f4f4fd",
      "paper": "#fff",
      "ink": "#23263e",
      "quiet": "#626b86",
      "edge": "#dcdff1",
      "soft": "#eef0fc",
      "accent": "#4c57c9",
      "family": "indigo"
    },
    "dark": {
      "id": "indigo-dark",
      "name": "Índigo",
      "scheme": "dark",
      "canvas": "#0f1023",
      "paper": "#15172e",
      "ink": "#f3f3fc",
      "quiet": "#b4bad3",
      "edge": "#30344f",
      "soft": "#212540",
      "accent": "#a4b0ff",
      "family": "indigo"
    },
    "labelEn": "Indigo"
  },
  {
    "id": "petroleum",
    "name": "Petróleo e turquesa",
    "light": {
      "id": "petroleum-light",
      "scheme": "light",
      "canvas": "#e8f2f1",
      "paper": "#f8fdfc",
      "ink": "#173c42",
      "quiet": "#4c6c71",
      "edge": "#c4dad8",
      "soft": "#dcecea",
      "accent": "#177a73",
      "name": "Petróleo e turquesa",
      "family": "petroleum"
    },
    "dark": {
      "id": "petroleum",
      "name": "Petróleo e turquesa",
      "scheme": "dark",
      "canvas": "#0b2027",
      "paper": "#132d35",
      "ink": "#edf8f7",
      "quiet": "#a0b9bc",
      "edge": "#294b53",
      "soft": "#1c3d45",
      "accent": "#68d8cc",
      "family": "petroleum"
    },
    "labelEn": "Petroleum and turquoise"
  },
  {
    "id": "graphite",
    "name": "Grafite e âmbar",
    "light": {
      "id": "graphite-light",
      "scheme": "light",
      "canvas": "#f2efe9",
      "paper": "#fcfaf5",
      "ink": "#3a3329",
      "quiet": "#70634e",
      "edge": "#ddd3c2",
      "soft": "#eee5d4",
      "accent": "#856122",
      "name": "Grafite e âmbar",
      "family": "graphite"
    },
    "dark": {
      "id": "graphite",
      "name": "Grafite e âmbar",
      "scheme": "dark",
      "canvas": "#18191d",
      "paper": "#24252b",
      "ink": "#f5f0e7",
      "quiet": "#beb7aa",
      "edge": "#424044",
      "soft": "#33302b",
      "accent": "#e8b866",
      "family": "graphite"
    },
    "labelEn": "Graphite and amber"
  },
  {
    "id": "sand",
    "name": "Areia e azul",
    "light": {
      "id": "sand",
      "name": "Areia e azul",
      "scheme": "light",
      "canvas": "#f2eadf",
      "paper": "#fffaf2",
      "ink": "#293b50",
      "quiet": "#6b6861",
      "edge": "#ded4c5",
      "soft": "#e8edf2",
      "accent": "#416b99",
      "family": "sand"
    },
    "dark": {
      "id": "sand-dark",
      "scheme": "dark",
      "canvas": "#191c23",
      "paper": "#232a34",
      "ink": "#f1e7da",
      "quiet": "#b4b5b9",
      "edge": "#3d4654",
      "soft": "#303a48",
      "accent": "#9dbde1",
      "name": "Areia e azul",
      "family": "sand"
    },
    "labelEn": "Sand and blue"
  },
  {
    "id": "sage",
    "name": "Sálvia e oliva",
    "light": {
      "id": "sage",
      "name": "Sálvia e oliva",
      "scheme": "light",
      "canvas": "#edf2e8",
      "paper": "#fbfdf7",
      "ink": "#29382c",
      "quiet": "#5e6b5d",
      "edge": "#d4decf",
      "soft": "#e5ecdf",
      "accent": "#55734a",
      "family": "sage"
    },
    "dark": {
      "id": "sage-dark",
      "scheme": "dark",
      "canvas": "#151d17",
      "paper": "#202c22",
      "ink": "#edf3e8",
      "quiet": "#b0c0a9",
      "edge": "#384d38",
      "soft": "#2c3c2a",
      "accent": "#accb92",
      "name": "Sálvia e oliva",
      "family": "sage"
    },
    "labelEn": "Sage and olive"
  },
  {
    "id": "rose",
    "name": "Rosé e vinho",
    "light": {
      "id": "rose-light",
      "scheme": "light",
      "canvas": "#f7eef1",
      "paper": "#fff9fb",
      "ink": "#432b35",
      "quiet": "#795d6a",
      "edge": "#ead4de",
      "soft": "#f2e2e9",
      "accent": "#a34064",
      "name": "Rosé e vinho",
      "family": "rose"
    },
    "dark": {
      "id": "rose-dark",
      "scheme": "dark",
      "canvas": "#25151d",
      "paper": "#34212b",
      "ink": "#f9edf3",
      "quiet": "#d0abbc",
      "edge": "#59394a",
      "soft": "#482c3b",
      "accent": "#ef9dbd",
      "name": "Rosé e vinho",
      "family": "rose"
    },
    "labelEn": "Rose and wine"
  },
  {
    "id": "plum",
    "name": "Ameixa e lavanda",
    "light": {
      "id": "plum-light",
      "scheme": "light",
      "canvas": "#f2eef8",
      "paper": "#fcfaff",
      "ink": "#362c48",
      "quiet": "#6f5e7d",
      "edge": "#dfd4ed",
      "soft": "#eae2f4",
      "accent": "#79509d",
      "name": "Ameixa e lavanda",
      "family": "plum"
    },
    "dark": {
      "id": "plum-dark",
      "scheme": "dark",
      "canvas": "#1b1527",
      "paper": "#2a2039",
      "ink": "#f4ecfc",
      "quiet": "#bdacd1",
      "edge": "#48355e",
      "soft": "#392b4c",
      "accent": "#c1a0e7",
      "name": "Ameixa e lavanda",
      "family": "plum"
    },
    "labelEn": "Plum and lavender"
  }
];
const LPThemeVariants = LPThemeFamilies.flatMap(family => [family.light, family.dark]);

if(host.extraTheme){const extra=host.extraTheme();LPThemeFamilies.push(extra);LPThemeVariants.push(extra.light,extra.dark);}
;
// Shared interface lexicon; user-authored arguments and names are excluded.
const interfaceLanguagePairs = {
  "Ameixa e lavanda": "Plum and lavender",
  "Rosé e vinho": "Rose and wine",
  "Sálvia e oliva": "Sage and olive",
  "Areia e azul": "Sand and blue",
  "Grafite e âmbar": "Graphite and amber",
  "Petróleo e turquesa": "Petroleum and turquoise",
  "Índigo": "Indigo",
  "Original": "Original",
  "Pronto": "Done",
  "Restaurar padrão": "Restore default",
  "Escolha uma tonalidade abaixo.": "Choose a palette below.",
  "Acompanha o tema do navegador.": "Follows your browser theme.",
  "Desativado": "Off",
  "Ativado": "On",
  "Luz e cores suaves sob os painéis.": "Soft light and colors beneath the panels.",
  "Fundo translúcido": "Translucent background",
  "Automático": "Automatic",
  "Modo de exibição": "Display mode",
  "Cores tranquilas para acompanhar o seu raciocínio.": "Calm colors to accompany your reasoning.",
  "Do seu jeito": "Make it yours",
  "Temas e aparência": "Themes and appearance",
  "Translucidez": "Translucency",
  "Uma nova versão está disponível.": "A new version is available.",
  "Atualizar": "Update",
  "Fechar aviso de atualização": "Dismiss update notice",
  "Inserir argumento aqui": "Insert argument here",
  "Renomear": "Rename",
  "Excluir": "Delete",
  "Usar linha discreta": "Use underline tabs",
  "Usar seletor compacto": "Use compact selector",
  "Excluir argumento": "Delete argument",
  "Renomear argumento": "Rename argument",
  "Ações do argumento": "Argument actions",
  "Bloco removido. Clique para restaurar.": "Deleted block. Click to restore.",
  "Proposição ou conectivo": "Proposition or connective",
  "Espaço: próximo bloco": "Space: next block",
  "— clique para alternar; duplo clique muda a exibição. ∵ identifica premissas nesta interface, não integra a fórmula nem a validação. Segure para uma linha vazia": "— click to switch; double-click changes display. ∵ is an interface marker for premises, not a formula or validation operator. Hold for a blank line",
  "Ajuda sobre este símbolo": "Help about this symbol",
  "Adicionar premissa acima": "Add premise above",
  "Argumento atual": "Current argument",
  "Maiúsculas ativadas — clique para desativar": "Uppercase enabled — click to disable",
  "Numerar linhas": "Number lines",
  "Clique para voltar a premissa": "Click to return to premise",
  "Segure por 0,3 segundo para criar uma linha vazia": "Hold for 0.3 seconds to create a blank line",
  "Linha vazia. Clique para voltar a premissa": "Blank line. Click to return to premise",
  "Excluir linha": "Delete line",
  "Todas as criações": "All creations",
  "Todas as notações": "All notations",
  "Implicação e equivalência": "Implication and equivalence",
  "Conjuntos: operações": "Sets: operations",
  "Conjuntos: relações": "Sets: relations",
  "Operadores sobre famílias": "Operators over families",
  "Comparação e definição": "Comparison and definition",
  "Delimitadores e pontuação": "Delimiters and punctuation",
  "Notações de negação clássica.": "Classical negation notation.",
  "O sinal + segue a convenção da álgebra booleana.": "The + sign follows the Boolean algebra convention.",
  "O símbolo ⊃ também representa inclusão em conjuntos; aqui indica o condicional material.": "The symbol ⊃ also denotes set inclusion; here it denotes the material conditional.",
  "Aqui, ≡ representa o bicondicional material.": "Here, ≡ denotes the material biconditional.",
  "Aqui, | representa a negação da conjunção.": "Here, | denotes negated conjunction.",
  "Fim da demonstração": "End of proof",
  "Complemento": "Complement",
  "Diferença simétrica": "Symmetric difference",
  "União de multiconjuntos": "Multiset union",
  "Inclusão com desigualdade explícita": "Subset with explicit inequality",
  "Inclusão inversa com desigualdade explícita": "Superset with explicit inequality",
  "Conjunção sobre uma família": "Conjunction over a family",
  "Disjunção sobre uma família": "Disjunction over a family",
  "União sobre uma família": "Union over a family",
  "Interseção sobre uma família": "Intersection over a family",
  "União de multiconjuntos sobre uma família": "Multiset union over a family",
  "Menor que": "Less than",
  "Maior que": "Greater than",
  "Menor ou igual": "Less than or equal",
  "Maior ou igual": "Greater than or equal",
  "Não menor que": "Not less than",
  "Não maior que": "Not greater than",
  "Não menor ou igual": "Not less than or equal",
  "Não maior ou igual": "Not greater than or equal",
  "Aproximação": "Approximation",
  "Não aproximação": "Non-approximation",
  "Definição à direita": "Definition on the right",
  "Definição à esquerda": "Definition on the left",
  "Igualdade por definição": "Equality by definition",
  "Igualdade por definição (triângulo)": "Equality by definition (triangle)",
  "Abrir teto": "Opening ceiling",
  "Fechar teto": "Closing ceiling",
  "Abrir piso": "Opening floor",
  "Fechar piso": "Closing floor",
  "Reticências": "Ellipsis",
  "Reticências centrais": "Midline ellipsis",
  "Reticências verticais": "Vertical ellipsis",
  "Dois-pontos": "Colon",
  "Nome do argumento": "Argument name",
  "Deixe vazio para usar a numeração automática.": "Leave blank to use automatic numbering.",
  "Cancelar": "Cancel",
  "Salvar": "Save",
  "Fechar": "Close",
  "Argumentos": "Arguments",
  "Adicionar argumento": "Add argument",
  "Voltar ao portfólio": "Home — portfolio",
  "Editor de Lógica": "Logic Editor",
  "Símbolos lógicos": "Logical symbols",
  "Mais comuns": "Most common",
  "Premissas e conclusões": "Premises and conclusions",
  "Premissas (∵) · Conclusões (∴)": "Premises (∵) · Conclusions (∴)",
  "Argumento": "Argument",
  "Números": "Numbers",
  "Copiar": "Copy",
  "Exportar": "Export",
  "Linha": "Line",
  "Premissa": "Premise",
  "Conclusão": "Conclusion",
  "Configurações": "Settings",
  "Fechar configurações": "Close settings",
  "Tamanho da seção de símbolos lógicos": "Logical symbols section size",
  "Tamanho dos argumentos": "Argument size",
  "Diminuir tamanho": "Decrease size",
  "Aumentar tamanho": "Increase size",
  "Ativar tema claro": "Switch to light theme",
  "Ativar tema escuro": "Switch to dark theme",
  "Alternar tema": "Toggle theme",
  "Mostrar biblioteca": "Show library",
  "Ocultar biblioteca": "Hide library",
  "Mostrar ou ocultar biblioteca": "Show or hide library",
  "Mostrar premissas e conclusões": "Show premises and conclusions",
  "Ocultar premissas e conclusões": "Hide premises and conclusions",
  "Mostrar ou ocultar premissas e conclusões": "Show or hide premises and conclusions",
  "Mostrar argumento": "Show argument",
  "Ocultar argumento": "Hide argument",
  "Conectivos proposicionais": "Propositional connectives",
  "Outras notações de conectivos": "Alternative connective notation",
  "Quantificadores e igualdade": "Quantifiers and equality",
  "Operadores modais": "Modal operators",
  "Dedução e consequência": "Deduction and consequence",
  "Conjuntos e relações": "Sets and relations",
  "Delimitadores": "Delimiters",
  "Negação": "Negation",
  "Conjunção": "Conjunction",
  "Disjunção": "Disjunction",
  "Condicional": "Conditional",
  "Bicondicional": "Biconditional",
  "Disjunção exclusiva": "Exclusive disjunction",
  "Verdade": "Truth",
  "Falsidade": "Falsity",
  "Negação da conjunção": "Negated conjunction",
  "Negação da disjunção": "Negated disjunction",
  "Implicação": "Implication",
  "Equivalência": "Equivalence",
  "Condicional inverso": "Converse conditional",
  "Implicação inversa": "Converse implication",
  "Negação do condicional": "Negated conditional",
  "Negação do bicondicional": "Negated biconditional",
  "Não implicação": "Non-implication",
  "Não equivalência": "Non-equivalence",
  "Quantificador universal": "Universal quantifier",
  "Quantificador existencial": "Existential quantifier",
  "Existência única": "Unique existence",
  "Não existência": "Non-existence",
  "Igualdade": "Equality",
  "Desigualdade": "Inequality",
  "Necessidade": "Necessity",
  "Possibilidade": "Possibility",
  "Derivabilidade": "Derivability",
  "Não derivabilidade": "Non-derivability",
  "Consequência semântica": "Semantic consequence",
  "Não consequência semântica": "Non-entailment",
  "Portanto": "Therefore",
  "Porque": "Because",
  "Pertinência": "Membership",
  "Não pertinência": "Non-membership",
  "Contém como elemento": "Contains as an element",
  "Não contém como elemento": "Does not contain as an element",
  "Inclusão": "Subset",
  "Não inclusão": "Not a subset",
  "Inclusão estrita": "Proper subset",
  "Não inclusão estrita": "Not a proper subset",
  "Inclusão inversa": "Superset",
  "Não inclusão inversa": "Not a superset",
  "Inclusão estrita inversa": "Proper superset",
  "Não inclusão estrita inversa": "Not a proper superset",
  "União": "Union",
  "Interseção": "Intersection",
  "Diferença de conjuntos": "Set difference",
  "Conjunto vazio": "Empty set",
  "Conjunto das partes": "Power set",
  "Produto cartesiano": "Cartesian product",
  "Abrir parênteses": "Opening parenthesis",
  "Fechar parênteses": "Closing parenthesis",
  "Abrir colchetes": "Opening bracket",
  "Fechar colchetes": "Closing bracket",
  "Abrir chaves": "Opening brace",
  "Fechar chaves": "Closing brace",
  "Argumento copiado com números.": "Argument copied with numbers.",
  "Argumento copiado sem números.": "Argument copied without numbers.",
  "Arquivo de texto gerado.": "Text file generated.",
  "Argumento selecionado. Use Ctrl+C para copiar.": "Argument selected. Press Ctrl+C to copy.",
  "Arraste para mover a linha": "Drag to move the line",
  "Validação lógica": "Logic validation",
  "Digitar em maiúsculas": "Type in uppercase",
  "Confirmar exclusão": "Confirm deletion",
  "Excluir selecionadas": "Delete selected",
  "Excluir todas as premissas e conclusões?": "Delete all premises and conclusions?",
  "Excluir todas": "Delete all",
  "Arquivo": "File",
  "Salvar todos os argumentos": "Save all arguments",
  "Salvar argumento atual": "Save current argument",
  "Importar": "Import",
  "Escolha os argumentos para importar": "Choose arguments to import",
  "Importar selecionados": "Import selected",
  "Arquivo inválido ou acima dos limites de importação. Seus argumentos foram preservados.": "Invalid file or import limits exceeded. Your arguments were preserved.",
  "Voltar aos exemplos": "Back to examples",
  "Entenda os exemplos": "Understanding the examples",
  "As formas abaixo pertencem à lógica proposicional clássica. ∴ indica a conclusão; ¬ significa negação, ∨ disjunção e → condicional. Uma inferência válida preserva a verdade: premissas verdadeiras não podem levar a uma conclusão falsa.": "These forms use classical propositional logic. ∴ marks the conclusion; ¬ means negation, ∨ disjunction, and → conditional. A valid inference preserves truth: true premises cannot lead to a false conclusion.",
  "Referências para continuar:": "Further reading:",
  "Carregar em um novo argumento": "Load as a new argument",
  "Ajuda": "Help",
  "Em branco": "Blank",
  "Exemplo": "Example",
  "Buscar símbolos": "Search symbols",
  "Tabela-verdade": "Truth table",
  "Linhas em vermelho são contraexemplos. Exibição em páginas de 128 interpretações.": "Red rows are counterexamples. Pages show 128 interpretations.",
  "Filtrar interpretações": "Filter interpretations",
  "Todas as interpretações": "All interpretations",
  "Somente contraexemplos": "Counterexamples only",
  "Premissas verdadeiras": "True premises",
  "Calculando…": "Computing…",
  "Restaurar padrões": "Restore defaults",
  "Cada item mostra como ficará após restaurar. Ative Preservar no que deseja manter. Argumentos e descrições serão mantidos.": "Each item shows the value to restore. Turn on Preserve for anything you want to keep. Arguments and descriptions are kept.",
  "Idioma": "Language",
  "Tema": "Theme",
  "Claro": "Light",
  "Barra lateral": "Sidebar",
  "Visível": "Visible",
  "Conteúdo dos painéis": "Panel contents",
  "Editor e Argumento visíveis": "Editor and Argument visible",
  "Dicas de hover": "Hover hints",
  "Ativadas": "Enabled",
  "Tempo das dicas": "Hover hint delay",
  "Tempo de segurar": "Hold action delay",
  "Digitação em maiúsculas": "Uppercase typing",
  "Ativada": "Enabled",
  "Botões Premissa / Conclusão": "Premise / Conclusion labels",
  "Nomes (Premissa / Conclusão)": "Names (Premise / Conclusion)",
  "Enumeração do argumento atual": "Current argument numbering",
  "Espaçamento dos prefixos": "Prefix spacing",
  "Compacto (¬A, ∀x)": "Compact (¬A, ∀x)",
  "Cores dos painéis": "Panel colors",
  "Azul suave e verde suave": "Soft blue and soft green",
  "Traços externos": "Outer markers",
  "Ativados em ambos os painéis": "Enabled on both panels",
  "Bordas coloridas": "Colored borders",
  "Desativadas em ambos os painéis": "Disabled on both panels",
  "Detalhes internos": "Inner details",
  "Nenhum; alinhamento na coluna do olho": "None; aligned to the eye column",
  "Disposição da biblioteca": "Library arrangement",
  "Horizontal, fixa e sem janelas destacadas": "Horizontal, docked, no detached windows",
  "Posição e largura das janelas": "Panel positions and widths",
  "Centralizadas, com toda a largura disponível": "Centered, full available width",
  "Preservar": "Preserve",
  "Restaurar selecionados": "Restore selected",
  "Salvando…": "Saving…",
  "Salvo neste navegador": "Saved in this browser",
  "Não foi possível salvar neste navegador": "Could not save in this browser",
  "Proposições": "Propositions",
  "Descrição das proposições": "Proposition descriptions",
  "Digite proposições no argumento primeiro.": "Enter propositions in the argument first.",
  "Ex.: Está chovendo": "E.g. It is raining",
  "Comparar fórmulas": "Compare formulas",
  "Equivalência entre fórmulas": "Formula equivalence",
  "Primeira fórmula": "First formula",
  "Segunda fórmula": "Second formula",
  "Comparar": "Compare",
  "Verificando…": "Checking…",
  "As fórmulas são equivalentes em todas as interpretações.": "The formulas are equivalent in every interpretation.",
  "As fórmulas diferem nesta interpretação:": "The formulas differ in this interpretation:",
  "Confira a sintaxe das fórmulas e o limite de 16 proposições.": "Check formula syntax and the 16-proposition limit.",
  "Por que este é um contraexemplo?": "Why is this a counterexample?",
  "Nesta interpretação, todas as premissas são verdadeiras, mas esta conclusão é falsa. Portanto, as premissas não garantem a conclusão.": "In this interpretation, every premise is true but this conclusion is false. Therefore, the premises do not guarantee this conclusion.",
  "Avaliação dos conectivos": "Connective evaluation",
  "Analisar premissas redundantes": "Analyze redundant premises",
  "Analisar": "Analyze",
  "Analisando…": "Analyzing…",
  "Uma premissa é redundante aqui quando decorre das outras. Cada resultado considera a retirada de uma única premissa; não retire todas simultaneamente.": "A premise is redundant here when it follows from the others. Each result considers removing only one premise; do not remove all of them together.",
  "Nenhuma premissa redundante encontrada.": "No redundant premises found.",
  "Nega uma proposição: ¬A é verdadeiro exatamente quando A é falso. A dupla negação ¬¬A tem o mesmo valor de A.": "Negates a proposition: ¬A is true exactly when A is false. Double negation ¬¬A has the same value as A.",
  "A conjunção exige que as duas proposições sejam verdadeiras. Uma única parcela falsa torna o resultado falso.": "Conjunction requires both propositions to be true. One false operand makes the result false.",
  "A disjunção inclusiva exige pelo menos uma proposição verdadeira. Também é verdadeira quando ambas são verdadeiras.": "Inclusive disjunction requires at least one true proposition. It is also true when both are true.",
  "O condicional material só é falso quando o antecedente é verdadeiro e o consequente é falso. Não afirma, por si só, uma relação causal.": "The material conditional is false only when the antecedent is true and the consequent is false. It does not by itself assert causation.",
  "O bicondicional é verdadeiro quando os dois lados têm o mesmo valor de verdade. Na lógica proposicional, ≡ é aceito como outra notação do bicondicional; em outros contextos pode indicar equivalência ou congruência.": "The biconditional is true when both sides have the same truth value. In propositional validation, ≡ is another biconditional notation; elsewhere it can denote equivalence or congruence.",
  "A disjunção exclusiva é verdadeira quando exatamente uma das duas proposições é verdadeira. Difere da disjunção inclusiva quando ambas são verdadeiras.": "Exclusive disjunction is true when exactly one proposition is true. It differs from inclusive disjunction when both are true.",
  "Constante de verdade: seu valor é verdadeiro em qualquer interpretação. Não é uma variável que muda entre linhas da tabela.": "Truth constant: true in every interpretation. It is not a variable whose value changes between table rows.",
  "Constante de falsidade: falsa em qualquer interpretação. Não confunda com uma variável que apenas recebeu valor falso em uma linha da tabela.": "Falsehood constant: false in every interpretation. Do not confuse it with a variable assigned false in one table row.",
  "NAND é a negação da conjunção. Só é falso quando ambas as proposições são verdadeiras.": "NAND is negated conjunction. It is false only when both propositions are true.",
  "NOR é a negação da disjunção inclusiva. Só é verdadeiro quando ambas as proposições são falsas.": "NOR is negated inclusive disjunction. It is true only when both propositions are false.",
  "O condicional inverso troca os papéis de antecedente e consequente: A ← B tem o valor de B → A.": "Reverse conditional swaps antecedent and consequent: A ← B has the value of B → A.",
  "Nega o condicional material. É verdadeiro precisamente quando o lado esquerdo é verdadeiro e o direito é falso. Fora deste validador, ⇏ pode expressar uma afirmação sobre não consequência.": "Negates the material conditional. True exactly when the left side is true and the right side false. Outside this validator, ⇏ can express a claim about non-entailment.",
  "Nega o bicondicional: os dois lados precisam ter valores diferentes. No validador, equivale à disjunção exclusiva.": "Negates the biconditional: both sides must have different values. In the validator this equals exclusive disjunction.",
  "Quantifica sobre todos os objetos do domínio escolhido. ∀x P(x) exige que P valha para cada objeto desse domínio.": "Quantifies over all objects of the chosen domain. ∀x P(x) requires P to hold for every object in that domain.",
  "Afirma que existe pelo menos um objeto do domínio que satisfaz a fórmula. O domínio e o predicado precisam ser especificados.": "Asserts that at least one object in the domain satisfies the formula. The domain and predicate must be specified.",
  "Afirma existência e unicidade: exatamente um objeto do domínio satisfaz a condição. Não basta apenas existir algum objeto.": "Asserts existence and uniqueness: exactly one object satisfies the condition. Mere existence is not enough.",
  "Afirma que nenhum objeto do domínio satisfaz a condição. Pode ser escrito como a negação de uma quantificação existencial.": "Asserts that no object in the domain satisfies the condition. It can be written as negated existential quantification.",
  "Afirma igualdade entre os objetos ou valores dos termos. Não é o mesmo que dizer que duas proposições têm valores de verdade iguais.": "Asserts equality between the objects or values denoted by terms. This differs from two propositions sharing a truth value.",
  "Nega a igualdade dos dois termos. Exige um contexto que dê significado aos termos comparados.": "Negates equality of two terms. A context must assign meaning to the compared terms.",
  "Indica que a equivalência ou congruência em questão não vale. Seu significado preciso depende da relação definida no contexto.": "Indicates that the relevant equivalence or congruence does not hold. Its exact meaning depends on the relation defined in context.",
  "Na semântica modal relacional, □A exige A em todos os mundos acessíveis a partir do mundo de avaliação. As propriedades da acessibilidade dependem do sistema modal.": "In relational modal semantics, □A requires A in every world accessible from the evaluation world. Accessibility properties depend on the modal system.",
  "Na semântica modal relacional, ◇A exige pelo menos um mundo acessível em que A valha. Possibilidade não significa que A já seja verdadeiro no mundo atual.": "In relational modal semantics, ◇A requires at least one accessible world where A holds. Possibility does not mean A is already true at the current world.",
  "Indica derivabilidade em um sistema de demonstração especificado: há uma derivação da fórmula à direita a partir das hipóteses à esquerda.": "Indicates derivability in a specified proof system: the right-hand formula has a derivation from the hypotheses on the left.",
  "Indica ausência de derivação no sistema de demonstração especificado. É uma afirmação sobre derivabilidade, não um conectivo da fórmula.": "Indicates absence of a derivation in the specified proof system. It is a claim about derivability, not a formula connective.",
  "Indica consequência semântica: toda interpretação que satisfaz as hipóteses satisfaz a conclusão. Com hipóteses vazias, indica validade.": "Indicates semantic consequence: every interpretation satisfying the hypotheses satisfies the conclusion. With no hypotheses it indicates validity.",
  "Nega a consequência semântica: há uma interpretação que satisfaz as hipóteses e torna a conclusão falsa.": "Negates semantic consequence: an interpretation satisfies the hypotheses and makes the conclusion false.",
  "Marca uma conclusão na apresentação do raciocínio. No editor, use o botão Conclusão; não é necessário digitar ∴ no campo da fórmula.": "Marks a conclusion in the presentation of an argument. Use the Conclusion role button; you do not need to type ∴ into the formula field.",
  "Marca a apresentação de uma razão ou justificativa. Não é um conectivo proposicional que receba uma tabela de valores.": "Marks the presentation of a reason or justification. It is not a propositional connective with a truth table.",
  "Indica que uma demonstração terminou. Não verifica a correção da demonstração nem entra na avaliação de uma fórmula.": "Marks the end of a proof. It neither verifies the proof nor participates in formula evaluation.",
  "A união contém os elementos que pertencem a pelo menos um dos conjuntos. Repetições de um elemento não criam novos elementos em conjuntos comuns.": "Union contains elements belonging to at least one set. Repeating an element does not add new elements to ordinary sets.",
  "A interseção contém exatamente os elementos comuns aos dois conjuntos.": "Intersection contains exactly the elements common to both sets.",
  "A diferença mantém os elementos do conjunto esquerdo que não pertencem ao direito. A ordem importa.": "Set difference keeps elements of the left set that are absent from the right. Order matters.",
  "O complemento depende de um universo U: contém os elementos de U que não pertencem ao conjunto considerado.": "Complement depends on a universe U: it contains the elements of U absent from the chosen set.",
  "A diferença simétrica contém elementos de exatamente um dos conjuntos, excluindo os comuns.": "Symmetric difference contains elements in exactly one set, excluding common elements.",
  "Nesta biblioteca, representa união de multiconjuntos: as multiplicidades dos elementos são somadas. Em outros textos também pode designar união disjunta; confira a convenção usada.": "In this library it represents multiset union: element multiplicities are added. Other texts also use it for disjoint union; check the convention.",
  "O conjunto vazio não possui elementos. Ele é diferente de um conjunto contendo o próprio conjunto vazio.": "The empty set has no elements. It differs from a set containing the empty set itself.",
  "O conjunto das partes de A contém todos os subconjuntos de A, incluindo o vazio e A. Um conjunto finito com n elementos tem 2ⁿ subconjuntos.": "The power set of A contains every subset of A, including the empty set and A. A finite n-element set has 2ⁿ subsets.",
  "O produto cartesiano contém pares ordenados, com o primeiro componente no conjunto esquerdo e o segundo no direito.": "Cartesian product contains ordered pairs, with the first component from the left set and the second from the right.",
  "Expressa pertencimento de um elemento a um conjunto. Não confunda com inclusão entre conjuntos.": "Expresses membership of an element in a set. Do not confuse it with inclusion between sets.",
  "Nega pertencimento de um elemento ao conjunto.": "Negates membership of an element in a set.",
  "É a relação de pertencimento escrita na ordem inversa: o conjunto fica à esquerda e o elemento à direita.": "Membership written in reverse order: the set is on the left and the element on the right.",
  "Nega pertencimento na ordem inversa, com conjunto à esquerda e elemento à direita.": "Negates membership in reverse order, with the set on the left and element on the right.",
  "A ⊆ B exige que todo elemento de A pertença a B. Permite A = B.": "A ⊆ B requires every element of A to belong to B. Equality A = B is allowed.",
  "Nega inclusão: há pelo menos um elemento do conjunto esquerdo ausente no direito.": "Negates inclusion: at least one element of the left set is absent from the right.",
  "Nesta biblioteca indica inclusão estrita: A é subconjunto de B e A ≠ B. Alguns textos usam ⊂ permitindo igualdade; ⊊ explicita a desigualdade.": "In this library it means strict inclusion: A is a subset of B and A ≠ B. Some texts allow equality with ⊂; ⊊ makes inequality explicit.",
  "Nega a inclusão estrita adotada nesta biblioteca. A negação pode ocorrer por falta de inclusão ou por igualdade entre os conjuntos.": "Negates strict inclusion as used in this library. It can fail because inclusion fails or because the sets are equal.",
  "A ⊇ B afirma B ⊆ A. Permite igualdade.": "A ⊇ B states B ⊆ A. Equality is allowed.",
  "Nega a inclusão inversa: algum elemento do conjunto direito não pertence ao esquerdo.": "Negates reverse inclusion: some element of the right set is absent from the left.",
  "Na categoria de conjuntos, indica inclusão estrita inversa: A contém B como subconjunto e A ≠ B. Na categoria proposicional, ⊃ representa o condicional material.": "In the sets category it means strict reverse inclusion: A contains B as a subset and A ≠ B. In the propositional category, ⊃ represents material implication.",
  "Nega a inclusão estrita inversa segundo a convenção desta biblioteca. Confira se o texto consultado permite igualdade com ⊃.": "Negates strict reverse inclusion under this library convention. Check whether the consulted text allows equality with ⊃.",
  "Conjunção indexada: exige todas as proposições da família. Em uma família finita, expande-se como uma sequência de conjunções.": "Indexed conjunction requires all propositions in a family. A finite family expands into a chain of conjunctions.",
  "Disjunção indexada: exige pelo menos uma proposição verdadeira na família.": "Indexed disjunction requires at least one true proposition in the family.",
  "União de uma família: reúne os elementos presentes em pelo menos um conjunto da família.": "Union of a family collects elements present in at least one member set.",
  "Interseção de uma família: mantém os elementos presentes em todos os conjuntos da família.": "Intersection of a family keeps elements present in every member set.",
  "Aplica a união de multiconjuntos a uma família, somando multiplicidades. Também pode denotar união disjunta em outra convenção.": "Applies multiset union to a family, adding multiplicities. It can also denote disjoint union under another convention.",
  "Indica aproximação ou uma relação de equivalência convencionada. Para aproximações numéricas, a precisão ou tolerância deve ser definida.": "Indicates approximation or a stipulated equivalence relation. Numerical approximation requires a specified precision or tolerance.",
  "Nega a aproximação ou relação indicada por ≈. A tolerância ou relação usada precisa ser conhecida.": "Negates the approximation or relation denoted by ≈. The tolerance or relation must be known.",
  "Marca uma definição, não uma conclusão deduzida. Em x ≔ expressão, define-se x pela expressão; ≕ inverte essa apresentação. ≝ e ≜ também sinalizam igualdade por definição.": "Marks a definition, not a derived conclusion. In x ≔ expression, x is defined by the expression; ≕ reverses the presentation. ≝ and ≜ also mark equality by definition.",
  "Abre ou fecha um agrupamento. No validador proposicional, parênteses, colchetes e chaves podem agrupar fórmulas e precisam fechar com o mesmo tipo de delimitador. Chaves também representam conjuntos em outro contexto.": "Opens or closes a grouping. In propositional validation, parentheses, brackets and braces group formulas and must close with the matching delimiter type. Braces also denote sets in another context.",
  "O par ⌈x⌉ indica o teto: o menor inteiro maior ou igual a x. Use ambos os delimitadores para escrever a operação.": "The pair ⌈x⌉ denotes the ceiling: the smallest integer greater than or equal to x. Both delimiters form the operation.",
  "O par ⌊x⌋ indica o piso: o maior inteiro menor ou igual a x. Para números negativos, não equivale a simplesmente remover a parte decimal.": "The pair ⌊x⌋ denotes the floor: the greatest integer less than or equal to x. For negative numbers it is not simply truncation.",
  "Indica continuação de uma sequência ou padrão, na direção da notação escolhida. Os termos omitidos precisam ser inferíveis do contexto; não é um operador proposicional.": "Indicates continuation of a sequence or pattern along the notation direction. Omitted terms must be inferable from context; it is not a propositional operator.",
  "Separa uma identificação de seu conteúdo ou indica uma condição, conforme a convenção. Não possui um significado lógico único independente do contexto.": "Separates a label from its content or introduces a condition under the chosen convention. It has no single context-independent logical meaning.",
  "Fechar explicação": "Close explanation",
  "Exemplo:": "Example:",
  "Notações nesta categoria:": "Notations in this category:",
  "Atenção: o validador interpreta ⊃ como condicional material entre proposições, não como relação de conjuntos.": "Note: the validator interprets ⊃ as material conditional between propositions, not as a set relation.",
  "No editor: aceito na sintaxe proposicional. Os termos dos exemplos matemáticos continuam fora do validador; use variáveis proposicionais e conectivos.": "In the editor: accepted in propositional syntax. Mathematical example terms remain outside the validator; use propositional variables and connectives.",
  "No editor: disponível para escrever e exportar, mas este símbolo não é avaliado pela validação proposicional atual.": "In the editor: available for writing and exporting, but this symbol is not evaluated by current propositional validation.",
  "Os valores V e F representam verdadeiro e falso. O significado de uma notação depende do contexto; símbolos parecidos não garantem a mesma operação.": "V and F stand for true and false in these examples. Notation depends on context; similar symbols do not guarantee the same operation.",
  "Referências:": "References:",
  "Degradê suave": "Soft gradient",
  "Nenhum": "None",
  "Rebaixo": "Inset channel",
  "Conexões curvas": "Curved connections",
  "Ondulação suave": "Soft wave",
  "Cantos internos": "Inner corners",
  "Numeração discreta": "Subtle numbering",
  "Cor no hover": "Color on hover",
  "Linha segmentada": "Segmented line",
  "Cápsula vertical": "Vertical capsule",
  "Arcos por linha": "Row arcs",
  "Luz localizada": "Localized light",
  "Tente segurar os olhinhos": "Try holding the eye buttons",
  "Aparência": "Appearance",
  "Cor da janela": "Panel color",
  "Traço externo": "Outer marker",
  "Borda colorida": "Colored border",
  "Detalhe interno": "Inner detail",
  "Deletar": "Delete",
  "Remover espaços após símbolos de prefixo (¬ ∀ ∃)": "Remove spaces after prefix symbols (¬ ∀ ∃)",
  "Mover decoração": "Move decoration",
  "Segure Alt e arraste na horizontal.": "Hold Alt and drag horizontally.",
  "Duplicar categoria": "Duplicate category",
  "Clique para criar uma cópia acoplada logo abaixo. Arraste para criar uma cópia e escolher sua posição, dentro ou fora da biblioteca.": "Click to create a docked copy directly below. Drag to create a copy and choose its position inside or outside the library.",
  "Selecionar categoria": "Choose category",
  "Clique para abrir ou fechar a grade. Escolher uma categoria troca somente o conteúdo desta seção.": "Click to open or close the grid. Choosing a category replaces only this section’s content.",
  "Clique para selecionar nesta seção. Segure e arraste para criar uma janela desta categoria.": "Click to select in this section. Hold and drag to create a window of this category.",
  "Inserir argumento": "Insert argument",
  "Clique para criar um argumento em branco nesta posição, preservando os demais.": "Click to create a blank argument at this position, keeping the others.",
  "Clique para inserir uma premissa nesta posição. Indisponível durante a seleção de linhas.": "Click to insert a premise at this position. Unavailable while selecting rows.",
  "Clique para adicionar uma categoria nesta posição.": "Click to add a category at this position.",
  "Mover ou recolher": "Move or collapse",
  "Clique para recolher ou expandir. Arraste para reorganizar ou desacoplar.": "Click to collapse or expand. Drag to reorder or detach.",
  "Clique para recolher ou expandir. Arraste para mover. Segure sem mover por": "Click to collapse or expand. Drag to move. Hold still for",
  "para voltar à biblioteca.": "to return to the library.",
  "Clique para recolher ou reabrir a biblioteca. Arraste para mover.": "Click to collapse or reopen the library. Drag to move.",
  "Clique para recolher ou expandir. Arraste para mover a janela.": "Click to collapse or expand. Drag to move the window.",
  "Pesquisar símbolos": "Search symbols",
  "Clique para abrir ou fechar a pesquisa. Digite um nome ou símbolo. Escape: fechar a pesquisa.": "Click to open or close search. Type a name or symbol. Escape: close search.",
  "Orientação das categorias": "Category orientation",
  "Clique para alternar entre horizontal e vertical.": "Click to switch between horizontal and vertical.",
  "Clique para destacar ou recolher esta janela.": "Click to detach or dock this window.",
  "Aparência dos painéis": "Panel appearance",
  "Tente segurar os olhinhos por 0,2 segundo para personalizar cada janela.": "Try holding the eye buttons for 0.2 seconds to customize each panel.",
  "Linha vazia": "Blank row",
  "Clique para voltar a premissa.": "Click to return to a premise.",
  "Clique para alternar o tipo. Duplo clique muda a exibição. Segure por 0,3 segundo para criar uma linha vazia. ∵ e ∴ identificam o tipo na interface; não integram a validação.": "Click to switch the role. Double-click changes the labels. Hold for 0.3 seconds to create a blank row. ∵ and ∴ mark roles in the interface; they are not part of validation.",
  "Clique para excluir. Segure por 0,3 segundo para selecionar e confirmar a exclusão de todas as linhas deste argumento.": "Click to delete. Hold for 0.3 seconds to select and confirm deletion of every row in this argument.",
  "Clique para voltar ao portfólio.": "Click to return to the portfolio.",
  "Clique em qualquer bloco para editar.\nEspaço: avançar ao próximo bloco; no último preenchido, criar outro.\nShift + Espaço: inserir um bloco após o atual.\nSetas esquerda/direita: no limite do texto, ir ao bloco vizinho.\nEnter: criar linha (fora do modo de seleção); Tab: próxima linha; Shift+Tab: linha anterior.\nBackspace ou Delete em bloco vazio: removê-lo imediatamente e voltar ao anterior (ou ao próximo, se for o primeiro). Pelo menos um bloco é mantido.": "Click any block to edit.\nSpace: next block; from the last filled block, create another.\nShift + Space: insert a block after the current one.\nLeft/right arrows: at the text boundary, move to the adjacent block.\nEnter: new row (outside selection mode); Tab: next row; Shift+Tab: previous row.\nBackspace or Delete in an empty block: remove it immediately and return to the previous block (or the next one if it is first). At least one block is kept.",
  "Editar bloco": "Edit block",
  "Enumeração das linhas": "Line numbering",
  "Mostrar ou ocultar os números no argumento formatado.": "Show or hide line numbers in the formatted argument.",
  "Espaços de prefixos": "Prefix spacing",
  "Unir símbolos ao próximo termo na apresentação: ¬ A → ¬A, ∀ x → ∀x. Os blocos e a validação permanecem preservados.": "Join prefix symbols to the next token in the display: ¬ A → ¬A, ∀ x → ∀x. Blocks and validation are preserved.",
  "Clique para mostrar ou recolher. Segure por 0,2 segundo para abrir a aparência desta janela.": "Click to expand or collapse. Hold for 0.2 seconds to customize this panel.",
  "Ajustar idioma, tema e tamanho da interface.": "Adjust the language, theme and interface size.",
  "Criar um argumento em branco ou carregar um exemplo.": "Create a blank argument or load an example.",
  "Alternar entre abas com linha discreta e seletor compacto, mantendo o argumento atual.": "Switch between underline tabs and a compact selector, keeping the current argument.",
  "Alterar o nome deste argumento.": "Change this argument's name.",
  "Excluir este argumento. Se houver texto, será pedida confirmação.": "Delete this argument. Confirmation is requested if it contains text.",
  "Ativada. Clique para desativar a conversão das próximas letras.": "Enabled. Click to stop converting newly typed letters.",
  "Clique para converter as próximas letras em maiúsculas.": "Click to convert newly typed letters to uppercase.",
  "Ativar tema claro.": "Switch to light theme.",
  "Ativar tema escuro.": "Switch to dark theme.",
  "Desfazer": "Undo",
  "Desfazer a última operação registrada nas linhas. Ctrl+Z também permite desfazer operações.": "Undo the last recorded row operation. Ctrl+Z also undoes operations.",
  "Refazer": "Redo",
  "Refazer a última operação desfeita. Ctrl+Shift+Z também refaz operações.": "Redo the last undone operation. Ctrl+Shift+Z also redoes operations.",
  "Como usar": "How to use",
  "Clique nos blocos para editar. Arraste as janelas para organizar.": "Click blocks to edit. Drag windows to arrange.",
  "Explore as dicas: elas revelam atalhos.": "Explore hover hints for useful shortcuts.",
  "Tempo de segurar os botões": "Hold action delay",
  "em segundos": "in seconds",
  "Ativar dicas de hover": "Enable hover hints",
  "Recentes": "Recent",
  "Favoritos": "Favorites",
  "Recolher ou expandir categoria": "Collapse or expand category",
  "Fechar categoria": "Close category",
  "Removido dos favoritos": "Removed from favorites",
  "Adicionado aos favoritos": "Added to favorites",
  "Alt + clique para": "Alt + click to",
  "remover dos favoritos": "remove from favorites",
  "favoritar": "add to favorites",
  "Nenhum símbolo nesta coleção.": "No symbols in this collection.",
  "Nenhum símbolo encontrado. Tente outro nome ou símbolo.": "No symbols found. Try another name or symbol.",
  "Nenhum símbolo favorito.": "No favorite symbols.",
  "Os símbolos inseridos aparecem aqui.": "Inserted symbols appear here.",
  "Nenhum símbolo encontrado.": "No symbols found.",
  "Categoria deste card": "Card category",
  "Fechar janela": "Close window",
  "Mover janela": "Move window",
  "Redimensionar janela": "Resize window",
  "Arraste para ajustar largura e altura. Setas ajustam em 10 pixels.": "Drag to adjust width and height. Arrow keys adjust by 10 pixels.",
  "Categorias": "Categories",
  "Categorias de símbolos": "Symbol categories",
  "Colocar barra na vertical": "Make category bar vertical",
  "Colocar barra na horizontal": "Make category bar horizontal",
  "Recolher barra à biblioteca": "Return category bar to library",
  "Destacar barra de categorias": "Detach category bar",
  "Mover barra de categorias. Segure e arraste em qualquer direção.": "Move category bar. Hold and drag in any direction.",
  "Mover biblioteca; duplo clique recolhe": "Move library; double-click docks",
  "Mover barra de categorias": "Move category bar",
  "Barra de categorias": "Category bar",
  "Criar janela desta categoria. Segure e arraste em qualquer direção.": "Create a window of this category. Hold and drag in any direction.",
  "Clique para mostrar esta coleção.": "Click to show this collection.",
  "Reorganizar janelas": "Reorganize windows",
  "Clique para recolher a biblioteca e centralizar os painéis. Textos e demais configurações são preservados.": "Click to dock the symbol library and center the argument panels. Content and other settings are preserved.",
  "Conectivos": "Connectives",
  "Quantificadores": "Quantifiers",
  "Modais": "Modal",
  "Dedução": "Deduction",
  "Operações com conjuntos": "Set operations",
  "Relações entre conjuntos": "Set relations",
  "Comuns": "Common",
  "Salvar neste navegador": "Save in this browser"
};
const interfaceLanguageReverse = Object.fromEntries(Object.entries(interfaceLanguagePairs).map(([pt,en])=>[en.trim(),pt.trim()]));
function interfaceText(pt,en) {
  if (typeof pt === "string" && typeof en === "string") {
    interfaceLanguagePairs[pt.trim()] = en.trim();
    interfaceLanguageReverse[en.trim()] = pt.trim();
  }
  return ui.language === "en" ? en : pt;
}

;
function createLanguagePicker(button,flags,getLanguage,setLanguage){
 const icon='<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5h12M9 2v3M5 5c1 5 4 8 8 10M13 5c-1 5-4 8-8 10m9 6 4-10 4 10m-6.5-4h5"/></svg>';
 button.innerHTML=icon;button.setAttribute('aria-label','Idioma / Language');button.removeAttribute('title');button.dataset.hintText='Idioma / Language';
 const picker=document.createElement('div');picker.id='site-language-picker';picker.className='site-language-picker';picker.setAttribute('popover','auto');picker.setAttribute('role','menu');picker.setAttribute('aria-label','Idioma / Language');picker.setAttribute('translate','no');
 const choices=[['pt-BR','pt','Português Brasileiro (pt-br)'],['en','en','International English (en)']];
 for(const [code,flag,label] of choices){const option=document.createElement('button');option.type='button';option.className='site-language-card';option.dataset.languageChoice=code;option.setAttribute('role','menuitemradio');option.setAttribute('lang',code);option.innerHTML='<span class="site-language-flag" aria-hidden="true">'+flags[flag]+'</span><span class="site-language-name"></span>';option.lastElementChild.textContent=label;option.addEventListener('click',()=>{if(getLanguage()!==code)setLanguage(code);refresh();picker.hidePopover();button.focus({preventScroll:true});button.dispatchEvent(new Event('languagechange'));});picker.append(option);}
 const parent=button.closest('dialog,[popover]')||document.body;parent.append(picker);button.setAttribute('popovertarget',picker.id);button.setAttribute('aria-haspopup','menu');button.setAttribute('aria-expanded','false');
 function refresh(){const code=getLanguage()==='en'?'en':'pt-BR';button.dataset.language=code==='en'?'en':'pt';for(const option of picker.children){const active=option.dataset.languageChoice===code;option.setAttribute('aria-checked',String(active));option.tabIndex=active?0:-1;}}
 function position(){const anchor=button.getBoundingClientRect(),width=picker.offsetWidth||Math.min(448,innerWidth-24),height=picker.offsetHeight||88;const bounds=parent.getBoundingClientRect(),left=Math.max(bounds.left+12,Math.min(anchor.right-width,bounds.right-width-12));picker.style.left=Math.max(12,Math.min(innerWidth-width-12,left))+'px';picker.style.top=Math.max(12,anchor.bottom+8+height<=innerHeight-12?anchor.bottom+8:anchor.top-height-8)+'px';}
 picker.addEventListener('beforetoggle',event=>{if(event.newState==='open'){refresh();position();}});
 picker.addEventListener('toggle',event=>{const open=event.newState==='open';button.setAttribute('aria-expanded',String(open));if(open){position();picker.querySelector('[aria-checked="true"]').focus({preventScroll:true});}});
 picker.addEventListener('keydown',event=>{if(event.key==='Tab'){picker.hidePopover();button.focus({preventScroll:true});return;}if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'].includes(event.key))return;event.preventDefault();const options=[...picker.children],index=options.indexOf(document.activeElement);options[event.key==='Home'?0:event.key==='End'?1:(index+1)%2].focus();});
 window.addEventListener('resize',()=>{if(picker.matches(':popover-open'))position();});
 parent.addEventListener('scroll',event=>{if(picker.matches(':popover-open')&&!picker.contains(event.target))picker.hidePopover();},true);
 parent.addEventListener('close',()=>{if(picker.matches(':popover-open'))picker.hidePopover();});parent.addEventListener('toggle',event=>{if(event.target===parent&&event.newState==='closed'&&picker.matches(':popover-open'))picker.hidePopover();});
 refresh();return{refresh};
}
;
// Isolated state and mounting; native appearance functions below are copied from Logic Editor.
const root=document.getElementById('lp-hybrid'),storageKey='toybile-default-configurations-v1:'+location.pathname;let ui={theme:'light',themeMode:'light',language:'en',themeSectionOpen:true,...host.getPreferences?.(LPThemeFamilies)};try{Object.assign(ui,JSON.parse(localStorage.getItem(storageKey)||'{}'));}catch{}
function saveUI(){try{localStorage.setItem(storageKey,JSON.stringify(ui));}catch{}}

const icons = {
  "panel-left": '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16"/>',
  moon: '<path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
  "eye-off":
    '<path d="m3 3 18 18M10.6 5.1A13 13 0 0 1 12 5c6.5 0 10 7 10 7a19 19 0 0 1-3.1 4M6.5 6.5A20 20 0 0 0 2 12s3.5 7 10 7a13 13 0 0 0 5.5-1.5"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  copy: '<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
  download: '<path d="M12 3v12m-5-5 5 5 5-5M4 16v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4"/>',
};
const languageFlags = {
  pt: '<svg viewBox="0 0 30 20" aria-hidden="true" style="stroke:none;width:26px;height:18px"><rect width="30" height="20" rx="2" fill="#229e45"/><path d="M15 2 28 10 15 18 2 10Z" fill="#ffdf42"/><circle cx="15" cy="10" r="5" fill="#24459b"/><path d="M10.5 8.5q5-1 9 3" fill="none" stroke="#fff" stroke-width="1"/></svg>',
  en: '<svg viewBox="0 0 30 20" aria-hidden="true" style="stroke:none;width:26px;height:18px"><rect width="30" height="20" rx="2" fill="#243b79"/><path d="m0 0 30 20M30 0 0 20" stroke="#fff" stroke-width="5"/><path d="m0 0 30 20M30 0 0 20" stroke="#ce3545" stroke-width="2"/><path d="M15 0v20M0 10h30" stroke="#fff" stroke-width="7"/><path d="M15 0v20M0 10h30" stroke="#ce3545" stroke-width="4"/></svg>',
};
const translations=Object.assign(interfaceLanguagePairs,{'Mão personalizada':'Custom hand','Padrão do sistema':'System default','Tamanho do cursor':'Cursor size','Aparência':'Appearance','Seções das configurações':'Settings sections','Alterações automáticas':'Changes apply automatically','Temas':'Themes','Informações sobre temas':'Theme information'}),reverseTranslations=interfaceLanguageReverse;Object.assign(reverseTranslations,Object.fromEntries(Object.entries(translations).map(([pt,en])=>[en,pt])));let languagePicker;
const themeSystemScheme=matchMedia('(prefers-color-scheme: dark)'),themeToggle=root.querySelector('.hy-theme-section-toggle'),themeCollapse=root.querySelector('#settings-theme-options');
function isDarkTheme(theme = ui.theme) { return LPThemeVariants.find(item=>item.id===theme)?.scheme === "dark"; }
function currentThemeFamily() { return LPThemeFamilies.find(family=>family.light.id===ui.theme||family.dark.id===ui.theme)||LPThemeFamilies[0]; }
function resolveThemeScheme(mode) {
  const dark=mode==="auto"?themeSystemScheme.matches:mode==="dark";
  ui.theme=currentThemeFamily()[dark?"dark":"light"].id;
}
function restoreThemeAppearance() {
  ui.theme="light";ui.themeMode="light";delete ui.backgroundTranslucency;applyUI();
}
function createThemeOptions() {
  const options=document.createElement("div");options.className="hy-theme-options";
  const modeLabel=document.createElement("h3");modeLabel.className="hy-theme-group-title";modeLabel.textContent=interfaceText("Modo de exibição","Display mode");
  const modes=document.createElement("div");modes.className="hy-theme-modes";modes.setAttribute("role","group");modes.setAttribute("aria-label",modeLabel.textContent);
  for(const [mode,pt,en,icon] of [["auto","Automático","Automatic",'<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>'],["light","Claro","Light",icons.sun],["dark","Escuro","Dark",icons.moon]]) {
    const button=document.createElement("button");button.type="button";button.className="hy-theme-mode";button.dataset.themeMode=mode;
    button.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true">'+icon+'</svg>';
    const caption=document.createElement("span");caption.textContent=interfaceText(pt,en);button.append(caption);
    button.onclick=()=>{ui.themeMode=mode;resolveThemeScheme(mode);applyUI();};modes.append(button);
  }
  const modeNote=document.createElement("p");modeNote.className="hy-theme-mode-note";
  options.append(modeLabel,modes,modeNote);
  const translucency=document.createElement("label");translucency.className="hy-theme-translucency";
  const text=document.createElement("span");text.className="hy-theme-translucency-copy";
  const caption=document.createElement("strong");caption.textContent=interfaceText("Fundo translúcido","Translucent background");
  const description=document.createElement("span");description.textContent=interfaceText("Luz e cores suaves sob os painéis.","Soft light and colors beneath the panels.");text.append(caption,description);
  const status=document.createElement("span");status.className="hy-theme-translucency-status";
  const control=document.createElement("input");control.type="checkbox";control.className="hy-theme-translucency-input";control.setAttribute("role","switch");control.setAttribute("aria-label",caption.textContent);
  control.checked=ui.backgroundTranslucency ?? !["light","dark"].includes(ui.theme);
  control.onchange=()=>{ui.backgroundTranslucency=control.checked;applyUI();};
  translucency.append(text,status,control);options.append(translucency);
  const title=document.createElement("h3");title.className="hy-theme-group-title";title.textContent=interfaceText("Temas","Themes");options.append(title);
  const grid=document.createElement("div");grid.className="hy-theme-grid";
  for(const family of LPThemeFamilies) {
    const choice=document.createElement("button");choice.type="button";choice.className="hy-theme-option";choice.dataset.themeFamily=family.id;
    const swatch=document.createElement("span");swatch.className="hy-theme-swatch";swatch.setAttribute("aria-hidden","true");
    swatch.innerHTML='<span class="hy-theme-mini-bar"></span><span class="hy-theme-mini-side"></span><span class="hy-theme-mini-line"></span><span class="hy-theme-mini-line hy-theme-mini-short"></span>';
    const name=document.createElement("span");name.textContent=interfaceText(family.name,family.labelEn);
    choice.append(swatch,name);choice.onclick=()=>{
      const dark=ui.themeMode==="auto"?themeSystemScheme.matches:isDarkTheme();
      ui.theme=family[dark?"dark":"light"].id;applyUI();
    };grid.append(choice);
  }
  const footer=document.createElement("div");footer.className="hy-theme-actions";
  const reset=document.createElement("button");reset.type="button";reset.className="hy-button hy-theme-reset";reset.textContent=interfaceText("Restaurar padrão","Restore default");reset.onclick=restoreThemeAppearance;
  footer.append(reset);options.append(grid,footer);return options;
}
function setThemeSectionOpen(open) {
  themeToggle.setAttribute("aria-expanded",String(open));themeCollapse.dataset.open=String(open);
  themeCollapse.inert=!open;themeCollapse.setAttribute("aria-hidden",String(!open));
}
function translated(text) {
  const words = text.trim(),
    english = ui.language === "en";
  const dict = english ? translations : reverseTranslations;
  let value = dict[words];
  if (value === undefined) {
    let match;
    if (english && (match = words.match(/^Expressão da linha (\d+)$/)))
      value = "Expression on line " + match[1];
    else if (!english && (match = words.match(/^Expression on line (\d+)$/)))
      value = "Expressão da linha " + match[1];
    else if (
      english &&
      (match = words.match(/^Linha (\d+): (conclusão|premissa)\. Alternar tipo$/))
    )
      value =
        "Line " +
        match[1] +
        ": " +
        (match[2] === "conclusão" ? "conclusion" : "premise") +
        ". Toggle type";
    else if (!english && (match = words.match(/^Line (\d+): (conclusion|premise)\. Toggle type$/)))
      value =
        "Linha " +
        match[1] +
        ": " +
        (match[2] === "conclusion" ? "conclusão" : "premissa") +
        ". Alternar tipo";
    else if (
      english &&
      (match = words.match(/^Mover linha (\d+)\. Arraste ou use as setas do teclado\.$/))
    )
      value = "Move line " + match[1] + ". Drag or use the arrow keys.";
    else if (!english && (match = words.match(/^Move line (\d+)\. Drag or use the arrow keys\.$/)))
      value = "Mover linha " + match[1] + ". Arraste ou use as setas do teclado.";
  }
  if (value === undefined && english && /^Excluir Argumento \d+$/.test(words))
    value = words.replace("Excluir Argumento", "Delete Argument");
  else if (value === undefined && !english && /^Delete Argument \d+$/.test(words))
    value = words.replace("Delete Argument", "Excluir Argumento");
  if (value === undefined && english && /^Argumento \d+$/.test(words))
    value = words.replace("Argumento", "Argument");
  else if (value === undefined && !english && /^Argument \d+$/.test(words))
    value = words.replace("Argument", "Argumento");
  if (value === undefined && words.includes(" · ")) {
    const [operation, ...rest] = words.split(" · ");
    if (dict[operation]) value = dict[operation] + " · " + rest.join(" · ");
  }
  if (value === undefined) {
    for (const separator of [" — ", ": "]) {
      const split = words.indexOf(separator);
      if (split < 0) continue;
      const prefix = words.slice(0, split);
      const suffix = words.slice(split + separator.length);
      if (dict[prefix]) value = dict[prefix] + separator + suffix;
      else if (separator === ": " && dict[prefix + ":"]) value = dict[prefix + ":"] + " " + suffix;
      else if (separator === " — " && dict[suffix]) value = prefix + separator + dict[suffix];
      if (value !== undefined) break;
    }
  }
  return value === undefined ? text : text.replace(words, value);
}
function applyLanguage() {
  const english = ui.language === "en";
  const languageCode=english?"en":"pt-BR";
  if(document.documentElement.lang!==languageCode)document.documentElement.lang=languageCode;
  document.title = english ? "Logic Editor" : "Editor de Lógica";
  const flag = root.querySelector("#settings-language");
  languagePicker?.refresh();
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (
      node.parentElement.closest(
        "pre,input,textarea,script,style,output,[translate=no],#settings-language,.hy-custom-argument-name,[data-user-content]",
      )
    )
      continue;
    const value = translated(node.nodeValue);
    if (value !== node.nodeValue) node.nodeValue = value;
  }
  const sharedHint = document.querySelector("#lp-shared-hover-hint");
  if (sharedHint) {
    const hintWalker = document.createTreeWalker(sharedHint, NodeFilter.SHOW_TEXT);
    while (hintWalker.nextNode()) {
      const node = hintWalker.currentNode;
      const value = translated(node.nodeValue);
      if (value !== node.nodeValue) node.nodeValue = value;
    }
  }
  root.querySelectorAll("[aria-label],[title],[data-hint-text],[placeholder]").forEach((element) => {
    if (element === flag || element.closest(".hy-custom-argument-name,[translate=no]")) return;
    for (const attribute of ["aria-label", "title", "data-hint-text", "placeholder"]) {
      if (attribute === "aria-label" && element.dataset.userLabel === "true") continue;
      const value = element.getAttribute(attribute);
      if (value !== null) {
        const next = translated(value);
        if (next !== value) element.setAttribute(attribute, next);
      }
    }
  });
}
function applyUI() {
  if(ui.themeMode==="auto")resolveThemeScheme("auto");
  root.dispatchEvent(new Event("lp-ui-colors"));
  root.dataset.focus = String(ui.focus);
  root.dataset.theme=ui.theme;
  document.documentElement.dataset.editorTheme=ui.theme;
  root.dataset.palette = ["light", "dark"].includes(ui.theme) ? "original" : "ambient";
  document.documentElement.dataset.editorPalette = root.dataset.palette;
  const translucent=ui.backgroundTranslucency ?? root.dataset.palette === "ambient";
  root.dataset.translucency=String(translucent);
  root.querySelectorAll(".hy-theme-translucency-input").forEach(control=>control.checked=translucent);
  root.querySelectorAll(".hy-theme-mode").forEach(button=>button.setAttribute("aria-pressed",String(button.dataset.themeMode===(ui.themeMode==="auto"?"auto":isDarkTheme()?"dark":"light"))));
  root.querySelectorAll(".hy-theme-translucency-status").forEach(label=>label.textContent=translucent?interfaceText("Ativado","On"):interfaceText("Desativado","Off"));
  root.querySelectorAll(".hy-theme-mode-note").forEach(note=>note.textContent=ui.themeMode==="auto"?interfaceText("Acompanha o tema do navegador.","Follows your browser theme."):interfaceText("Escolha uma tonalidade abaixo.","Choose a palette below."));
  const paletteStyle = getComputedStyle(root);
  document.documentElement.style.setProperty("--editor-scrollbar-accent", paletteStyle.getPropertyValue("--blue").trim());
  for (const token of ["paper", "ink", "edge"]) document.documentElement.style.setProperty("--editor-hint-" + token, paletteStyle.getPropertyValue("--" + token));
  root.style.colorScheme = isDarkTheme() ? "dark" : "light";
  root.querySelectorAll(".hy-theme-option").forEach(button=>{
    const family=LPThemeFamilies.find(item=>item.id===button.dataset.themeFamily),variant=family[isDarkTheme()?"dark":"light"];
    button.dataset.themeValue=variant.id;button.setAttribute("aria-pressed",String(family.id===currentThemeFamily().id));
    const swatch=button.querySelector(".hy-theme-swatch");swatch.style.background=variant.canvas;swatch.style.borderColor=variant.edge;
    swatch.style.setProperty("--mini-paper",variant.soft);swatch.style.setProperty("--mini-accent",variant.accent);swatch.style.setProperty("--mini-muted",variant.quiet);
  });
  document.documentElement.style.colorScheme = root.style.colorScheme;
  host.applyAppearance?.(ui,currentThemeFamily(),LPThemeFamilies);
  saveUI();
}

const old=root.querySelector('.hy-theme-options');old.replaceWith(createThemeOptions());root.querySelector('#settings-appearance').insertAdjacentHTML('beforeend',"<section class=\"hy-setting appearance-cursor\" id=\"cursor-settings\"><h3 class=\"hy-theme-group-title\">Cursor</h3><div class=\"hy-theme-modes\"><button class=\"hy-button hy-cursor-mode\" id=\"cursor-custom\">Custom hand</button><button class=\"hy-button hy-cursor-mode\" id=\"cursor-system\">System default</button></div><label class=\"cursor-size-row\" for=\"cursor-size\"><span>Cursor size</span><output id=\"cursor-size-value\">100%</output></label><input type=\"range\" id=\"cursor-size\" min=\"60\" max=\"160\" step=\"any\" value=\"100\"></section>");
setThemeSectionOpen(ui.themeSectionOpen!==false);themeToggle.onclick=()=>{ui.themeSectionOpen=themeToggle.getAttribute('aria-expanded')!=='true';setThemeSectionOpen(ui.themeSectionOpen);saveUI();};
languagePicker=createLanguagePicker(root.querySelector('#settings-language'),languageFlags,()=>ui.language,code=>{ui.language=code;applyLanguage();host.setLanguage?.(code);saveUI();});
root.querySelector('#editor-settings .hy-dialog-close').onclick=()=>root.querySelector('#editor-settings').hidePopover();
root.querySelector('#settings-default').onclick=()=>{ui={theme:'light',themeMode:'light',language:'en',themeSectionOpen:true};setThemeSectionOpen(true);applyUI();applyLanguage();};
themeSystemScheme.addEventListener('change',()=>{if(ui.themeMode==='auto')applyUI();});const LPDialogChrome={close:b=>b};applyUI();applyLanguage();


// Cursor uses the exact same collapse structure and transitions as native Themes.
(()=>{
 const section=root.querySelector('#cursor-settings'),heading=section.querySelector('h3');
 const toggle=document.createElement('button');toggle.type='button';toggle.className='hy-theme-section-toggle';toggle.setAttribute('aria-controls','settings-cursor-options');toggle.innerHTML='<span>Cursor</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg>';heading.replaceChildren(toggle);
 const collapse=document.createElement('div');collapse.className='hy-theme-collapse';collapse.id='settings-cursor-options';const inner=document.createElement('div');inner.className='hy-theme-collapse-inner';
 while(heading.nextSibling)inner.append(heading.nextSibling);collapse.append(inner);section.append(collapse);
 function setOpen(open){toggle.setAttribute('aria-expanded',String(open));collapse.dataset.open=String(open);collapse.inert=!open;collapse.setAttribute('aria-hidden',String(!open));}
 setOpen(ui.cursorSectionOpen!==false);toggle.onclick=()=>{ui.cursorSectionOpen=toggle.getAttribute('aria-expanded')!=='true';setOpen(ui.cursorSectionOpen);saveUI();};root.querySelector('#settings-default').addEventListener('click',()=>setOpen(true));
})();

;
function getHoldDelay() {
  const value = Number(ui.holdDelaySeconds);
  return Math.round(Math.max(0.01, Math.min(1, Number.isFinite(value) ? value : 0.5)) * 1000);
}
function isThemeBackgroundTarget(node){if(!(node instanceof Element)||root.querySelector('#editor-settings:popover-open')||realDocument.querySelector('dialog[open]'))return false;if(node.closest('button,a,input,select,textarea,label,summary,canvas,svg,video,audio,p,h1,h2,h3,li,article,[contenteditable=true]'))return false;return node===realDocument.body||node===realDocument.documentElement||!!node.closest('main,section,header,footer,aside,.hub-product,.workspace,.page,.shell');}
function openBackgroundThemes(pointerId) {
  if(root.querySelector('.hy-theme-dialog[open]'))return;
  const dialog=document.createElement('dialog');dialog.className='hy-feature-dialog hy-theme-dialog';
  const head=document.createElement('div');head.className='hy-settings-head';
  const title=document.createElement('h2');title.textContent=interfaceText('Temas e aparência','Themes and appearance');title.id='background-theme-title';
  dialog.setAttribute('aria-labelledby',title.id);
  const close=document.createElement('button');close.type='button';close.className='hy-button hy-icon-button';close.setAttribute('aria-label',interfaceText('Fechar','Close'));
  close.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>';
  LPDialogChrome.close(close);close.onclick=()=>dialog.close();const eyebrow=document.createElement('p');eyebrow.className='hy-theme-eyebrow';eyebrow.textContent=interfaceText('Do seu jeito','Make it yours');
  const subtitle=document.createElement('p');subtitle.className='hy-theme-subtitle';subtitle.textContent=interfaceText('Cores tranquilas para acompanhar o seu raciocínio.','Calm colors to accompany your reasoning.');
  head.append(eyebrow,title,subtitle,close);
  const options=createThemeOptions();
  const done=document.createElement('button');done.type='button';done.className='hy-button hy-theme-done';done.textContent=interfaceText('Pronto','Done');done.onclick=()=>dialog.close();options.querySelector('.hy-theme-actions').append(done);
  dialog.append(head,options);
  let openingPointer=pointerId;
  const released=e=>{if(e.pointerId!==openingPointer)return;document.removeEventListener('pointerup',released,true);document.removeEventListener('pointercancel',released,true);requestAnimationFrame(()=>{openingPointer=undefined;});};
  if(pointerId!==undefined){document.addEventListener('pointerup',released,true);document.addEventListener('pointercancel',released,true);}
  dialog.addEventListener('click',e=>{if(openingPointer!==undefined&&e.pointerId===openingPointer){e.preventDefault();e.stopImmediatePropagation();}},true);
  dialog.onclose=()=>{document.removeEventListener('pointerup',released,true);document.removeEventListener('pointercancel',released,true);dialog.remove();};dialog.addEventListener('click',e=>{if(e.target!==dialog)return;const b=dialog.getBoundingClientRect();if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)dialog.close();});
  root.append(dialog);applyUI();dialog.showModal();
}
(() => {
  let gesture=null,lastTap=null,frame=0,hideTimer=0;
  const visual=document.createElement('div');visual.className='hy-background-feedback';visual.setAttribute('popover','manual');visual.setAttribute('aria-hidden','true');root.append(visual);
  const icons={
    sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5"/>',
    moon:'<path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z"/>',
    gear:'<path d="m9.5 3-.7 2.2-2 .9-2.1-.5-2 3.4 1.5 1.7v2.6L2.7 15l2 3.4 2.1-.5 2 .9.7 2.2h4.9l.7-2.2 2-.9 2.1.5 2-3.4-1.5-1.7v-2.6L21.2 9l-2-3.4-2.1.5-2-.9L14.4 3Z"/><circle cx="12" cy="12" r="3"/>'
  };
  function icon(name){visual.innerHTML='<span><svg viewBox="0 0 24 24">'+icons[name]+'</svg></span>';}
  function cancel(){if(gesture)clearTimeout(gesture.timer);gesture=null;cancelAnimationFrame(frame);clearTimeout(hideTimer);if(visual.matches(':popover-open'))visual.hidePopover();}
  // Prevent the browser's multi-click word selection only on gesture background.
  document.addEventListener('mousedown',event=>{
    if(event.button===0&&event.detail>1&&isThemeBackgroundTarget(event.target))event.preventDefault();
  },true);
  document.addEventListener('pointerdown',event=>{
    cancel();if(event.button!==0||!event.isPrimary||!isThemeBackgroundTarget(event.target)){lastTap=null;return;}
    const now=performance.now(),second=lastTap&&now-lastTap.time<420&&Math.hypot(event.clientX-lastTap.x,event.clientY-lastTap.y)<32;
    lastTap=null;const state={id:event.pointerId,x:event.clientX,y:event.clientY,start:now,duration:getHoldDelay(),second};gesture=state;
    icon(second?'gear':(isDarkTheme()?'sun':'moon'));
    visual.style.left=Math.min(innerWidth-44,Math.max(8,event.clientX-18))+'px';visual.style.top=Math.min(innerHeight-44,Math.max(8,event.clientY-54))+'px';visual.style.setProperty('--hold-progress','0%');visual.showPopover();
    function progress(){if(gesture!==state)return;visual.style.setProperty('--hold-progress',Math.min(100,(performance.now()-now)/state.duration*100)+'%');frame=requestAnimationFrame(progress);}frame=requestAnimationFrame(progress);
    state.timer=setTimeout(()=>{if(gesture!==state)return;state.fired=true;cancelAnimationFrame(frame);visual.style.setProperty('--hold-progress','100%');if(second){visual.hidePopover();root.querySelector('#editor-settings').showPopover();}else{ui.themeMode=isDarkTheme()?'light':'dark';resolveThemeScheme(ui.themeMode);applyUI();icon(isDarkTheme()?'moon':'sun');hideTimer=setTimeout(()=>{if(visual.matches(':popover-open'))visual.hidePopover();},200);}},state.duration);
  });
  document.addEventListener('pointerup',event=>{if(!gesture||event.pointerId!==gesture.id)return;const state=gesture;if(state.fired&&state.second)requestAnimationFrame(()=>root.querySelector('#editor-settings').showPopover());if(!state.fired&&!state.second&&performance.now()-state.start<300)lastTap={time:performance.now(),x:state.x,y:state.y};cancel();},true);
  document.addEventListener('pointermove',event=>{if(gesture&&event.pointerId===gesture.id&&Math.hypot(event.clientX-gesture.x,event.clientY-gesture.y)>14){lastTap=null;cancel();}});
  for(const name of ['pointercancel','scroll','keydown'])document.addEventListener(name,()=>{lastTap=null;cancel();},true);
  window.addEventListener('blur',()=>{lastTap=null;cancel();});
})();

;
// Maximize is temporary presentation state; stored window geometry is preserved.
(() => {
  const states=new Map(),installed=new WeakMap();
  const motions=new WeakMap();
  function capture(window){motions.get(window)?.cancel();return window.getBoundingClientRect();}
  function spring(window,before){
    if(matchMedia('(prefers-reduced-motion: reduce)').matches||!window.isConnected)return;
    const after=window.getBoundingClientRect();if(!before.width||!before.height||!after.width||!after.height)return;
    const dx=before.left-after.left,dy=before.top-after.top,sx=before.width/after.width,sy=before.height/after.height;
    const origin=window.style.transformOrigin;window.style.transformOrigin='0 0';
    const base=getComputedStyle(window).transform,tail=base==='none'?'':' '+base;
    const pose=t=>'translate('+dx*t+'px,'+dy*t+'px) scale('+(1+(sx-1)*t)+','+(1+(sy-1)*t)+')'+tail;
    const animation=window.animate([{transform:pose(1),offset:0,easing:'cubic-bezier(.2,.75,.25,1)'},{transform:pose(-.025),offset:.72,easing:'ease-in-out'},{transform:pose(.006),offset:.88,easing:'ease-out'},{transform:pose(0),offset:1}],{duration:540});
    motions.set(window,animation);const clean=()=>{if(motions.get(window)===animation){window.style.transformOrigin=origin;motions.delete(window);}};animation.onfinish=clean;animation.oncancel=clean;return animation;
  }
  const icons={maximize:'<rect x="4" y="4" width="16" height="16" rx="2"/>',restore:'<path d="M8 8V4h12v12h-4"/><rect x="4" y="8" width="12" height="12" rx="1.5"/>'};
  function label(button,maximized){const text=interfaceText(maximized?'Restaurar tamanho':'Maximizar janela',maximized?'Restore size':'Maximize window');button.setAttribute('aria-label',text);button.dataset.hintText=text;button.setAttribute('aria-pressed',String(maximized));button.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true">'+icons[maximized?'restore':'maximize']+'</svg>';}
  function restore(window,animate=true){const state=states.get(window);if(!state)return;const before=capture(window);window.classList.remove('hy-window-maximized');if(state.frame){window.hidePopover();if(state.popover===null)window.removeAttribute('popover');else window.setAttribute('popover',state.popover);state.placeholder.remove();window.style.cssText=state.style;}states.delete(window);window.scrollTop=state.scrollTop;label(state.button,false);const motion=animate?spring(window,before):null;if(state.frame){const release=()=>{if(![...states.values()].some(s=>s.frame))delete root.dataset.windowMaximized;};if(motion)motion.finished.then(release,release);else release();}}
  function toggle(window,button){if(states.has(window)){restore(window);return;}const frame=window.matches('.hy-panel-frame');if(frame){for(const [other,state]of states)if(state.frame)restore(other);}
    const before=capture(window);
    const state={button,frame,style:window.style.cssText,scrollTop:window.scrollTop,popover:window.getAttribute('popover')};
    if(frame){const box=window.getBoundingClientRect(),placeholder=document.createElement('div');placeholder.className='hy-maximize-placeholder';placeholder.setAttribute('aria-hidden','true');placeholder.style.cssText='width:'+box.width+'px;height:'+box.height+'px;pointer-events:none;';if(window.parentElement.dataset.manual==='true'){placeholder.style.position='absolute';placeholder.style.left=window.style.left;placeholder.style.top=window.style.top;}window.before(placeholder);state.placeholder=placeholder;root.dataset.windowMaximized='true';window.setAttribute('popover','manual');window.showPopover();}
    states.set(window,state);window.classList.add('hy-window-maximized');label(button,true);spring(window,before);
  }
  function install(window){if(installed.has(window))return;const frame=window.matches('.hy-panel-frame');const close=frame?null:window.querySelector('.hy-dialog-close,.hy-analysis-close,.hy-beta-close');const head=frame?window.querySelector('.hy-panel > .hy-section-head'):close?.parentElement;if(!head)return;
    const button=document.createElement('button');button.type='button';button.className='hy-button hy-icon-button hy-window-maximize';label(button,false);button.addEventListener('pointerdown',e=>e.stopPropagation());button.onclick=e=>{e.stopPropagation();toggle(window,button);};
    if(close){let actions=close.closest('.hy-settings-actions,.hy-window-actions');if(!actions){actions=document.createElement('span');actions.className='hy-window-actions';close.before(actions);actions.append(close);}actions.insertBefore(button,close);}else head.append(button);
    installed.set(window,button);window.addEventListener('close',()=>restore(window));window.addEventListener('toggle',e=>{if(e.target===window&&e.newState==='closed'&&states.has(window)){if(window.id==='editor-settings'){setTimeout(()=>{if(!window.matches(':popover-open'))restore(window,false);},matchMedia('(prefers-reduced-motion: reduce)').matches?0:260);}else restore(window);}});window.addEventListener('cancel',e=>{if(states.has(window)){e.preventDefault();restore(window);button.focus({preventScroll:true});}});
  }
  function scan(){for(const window of root.querySelectorAll('dialog,#editor-settings,.hy-panel-frame'))install(window);for(const [window]of states)if(!window.isConnected)restore(window);}
  let queued=false;new MutationObserver(()=>{if(queued)return;queued=true;queueMicrotask(()=>{queued=false;scan();});}).observe(root,{childList:true,subtree:true});
  document.addEventListener('keydown',event=>{if(event.key!=='Escape')return;for(const [window,state]of states){if(state.frame&&!root.querySelector('dialog[open]')&&!document.querySelector('#editor-settings:popover-open')){event.preventDefault();restore(window);state.button.focus({preventScroll:true});return;}}});
  root.querySelector('#settings-language').addEventListener('languagechange',()=>{for(const window of root.querySelectorAll('dialog,#editor-settings,.hy-panel-frame')){const button=installed.get(window);if(button)label(button,states.has(window));}});scan();
})();

;
const cursorArtwork="<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"46\" height=\"46\" viewBox=\"0 0 256 256\"><image width=\"256\" height=\"256\" href=\"data:image/png;base64,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\"/></svg>";
(()=>{
 const root=document.documentElement,key='toybile-default-cursor-v1:'+location.pathname+'',range=document.getElementById('cursor-size'),value=document.getElementById('cursor-size-value'),custom=document.getElementById('cursor-custom'),system=document.getElementById('cursor-system');
 let state={mode:'system',size:100};try{const saved=JSON.parse(localStorage.getItem(key));if(saved){state.mode=saved.mode==='custom'?'custom':'system';state.size=Math.max(60,Math.min(160,Number(saved.size)||100));}}catch{}
 function apply(){
  root.dataset.siteCursor=state.mode;
  range?.style.setProperty('--cursor-progress',((state.size-60)/100*100)+'%');
  const size=46*state.size/100,x=Math.round(size*56/256),y=Math.round(size*22/256);
  const svg=cursorArtwork.replace('height="46"','height="'+size+'"').replace('width="46"','width="'+size+'"');
  const cursor='url("data:image/svg+xml,'+encodeURIComponent(svg)+'") '+x+' '+y;
  root.style.setProperty('--site-cursor',cursor);root.style.setProperty('--site-cursor-pressed',cursor);
  if(range){range.value=state.size;range.disabled=state.mode==='system';value.textContent=Math.round(state.size)+'%';custom.setAttribute('aria-pressed',String(state.mode==='custom'));system.setAttribute('aria-pressed',String(state.mode==='system'));}
 }
 function save(){try{localStorage.setItem(key,JSON.stringify(state));}catch{}apply();}
 custom?.addEventListener('click',()=>{state.mode='custom';save();});system?.addEventListener('click',()=>{state.mode='system';save();});range?.addEventListener('input',()=>{state.size=Number(range.value);save();});
 document.getElementById('settings-default')?.addEventListener('click',()=>{state={mode:'system',size:100};save();});apply();
})();
const api={addTranslations:pairs=>{Object.assign(translations,pairs);Object.assign(reverseTranslations,Object.fromEntries(Object.entries(pairs).map(([pt,en])=>[en,pt])));}};host.extend?.(root,api);host.setLanguage?.(ui.language);applyLanguage();const syncCursor=()=>{mount.dataset.siteCursor=realDocument.documentElement.dataset.siteCursor||'system';};new MutationObserver(syncCursor).observe(realDocument.documentElement,{attributes:true,attributeFilter:['data-site-cursor']});syncCursor();const open=()=>{if(!realDocument.querySelector('dialog[open]'))root.querySelector('#editor-settings').showPopover();};window.ToybileDefaultSettings={open};const launcher=realDocument.getElementById('appearance-open');if(launcher&&hostSite==='portfolio'){launcher.setAttribute('aria-controls','toybile-settings-host');launcher.addEventListener('click',open);}else if(launcher)launcher.hidden=true;realDocument.addEventListener('keydown',event=>{if(event.altKey&&!event.ctrlKey&&!event.metaKey&&!event.repeat&&event.code==='KeyT'){event.preventDefault();open();}});
})();