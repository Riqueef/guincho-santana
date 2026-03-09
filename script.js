// script.js - Funcionalidades do site

// Menu Mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuToggle.innerHTML = navMenu.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
        });
    });
    
    // Tabs da Galeria
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove classe active de todos
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Adiciona classe active ao atual
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Formulário de Contato
    const contactForm = document.getElementById('formContato');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aqui você pode adicionar a lógica para enviar o formulário
            // Por enquanto, apenas mostra uma mensagem
            alert('Obrigado pela mensagem! Entraremos em contato em breve.');
            contactForm.reset();
        });
    }
    
    // Scroll suave para âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Efeito de scroll na navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.boxShadow = '0 5px 20px rgba(30, 58, 138, 0.15)';
            navbar.style.padding = '10px 0';
        } else {
            navbar.style.boxShadow = '0 5px 15px rgba(30, 58, 138, 0.1)';
            navbar.style.padding = '15px 0';
        }
    });
    
    // Lógica para esconder texto da logo quando imagem existir
    function checkLogo() {
        const logoImg = document.querySelector('.logo-img');
        const logoText = document.querySelector('.logo-text');
        
        if (logoImg && logoText) {
            // Se a imagem tiver um src válido, esconde o texto
            if (logoImg.src && logoImg.src !== window.location.href) {
                logoText.style.display = 'none';
            }
        }
    }
    
    // Verificar logo periodicamente (útil se você adicionar a logo depois)
    checkLogo();
    setInterval(checkLogo, 1000);
    
    // Animações ao rolar a página
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .feature-item, .gallery-item');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Configurar elementos para animação
    document.querySelectorAll('.service-card, .feature-item, .gallery-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Executar uma vez ao carregar
});

// Botão de WhatsApp
function openWhatsApp() {
    const message = "Olá! Gostaria de solicitar um guincho.";
    const phone = "5511968440782";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
}

// Botão de Ligação
function makeCall() {
    window.location.href = 'tel:11968440782';
}