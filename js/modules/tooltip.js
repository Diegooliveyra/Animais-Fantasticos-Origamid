export default class initTooltip {
  constructor(tooltips) {
    this.tooltip = document.querySelectorAll(tooltips);

    // bind do obj da classe aos callbacks
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  // Move a tooltip com base em seus estilos de acordo com a posição do mouse 
  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20} px`;
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 190} px`;
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20} px`;
    }
  }

  // remove a tooltip e os eventos de mousemove e mouseleave
  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  // cria a tooltip box e coloca no body
  criarTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

// cria a tooltip  e adciona os eventos de mouseleave e mousemove ao target
  onMouseOver({ currentTarget }) {
    // cria a tooltip box e coloca em uma propriedade
    this.criarTooltipBox(currentTarget);
    currentTarget.addEventListener("mousemove", this.onMouseMove);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  // adiciona os eventos de mouseover a casa tolltip
  addTooltipEvents() {
    this.tooltip.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init() {
    if (this.tooltip.length) {
      this.addTooltipEvents();
    }

    return this;
  }
}
