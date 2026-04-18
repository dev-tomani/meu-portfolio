// ==========================================
// Toggle Menu Hambúrguer (Mobile)
// ==========================================
const hamburger = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
    // Troca o ícone de hambúrguer para um "X"
    const icon = hamburger.querySelector('i');
    if (navbar.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-xmark');
    } else {
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
});

// Fechar menu ao clicar em um link (Mobile)
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    });
});

// ==========================================
// Toggle Tema Claro/Escuro
// ==========================================
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = themeToggleBtn.querySelector('i');

// Verifica se há preferência salva no LocalStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'light') {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
}

themeToggleBtn.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'light') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    } else {
        body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
});

// ==========================================
// Geração Dinâmica dos Projetos via Array Map
// ==========================================
const projetosData = [
    {
        id: 1,
        nome: "Meu Portfólio",
        imagem: "./projeto.png",
        linguagens: ["HTML","CSS","JS"],
        repositorio: "#"
    },
    {
        id: 2,
        nome: "Meu Portfólio React",
        imagem: "./projeto.png",
        linguagens: ["JavaScript", "React", "VITE"],
        repositorio: "#"
    }
];

const projectsContainer = document.getElementById('projects-container');

// Função para renderizar os projetos
function renderizarProjetos() {
    const projetosHTML = projetosData.map(projeto => {
        // Gera as tags para cada linguagem
        const tagsHTML = projeto.linguagens.map(ling => `<span class="tech-tag">${ling}</span>`).join('');
        
        return `
            <div class="project-card">
                <img src="${projeto.imagem}" alt="${projeto.nome}" class="project-img">
                <div class="project-info">
                    <h3>${projeto.nome}</h3>
                    <div class="tech-stack">
                        ${tagsHTML}
                    </div>
                    <a href="${projeto.repositorio}" target="_blank" class="project-link">
                        Ver Repositório <i class="fa-brands fa-github"></i>
                    </a>
                </div>
            </div>
        `;
    }).join(''); // Junta o array mapeado em uma única string HTML

    // Injeta o HTML gerado no container
    projectsContainer.innerHTML = projetosHTML;
}

// Executa a função ao carregar o script
renderizarProjetos();