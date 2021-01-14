import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
  constructor(dropdownMenu, events) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenu);

    // define touchstar e click como evento padrão
    if (events === undefined) {
      this.events = ["touchstart", "click"]
    } else {
      this.events = events
    }
    this.active = 'active'
    this.activeDropDownMenu = this.activeDropDownMenu.bind(this)
  }

  // ativa o dropDown menu e adciona 
  // a função que observa o clique fora dela
   activeDropDownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget
    element.classList.add(this.active);
    outsideClick(event.currentTarget, this.events, () => {
      element.classList.remove(this.active);
    });
  }

  // adciona os eventos ao dropDownMenu
  addDropDownMenuEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropDownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length){
      this.addDropDownMenuEvent()
    }
      return this;
  }
}
