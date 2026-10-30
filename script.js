/**
 * ============================================================================
 * PORTFOLIO PROFESIONAL - LAURA MARÍN BARRIO
 * Archivo: script.js
 * 
 * Funcionalidades interactivas, configuración centralizada, modal de proyectos
 * con ficha técnica detallada, scrollspy, navegación y copiado rápido.
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------------------------
     1. CONFIGURACIÓN CENTRALIZADA
     -------------------------------------------------------------------------- */
  const USER_CONFIG = {
    name: 'Laura Marín Barrio',
    email: 'grupomala@hotmail.com',
    phone: '650 411 664',
    whatsappUrl: 'https://wa.me/34650411664',
    githubUrl: 'https://github.com/laura-weka',
    linkedinUrl: 'https://www.linkedin.com/in/lauramarinbarrio',
    location: 'Vejer de la Frontera, Cádiz',

    // Fichas técnicas completas de proyectos
    projects: {
      'reservas': {
        name: 'Sistema Digital de Reservas Deportivas',
        badge: 'Aplicado en negocio real',
        badgeType: 'in-production',
        tech: ['Google Sheets', 'Formularios Web', 'n8n', 'Google Apps Script', 'Flutter / Firebase'],
        description: 'Solución integral desarrollada para gestionar reservas de pistas e instalaciones en el Centro Deportivo Liceo (San Fernando, Cádiz). Centraliza la selección de fechas, horarios y pistas disponibles, automatiza la asignación y envía confirmaciones instantáneas, eliminando solapamientos y llamadas telefónicas innecesarias.',
        note: 'Solución operativa en producción, con versión móvil avanzada actualmente en desarrollo con Flutter y Firebase.'
      },
      'inventario': {
        name: 'Gestión de Inventario y Ventas para Comercio',
        badge: 'Prototipo funcional',
        badgeType: 'in-progress',
        tech: ['Inteligencia Artificial', 'Google Sheets', 'Automatización', 'Visión por IA'],
        description: 'Proyecto de digitalización para tiendas de alimentación y comercio minorista. Permite el control continuo de existencias, seguimiento de compras, alertas por rotura de stock, sugerencias automáticas de pedidos a proveedores e integración con modelos de visión por IA para procesar albaranes y facturas escaneadas.',
        note: 'Diseñado a partir de la experiencia directa en gestión de supermercado y comercio minorista.'
      },
      'crm': {
        name: 'Flujos de Clientes y CRM Comercial',
        badge: 'Implementado',
        badgeType: 'in-production',
        tech: ['WhatsApp Business', 'CRM', 'Google Workspace', 'Fidelización', 'Apps Script'],
        description: 'Estructuración de flujos comerciales para captura, seguimiento y fidelización de clientes. Integra respuestas rápidas y catálogos en WhatsApp Business, organización de bases de datos centralizadas y seguimiento de incidencias para asegurar una atención ágil.',
        note: 'Metodología aplicada para optimizar la relación comercial y la retención en negocios de servicios.'
      },
      'bi': {
        name: 'Cuadros de Mando y Analítica con Power BI',
        badge: 'En desarrollo activo',
        badgeType: 'in-progress-blue',
        tech: ['Power BI', 'Power Query', 'DAX', 'Excel Avanzado', 'KPIs de Negocio'],
        description: 'Diseño de paneles interactivos de Business Intelligence para visualizar el rendimiento económico, horas punta de ocupación, volumen de cobros y evolución de ventas. Facilita la toma de decisiones basada en métricas consolidadas.',
        note: 'Proyecto vinculado a la especialización en Business Intelligence y análisis de datos.'
      },
      'mievento': {
        name: 'Mi Evento en Casa',
        badge: 'En desarrollo',
        badgeType: 'in-progress',
        tech: ['Desarrollo Web Full Stack', 'JavaScript', 'Inteligencia Artificial', 'CSS3 Moderno'],
        description: 'Aplicación web orientada a la planificación de celebraciones, menús y eventos privados. Incluye buscador inteligente de recetas, recomendación y escalado de ingredientes por número de comensales y generación automática de la lista de compras asistida por IA.',
        note: 'Proyecto formativo del itinerario Full Stack en ConquerX.'
      },
      'n8n': {
        name: 'Automatización de Tareas Administrativas con n8n',
        badge: 'Automatización Activa',
        badgeType: 'in-production',
        tech: ['n8n', 'IA Generativa', 'Google Apps Script', 'Webhooks', 'Clasificación de Correo'],
        description: 'Conjunto de flujos de automatización que conectan aplicaciones en la nube para procesar formularios, generar resúmenes automáticos con IA, clasificar peticiones entrantes y emitir alertas inmediatas sin intervención manual.',
        note: 'Flujos orientados al ahorro de tiempo en tareas administrativas repetitivas de pymes.'
      }
    }
  };

  /* --------------------------------------------------------------------------
     2. APLICAR CONFIGURACIÓN DINÁMICA
     -------------------------------------------------------------------------- */
  function applyConfig() {
    // Correo
    const displayEmail = document.getElementById('display-email');
    const btnMailLink = document.getElementById('btn-mail-link');
    if (displayEmail) displayEmail.textContent = USER_CONFIG.email;
    if (btnMailLink) btnMailLink.href = `mailto:${USER_CONFIG.email}?subject=Contacto%20profesional%20desde%20tu%20Portfolio`;

    // LinkedIn
    const displayLinkedin = document.getElementById('display-linkedin');
    const linkLinkedin = document.getElementById('link-linkedin');
    if (displayLinkedin) displayLinkedin.textContent = USER_CONFIG.linkedinUrl.replace(/^https?:\/\/(www\.)?/, '');
    if (linkLinkedin) linkLinkedin.href = USER_CONFIG.linkedinUrl;

    // GitHub
    const displayGithub = document.getElementById('display-github');
    const linkGithub = document.getElementById('link-github');
    if (displayGithub) displayGithub.textContent = USER_CONFIG.githubUrl.replace(/^https?:\/\//, '');
    if (linkGithub) linkGithub.href = USER_CONFIG.githubUrl;

    // Año actual en footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) currentYearSpan.textContent = new Date().getFullYear();
  }

  applyConfig();

  /* --------------------------------------------------------------------------
     3. NAVEGACIÓN MÓVIL
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

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          navToggle.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

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
     4. NAVBAR SCROLL EFFECT & VOLVER ARRIBA
     -------------------------------------------------------------------------- */
  const navbar = document.getElementById('navbar');
  const scrollTopBtn = document.getElementById('scroll-top-btn');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    if (navbar) {
      if (scrollY > 25) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    if (scrollTopBtn) {
      if (scrollY > 380) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
  });

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  /* --------------------------------------------------------------------------
     5. SCROLLSPY (SECCIÓN ACTIVA EN NAVBAR)
     -------------------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNavLink() {
    const scrollPosition = window.pageYOffset + 130;

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
     6. BOTÓN COPIAR CORREO CON TOAST
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
          const tempInput = document.createElement('input');
          tempInput.value = emailToCopy;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
        }

        if (copyBtnText) copyBtnText.textContent = '¡Copiado!';
        showToast('Correo electrónico copiado al portapapeles');

        setTimeout(() => {
          if (copyBtnText) copyBtnText.textContent = 'Copiar';
        }, 2400);

      } catch (err) {
        console.error('Error al copiar correo:', err);
        showToast(`Correo: ${emailToCopy}`);
      }
    });
  }

  /* --------------------------------------------------------------------------
     7. NOTIFICACIÓN TOAST
     -------------------------------------------------------------------------- */
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  let toastTimeout = null;

  function showToast(message) {
    if (!toast) return;
    if (toastMessage) toastMessage.textContent = message;

    toast.classList.add('show');
    toast.setAttribute('aria-hidden', 'false');

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
      toast.setAttribute('aria-hidden', 'true');
    }, 3200);
  }

  /* --------------------------------------------------------------------------
     8. VENTANA MODAL DE DETALLE DE PROYECTO
     -------------------------------------------------------------------------- */
  const projectModal = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalBadge = document.getElementById('modal-badge');
  const modalBadgeText = document.getElementById('modal-badge-text');
  const modalTechStack = document.getElementById('modal-tech-stack');
  const modalExtraNote = document.getElementById('modal-extra-note');
  const modalContactBtn = document.getElementById('modal-contact-btn');
  const projectButtons = document.querySelectorAll('.btn-project');

  function openProjectModal(projectId) {
    if (!projectModal) return;

    const data = USER_CONFIG.projects[projectId];
    if (!data) return;

    if (modalTitle) modalTitle.textContent = data.name;
    if (modalDesc) modalDesc.textContent = data.description;
    if (modalBadgeText) modalBadgeText.textContent = data.badge;
    if (modalExtraNote) modalExtraNote.textContent = data.note;

    // Ajustar estilo del badge reutilizando las clases de estado de style.css
    if (modalBadge) {
      modalBadge.className = `modal-badge status-badge ${data.badgeType}`;
    }

    // Renderizar tags de tecnologías
    if (modalTechStack) {
      modalTechStack.innerHTML = '';
      data.tech.forEach(techItem => {
        const tag = document.createElement('span');
        tag.className = 'tech-tag';
        tag.textContent = techItem;
        modalTechStack.appendChild(tag);
      });
    }

    // Botón de consulta
    if (modalContactBtn) {
      modalContactBtn.href = `https://wa.me/34650411664?text=Hola%20Laura,%20me%20interesa%20conocer%20m%C3%A1s%20detalles%20sobre%20tu%20proyecto:%20${encodeURIComponent(data.name)}`;
      modalContactBtn.target = '_blank';
    }

    projectModal.classList.add('active');
    projectModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
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
      openProjectModal(projectId);
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeProjectModal);
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);

  if (projectModal) {
    projectModal.addEventListener('click', (event) => {
      if (event.target === projectModal) closeProjectModal();
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && projectModal && projectModal.classList.contains('active')) {
      closeProjectModal();
    }
  });

});
