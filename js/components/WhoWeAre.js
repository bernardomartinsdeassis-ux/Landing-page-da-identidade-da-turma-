export function renderWhoWeAre() {
  return `
    <section
      id="quem_somos"
      class="quem_somos-section"
      aria-labelledby="titulo-quem-somos"
    >
      <div class="container quem-somos-container">

        <header class="quem-somos-header">
          <span class="quem-somos-label">01 / QUEM SOMOS</span>

          <h2 id="titulo-quem-somos" class="titulo-quem-somos">
            Pessoas diferentes.
            <span>Um objetivo em comum.</span>
          </h2>

          <p class="quem-somos-introducao">
            Uma turma conectada pela tecnologia, pelo aprendizado
            e pela vontade de transformar ideias em soluções.
          </p>
        </header>

        <div class="quem-somos-conteudo">

          <article class="texto-quem-somos">
            <div class="texto-quem-somos__marcador" aria-hidden="true">
              <span></span>
            </div>

            <div class="texto-quem-somos__conteudo">
              <h3>Nossa turma</h3>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus dapibus euismod erat, quis facilisis felis pretium
                gravida. Fusce erat sapien, pulvinar sed pharetra et,
                fermentum mollis lacus.
              </p>

              <p>
                Nullam laoreet nec purus eu ullamcorper. Aliquam pellentesque
                elit eget volutpat hendrerit. Mauris semper rhoncus elementum.
                Quisque non est eget urna volutpat commodo nec mollis urna.
              </p>
            </div>
          </article>

          <aside class="quem-somos-codigo" aria-label="Valores da turma">
            <div class="quem-somos-codigo__barra" aria-hidden="true">
              <div class="quem-somos-codigo__controles">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span class="quem-somos-codigo__arquivo">turma.js</span>
            </div>

            <pre class="quem-somos-codigo__bloco"><code><span class="codigo-roxo">const</span> <span class="codigo-azul">turma</span> = {
  <span class="codigo-verde">objetivo</span>: <span class="codigo-amarelo">"aprender"</span>,
  <span class="codigo-verde">desafios</span>: <span class="codigo-amarelo">"superar"</span>,
  <span class="codigo-verde">projetos</span>: <span class="codigo-amarelo">"criar"</span>,
  <span class="codigo-verde">conexoes</span>: <span class="codigo-amarelo">"construir"</span>
};</code></pre>
          </aside>

        </div>
      </div>
    </section>
  `;
}