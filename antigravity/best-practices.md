# Buenas Prácticas Next.js: Bienes Raíces

Resumen de recomendaciones técnicas clave para plataformas inmobiliarias, orientado a la acción.

## 🖼️ 1. Rendimiento y Assets

- **Uso estricto de `next/image`**: Optimización automática (WebP/AVIF) y lazy-loading por defecto.
- **Placeholders visuales (Blur)**: Prevenir "saltos" en pantalla (layout shifts) mientras cargan fotos pesadas.
- **Componentes pesados (Mapas)**: Usar `next/dynamic({ ssr: false })` para la carga diferida de Leaflet/Mapbox/Google Maps.
- **CDNs Especializados**: Externalizar el alojamiento de imágenes masivas en Supabase Storage o Cloudinary.

## 🔎 2. SEO y Visibilidad (Optimización en Buscadores)

- **Metadata y Open Graph**: Inyectar Título, Precio y Foto principal en `[slug]/page.tsx` para compartir atraíbles en WhatsApp/Redes.
- **URLs Amigables (Slugs)**: Utilizar rutas descriptivas (ej. `/propiedades/casa-baleares-3-recamaras`) en lugar de IDs aleatorios.
- **Sitemap Automático**: Generar un archivo `app/sitemap.ts` programático para asegurar que los motores de búsqueda indexen todo.
- **Rich Snippets (Schema.org)**: Incluir un objeto JSON-LD de tipo `RealEstateListing` u `Offer` en cada propiedad (muestra precio directo en Google).

## ⚙️ 3. Data Fetching (Obtención de datos)

- **Listados y Búsqueda (SSR)**: Usar el renderizado en servidor dinámico evaluando los `searchParams` para filtros exactos.
- **Páginas de Propiedades (ISR/Caché dinámico)**: Usar generación estática pero con revalidación mediante tags para conjugar velocidad y datos recientes.
- **Páginas Generales (SSG)**: Renderizar de forma 100% estática páginas como Contacto, Equipo o FAQ.
- **Paginación en Backend**: Realizar la partición de datos (LIMIT / OFFSET) siempre desde SQL/Supabase, no en el lado del cliente (Navegador).

## 🚀 4. UX / UI (Experiencia de Usuario e Interfaz)

- **Enfoque Mobile-First**: Garantizar diseño enfocado a celular, con galerías de fotos que reaccionen a gestos táctiles.
- **Skeletons de Carga**: Usar `loading.tsx` y React Suspense para enseñar tarjetitas parpadeantes mientras los datos llegan, en lugar de pantallas blancas.
- **Debounce en Entradas**: Introducir esperas (ej. 500ms) en la búsqueda libre para no aturdir la base de datos con peticiones constantes.
- **Marcadores con "Optimistic UI"**: Cambiar el ícono de "Favoritos" o "Like" de forma inmediata (fake state) antes de que el servidor responda, dando sensación de velocidad absoluta.
- **Filtros Adherentes/Flotantes**: Que los controles de filtrado siempre acompañen a la vista (Bottom Sheet en móvil, Sidebar pegajoso en escritorio).

## 💾 5. Base de Datos / Backend

- **Inyección de Índices**: Indexar siempre métricas base: `precio`, `ubicacion`, `habitaciones` y `tipo_transaccion` para evitar consultas lentas de tabla completa (Full Table Scans).
- **Búsqueda Vectorial o Geoespacial**: Si crece, requerir PostGIS o funciones análogas de cercanía perimetral en SQL.
- **Semántica Racional**: Aislar categorías múltiples y comodidades (Amenities) en catálogos y no como cadenas de texto amontonadas.

## 🛡️ 6. Cuentas y Privacidad

- **Cookies de Sesión (Server-side)**: Mantener la autenticación de servidor limpia con cookies "HTTP-Only" vía middlewares.
- **Restricción de Rutas Middleware**: Proteger paneles de administración usando el runtime perimetral de Next.js antes de pintar la página.
- **Alta Social Integrada**: Dar acceso mínimo requerido al usuario usando sus cuentas de Google o Apple.

## 🚨 7. Errores y Retención

- **Página de Error Estilizada (`error.tsx`)**: Manejar fallas controladamente sin que explote toda la aplicación en la cara del cliente.
- **Manejo 404 Amigable**: Si una propiedad fue vendida/baja, en lugar de perder al visitante con un clásico "No Encontrado", ofrécele _"Probablemente ya se vendió, pero aquí tienes X similares por la zona"_.
