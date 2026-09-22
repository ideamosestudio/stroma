# STROMA

Home institucional de STROMA — gestión estratégica de servicios de
alimentación y facility management.

Sitio en producción: **https://stromaservices.com**

## Desarrollo

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev`: entorno de desarrollo (vinext + Cloudflare Workers local).
- `npm run build:pages`: build estático (`next build`, `output: "export"`)
  usado para el deploy real a GitHub Pages.
- `npm run build`: build para el runtime de Cloudflare Workers (vinext),
  usado solo por `npm test`.
- `npm test`: build + test de contenido renderizado
  (`tests/rendered-html.test.mjs`).
- `npm run lint`: ESLint.

## Deploy

El deploy es automático: cada push a `main` dispara el workflow
[`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml),
que hace `next build` y publica `out/` en GitHub Pages. El dominio propio
(`stromaservices.com`) está configurado vía `public/CNAME` y DNS externo.

## Formulario de contacto

Los envíos van a `info@stromaservices.com` a través de
[FormSubmit](https://formsubmit.co) (sin backend propio). La primera vez
que se recibe un envío, FormSubmit pide confirmar esa dirección con un
correo de activación antes de empezar a reenviar los mensajes.

## SEO

`app/layout.tsx` centraliza metadata (Open Graph, Twitter Card, JSON-LD de
Organization), `app/sitemap.ts` y `app/robots.ts` generan
`sitemap.xml`/`robots.txt` en el build. La imagen de preview social es
`public/og-image.png` (1200x630).

## Contenido fuente local

- `content/WEB.docx`: contenido entregado por el cliente.
- `content/DESIGN.md`: referencia estética y sistema visual.

La carpeta `content/` se conserva únicamente en el entorno local y no se
publica en el repositorio.
