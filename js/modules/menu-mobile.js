import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(menuButton, menuList, eventos) {
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.active = 'active'

    // define touchstar e click como evento padrão
    if (eventos === undefined) {
      this.eventos = ["click", "touchstart"];
    } else {
      this.eventos = eventos;
    }

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    console.log(this);
    this.menuButton.classList.add(this.active);
    this.menuList.classList.add(this.active);
    outsideClick(this.menuList, this.eventos, () => {
      this.menuButton.classList.remove(this.active);
      this.menuList.classList.remove(this.active);
    });
  }

  addMenuMobileEvents() {
    this.eventos.forEach((event) => {
      this.menuButton.addEventListener(event, this.openMenu); 
    });
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
