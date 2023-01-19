export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if(sections.length) {
  const windowMetade = window.innerHeight * 0.6;
  
  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - windowMetade < 0);
      if(isSectionVisible ) {
        // console.log('animar')
        section.classList.add('ativo')
      }
    })
  }
  animaScroll();
  
  window.addEventListener('scroll', animaScroll)
  }
  }
  initAnimacaoScroll();