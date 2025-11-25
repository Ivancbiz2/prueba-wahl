# Réplica de Wahl México - Guía de Uso

## 📋 Descripción
Esta es una réplica completa de la página web de Wahl México (https://mx.wahl.com/) creada con HTML5, CSS3 y JavaScript vanilla.

## 📁 Estructura de Archivos

```
/
├── index.html          # Archivo principal HTML
├── styles.css          # Estilos CSS
├── script.js           # Funcionalidad JavaScript
└── README.md           # Este archivo
```

## 🚀 Cómo Usar

### Opción 1: Abrir en el navegador
1. Haz clic derecho en `index.html`
2. Selecciona "Abrir con" y elige tu navegador preferido

### Opción 2: Usar un servidor local (recomendado)
```bash
# Si tienes Python 3
python -m http.server 8000

# Si tienes Python 2
python -m SimpleHTTPServer 8000

# Si tienes Node.js instalado
npx http-server
```

Luego accede a `http://localhost:8000` en tu navegador.

## 🎨 Características Principales

### ✅ Header y Navegación
- Navegación principal con menú hamburguesa responsive
- Barra de búsqueda funcional
- Carrito de compras con contador
- Links de accesibilidad

### ✅ Hero Carousel
- Carrusel automático con 3 diapositivas
- Controles manual (flechas y puntos indicadores)
- Animaciones suaves
- Responsivo

### ✅ Secciones de Productos
- Grid de cortadoras con tarjetas productos
- Carrusel de productos destacados
- Diseño flexible y responsive

### ✅ Secciones Adicionales
- Tienda Profesional (banner destacado)
- Wahl Education
- Instagram Feed
- Servicio Técnico
- Footer con redes sociales

### ✅ Funcionalidades JavaScript
- Carruseles interactivos
- Menú hamburguesa responsive
- Sistema de carrito
- Avisos de cookies
- Smooth scroll
- Lazy loading de imágenes

## 🖼️ Cómo Añadir Imágenes

### Paso 1: Organiza tus imágenes
Crea una carpeta `/images` en el mismo directorio:
```
/
├── index.html
├── styles.css
├── script.js
├── images/
│   ├── logo.png
│   ├── hero-banner-1.jpg
│   ├── hero-banner-2.jpg
│   ├── products/
│   │   ├── detailer-cordless-gold.jpg
│   │   ├── magic-clip-cordless-gold.jpg
│   │   └── ...
│   └── instagram/
│       ├── post-1.jpg
│       ├── post-2.jpg
│       └── ...
```

### Paso 2: Actualiza el HTML
En `index.html`, reemplaza los placeholders:

#### Logo
```html
<!-- Antes -->
<div class="logo-placeholder">[LOGO WAHL]</div>

<!-- Después -->
<img src="images/logo.png" alt="Logo Wahl" class="logo-img">
```

#### Imágenes de Productos
```html
<!-- Antes -->
<img src="" alt="Detailer Cordless Gold" class="placeholder-image">

<!-- Después -->
<img src="images/products/detailer-cordless-gold.jpg" alt="Detailer Cordless Gold">
```

#### Imágenes del Carrusel Hero
```html
<!-- En cada .carousel-slide, agrega background image -->
<style>
  .carousel-slide:nth-child(1) {
    background-image: url('images/hero-banner-1.jpg');
    background-size: cover;
    background-position: center;
  }
  
  .carousel-slide:nth-child(2) {
    background-image: url('images/hero-banner-2.jpg');
    background-size: cover;
    background-position: center;
  }
</style>
```

#### Instagram Posts
```html
<!-- En la sección Instagram -->
<img src="images/instagram/post-1.jpg" alt="Instagram post">
```

## 🎯 Personalización

### Cambiar Colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --primary-color: #000;        /* Negro principal */
    --secondary-color: #333;      /* Gris oscuro */
    --accent-color: #c41e3a;      /* Rojo Wahl */
    --light-gray: #f5f5f5;        /* Gris claro */
    --text-color: #333;           /* Color de texto */
}
```

### Cambiar Textos
Todos los textos están en `index.html`. Busca y reemplaza directamente.

### Cambiar Enlaces
Los enlaces están en todos los botones y menús. Reemplaza `href="#"` con tus URLs reales.

## 📱 Responsive Design

La página es completamente responsive con breakpoints en:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1024px
- **Mobile**: 480px - 768px
- **Mobile pequeño**: < 480px

## 🔧 Funcionalidades Implementadas

### Carrito de Compras
- Contador de productos
- Botones "Agregar al carrito"
- Almacenamiento local (localStorage)

### Búsqueda
- Input funcional
- Búsqueda por Enter o botón

### Menú Responsive
- Se convierte en hamburguesa en móvil
- Cierra automáticamente al cambiar tamaño de ventana

### Avisos de Cookies
- Se muestra solo una vez
- Guardado en localStorage
- Opciones para aceptar o configurar

## 🌐 Integración Futura

### Conexión a Backend
Para conectar con un servidor, modifica el archivo `script.js`:

```javascript
// Ejemplo de fetch a API
fetch('/api/productos')
    .then(response => response.json())
    .then(data => {
        // Actualizar productos dinámicamente
    });
```

### Carrito Real
```javascript
// Guardar carrito en servidor
function saveCart() {
    fetch('/api/carrito', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(window.getCartData())
    });
}
```

## ⚙️ Requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Sin dependencias externas requeridas (solo Font Awesome CDN para iconos)

## 📝 Notas Importantes

1. **Imágenes Placeholder**: Actualmente usa gradientes como placeholders
2. **Links**: Todos apuntan a `#` por seguridad - actualiza con URLs reales
3. **SEO**: Actualiza meta tags en `<head>` para mejor posicionamiento
4. **Analytics**: Agrega Google Analytics si es necesario
5. **HTTPS**: Asegúrate de usar HTTPS en producción

## 🐛 Troubleshooting

### Las imágenes no cargan
- Verifica que la ruta sea correcta
- Usa rutas relativas: `images/archivo.jpg`
- No uses espacios en nombres de archivo

### El carrusel no funciona
- Asegúrate de que `script.js` está vinculado correctamente
- Abre la consola del navegador (F12) para ver errores

### El menú hamburguesa no funciona
- Verifica que `script.js` esté cargado
- Comprueba en DevTools que no haya errores

## 📄 Licencia

Esta réplica es para fines educativos. Wahl es marca registrada de Wahl Clipper Corporation.

## 📞 Soporte

Para dudas sobre la implementación de imágenes o personalización:
1. Verifica que la ruta sea correcta
2. Usa DevTools (F12) para inspeccionar
3. Consulta la consola para mensajes de error

---

**¡Listo para añadir tus imágenes!** 🎉
