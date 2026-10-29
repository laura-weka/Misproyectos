/**
 * ============================================================================
 * PORTFOLIO PROFESIONAL - LAURA MARÍN BARRIO
 * Archivo: script.js
 * 
 * Funcionalidades interactivas, navegación fluida, gestión de enlaces y 
 * configuración centralizada para personalización rápida.
 * ============================================================================
 */

// Ejecutar cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------------------------
     1. CONFIGURACIÓN CENTRALIZADA (FÁCILMENTE EDITABLE POR LAURA)
     --------------------------------------------------------------------------
     Modifica los siguientes valores con tus datos reales cuando desees 
     actualizar tu correo, redes sociales o repositorios de proyectos.
  */
  const USER_CONFIG = {
    // Dirección de correo electrónico de contacto
    email: 'grupomala@hotmail.com',

    // Enlace a tu perfil público de GitHub
    githubUrl: 'https://github.com/laura-weka',

    // Enlace a tu perfil público de LinkedIn
    linkedinUrl: 'https://www.linkedin.com/in/lauramarinbarrio',

    // Enlaces a los repositorios o demos de tus proyectos.
    // Deja en null o en '#' si aún están en desarrollo; el sistema
    // mostrará automáticamente la ventana explicativa "En desarrollo".
    projects: {
      'reservas': {
        name: 'Sistema digital de reservas deportivas',
        repoUrl: null, // Ejemplo futuro: 'https://github.com/tu-usuario/reservas-deportivas'
        description: 'Proyecto para gestionar reservas de pistas e instalaciones deportivas con calendario interactivo y control de disponibilidad.'
      },
      'inventario': {
        name: 'Gestión de inventario para comercio',
        repoUrl: null, // Ejemplo futuro: 'https://github.com/tu-usuario/inventario-comercio'
        description: 'Digitalización del stock, control de existencias, seguimiento de pedidos y automatización con IA y hojas de cálculo.'
      },
      'mievento': {
        name: 'Mi Evento en Casa',
        repoUrl: null, // Ejemplo futuro: 'https://github.com/tu-usuario/mi-evento-en-casa'
        description: 'Aplicación web asistida por IA para planificar eventos, recetas, cálculo de ingredientes y gestión de menús.'
      }
    }
  };

  /* --------------------------------------------------------------------------
     2. APLICAR CONFIGURACIÓN A LA INTERFAZ
     -------------------------------------------------------------------------- */
  function applyUserConfig() {
    // 1. Configurar Correo
    const displayEmail = document.getElementById('display-email');
    const btnMailLink = document.getElementById('btn-mail-link');
    if (displayEmail && USER_CONFIG.email) {
      displayEmail.textContent = USER_CONFIG.email;
    }
    if (btnMailLink && USER_CONFIG.email) {
      btnMailLink.href = `mailto:${USER_CONFIG.email}?subject=Contacto%20desde%20tu%20Portfolio%20Profesional`;
    }

    // 2. Configurar GitHub
    const displayGithub = document.getElementById('display-github');
    const linkGithub = document.getElementById('link-github');
    if (USER_CONFIG.githubUrl) {
      if (linkGithub) linkGithub.href = USER_CONFIG.githubUrl;
      if (displayGithub) {
        // Mostrar formato legible sin el https://
        displayGithub.textContent = USER_CONFIG.githubUrl.replace(/^https?:\/\//, '');
      }
    }

    // 3. Configurar LinkedIn
    const displayLinkedin = document.getElementById('display-linkedin');
    const linkLinkedin = document.getElementById('link-linkedin');
    if (USER_CONFIG.linkedinUrl) {
      if (linkLinkedin) linkLinkedin.href = USER_CONFIG.linkedinUrl;
      if (displayLinkedin) {
        displayLinkedin.textContent = USER_CONFIG.linkedinUrl.replace(/^https?:\/\//, '');
      }
    }

    // 4. Año actual dinámico en el pie de página
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
      currentYearSpan.textContent = new Date().getFullYear();
    }
  }

  applyUserConfig();

  /* --------------------------------------------------------------------------
     3. NAVEGACIÓN MÓVIL (MENÚ HAMBURGUESA)
     -------------------------------------------------------------------------- */
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.classList.toggle('open', isOpen);
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Cerrar menú al hacer clic en cualquier enlace
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          navToggle.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Cerrar al hacer clic fuera del menú
    document.addEventListener('click', (event) => {
      if (navMenu.classList.contains('open') && 
          !navMenu.contains(event.target) && 
          !navToggle.contains(event.target)) {
        navMenu.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* --------------------------------------------------------------------------
     4. SOMBRA Y EFECTO EN NAVBAR AL HACER SCROLL
     -------------------------------------------------------------------------- */
  const navbar = document.getElementById('navbar');
  const scrollTopBtn = document.getElementById('scroll-top-btn');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Sombra en navbar
    if (navbar) {
      if (scrollY > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    // Visibilidad del botón "Volver arriba"
    if (scrollTopBtn) {
      if (scrollY > 400) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
  });

  // Acción de volver arriba suavemente
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* --------------------------------------------------------------------------
     5. SCROLLSPY (INDICADOR DE SECCIÓN ACTIVA EN NAVBAR)
     -------------------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNavLink() {
    const scrollPosition = window.pageYOffset + 120;

    sections.forEach(currentSection => {
      const sectionHeight = currentSection.offsetHeight;
      const sectionTop = currentSection.offsetTop;
      const sectionId = currentSection.getAttribute('id');
      const matchingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (matchingLink) {
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach(link => link.classList.remove('active'));
          matchingLink.classList.add('active');
        }
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink);
  updateActiveNavLink();

  /* --------------------------------------------------------------------------
     6. BOTÓN "COPIAR CORREO" CON TOAST FEEDBACK
     -------------------------------------------------------------------------- */
  const btnCopyEmail = document.getElementById('btn-copy-email');
  const copyBtnText = document.getElementById('copy-btn-text');

  if (btnCopyEmail) {
    btnCopyEmail.addEventListener('click', async () => {
      const emailToCopy = USER_CONFIG.email;

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(emailToCopy);
        } else {
          // Fallback para navegadores antiguos o entornos no seguros
          const tempInput = document.createElement('input');
          tempInput.value = emailToCopy;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
        }

        // Feedback en el botón
        if (copyBtnText) copyBtnText.textContent = '¡Copiado!';
        showToast('Dirección de correo copiada al portapapeles');

        setTimeout(() => {
          if (copyBtnText) copyBtnText.textContent = 'Copiar';
        }, 2500);

      } catch (err) {
        console.error('No se pudo copiar el texto:', err);
        showToast(`Correo: ${emailToCopy}`);
      }
    });
  }

  /* --------------------------------------------------------------------------
     7. TOAST NOTIFICATION
     -------------------------------------------------------------------------- */
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  let toastTimeout = null;

  function showToast(message) {
    if (!toast) return;

    if (toastMessage) {
      toastMessage.textContent = message;
    }

    toast.classList.add('show');
    toast.setAttribute('aria-hidden', 'false');

    if (toastTimeout) {
      clearTimeout(toastTimeout);
    }

    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
      toast.setAttribute('aria-hidden', 'true');
    }, 3200);
  }

  /* --------------------------------------------------------------------------
     8. VENTANA MODAL PARA PROYECTOS EN DESARROLLO
     -------------------------------------------------------------------------- */
  const projectModal = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const projectButtons = document.querySelectorAll('.btn-project');

  function openProjectModal(projectName, projectDetails) {
    if (!projectModal) return;

    if (modalTitle) {
      modalTitle.textContent = projectName;
    }

    if (modalDesc && projectDetails) {
      modalDesc.textContent = projectDetails.description || 
        'Este proyecto se encuentra actualmente en desarrollo y preparación para su publicación en GitHub.';
    }

    projectModal.classList.add('active');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Evita scroll de fondo
  }

  function closeProjectModal() {
    if (!projectModal) return;
    projectModal.classList.remove('active');
    projectModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  projectButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();

      const projectId = button.getAttribute('data-project-id');
      const projectData = USER_CONFIG.projects[projectId];
      const projectName = button.getAttribute('data-project-name') || (projectData ? projectData.name : 'Proyecto');

      // Si existe una URL configurada en USER_CONFIG, abrir el repositorio
      if (projectData && projectData.repoUrl && projectData.repoUrl !== '#' && projectData.repoUrl !== '') {
        window.open(projectData.repoUrl, '_blank', 'noopener,noreferrer');
      } else {
        // Si aún no hay URL, abrir el modal informativo
        openProjectModal(projectName, projectData);
      }
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeProjectModal);
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);

  // Cerrar modal al hacer clic en el fondo oscuro
  if (projectModal) {
    projectModal.addEventListener('click', (event) => {
      if (event.target === projectModal) {
        closeProjectModal();
      }
    });
  }

  // Cerrar modal con la tecla ESC
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && projectModal && projectModal.classList.contains('active')) {
      closeProjectModal();
    }
  });

});

