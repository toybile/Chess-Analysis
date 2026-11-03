# Chess Analysis Atlas

[Open the Atlas](https://toybile.github.io/Chess-Analysis/)

A bilingual catalog of **30 chess analysis tools**, organized by primary function:

- Game review
- Position explanations
- Cross-game patterns
- Engine exploration

The catalog includes Chess.com, alternative web services, one explicitly identified browser extension, and a position calculator. Filters cross functional boundaries; a primary category is not an assertion that a tool has only one function.

## Features

- English by default; complete English/Brazilian Portuguese catalog and interface.
- Search, access/feature filters, local favorites, and comparisons of up to three tools.
- Individual entries with rationale, documented access limits, interpretation limits and official sources.
- Portfolio-based settings: automatic/light/dark display, the Portfolio's eight palettes plus Atlas, solid/translucent backgrounds, custom/system cursor and cursor size.
- Interface zoom from 70% to 150%, plus/minus controls, slider and 100% reset.
- Settings shortcut: **Alt + T**. Hold empty background for 0.5 seconds to toggle light/dark; tap then hold the second tap to open settings. Moving or scrolling cancels the hold.
- Settings and favorites stay in this browser's local storage. No account, analytics or backend is required.

## Evidence and scope

Official provider documentation was consulted on **2026-11-03**. Offers and prices may change. This is a documentary survey, not an independent benchmark of engine strength, commentary correctness or learning outcomes. The five recommendations prioritize understanding, transparency and cost for the original requester; they are not a measured ranking of educational effectiveness.

An unconfirmed feature is not treated as absent. Forthcoming Shahmat reports are identified as forthcoming. The two unrelated ChessDebrief projects have separate entries. Accuracy scores and single-game rating estimates are not interchangeable between services.

Each entry links to its source. `catalog.json` contains the structured catalog, source URLs, English descriptions and consultation date.

## Run locally

No build or dependency installation is required. Serve the repository root with any static web server, for example:

```sh
python -m http.server 8000
```

Then open `http://localhost:8000`. GitHub Pages publishes the `main` branch root. No GPT Sites hosting is required.

## Files

| File | Purpose |
| --- | --- |
| `index.html`, `style.css` | Layout and original Atlas visual identity |
| `app.js` | Search, favorites, details and comparison |
| `data.js`, `catalog-en.js`, `catalog-extra.js` | Catalog and English translations |
| `i18n.js` | Local English/Portuguese interface translations |
| `settings.js`, `settings.css`, `palettes.js` | Persistent appearance, gestures and zoom |
| `assets/cursor-settings.js`, `assets/glove-cursor.css` | Portfolio custom-hand cursor and size controls |
| `catalog.json` | Structured catalog and sources |

The cursor implementation/artwork and palette values were reused from the user's Portfolio at [toybile/toybile.github.io](https://github.com/toybile/toybile.github.io). Names and marks of third-party services belong to their respective owners; inclusion does not imply affiliation or endorsement. The catalog's typography optionally loads DM Sans and Manrope from Google Fonts and falls back to local sans-serif fonts.

---

## Português

Catálogo com **30 ferramentas**, busca, filtros, favoritos e comparação. O idioma inicial é inglês; português está disponível em Configurações. O painel reproduz o padrão do Portfólio e acrescenta zoom de 70% a 150%. Preferências são salvas apenas no navegador.

Consulta documental realizada em **03/11/2026**. Os recursos e limites são os anunciados nas fontes oficiais, sem teste integral de todos os serviços ou validação de resultados de aprendizagem. As fichas distinguem recursos não confirmados, lançamentos futuros e modalidades de acesso. O site é estático e pode ser hospedado diretamente no GitHub Pages.
