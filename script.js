const botao = document.querySelector("#botao");

botao.addEventListener("mouseover", () => {
  const larguraJanela = window.innerWidth;
  const alturaJanela = window.innerHeight;

  // Calcula as máximas posições possíveis para o botão
  const leftMaxBotao = larguraJanela - botao.offsetWidth;
  const topMaxBotao = alturaJanela - botao.offsetHeight;

  // Gera uma posição aleatória para o botão dentro dos limites da janela
  const leftAleatoria = Math.floor(Math.random() * leftMaxBotao);
  const topAleatoria = Math.floor(Math.random() * topMaxBotao);

  // Define a posição do botão
  botao.style.position = "absolute"; // Garante que a posição seja absoluta para mover o botão
  botao.style.left = leftAleatoria + "px";
  botao.style.top = topAleatoria + "px";
});
