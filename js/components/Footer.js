export function renderFooter() {
  const anoAtual = new Date().getFullYear();

  return `
    <footer class="site-footer">
      <div class="footer-grid" aria-hidden="true"></div>

      <div class="footer-container">
        <div class="footer-top">
          <div class="footer-brand">
            <span class="footer-kicker">&lt;/ turma &gt;</span>

            <h2>
              Construindo nossa história,
              uma linha de código por vez.
            </h2>

            <p>
              Uma landing page feita em conjunto para representar a identidade,
              as pessoas e os momentos que fazem parte da nossa turma.
            </p>
          </div>

          <nav class="footer-nav" aria-label="Navegação do rodapé">
            <span class="footer-nav-title">Navegação</span>

            <a href="#id_turma">Identidade da Turma</a>
            <a href="#quem_somos">Quem Somos</a>
            <a href="#integrantes">Integrantes</a>
            <a href="#mural_turma">Mural da Turma</a>
            <a href="#linha_tempo">Linha do Tempo</a>
          </nav>
        </div>

        <div class="footer-divider" aria-hidden="true"></div>

        <div class="footer-bottom">
          <p>
            <span class="footer-status-dot" aria-hidden="true"></span>
            Projeto colaborativo da turma
          </p>

          <p class="footer-copy">
            &copy; ${anoAtual} • Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  `;
}
