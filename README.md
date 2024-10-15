
---

# Portafolio-03

## Descripción del Proyecto
Portafolio-03 es un portafolio web personal desarrollado con **Next.js** en su versión 14.2.15. Presenta diferentes secciones como proyectos, blogs, servicios y una página de contacto, todo diseñado para ser rápido y eficiente. El sitio está optimizado para producción y cuenta con soporte para temas mediante la dependencia `next-themes`.

## Estructura del Proyecto
```bash
/public        # Archivos estáticos como imágenes y recursos
/src
  /app         # Directorio principal de la aplicación Next.js
    /blog      # Página de blog
    /portfolio # Página de proyectos con vistas dinámicas
    /services  # Página de servicios
/pages/api     # Rutas API, como la de los proyectos
```

## Scripts Disponibles
- **build**: Genera una versión optimizada para producción.
- **dev**: Inicia el servidor de desarrollo en local.
- **format**: Usa Prettier para formatear el código.
- **lint**: Corre ESLint para verificar el código.
- **start**: Inicia el servidor de producción.

```bash
npm run build   # Genera la build de producción
npm run dev     # Inicia el entorno de desarrollo
npm run lint    # Revisa el código con ESLint
```

## Dependencias
- **React**: ^18
- **Next.js**: 14.2.15
- **React-icons**: ^5.3.0 para iconos vectoriales.
- **React-slick**: ^0.30.2 para carruseles.
- **Slick-carousel**: ^1.8.1 para la funcionalidad de carrusel.

## Dependencias de Desarrollo
- **Prettier**: ^3.3.3 para formateo de código.
- **Typescript**: ^5 para soporte de tipado en JavaScript.
- **ESLint**: ^8 para control de calidad del código.

## Problemas Detectados
- **Advertencias con `<img>`**: Se recomienda utilizar el componente `<Image />` de Next.js en lugar de la etiqueta `<img>` para optimizar la carga de imágenes.
- **Error con rutas dinámicas**: La ruta `/api/projects` no pudo ser renderizada de manera estática debido al uso de `request.url`. Revisa la documentación de Next.js sobre renderización dinámica.

## Optimización y Mejoras
- Implementar el componente `<Image />` para optimizar el rendimiento.
- Revisar la ruta `/api/projects` para evitar el uso de `request.url` en la construcción estática.

---

## Derechos de Autor
© 2024 Alan Fernandez. Todos los derechos reservados. Este proyecto y su código fuente están bajo una licencia de uso personal. No está permitido su distribución, modificación o uso con fines comerciales sin el permiso previo del autor. Para más detalles, por favor contacta al autor a través de las vías proporcionadas en el portafolio.

---
