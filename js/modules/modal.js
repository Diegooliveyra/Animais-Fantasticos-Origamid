export default class Modal {
  constructor(botaoAbrir, botaoFechar, containerModal) {
    this.botaoAbrir = document.querySelector(botaoAbrir);
    this.botaoFechar = document.querySelector(botaoFechar);
    this.containerModal = document.querySelector(containerModal);

    // bind this ai callback para fazer referencia ao obj da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.cliqueForaModal = this.cliqueForaModal.bind(this);
  }

  // abre e fecha o modal
  toggleModal() {
    this.containerModal.classList.toggle("ativo");
  }

  // adc o evento de toggle ao modal
  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // fecha o modal ao clicar no lado de fora
  cliqueForaModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  // adc os eventos aos elementos do madal
  addModalEvent() {
    this.botaoAbrir.addEventListener("click", this.eventToggleModal);
    this.botaoFechar.addEventListener("click", this.eventToggleModal);
    this.containerModal.addEventListener("click", this.cliqueForaModal);
  }

  init() {
    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}
