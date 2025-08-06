// Manipulador para o envio do formulário
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  this.reset();
});

// Funcionalidade do menu mobile
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuOverlay = document.getElementById('menu-overlay');
const closeMenu = document.getElementById('close-menu');
const mobileLinks = document.querySelectorAll('.mobile-menu a');

// Abrir menu
menuToggle.addEventListener('click', function() {
  mobileMenu.classList.add('active');
  menuOverlay.classList.add('active');
  document.body.style.overflow = 'hidden'; // Impede rolagem quando menu está aberto
});

// Fechar menu
function closeMenuMobile() {
  mobileMenu.classList.remove('active');
  menuOverlay.classList.remove('active');
  document.body.style.overflow = ''; // Restaura rolagem
}

closeMenu.addEventListener('click', closeMenuMobile);
menuOverlay.addEventListener('click', closeMenuMobile);

// Fechar menu ao clicar em um link
mobileLinks.forEach(link => {
  link.addEventListener('click', closeMenuMobile);
});

// Animações de scroll
function handleScrollAnimations() {
  const elements = document.querySelectorAll('.fade-in');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add('visible');
    }
  });
  
  // Garantir que o footer seja sempre visível
  document.querySelector('footer').style.opacity = '1';
}

// Adicionar classe fade-in aos elementos que devem animar
function setupAnimations() {
  // Adicionar aos títulos de seção
  document.querySelectorAll('section h2').forEach(el => {
    el.classList.add('fade-in');
  });
  
  // Adicionar aos cards de serviço
  document.querySelectorAll('.service-card').forEach(el => {
    el.classList.add('fade-in');
  });
  
  // Adicionar aos cards de produto
  document.querySelectorAll('.product-card').forEach(el => {
    el.classList.add('fade-in');
  });
  
  // Adicionar a outros elementos importantes
  document.querySelectorAll('section > .container > p').forEach(el => {
    el.classList.add('fade-in');
  });
}

// Inicializar animações
setupAnimations();

// Executar animações no carregamento e no scroll
window.addEventListener('load', handleScrollAnimations);
window.addEventListener('scroll', handleScrollAnimations);

// Smooth scroll para links de âncora
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Ajuste para o cabeçalho fixo
        behavior: 'smooth'
      });
    }
  });
});
