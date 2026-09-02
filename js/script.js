document.addEventListener('DOMContentLoaded', () => {

    // 1. Atualiza o ano no footer automaticamente
    const anoEl = document.getElementById('ano');
    if (anoEl) anoEl.textContent = new Date().getFullYear();

    // 2. Lógica do Carrossel Dinâmico
    const cards = Array.from(document.querySelectorAll('.pokedex-grid .pokedex'));
    const btnAnterior = document.querySelector('.pokedex-nav.anterior');
    const btnProximo = document.querySelector('.pokedex-nav.proximo');

    if (!cards.length || !btnAnterior || !btnProximo) return;

    let paginaAtual = 0;

    // Calcula quantos cards mostrar por página com base no tamanho da tela
    function getCardsPorPagina() {
        const largura = window.innerWidth;
        if (largura <= 650) return 1; // Celular
        if (largura <= 900) return 2; // Tablet
        return 3;                     // Desktop
    }

    function atualizarCarrossel() {
        const cardsPorPagina = getCardsPorPagina();
        const totalPaginas = Math.ceil(cards.length / cardsPorPagina);

        // Garante que a página atual não exceda o novo total de páginas ao redimensionar
        if (paginaAtual >= totalPaginas) {
            paginaAtual = Math.max(0, totalPaginas - 1);
        }

        const inicio = paginaAtual * cardsPorPagina;
        const fim = inicio + cardsPorPagina;

        // Oculta ou exibe cada card
        cards.forEach((card, index) => {
            if (index >= inicio && index < fim) {
                card.classList.remove('escondido');
            } else {
                card.classList.add('escondido');
            }
        });

        // Atualiza estado das setas de navegação
        btnAnterior.style.opacity = paginaAtual === 0 ? '0.3' : '1';
        btnAnterior.style.pointerEvents = paginaAtual === 0 ? 'none' : 'auto';

        btnProximo.style.opacity = paginaAtual >= totalPaginas - 1 ? '0.3' : '1';
        btnProximo.style.pointerEvents = paginaAtual >= totalPaginas - 1 ? 'none' : 'auto';
    }

    // Eventos de clique nas setas
    btnProximo.addEventListener('click', () => {
        const totalPaginas = Math.ceil(cards.length / getCardsPorPagina());
        if (paginaAtual < totalPaginas - 1) {
            paginaAtual++;
            atualizarCarrossel();
        }
    });

    btnAnterior.addEventListener('click', () => {
        if (paginaAtual > 0) {
            paginaAtual--;
            atualizarCarrossel();
        }
    });

    // Recalcula o carrossel se a janela for redimensionada
    window.addEventListener('resize', atualizarCarrossel);

    // Inicializa a exibição
    atualizarCarrossel();
});


document.addEventListener('DOMContentLoaded', () => {
  const pokeballs = document.querySelectorAll('.pokeball-grid .pokeball');

  pokeballs.forEach(pokeball => {
    pokeball.addEventListener('click', () => {
      // Identifica o ID do card correspondente pelo data-target
      const targetId = pokeball.getAttribute('data-target');
      const targetCard = document.getElementById(targetId);

      if (targetCard) {
        // Alterna o estado visual da Pokébola (animação/luz)
        pokeball.classList.toggle('aberta');

        // Alterna a exibição do card de descrição correspondente
        targetCard.classList.toggle('escondido');
      }
    });
  });
});