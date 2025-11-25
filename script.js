// Variables globales
let currentSlide = 0;
let currentProductSlide = 0;
const totalSlides = 3;

// Christmas Logo Effect - Snowfall & Tree
document.addEventListener('DOMContentLoaded', () => {
    const logoContainer = document.querySelector('.logo-container');
    
    if (logoContainer) {
        logoContainer.addEventListener('mouseenter', () => {
            console.log('¡Efecto navideño de nieve activado!');
        });
        
        logoContainer.addEventListener('mouseleave', () => {
            console.log('Efecto navideño desactivado');
        });
    }
});

// Loading Screen Handler
window.addEventListener('load', () => {
    // La pantalla de carga se oculta automáticamente gracias a la animación CSS
    // Pero podemos agregar lógica adicional si es necesario
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
        }
    }, 2500); // Desaparece después de 2.5 segundos
});

// Carrusel Hero - Función para mostrar una diapositiva específica
function showSlide(n) {
    console.log('showSlide llamado con n =', n);
    
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    console.log('Total de slides encontrados:', slides.length);
    console.log('Total de indicadores encontrados:', indicators.length);
    
    if (slides.length === 0) {
        console.error('No se encontraron slides');
        return;
    }
    
    // Ajustar índice
    if (n >= slides.length) {
        currentSlide = 0;
    } else if (n < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = n;
    }
    
    console.log('currentSlide establecido a:', currentSlide);
    
    // Remover clase active de todos
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        console.log('Removida clase active de slide', index);
    });
    
    indicators.forEach((indicator, index) => {
        indicator.classList.remove('active');
    });
    
    // Agregar clase active al slide actual
    slides[currentSlide].classList.add('active');
    console.log('Agregada clase active a slide', currentSlide);
    
    if (indicators[currentSlide]) {
        indicators[currentSlide].classList.add('active');
        console.log('Agregada clase active a indicador', currentSlide);
    }
}

// Carrusel Hero - Cambiar a siguiente o anterior
function changeSlide(n) {
    console.log('changeSlide llamado con n =', n);
    showSlide(currentSlide + n);
}

// Carrusel Hero - Ir a slide específica
function gotoSlide(n) {
    console.log('gotoSlide llamado con n =', n);
    showSlide(n);
}

// Auto-avance del carrusel hero cada 5 segundos
let autoSlideInterval = setInterval(() => {
    console.log('Auto-avance del carrusel');
    changeSlide(1);
}, 5000);

// Carrusel de productos
function changeProductSlide(n) {
    console.log('changeProductSlide llamado con n =', n);
    
    const carousel = document.getElementById('productsCarousel');
    if (!carousel) {
        console.error('No se encontró elemento productsCarousel');
        return;
    }
    
    const products = document.querySelectorAll('.carousel-product');
    if (products.length === 0) {
        console.error('No se encontraron productos');
        return;
    }
    
    const productWidth = products[0].offsetWidth;
    const gap = 20;
    const scrollAmount = (productWidth + gap) * n;
    
    console.log('Scroll amount:', scrollAmount);
    
    carousel.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
}

// Menú hamburguesa
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Carrito de compras
let cartCount = 0;
const cartCountElement = document.querySelector('.cart-count');

document.querySelectorAll('.btn-small').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        cartCount++;
        cartCountElement.textContent = cartCount;
        
        // Efecto visual
        btn.textContent = '✓ AGREGADO';
        btn.style.backgroundColor = '#28a745';
        
        setTimeout(() => {
            btn.textContent = 'AGREGAR AL CARRITO';
            btn.style.backgroundColor = '';
        }, 1500);
    });
});

// Botones COMPRAR
document.querySelectorAll('.btn-secondary').forEach(btn => {
    if (btn.textContent.trim() === 'COMPRAR') {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Redirigiendo a la tienda...');
        });
    }
});

// Búsqueda
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-box input');

searchBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        console.log('Buscando:', searchTerm);
        // Aquí iría la lógica de búsqueda
    }
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});

// Carrito
const cartIcon = document.querySelector('.cart-icon');
cartIcon.addEventListener('click', (e) => {
    e.preventDefault();
    if (cartCount > 0) {
        alert(`Tienes ${cartCount} producto(s) en tu carrito`);
    } else {
        alert('Tu carrito está vacío');
    }
});

// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Detector de scroll para efectos
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header-main');
    
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.05)';
    }
});

// Responsive: Cerrar menú al redimensionar
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Lazy loading para imágenes (simulado)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            // Aquí cargarías la imagen real
            observer.unobserve(img);
        }
    });
}, observerOptions);

document.querySelectorAll('img').forEach(img => {
    observer.observe(img);
});

// Animación de números (para contador de carrito)
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Event listeners para formularios
document.addEventListener('DOMContentLoaded', () => {
    console.log('Sitio web de Wahl México cargado correctamente');
    
    // Inicializar carrusel
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    
    if (slides.length > 0) {
        slides[0].classList.add('active');
        console.log('Carrusel hero inicializado con', slides.length, 'diapositivas');
    }
    
    if (indicators.length > 0) {
        indicators[0].classList.add('active');
        console.log('Indicadores inicializados con', indicators.length, 'puntos');
    }
});

// Manejo de errores de imágenes
document.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        e.target.style.display = 'none';
    }
}, true);

// Exportar carrito (para uso futuro)
window.getCartData = function() {
    return {
        itemCount: cartCount,
        timestamp: new Date().toISOString()
    };
};
