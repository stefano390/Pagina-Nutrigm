# 🌱 NutriGm Premium

Landing page premium para NutriGm - Nutrición consciente para una vida plena.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

## 📋 Descripción

Landing page profesional para servicios de nutrición, diseñada con el enfoque **Editorial Light Cream** - colores cálidos, tipografía elegante y animaciones premium de 2026.

### ✨ Características

- **Diseño Editorial Light Cream** - Paleta premium con cream, terracota y moss
- **Animaciones GSAP** - ScrollTrigger, reveal effects, smooth transitions
- **Cursor Personalizado** - Doble círculo con mix-blend-mode
- **Botones Magnéticos** - Efecto hover que sigue al cursor
- **Bento Grid Layout** - Grid asimétrico moderno
- **Marquee Infinito** - Ticker animado con palabras clave
- **Responsive** - Mobile-first, funciona en todos los dispositivos
- **Sin dependencias** - No requiere npm, build step o frameworks

---

## 🎨 Diseño

### Paleta de Colores (Editorial Light Cream)

```css
--bg: #f4efe6        /* Warm cream - fondo principal */
--bg-2: #e8dfd0      /* Sand - fondos secundarios */
--accent: #b85c3a     /* Terracotta - color principal */
--accent-2: #4a5d3a   /* Moss - verde secundario */
--ink: #1a1a1a        /* Texto principal */
```

### Tipografía

- **Display:** Fraunces (serif elegante, con italic SOFT para énfasis)
- **Body:** Inter (sans-serif limpia y legible)

### Efectos Incluidos

| Efecto | Descripción |
|--------|-------------|
| **Custom Cursor** | Doble círculo con mix-blend-mode difference |
| **Magnetic Buttons** | Botones que siguen el cursor sutilmente |
| **Reveal on Scroll** | Elementos aparecen con animación al hacer scroll |
| **Split Text** | Texto dividido en palabras para animación |
| **Marquee** | Ticker infinito con palabras clave |
| **Hero Animation** | Secuencia animada de entrada |
| **Card Tilt** | Tarjetas con hover 3D |

---

## 🚀 Cómo Usar

### Iniciar Localmente

```bash
# Clonar el repositorio
git clone https://github.com/stefano390/Pagina-Nutrigm.git
cd Pagina-Nutrigm

# Iniciar servidor
python -m http.server 4321
```

Luego abrir: **http://localhost:4321**

### Detener Servidor

Presionar `Ctrl + C` en la terminal

---

## 📁 Estructura del Proyecto

```
nutrigm-premium/
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos (tema Editorial Light Cream)
├── js/
│   ├── manifest.js         # Datos globales y configuración
│   ├── cursor.js           # Cursor personalizado
│   ├── nav.js              # Navegación sticky con smooth scroll
│   ├── split-text.js       # Animación de texto dividido
│   ├── reveal.js           # Scroll reveal con IntersectionObserver
│   ├── magnetic.js         # Botones magnéticos
│   ├── marquee.js          # Ticker infinito
│   └── main.js             # Inicialización principal
├── lib/
│   ├── gsap.min.js         # GSAP (animaciones)
│   └── ScrollTrigger.min.js
└── assets/                 # Imágenes y recursos
    ├── photos/
    │   ├── source/         # Fotos originales
    │   └── processed/     # Fotos convertidas a WebP
    └── icons/              # Iconos y SVG
```

---

## 🎯 Secciones de la Página

| Sección | Contenido | ID |
|---------|-----------|-----|
| **Hero** | Título principal, CTA, visual animado | `hero` |
| **Sobre Mí** | Presentación de Gm, estadísticas | `about` |
| **Servicios** | Bento grid con 3 servicios | `services` |
| **Marquee** | Ticker con palabras clave | - |
| **Planes** | 3 planes de precios | `plans` |
| **Testimonios** | 3 testimonios de pacientes | `testimonials` |
| **Contacto** | Formulario + datos de contacto | `contact` |
| **Footer** | Links, redes sociales, copyright | - |

---

## 🔧 Personalización

### Cambiar Colores

Editar `css/styles.css` - Sección `CSS Custom Properties`:

```css
:root {
  --accent: #b85c3a;     /* Cambiar por tu color principal */
  --accent-2: #4a5d3a;   /* Cambiar por tu color secundario */
}
```

### Cambiar Contenido

Editar directamente en `index.html`:
- Textos en las secciones
- Planes y precios
- Testimonios
- Datos de contacto

### Reemplazar Imágenes

1. Colocar imágenes en `assets/photos/source/`
2. Convertir a WebP (opcional, recomendado)
3. Actualizar rutas en `index.html`

---

## 📝 Notas de Diseño

### Decisiones Tomadas

1. **Arquetipo Editorial Light Cream** - Elegido por ser ideal para wellness/nutrición
2. **Cursor mix-blend-mode** - Diferencia visual premium, funciona en fondos claros
3. **No Lenis** - Scroll nativo para evitar bugs en Windows (según guidelines)
4. **IIFE pattern** - Los scripts usan IIFE en lugar de ES modules para compatibilidad `file://`
5. **GSAP + ScrollTrigger** - Animaciones robustas y probadas

### Referencias

- Basado en **Archetype 01 - Editorial Light Cream** (skill: hostinger-premium-website)
- GSAP documentation: https://greensock.com/docs/
- Google Fonts: Fraunces + Inter

---

## 🚀 Deploy

### Hostinger (o cualquier hosting estático)

1. **Construir** el proyecto (no requiere build, solo copiar archivos)
2. **Subir** via FTP a `public_html/`
3. **Incluir** el `.htaccess` para cache control (si está disponible)

### GitHub Pages

1. Ir a Settings → Pages
2. Seleccionar rama `main`
3. El sitio estará en: `https://stefano390.github.io/Pagina-Nutrigm/`

### Netlify / Vercel

1. Conectar repo
2. Configurar: Directorio de publicación `/`
3. Deploy automático en cada push

---

## 📄 Licencia

MIT License - Libre uso comercial y personal

---

## 👤 Autor

**NutriGm** - Nutrición Consciente

- Email: contacto@nutrigm.com
- WhatsApp: +54 9 11 1234-5678
- Instagram: @nutrigm

---

## 🔄 Versionado

| Versión | Fecha | Cambios |
|---------|-------|---------|
| 1.0.0 | 2025-06-30 | Versión inicial - Landing premium |

---

## 🤝 Contribuir

Este es un proyecto privado. Para sugerencias o cambios, contactar directamente.

---

**Hecho con ❤️ usando la skill [hostinger-premium-website](https://github.com/fgpaz/mi-lsp)**
