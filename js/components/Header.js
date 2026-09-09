export function renderHeader() {
    return `
    <header class="navbar">
      <a href="#" class="navbar__brand">
        <span class="navbar__logo-icon">&lt;/&gt;</span>
        <span class="navbar__brand-text">
          <span class="navbar__brand-name">FULLSTACK</span>
          <span class="navbar__brand-tagline">CODE • CREATE • CONNECT</span>
        </span>
      </a>
      <nav class="navbar__nav" aria-label="Navegação principal">
        <ul class="navbar__list" id="navbar-list">
          <li><a href="#id_turma" class="navbar__link">Início</a></li>
          <li><a href="#quem_somos" class="navbar__link">Quem Somos</a></li>
          <li><a href="#integrantes" class="navbar__link">Integrantes</a></li>
          <li><a href="#mural_turma" class="navbar__link">Mural</a></li>
          <li><a href="#linha_tempo" class="navbar__link">Percurso</a></li>
        </ul>
      </nav>
      <button
        class="navbar__toggle"
        id="navbar-toggle"
        aria-label="Abrir menu"
        aria-expanded="false"
        aria-controls="navbar-list"
      >
        <span></span><span></span><span></span>
      </button>
    </header>
    `
}

export function initHeader() {
    const toggle = document.getElementById('navbar-toggle');
    const list = document.getElementById('navbar-list');

    if (!toggle || !list) return;

    const closeMenu = () => {
        list.classList.remove('navbar__list--open');
        toggle.classList.remove('navbar__toggle--active');
        toggle.setAttribute('aria-expanded', 'false');
    };

    toggle.addEventListener('click', () => {
        const isOpen = list.classList.toggle('navbar__list--open');
        toggle.classList.toggle('navbar__toggle--active', isOpen);
        toggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Fecha o menu ao clicar em um link (útil no mobile)
    list.querySelectorAll('.navbar__link').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    // Fecha o menu se a tela for redimensionada para desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) closeMenu();
    });
}
