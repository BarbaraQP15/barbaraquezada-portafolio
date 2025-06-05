function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


  const translations = {
  'en': {
    'about': 'About',
    'experience': 'Experience',
    'projects': 'Projects',
    'contact': 'Contact',
    'hola': 'Hello, I am',
    'sw-eng-student': 'Software Engineering Student | Project Leader',
    'download-cv': 'Download CV',
    'contact-info': 'Contact Info',
    'get-to-know': 'Get To Know More',
    'about-me': 'About Me',
    'education': 'Education',
    'explore-my': 'Explore My',
    'tools-tech': 'Tools & Technologies',
    'certifications': 'Certifications',
    'browse-recent': 'Browse My Recent',
    'get-in-touch': 'Get in Touch',
    'contact-me': 'Contact Me',
      'github': 'GitHub',
  'live-demo': 'Live Demo',
    
    // Experiencia en About
    'exp-years': '- Led 3+ years software development teams in university projects<br>- 2+ years applied Scrum methodology in real-world applications<br>- 1 year of experience in web and mobile application development',
    
    // Educación en About - con formato HTML adecuado
    'edu-details': '- B.Sc. Software Engineering - Universidad Peruana de Ciencias Aplicadas<br>- English Program - Asociación Cultural Peruano Británica (Británico)<br>- Certified in Power BI and Scrum Methodologies (Zegel)',
    
    // Descripción personal
    'about-description': 'I am a software engineering student with a passion for technology, problem-solving, and project leadership. My experience includes both frontend development and backend technologies like Spring Boot and Vue. I excel at professional organization, proficiently using tools such as Trello and Notion, and implementing Scrum methodologies to effectively manage projects and teams. My combined technical skills and leadership abilities allow me to successfully guide projects from conception to completion.',
    
    // Niveles de experiencia
    'experienced': 'Experienced',
    
    // Copyright
    'copyright': 'Copyright &#169; 2025 Barbara Quezada. All Rights Reserved.',

    // Certificaciones
  'scrum-methodologies': 'Scrum Methodologies',
  'power-bi-analyst': 'Power BI Analyst',
  'english-program': 'English Program',
  'it-security': 'IT Security: Defense against the digital dark arts',
  'leading-people': 'Leading People and Teams',
  'zegel': 'Zegel',
  'britanico': 'Británico',
  'google': 'Google',
  'michigan': 'Universidad de Michigan / Coursera'
  },
  'es': {
    'about': 'Sobre Mí',
    'experience': 'Experiencia',
    'projects': 'Proyectos',
    'contact': 'Contacto',
    'hola': 'Hola, soy',
    'sw-eng-student': 'Estudiante de Ingeniería de Software | Líder de Proyectos',
    'download-cv': 'Descargar CV',
    'contact-info': 'Información de Contacto',
    'get-to-know': 'Conoce Más',
    'about-me': 'Sobre Mí',
    'education': 'Educación',
    'explore-my': 'Explora Mi',
    'tools-tech': 'Herramientas y Tecnologías',
    'certifications': 'Certificaciones',
    'browse-recent': 'Explora Mis Recientes',
    'get-in-touch': 'Ponte en Contacto',
    'contact-me': 'Contáctame',

    'github': 'GitHub',
  'live-demo': 'Demostración en Vivo',

    'scrum-methodologies': 'Metodologías Scrum',
  'power-bi-analyst': 'Analista Power BI',
  'english-program': 'Programa de Inglés',
  'it-security': 'Seguridad IT: Defensa contra las artes oscuras digitales',
  'leading-people': 'Liderazgo de Personas y Equipos',
  'zegel': 'Zegel',
  'britanico': 'Británico',
  'google': 'Google',
  'michigan': 'Universidad de Michigan / Coursera',
    
  // Experiencia en About - con formato HTML adecuado
    'exp-years': '- 3+ años liderando equipos de desarrollo de software en proyectos universitarios<br>- 2+ años aplicando metodología Scrum en aplicaciones reales<br>- 1 año de experiencia en desarrollo de aplicaciones web y móviles',
    
    // Educación en About - con formato HTML adecuado
    'edu-details': '- Ingeniería de Software - Universidad Peruana de Ciencias Aplicadas<br>- Programa de Inglés - Asociación Cultural Peruano Británica (Británico)<br>- Certificada en Power BI y Metodologías Scrum (Zegel)',
    
    // Descripción personal
    'about-description': 'Soy estudiante de ingeniería de software con pasión por la tecnología, la resolución de problemas y el liderazgo de proyectos. Mi experiencia incluye tanto desarrollo frontend como tecnologías backend como Spring Boot y Vue. Sobresalgo en organización profesional, utilizando eficientemente herramientas como Trello y Notion, e implementando metodologías Scrum para gestionar efectivamente proyectos y equipos. Mis habilidades técnicas combinadas con capacidades de liderazgo me permiten guiar con éxito proyectos desde su concepción hasta su finalización.',
    
    // Niveles de experiencia
    'experienced': 'Experimentado',
    
    // Copyright
    'copyright': 'Derechos de Autor &#169; 2025 Barbara Quezada. Todos los Derechos Reservados.'
  }
};

// Añadir los nuevos elementos a traducir
const translatableElements = [
  // ...existing elements...
  { selector: '.nav-links li:nth-child(1) a', key: 'about' },
  { selector: '.nav-links li:nth-child(2) a', key: 'experience' },
  { selector: '.nav-links li:nth-child(3) a', key: 'projects' },
  { selector: '.nav-links li:nth-child(4) a', key: 'contact' },
  { selector: '.section__text__p1', key: 'hola' },
  { selector: '.section__text__p2', key: 'sw-eng-student' },
  { selector: '.btn-container .btn-color-2', key: 'download-cv' },
  { selector: '.btn-container .btn-color-3', key: 'github' },
  { selector: '.btn-container .btn-color-4', key: 'live-demo' },

  { selector: '.btn-container .btn-color-1', key: 'contact-info' },
  { selector: '#about .section__text__p1', key: 'get-to-know' },
  { selector: '#about .title', key: 'about-me' },
  { selector: '#about .details-container:nth-child(1) h3', key: 'experience' },
  { selector: '#about .details-container:nth-child(2) h3', key: 'education' },
  { selector: '#experience .section__text__p1', key: 'explore-my' },
  { selector: '#experience .title', key: 'experience' },
{ selector: '#experience .details-container:nth-child(1) h2', key: 'tools-tech' },
{ selector: '#experience .details-container:nth-child(2) h2', key: 'certifications' },
  { selector: '#projects .section__text__p1', key: 'browse-recent' },
// Añade estos selectores para traducir los títulos de certificaciones
{ selector: '#experience .details-container:nth-child(2) article:nth-child(1) h3', key: 'scrum-methodologies' },
{ selector: '#experience .details-container:nth-child(2) article:nth-child(2) h3', key: 'power-bi-analyst' },
{ selector: '#experience .details-container:nth-child(2) article:nth-child(3) h3', key: 'english-program' },
{ selector: '#experience .details-container:nth-child(2) article:nth-child(4) h3', key: 'it-security' },
{ selector: '#experience .details-container:nth-child(2) article:nth-child(5) h3', key: 'leading-people' },  
{ selector: '#projects .title', key: 'projects' },
  { selector: '#contact .section__text__p1', key: 'get-in-touch' },
  { selector: '#contact .title', key: 'contact-me' },

  
  // Nuevos elementos
  { selector: '#about .details-container:nth-child(1) p', key: 'exp-years' },
  { selector: '#about .details-container:nth-child(2) p', key: 'edu-details' },
  { selector: '#about .text-container p', key: 'about-description' },
  { selector: 'article p:contains("Experienced")', key: 'experienced' },
  { selector: 'footer p', key: 'copyright' },
  
  // Para enlaces en el menú hamburguesa
  { selector: '.menu-links li:nth-child(1) a', key: 'about' },
  { selector: '.menu-links li:nth-child(2) a', key: 'experience' },
  { selector: '.menu-links li:nth-child(3) a', key: 'projects' },
  { selector: '.menu-links li:nth-child(4) a', key: 'contact' },
  
  // Para enlaces en el footer
  { selector: 'footer .nav-links li:nth-child(1) a', key: 'about' },
  { selector: 'footer .nav-links li:nth-child(2) a', key: 'experience' },
  { selector: 'footer .nav-links li:nth-child(3) a', key: 'projects' },
  { selector: 'footer .nav-links li:nth-child(4) a', key: 'contact' }
];

function changeLanguage(lang) {
  // Guardar la preferencia de idioma
  localStorage.setItem('preferredLanguage', lang);
  
  // Actualizar clases de botones
  document.querySelectorAll('.language-btn').forEach(btn => {
    btn.classList.remove('active-lang');
  });
  document.querySelector(`.language-btn:nth-child(${lang === 'en' ? '1' : '3'})`).classList.add('active-lang');
  
  // Traducir los elementos
  translatableElements.forEach(item => {
    const elements = document.querySelectorAll(item.selector);
    elements.forEach(element => {
      if (translations[lang][item.key]) {
        // Para elementos que contienen HTML (como <br>)
        if (item.key === 'exp-years' || item.key === 'edu-details' || item.key === 'copyright') {
          element.innerHTML = translations[lang][item.key];
        } else {
          element.textContent = translations[lang][item.key];
        }
      }
    });
  });
  
  // Traducir específicamente todos los "Experienced"/"Experimentado" en las secciones de experiencia
  document.querySelectorAll('#experience article p').forEach(element => {
    if (element.textContent.trim() === 'Experienced' || element.textContent.trim() === 'Experimentado') {
      element.textContent = translations[lang]['experienced'];
    }
  });
  
  // Corregir los botones de GitHub y Live Demo
  document.querySelectorAll('.project-btn').forEach(button => {
    if (button.textContent.trim() === 'Github' || button.textContent.trim() === 'GitHub') {
      button.textContent = 'GitHub';
    } else if (button.textContent.trim() === 'Live Demo' || button.textContent.trim() === 'Demo en vivo') {
      button.textContent = lang === 'en' ? 'Live Demo' : 'Demo en vivo';
    }
  });
  
  // Si es español, cambiar las descripciones de proyectos específicamente
  if (lang === 'es') {
    document.documentElement.setAttribute('lang', 'es');
    // Las descripciones en español ya están bien
  } else {
    // Traducir de vuelta al inglés
    document.documentElement.setAttribute('lang', 'en');
    document.querySelector('#projects .details-container:nth-child(1) .project-description').textContent = 
      'Recipe e-commerce app with shopping cart and ingredient management.';
    document.querySelector('#projects .details-container:nth-child(2) .project-description').textContent = 
      'Mobile app with geolocation system connecting adventurers and local entrepreneurs.';
    document.querySelector('#projects .details-container:nth-child(3) .project-description').textContent = 
      'Reservation and order management application for restaurants with IoT devices.';
  }
}

// Reemplaza la sección de animación existente con este código

// Animación de texto con scroll infinito verdadero
document.addEventListener('DOMContentLoaded', function() {
  // Seleccionar los elementos
  const leftRow = document.querySelector('.text-running-way-left .text-row');
  const rightRow = document.querySelector('.text-running-way-right .text-row');
  
  if (!leftRow || !rightRow) return;
  
  // Duplicar el contenido para crear un efecto infinito
  function setupInfiniteScroll(container) {
    const content = container.querySelector('.single-services-list');
    if (!content) return;
    
    // Crear múltiples clones para asegurar que cubra la pantalla
    const contentWidth = content.offsetWidth;
    const requiredCopies = Math.ceil((window.innerWidth * 2) / contentWidth) + 1;
    
    // Clonar el contenido varias veces
    for (let i = 0; i < requiredCopies; i++) {
      container.appendChild(content.cloneNode(true));
    }
    
    return contentWidth;
  }
  
  // Configurar ambas filas
  const leftItemWidth = setupInfiniteScroll(leftRow);
  const rightItemWidth = setupInfiniteScroll(rightRow);
  
  // Crear animaciones CSS en lugar de usar JavaScript para la animación
  // Esto evita cualquier salto o reinicio visible
function createAnimation(element, direction, width, duration) {
  // Eliminar animaciones anteriores
  element.style.animation = 'none';
  element.offsetHeight; // Forzar un reflow
  
  // Usamos nombres únicos para cada animación para evitar conflictos
  const animationName = direction === 'left' ? 'scrollLeft' : 'scrollRight';
  
  // Definir la dirección correcta del movimiento
  const translateDirection = direction === 'left' ? -width : -width; // Ambas se mueven hacia la izquierda
  
  const keyframeName = `@keyframes ${animationName} { 
    from { transform: translateX(0); } 
    to { transform: translateX(${translateDirection}px); }
  }`;
  
  // Crear stylesheet para las keyframes
  if (!document.querySelector(`style[data-animation="${animationName}"]`)) {
    const styleSheet = document.createElement('style');
    styleSheet.setAttribute('data-animation', animationName);
    styleSheet.textContent = keyframeName;
    document.head.appendChild(styleSheet);
  }
  
  // Aplicar la animación
  element.style.animation = `${animationName} ${duration}s linear infinite`;
}

// Velocidades de animación (segundos para completar un ciclo)
const leftDuration = 25; // Ajustar según necesidad
const rightDuration = 25; // Más lento para crear contraste visual

// Iniciar animaciones - ahora ambas se mueven hacia la izquierda pero a diferentes velocidades
createAnimation(leftRow, 'left', leftItemWidth, leftDuration);
createAnimation(rightRow, 'left', rightItemWidth, rightDuration);
  // Ajustar animaciones cuando cambia el tamaño de la ventana
  window.addEventListener('resize', function() {
    // Recalcular y reconfigurar las animaciones
    createAnimation(leftRow, 'left', leftItemWidth * 2, leftDuration);
    createAnimation(rightRow, 'right', rightItemWidth * 2, rightDuration);
  });
  
  // Pausa/reanuda animaciones cuando la sección no está visible
  // para mejorar el rendimiento
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const targetRow = entry.target;
      if (entry.isIntersecting) {
        targetRow.style.animationPlayState = 'running';
      } else {
        targetRow.style.animationPlayState = 'paused';
      }
    });
  }, { threshold: 0.1 });
  
  observer.observe(leftRow);
  observer.observe(rightRow);
});