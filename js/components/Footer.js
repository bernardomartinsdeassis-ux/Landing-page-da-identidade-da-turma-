export function renderFooter() {
  return `
    <footer class="site-footer">
      <div class="footer-container">
        <p class="footer-logo">&lt;Turma /&gt;</p>

        <nav class="footer-links" aria-label="Navegação do rodapé">
          <a href="#id_turma">Identidade</a>
          <a href="#quem_somos">Quem Somos</a>
          <a href="#integrantes">Integrantes</a>
          <a href="#mural_turma">Mural</a>
          <a href="#linha_tempo">Linha do Tempo</a>
        </nav>

        <p class="footer-copy">
          © ${new Date().getFullYear()} Projeto da Turma
        </p>
      </div>
    </footer>
  `;
}
