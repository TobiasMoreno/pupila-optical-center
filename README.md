# Pupila Centro Óptico

Sitio institucional y catálogo consultivo para una óptica boutique. Está construido con Next.js (App Router), TypeScript, Tailwind CSS y Lucide Icons. No incluye carrito, pagos ni registro: las conversiones se realizan por WhatsApp y mediante un formulario compatible con Netlify Forms.

## Desarrollo local

Requisitos: Node.js 20 o superior y npm.

```bash
npm install
npm run dev
```

Abrí `http://localhost:3000`. Los comandos de verificación disponibles son:

```bash
npm run type-check
npm run lint
npm run build
```

## Configurar WhatsApp

Copiá `.env.example` como `.env.local` y usá el número en formato internacional, sólo con dígitos:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5493518649121
NEXT_PUBLIC_CONTACT_PROVIDER=formspree
NEXT_PUBLIC_FORMSPREE_FORM_ID=xxxxxxxx
```

Todos los enlaces se generan en `src/lib/whatsapp.ts`. Los mensajes de producto incluyen automáticamente marca y modelo.

`NEXT_PUBLIC_CONTACT_PROVIDER=formspree` envía el formulario por email usando Formspree. `NEXT_PUBLIC_FORMSPREE_FORM_ID` es el identificador público que aparece en el endpoint del formulario. También se puede usar `whatsapp` para preparar la consulta en WhatsApp o `netlify` para Netlify Forms.

## Cambiar la información de la óptica

Nombre, descripción, email, Instagram, dirección, horarios y navegación se administran en un único archivo:

```text
src/config/site.ts
```

Los colores de marca están centralizados como variables CSS al comienzo de `src/app/globals.css`. La paleta actual toma el ciruela y el naranja del logo de Pupila.

Antes de publicar, reemplazá también `https://pupilacentrooptico.com` en `src/app/layout.tsx`, `src/app/sitemap.ts` y `src/app/robots.ts` por el dominio definitivo.

## Agregar o editar productos

Los productos viven en `src/data/products.ts` y cumplen la interfaz de `src/types/product.ts`. Para sumar uno, duplicá un objeto existente, asigná un `id` y un `slug` únicos, y completá marca, modelo, categoría, género, material, colores, medidas y descripción.

```ts
{
  id: "av101",
  slug: "atelier-vision-av101",
  brand: "Atelier Vision",
  model: "AV101",
  category: "receta",
  gender: "unisex",
  material: "Acetato italiano",
  colors: [{ name: "Ciruela", hex: "#6f126b" }],
  measurements: { lensWidth: 50, bridgeWidth: 20, templeLength: 145 },
  description: "Descripción del modelo.",
  images: [
    "/products/av101/main.webp",
    "/products/av101/side.webp",
    "/products/av101/detail.webp"
  ],
  available: true,
  featured: true
}
```

`featured: true` muestra el producto en la home. El catálogo no carga frames 360°: sólo intenta cargar la primera imagen de cada producto.

## Agregar fotografías

Guardá cada imagen dentro de `public/products/<id>/` usando las rutas declaradas en el producto:

```text
public/products/av101/main.webp
public/products/av101/side.webp
public/products/av101/detail.webp
```

No hace falta modificar componentes. `ProductImage` muestra el placeholder propio mientras la fotografía no exista o falle, y usa la imagen real automáticamente cuando el archivo está disponible. Se recomienda WebP, relación 4:3, fondo uniforme y al menos 1400 px de ancho.

## Agregar una vista 360°

1. Exportá la secuencia en WebP con dos dígitos y numeración consecutiva.
2. Guardala en la carpeta `360` del producto.

```text
public/products/av101/360/frame-01.webp
public/products/av101/360/frame-02.webp
...
public/products/av101/360/frame-36.webp
```

3. Usá el helper `generate360Frames` y activá el visor:

```ts
import { generate360Frames } from "@/lib/utils";

spin360: {
  enabled: true,
  frames: generate360Frames("/products/av101/360", 36)
}
```

Para desactivarlo sin borrar la configuración, cambiá `enabled` a `false`. El visor se descarga únicamente al abrir la pestaña “Vista 360°” en el detalle. Precarga los frames, admite mouse, touch, pointer events, teclado y botones laterales. Si la secuencia falta o no puede cargarse, muestra “Vista 360° próximamente”.

## Firebase y Analytics

La app web de Firebase se inicializa una sola vez desde `src/lib/firebase.ts`. Analytics se carga en el navegador mediante `src/components/analytics/FirebaseAnalytics.tsx` y verifica compatibilidad antes de inicializarse, por lo que no interfiere con el renderizado estático de Next.js.

## Deploy en Firebase Hosting

El proyecto ya está asociado a `pupila-optical-center` mediante `.firebaserc`. `firebase.json` publica la exportación estática de Next.js desde `out/`, conserva URLs limpias y agrega caché para los assets.

Firebase CLI debe estar autenticado con una cuenta que tenga acceso al proyecto. Verificá la sesión y desplegá con:

```bash
firebase login:list
npm run deploy:firebase
```

El script ejecuta el build antes del deploy. Para probar la exportación localmente también podés ejecutar:

```bash
npm run build
firebase emulators:start --only hosting
```

El formulario puede enviar email mediante Formspree y no requiere Functions, Firestore ni el plan Blaze.

### Deploy automático desde GitHub

El workflow `.github/workflows/firebase-hosting.yml` ejecuta `npm ci`, type-check, lint, build y deploy al canal `live` cada vez que se hace push a `main`. También puede iniciarse manualmente desde la pestaña **Actions** de GitHub.

Configurá una sola vez este secret en **GitHub → Settings → Secrets and variables → Actions**:

```text
FIREBASE_SERVICE_ACCOUNT_PUPILA_OPTICAL_CENTER
```

Su valor debe ser el JSON completo de una cuenta de servicio con permiso para desplegar Firebase Hosting en el proyecto `pupila-optical-center`. No guardes ese JSON dentro del repositorio.

Creá también una variable de repositorio en **GitHub → Settings → Secrets and variables → Actions → Variables**:

```text
NEXT_PUBLIC_FORMSPREE_FORM_ID
```

Su valor es únicamente el ID del formulario de Formspree, por ejemplo `xpwzgabc`, no el endpoint completo. En el panel de Formspree configurá `tobiasmoreno.tm.21@gmail.com` como destinatario y verificá esa dirección.

## Formulario y Netlify Forms

El formulario está en `src/components/contact/ContactForm.tsx` y ya incluye:

- `data-netlify="true"`
- un campo oculto `form-name`
- honeypot antispam
- validación nativa accesible
- estados de envío, éxito y error
- una página de confirmación en `/gracias`

Para desplegar en Netlify:

1. Subí el repositorio a GitHub, GitLab o Bitbucket.
2. En Netlify elegí **Add new site → Import an existing project**.
3. Usá `npm run build` como build command y `out` como publish directory. `netlify.toml` ya contiene estos valores.
4. Agregá `NEXT_PUBLIC_WHATSAPP_NUMBER` y `NEXT_PUBLIC_CONTACT_PROVIDER=netlify` en **Site configuration → Environment variables**.
5. Hacé el primer deploy. Netlify detectará el formulario `contacto` durante el build.
6. Verificá los envíos en la sección **Forms** del panel de Netlify.

El envío AJAX funciona una vez desplegado en Netlify. En desarrollo local, el POST no es procesado por Next.js; para probar la recepción real se necesita un deploy o `netlify dev`.

## Deploy en Vercel

Importá el repositorio en Vercel, agregá `NEXT_PUBLIC_WHATSAPP_NUMBER` como variable de entorno y desplegá. El sitio y todos los enlaces de WhatsApp funcionan normalmente. Netlify Forms es específico de Netlify, por lo que en Vercel el formulario requiere conectar un proveedor externo o una función serverless en una etapa posterior.

## Estructura principal

```text
src/
  app/                 # Rutas, metadata, sitemap y robots
  components/
    catalog/           # Cards, filtros, galería, imágenes y visor 360
    chatbot/           # Chatbot de respuestas predeterminadas
    contact/           # Formulario y accesos a WhatsApp
    layout/            # Navbar y footer
    ui/                # Primitivas reutilizables
  config/site.ts       # Información central de la óptica
  data/                # Productos y preguntas frecuentes
  lib/                 # Helpers
  types/               # Tipos compartidos
public/
  products/            # Fotografías por producto
```
