import AnimaNumeros from "./anima-numeros.js";

export default function initFetchAnimais() {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = ` 
        <h3>${animal.especie}</h3>
        <span data-numero>${animal.total}</span>`;
    return div;
  }
  
  async function fetchAnimais(url) {
    try {
      const responseAnimais = await fetch(url);
      const jsonAnimais = await responseAnimais.json();
      const gridNumeros = document.querySelector(".numeros-grid");
      jsonAnimais.forEach((animal) => {
        const divAnimais = createAnimal(animal);
        gridNumeros.appendChild(divAnimais);
      });
      const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo")
      animaNumeros.init();
    } catch (erro) {
      console.log(Error(erro));
    }
  }

  fetchAnimais("./animais.json");
}
