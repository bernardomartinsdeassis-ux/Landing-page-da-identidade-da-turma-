export function renderTimeline() {
    return `
      <section id="linha_tempo" class="linha_tempo-section">
      <div class="container">
        <h2>CONTAINER LINHA DO TEMPO</h2>
         <div class="linha_tempo-header">
                <span class="eyebrow">01 / Percurso</span>
                <h2>Nossa jornada</h2>
                <p class="linha_tempo-description">
                    Conteúdos, desafios e experiências que marcaram a evolução da turma.
                </p>
                <span class="linha_tempo-label">Linha do tempo</span>
            </div>

            <ol class="timeline">

            <li class="timeline-item">
                <div class="timeline-marker">
                <span class="timeline-dot"></span>
                <span class="timeline-step">Challenge 01</span>
                </div>
                <article class="timeline-card">
                <span class="badge">Banco de Dados</span>
                <h3>Gestão Financeira</h3>
                <p>Solução de análise de entrada e saída financeira</p>
                </article>
            </li>

            <li class="timeline-item">
                <div class="timeline-marker">
                <span class="timeline-dot"></span>
                <span class="timeline-step">Challenge 02</span>
                </div>
                <article class="timeline-card">
                <span class="badge">Back-end</span>
                <h3>Análise de Golpes</h3>
                <p>Solução de análise de mensagens de possíveis golpes</p>
                </article>
            </li>

            <li class="timeline-item">
                <div class="timeline-marker">
                <span class="timeline-dot"></span>
                <span class="timeline-step">Challenge 03</span>
                </div>
                <article class="timeline-card">
                <span class="badge">Front-end</span>
                <h3>Portfólio Pessoal</h3>
                <p>Criação de uma página web com os projetos e competências do integrante</p>
                </article>
            </li>

            <li class="timeline-item">
                <div class="timeline-marker">
                <span class="timeline-dot"></span>
                <span class="timeline-step">Challenge 04</span>
                </div>
                <article class="timeline-card">
                <span class="badge">Landing Page</span>
                <h3>Página da Turma</h3>
                <p>Criação da página que você está visualizando agora</p>
                </article>
            </li>

            </ol>

          </div>
      </div>
    </section>
    `
}