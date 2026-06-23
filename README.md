# ATEC SL — Web

Sitio web de **Agrupación Tecnológica Atec SL.**, taller especializado en
tacógrafos y electricidad para camiones en Castellón de la Plana (desde 1995).

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **lucide-react** (iconos)
- Contenido hardcodeado · sin CMS · sin base de datos
- Deploy pensado para **Vercel**

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build de producción

```bash
npm run build
npm start
```

## Estructura

```
app/
  layout.tsx                        # Layout raíz + fuentes Google + Navbar/Footer
  globals.css                       # Tokens de color, botones, banda diagonal
  page.tsx                          # Home
  sobre-nosotros/page.tsx
  servicios/
    tacografos/page.tsx
    electricidad/page.tsx
    aire-acondicionado/page.tsx
    basculas/page.tsx
  contacto/page.tsx
components/
  layout/Navbar.tsx                 # Sticky + dropdown + menú móvil
  layout/Footer.tsx
  Logo.tsx
  PageHero.tsx
  ServiceCard.tsx
  TeamMember.tsx
  FAQ.tsx                           # Acordeón
  CTABanner.tsx
  ContactForm.tsx                   # Validación cliente + envío simulado
lib/
  data.ts                           # Servicios, equipo y datos de contacto
```

## Identidad visual

| Token            | Valor     |
| ---------------- | --------- |
| `primary`        | `#EF5742` |
| `dark`           | `#313131` |
| `surface`        | `#F5F5F5` |
| `muted`          | `#6B7280` |
| `border`         | `#E5E5E5` |

- **Titulares**: Barlow Condensed
- **Texto**: Inter
- Elemento firma: banda diagonal roja (`clip-path`) tras el hero de la home.

## Notas

- El formulario de contacto no tiene backend: simula el envío con estado local
  y muestra un mensaje de éxito.
- Las fotos del equipo usan placeholders con iniciales.
- Tel/WhatsApp: `618 617 221` · Email: `atecsal@atecsal.es`
