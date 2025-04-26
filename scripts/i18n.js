const translations = {
    en: {
        "title": "PETNOVA - Pet Care Management",
        "nav.home": "Home",
        "nav.why": "Why choose us?",
        "nav.features": "Features",
        "nav.contact": "Contact us",
        "nav.signin": "Sign in",
        "nav.signup": "Sign up",
        "hero.title": "Manage your pets' care simply and efficiently.",
        "hero.subtitle": "Keep track of medical records, vaccinations, and vet appointments in one place.",
        "hero.button": "Get Started",
        "features.health": "Pet Health",
        "features.vaccines": "Vaccines",
        "features.reminders": "Reminders",
        "why.title": "Why choose us?",
        "why.description": "At Pawfect Care, we understand that your patients' well-being and the efficiency of your work are top priorities. That's why we offer a reliable, intuitive platform designed to simplify every aspect of veterinary management.",
        "why.benefit1": "Manage users, clients, products, services, and clinical records with ease.",
        "why.benefit2": "Easily access medical records to improve pet care and follow-up.",
        "why.benefit3": "An intuitive interface designed for veterinarians and pet owners, with no advanced technical skills required.",
        "why.benefit4": "Optimize daily tasks and focus on what really matters: pet welfare.",
        "footer.description": "Simplifying pet care management for veterinarians and pet owners.",
        "footer.functions": "Functions",
        "footer.manage": "Manage Patient Records",
        "footer.schedule": "Schedule Appointments",
        "footer.registerPets": "Register Pets",
        "footer.registerClients": "Register Clients",
        "footer.download": "Download",
        "footer.android": "Android",
        "footer.windows": "Windows",
        "footer.mac": "Mac",
        "footer.connect": "Connect with us",
        "footer.contact": "Contact Us",
        "footer.support": "Support",
        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms of Service",
        "footer.copyright": "2023 PETNOVA. All rights reserved."
    },
    es: {
        "title": "PETNOVA - Gestión de Cuidado de Mascotas",
        "nav.home": "Inicio",
        "nav.why": "¿Por qué elegirnos?",
        "nav.features": "Características",
        "nav.contact": "Contáctenos",
        "nav.signin": "Iniciar sesión",
        "nav.signup": "Regístrate",
        "hero.title": "Gestiona el cuidado de tus mascotas de manera simple y eficiente.",
        "hero.subtitle": "Mantén un registro de historiales médicos, vacunas y citas veterinarias en un solo lugar.",
        "hero.button": "Comenzar",
        "features.health": "Salud de la Mascota",
        "features.vaccines": "Vacunas",
        "features.reminders": "Recordatorios",
        "why.title": "¿Por qué elegirnos?",
        "why.description": "En Pawfect Care, entendemos que el bienestar de tus pacientes y la eficiencia de tu trabajo son prioridades. Por eso ofrecemos una plataforma confiable e intuitiva diseñada para simplificar cada aspecto de la gestión veterinaria.",
        "why.benefit1": "Administra usuarios, clientes, productos, servicios y registros clínicos con facilidad.",
        "why.benefit2": "Accede fácilmente a historiales médicos para mejorar el cuidado y seguimiento.",
        "why.benefit3": "Interfaz intuitiva diseñada para veterinarios y dueños de mascotas, sin necesidad de conocimientos técnicos avanzados.",
        "why.benefit4": "Optimiza tareas diarias y enfócate en lo que realmente importa: el bienestar de las mascotas.",
        "footer.description": "Simplificando la gestión del cuidado de mascotas para veterinarios y dueños.",
        "footer.functions": "Funciones",
        "footer.manage": "Gestionar Registros de Pacientes",
        "footer.schedule": "Programar Citas",
        "footer.registerPets": "Registrar Mascotas",
        "footer.registerClients": "Registrar Clientes",
        "footer.download": "Descargar",
        "footer.android": "Android",
        "footer.windows": "Windows",
        "footer.mac": "Mac",
        "footer.connect": "Conéctate con nosotros",
        "footer.contact": "Contáctanos",
        "footer.support": "Soporte",
        "footer.privacy": "Política de Privacidad",
        "footer.terms": "Términos de Servicio",
        "footer.copyright": "2023 PETNOVA. Todos los derechos reservados."
    }
};


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