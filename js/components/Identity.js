export function renderIdentity() {
    return `
    <section class="identity">
      <div class="identity__inner">
        <div class="identity__eyebrow">IDENTIDADE DA TURMA</div>

        <div class="identity__mark">
          <div class="identity__glow"></div>
          <div class="identity__ring"></div>
          <span class="identity__brace">{ }</span>
          <svg viewBox="0 0 100 100" fill="none">
            <path d="M35 25 L15 50 L35 75" stroke="#00E676" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M65 25 L85 50 L65 75" stroke="#00E676" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M58 18 L42 82" stroke="#7C4DFF" stroke-width="7" stroke-linecap="round"/>
          </svg>
        </div>

        <h2 class="identity__name">FullStack<span>5.0</span></h2>

        <p class="identity__slogan">
          Uma turma, diferentes histórias, um mesmo código: transformamos aprendizado
          em soluções através da tecnologia.
        </p>

        <div class="identity__tagline">
          <span>CODE</span><i>•</i><span>CREATE</span><i>•</i><span>CONNECT</span>
        </div>
      </div>
    </section>
  `;
}
