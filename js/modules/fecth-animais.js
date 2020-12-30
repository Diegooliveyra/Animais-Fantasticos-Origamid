import initAnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {
  async function fetchAnimais(url) {
    try {
      const responseAnimais = await fetch(url);
      const jsonAnimais = await responseAnimais.json();
      const gridNumeros = document.querySelector(".numeros-grid");
      jsonAnimais.forEach((animal) => {
        const divAnimais = createAnimal(animal);
        gridNumeros.appendChild(divAnimais);
      });
      initAnimaNumeros();
    } catch (erro) {
      console.log(Error(erro));
    }
  }

  fetchAnimais("./animais.json");

  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = ` 
        <h3>${animal.especie}</h3>
        <span data-numero>${animal.total}</span>`;
    return div;
  }
}
