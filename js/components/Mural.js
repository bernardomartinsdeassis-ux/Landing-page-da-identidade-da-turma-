export function renderMural() {
    return `
       <section class="mural" aria-labelledby="mural-titulo">
    <header class="mural__cabecalho">
      <p class="mural__etiqueta">02 / Mural</p>
      <h2 class="mural__titulo" id="mural-titulo">Vozes da turma</h2>
 
      <div class="mural__linha">
        <p class="mural__subtitulo">Pequenos pensamentos, grandes aprendizados.</p>
        <span class="mural__marca">Mural da turma</span>
      </div>
    </header>
 
    <ul class="mural__grade">
      <li class="cartao">
        <blockquote class="cartao__texto">"Aprender algo novo todos os dias."</blockquote>
        <footer class="cartao__autor">— integrante da turma</footer>
      </li>
 
      <li class="cartao">
        <blockquote class="cartao__texto">"Errar também faz parte do processo."</blockquote>
        <footer class="cartao__autor">— integrante da turma</footer>
      </li>
 
      <li class="cartao">
        <blockquote class="cartao__texto">"Código melhor é código compartilhado."</blockquote>
        <footer class="cartao__autor">— integrante da turma</footer>
      </li>
 
      <li class="cartao">
        <blockquote class="cartao__texto">"Cada desafio traz uma nova oportunidade."</blockquote>
        <footer class="cartao__autor">— integrante da turma</footer>
      </li>
 
      <li class="cartao">
        <blockquote class="cartao__texto">"Programar é transformar ideias em soluções."</blockquote>
        <footer class="cartao__autor">— integrante da turma</footer>
      </li>
 
      <li class="cartao">
        <blockquote class="cartao__texto">"Ninguém evolui sozinho."</blockquote>
        <footer class="cartao__autor">— integrante da turma</footer>
      </li>
 
      <li class="cartao">
        <blockquote class="cartao__texto">"Persistência antes da perfeição."</blockquote>
        <footer class="cartao__autor">— integrante da turma</footer>
      </li>
 
      <li class="cartao">
        <blockquote class="cartao__texto">"Conhecimento se constrói em equipe."</blockquote>
        <footer class="cartao__autor">— integrante da turma</footer>
      </li>
    </ul>
  </section>
    `
}