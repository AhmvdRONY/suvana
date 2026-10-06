# SUVANA

Premium American streetwear site. HTML5, CSS3, vanilla JavaScript only.

## Open the site

Double-click `index.html`, or from this folder:

```bash
npx --yes serve .
```

Then open the URL shown in the terminal.

## Edit without hunting

| What | Where |
| --- | --- |
| Products, prices, sizes, colors, photos | `js/products.js` → `SUVANA_PRODUCTS` |
| WhatsApp number | `js/products.js` → `SUVANA_CONFIG.whatsapp` (digits only, country code, no +) |
| Instagram / Facebook / TikTok | `js/products.js` → `SUVANA_CONFIG` |
| Hero, lookbook, Instagram, category photos | `js/products.js` (`SUVANA_HERO`, `SUVANA_LOOKBOOK`, …) |
| All English / Arabic UI copy | `js/translations.js` |
| Visual identity | `css/style.css` |
| Wordmark SVG | `images/logo/suvana.svg` |

Drop replacement photos into `images/products`, `images/hero`, and `images/lookbook`, then point the URLs in `js/products.js` at those files (example: `images/products/essential-hoodie-1.jpg`).

Language (`suvana_lang`) and cart (`suvana_cart`) persist in localStorage.

## Pages

- `index.html` — home
- `shop.html` — catalog, filters, sort (`?cat=hoodies`)
- `product.html?id=essential-hoodie` — gallery, sizes, WhatsApp order
- `about.html` — brand story
- `contact.html`, `size-guide.html`, `privacy.html`, `terms.html`
