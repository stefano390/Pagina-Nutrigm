# Changelog - NutriGm Premium

Todos los cambios notables del proyecto serán documentados en este archivo.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/en-1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Planeados
- Reemplazar emojis por imágenes reales
- Agregar formulario funcional con backend
- Optimizar imágenes en formato WebP
- Agregar sección de blog/recetas
- Implementar modo oscuro

---

## [1.0.0] - 2025-06-30

### Added
- ✨ Landing page premium completa con tema Editorial Light Cream
- 🎨 Paleta de colores: Cream (#f4efe6), Terracota (#b85c3a), Moss (#4a5d3a)
- 🔤 Tipografía Fraunces (display) + Inter (body) desde Google Fonts
- 🖱️ Cursor personalizado doble círculo con mix-blend-mode
- 🧲 Botones magnéticos que siguen el cursor
- 📜 Bento Grid asimétrico para sección de servicios
- ⏩ Marquee/ticker infinito animado
- ✨ Animaciones GSAP con ScrollTrigger
- 📱 Responsive mobile-first completo
- 📝 Splash screen con branding
- 🎯 Scroll reveal con IntersectionObserver
- ⚡ Smooth scroll en navegación
- 📄 Formulario de contacto interactivo

### Structure
- Archivos JS modulares (cursor, nav, magnetic, marquee, reveal, split-text, main)
- GSAP y ScrollTrigger como librerías de animación
- IIFE pattern para compatibilidad sin build step
- CSS Custom Properties para fácil personalización

### Design Decisions
- Elegido **Archetype 01 - Editorial Light Cream** por su idoneidad para wellness/nutrición
- **No Lenis** - Scroll nativo para evitar bugs en Windows
- Cursor con **opacity: 0 hasta primer mousemove** para evitar flash en (0,0)
- Reveal con **threshold 0.01 + safety net 6s** para asegurar visibilidad

---

## [0.1.0] - 2025-06-30 (no released)

### Added
- Versión simple con Astro + Tailwind (reemplazada por versión premium)

---

## Notas de Desarrollo

### Próximos Pasos
1. **Imágenes reales** - Reemplazar emojis por fotos profesionales
2. **Formulario funcional** - Conectar a servicio de email
3. **Optimización** - Convertir imágenes a WebP
4. **Testing** - Probar en múltiples dispositivos y navegadores

### Bug Fixes Conocidos
- Ninguno por el momento

### Technical Debt
- Considerar agregar build step para optimización
- Evaluar necesidad de framework para páginas adicionales
- Revisar accesibilidad (ARIA labels, keyboard nav)

---

**Para más información ver [README.md](README.md)**
