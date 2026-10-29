# Portfolio Profesional | Laura Marín Barrio

Sitio web personal y portafolio profesional desarrollado con **HTML5, CSS3 y JavaScript**, diseñado con una estética moderna, limpia y tecnológica. 

Este proyecto está concebido para presentar la trayectoria profesional de **Laura Marín Barrio**, combinando su amplia experiencia en **gestión empresarial** con sus competencias técnicas en **Inteligencia Artificial, Desarrollo Web, Automatización y Ciberseguridad**, con el objetivo de impulsar nuevas oportunidades laborales en el sector digital.

---

## 🌟 Características Principales

- **Diseño Moderno y Profesional:** Paleta de colores basada en azul pizarra oscuro y turquesa/cian tecnológico, con fondo claro y tipografía legible (*Plus Jakarta Sans*).
- **100% Responsive:** Adaptación fluida a dispositivos móviles, tabletas, portátiles y pantallas de escritorio.
- **Sin Dependencias Externas Complejas:** Funciona de inmediato abriendo el archivo `index.html` en cualquier navegador web moderno, sin necesidad de instalar `npm`, Node.js ni empaquetadores.
- **Preparado para GitHub Pages:** Estructura de archivos estáticos lista para publicar de forma gratuita en GitHub.
- **Interactividad Intuitiva:**
  - Menú de navegación fijo con efecto translúcido (*backdrop blur*) y menú hamburguesa en móviles.
  - Navegación suave (*smooth scrolling*) y resaltado automático de la sección visible (*ScrollSpy*).
  - Tarjetas de habilidades estructuradas por áreas funcionales.
  - Tarjetas de proyectos con distintivo dinámico **"En desarrollo"** y ventana modal informativa.
  - Copiado rápido de la dirección de correo al portapapeles con confirmación visual (*toast notification*).
  - Botón flotante para volver arriba con suavidad.
- **Accesibilidad y Semántica:** Estructura HTML5 semántica (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`) con atributos ARIA y soporte para reducción de movimiento (`prefers-reduced-motion`).

---

## 📁 Estructura del Proyecto

```text
Misproyectos/
│
├── index.html        # Estructura semántica, contenidos y marcado accesible
├── style.css         # Hoja de estilos con variables CSS, diseño responsive y animaciones
├── script.js         # Lógica interactiva, navegación móvil y configuración de usuario
└── README.md         # Documentación completa y guía de despliegue en GitHub Pages
```

---

## 🚀 Cómo Visualizar el Proyecto Localmente

Para ver y probar la página web en tu propio ordenador:

1. Navega hasta la carpeta del proyecto: `c:\Users\Usuario\Misproyectos`.
2. Haz **doble clic en el archivo `index.html`**; se abrirá automáticamente en tu navegador habitual (Google Chrome, Microsoft Edge, Firefox, etc.).
3. *(Opcional para desarrollo)*: Si utilizas Visual Studio Code o extensiones como *Live Server*, puedes hacer clic derecho sobre `index.html` y seleccionar **"Open with Live Server"** para recarga en tiempo real mientras editas.

---

## ⚙️ Cómo Personalizar tus Enlaces y Datos de Contacto

Toda la configuración principal de enlaces y correo se encuentra centralizada al inicio del archivo [`script.js`](file:///c:/Users/Usuario/Misproyectos/script.js) para que puedas modificarla en cuestión de segundos:

```javascript
const USER_CONFIG = {
  // Tu dirección de correo real
  email: 'tu-correo-real@ejemplo.com',

  // El enlace a tu perfil de GitHub
  githubUrl: 'https://github.com/tu-usuario',

  // El enlace a tu perfil de LinkedIn
  linkedinUrl: 'https://www.linkedin.com/in/lauramarinbarrio',

  // Repositorios de tus proyectos (cuando los tengas listos):
  projects: {
    'reservas': {
      name: 'Sistema digital de reservas deportivas',
      repoUrl: null, // Sustituye null por 'https://github.com/tu-usuario/nombre-del-repo' cuando esté disponible
      description: 'Proyecto para gestionar reservas de instalaciones deportivas...'
    },
    'inventario': {
      name: 'Gestión de inventario para comercio',
      repoUrl: null, // Sustituye null cuando esté listo
      description: 'Proyecto de digitalización del inventario...'
    },
    'mievento': {
      name: 'Mi Evento en Casa',
      repoUrl: null, // Sustituye null cuando esté listo
      description: 'Proyecto de aplicación digital para organizar eventos y menús...'
    }
  }
};
```

> **Nota:** Mientras el valor de `repoUrl` sea `null` o `'#'`, al pulsar el botón **"Ver proyecto"** se abrirá automáticamente un modal explicativo indicando que el proyecto está actualmente en desarrollo. Una vez que asignes una URL pública válida, el botón abrirá directamente tu repositorio en una nueva pestaña.

---

## 🌐 Publicación en GitHub Pages (Paso a Paso)

Puedes publicar este portafolio completamente gratis utilizando **GitHub Pages** para que cualquier persona o reclutador pueda visitarlo en internet.

### Paso 1: Crear un nuevo repositorio en GitHub
1. Inicia sesión en [GitHub](https://github.com).
2. Haz clic en el botón verde **"New"** o dirígete a `https://github.com/new`.
3. Asigna un nombre al repositorio:
   - Si deseas que sea tu web personal principal, llámalo: `tu-usuario.github.io`
   - O bien ponle un nombre general como: `portfolio`
4. Asegúrate de marcarlo como **Public** (Público).
5. No marques las casillas de añadir README ni .gitignore (ya los tenemos creados localmente).
6. Haz clic en **"Create repository"**.

### Paso 2: Subir los archivos desde tu terminal
Abre PowerShell o tu terminal en la carpeta `c:\Users\Usuario\Misproyectos` y ejecuta:

```powershell
# 1. Inicializar el repositorio Git local
git init

# 2. Agregar todos los archivos
git add .

# 3. Crear el primer commit
git commit -m "Lanzamiento inicial del portfolio profesional de Laura Marín Barrio"

# 4. Establecer la rama principal
git branch -M main

# 5. Conectar con tu repositorio remoto de GitHub (reemplaza 'tu-usuario' y 'portfolio')
git remote add origin https://github.com/tu-usuario/portfolio.git

# 6. Subir los archivos a GitHub
git push -u origin main
```

### Paso 3: Activar GitHub Pages
1. En la página de tu repositorio en GitHub, entra en la pestaña **Settings** (Configuración).
2. En el menú lateral izquierdo, haz clic en **Pages**.
3. En la sección **Build and deployment**:
   - **Source**: Selecciona `Deploy from a branch`.
   - **Branch**: Selecciona la rama `main` y la carpeta `/ (root)`.
4. Haz clic en **Save** (Guardar).
5. Espera entre 1 y 2 minutos. GitHub te proporcionará una URL pública donde tu web estará disponible para todo el mundo (por ejemplo: `https://tu-usuario.github.io/portfolio/`).

---

## 📄 Secciones Incluidas

1. **Hero (Principal):** Presentación clara del perfil híbrido: Gestión empresarial + Inteligencia Artificial + Desarrollo Web y Automatización.
2. **Sobre Mí:** Resumen fiel de trayectoria profesional en gestión de negocios (instalaciones deportivas, hostelería, comercio y alimentación) y evolución hacia tecnologías digitales.
3. **Habilidades:**
   - *Inteligencia artificial y automatización* (n8n, IA generativa, Antigravity, prompts).
   - *Programación y desarrollo* (HTML/CSS/JS en formación, Python, Java/Android, PSeInt, Flutter/Firebase, SQL).
   - *Datos y herramientas* (Excel avanzado, Google Sheets, Power BI/Query, RStudio).
   - *Gestión empresarial* (Dirección, equipos, inventarios, atención al cliente, Scrum/Kanban).
   - *Ciberseguridad* (Seguridad informática, Linux, redes, protección de datos).
4. **Proyectos:**
   - *Sistema digital de reservas deportivas*
   - *Gestión de inventario para comercio*
   - *Mi Evento en Casa*
5. **Formación:** Diferenciación precisa entre formación en curso (ConquerX) y especializaciones completadas (IA aplicada, Ciberseguridad, PSeInt y herramientas de análisis).
6. **Contacto:** Canales directos configurables para correo electrónico, GitHub y LinkedIn.

---

© Laura Marín Barrio. Todos los derechos reservados.
