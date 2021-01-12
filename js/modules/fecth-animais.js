import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  // cria a div contendo informações com o total de animais
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = ` 
        <h3>${animal.especie}</h3>
        <span data-numero>${animal.total}</span>`;
    return div;
  }

  // preenche cada animal no DOM
  const gridNumeros = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimais = createAnimal(animal);
    gridNumeros.appendChild(divAnimais);
  }

  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  // puxa animeia de um arquivo JSON
  // e cria cada animal ultilizando create Aninmal
  async function criarAnimais() {
    try {
      // fetch e espera a resposta e transforma em jSON
      const responseAnimais = await fetch(url);
      const jsonAnimais = await responseAnimais.json();

      // apos receber o JSON, ativa as funçoes
      // para preencher e animar os numeros
      jsonAnimais.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(Error(erro));
    }
  }
  return criarAnimais();
}
