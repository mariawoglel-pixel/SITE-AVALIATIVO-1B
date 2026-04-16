// 1. GESTÃO DE DADOS (ARRAY DE OBJETOS)
const servicosData = [
    {
        titulo: "Meditação Guiada",
        descricao: "Sessões focadas em redução de estresse e conexão ambiental.",
        icone: "🧘"
    },
    {
        titulo: "Hortas Urbanas",
        descricao: "Aprenda a cultivar seus próprios alimentos em pequenos espaços.",
        icone: "🌱"
    },
    {
        titulo: "Consumo Consciente",
        descricao: "Guia completo para reduzir sua pegada de carbono.",
        icone: "♻️"
    }
];

// 2. RENDERIZAÇÃO DINÂMICA
function renderCards() {
    const container = document.getElementById('services-container');
    container.innerHTML = servicosData.map(item => `
        <article class="card">
            <span style="font-size: 2rem" aria-hidden="true">${item.icone}</span>
            <h3>${item.titulo}</h3>
            <p>${item.descricao}</p>
        </article>
    `).join('');
}

// 3. ACESSIBILIDADE: TAMANHO DA FONTE
let currentFontSize = 100;
function changeFontSize(action) {
    currentFontSize += (action === 'increase' ? 10 : -10);
    document.documentElement.style.fontSize = `${currentFontSize}%`;
}

// 4. ACESSIBILIDADE: ALTO CONTRASTE
function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

// 5. COMPONENTE ACORDEÃO (LOGICA DE EXPANSÃO)
function toggleAccordion(button) {
    const content = button.nextElementSibling;
    const isExpanded = button.getAttribute('aria-expanded') === 'true';
    
    button.setAttribute('aria-expanded', !isExpanded);
    content.hidden = isExpanded;
}

// 6. SCROLL REVEAL (INTERSECTION OBSERVER)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

// INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', () => {
    renderCards();
    
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });
});
