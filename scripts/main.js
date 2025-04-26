// Menú hamburguesa para móviles
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
    });
});

// Smooth scrolling para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});
// Cambiar el idioma
let currentLang = 'en'; // Idioma por defecto: inglés

function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[currentLang][key];
            } else {
                element.textContent = translations[currentLang][key];
            }
        }
    });
    document.documentElement.lang = currentLang;
}

// Manejo del selector de idioma
document.getElementById('lang-es').addEventListener('click', () => {
    currentLang = 'es';
    updateContent();
    document.getElementById('lang-es').classList.add('active');
    document.getElementById('lang-en').classList.remove('active');
});

document.getElementById('lang-en').addEventListener('click', () => {
    currentLang = 'en';
    updateContent();
    document.getElementById('lang-en').classList.add('active');
    document.getElementById('lang-es').classList.remove('active');
});

// Inicializar con inglés por defecto
updateContent();
