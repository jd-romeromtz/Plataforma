document.addEventListener('DOMContentLoaded', () => {
    // 1. Datos de Cursos
    const coursesData = [
        {
            id: 1,
            title: "Python Avanzado: Data Science",
            tech: "Python, Pandas, ML",
            description: "Aprende a manipular y analizar grandes volúmenes de datos."
        },
        {
            id: 2,
            title: "Desarrollo Front-end con React",
            tech: "React, Hooks, Redux",
            description: "Construye interfaces de usuario modernas y escalables."
        },
        {
            id: 3,
            title: "Introducción a Blockchain y Solidity",
            tech: "Solidity, Ethereum",
            description: "El futuro de las aplicaciones descentralizadas y contratos inteligentes."
        },
        {
            id: 4,
            title: "Bases de Datos con PostgreSQL",
            tech: "SQL, PostgreSQL",
            description: "Domina la gestión de bases de datos relacionales eficientes."
        }
    ];

    const container = document.getElementById('course-cards-container');

    // 2. Función para renderizar las tarjetas de curso
    function renderCourses() {
        coursesData.forEach(course => {
            const card = document.createElement('div');
            card.className = 'course-card';
            card.innerHTML = `
                <h3 class="card-title">${course.title}</h3>
                <span class="card-tech">${course.tech}</span>
                <p>${course.description}</p>
                <div class="card-actions">
                    <a href="#" class="neon-button enroll-btn">Inscribirse</a>
                    <a href="details.html?id=${course.id}" class="details-btn">Ver Detalles</a>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // 3. Inicializar Cursos
    renderCourses();

    // 4. Implementación del Menú Responsivo (UX/UI para móvil)
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.getElementById('main-nav');

    menuToggle.addEventListener('click', () => {
        // Alterna la clase 'active' para mostrar/ocultar los enlaces
        nav.classList.toggle('active');
    });

    // Ocultar el menú al hacer clic en un enlace (en móvil)
    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                nav.classList.remove('active');
                alert('Navegando a ' + link.textContent);
            }
        });
    });
});

