// Espera o carregamento completo do DOM antes de rodar o script
document.addEventListener('DOMContentLoaded', () => {

  // Atualiza o ano no rodapé automaticamente
  const anoEl = document.getElementById('ano');
  if (anoEl) {
    anoEl.textContent = new Date().getFullYear();
  }

  // Exemplo simples de interação: botão que exibe uma mensagem
  const botao = document.getElementById('btn-acao');
  const mensagem = document.getElementById('mensagem');

  if (botao && mensagem) {
    botao.addEventListener('click', () => {
      mensagem.textContent = 'Você clicou no botão! 🎉';
    });
  }

});
