/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Accordion\n/* harmony export */ });\nclass Accordion {\n  constructor(list) {\n    this.accordionList = document.querySelectorAll(list);\n    this.activeClass = \"ativo\";\n  }\n\n  toggleAccordion(item) {\n    item.classList.toggle(this.activeClass);\n    item.nextElementSibling.classList.toggle(this.activeClass);\n  }\n\n  // adiciona os eventos do accordion\n  addAccordionEvent() {\n    this.accordionList.forEach((item) => {\n      item.addEventListener(\"click\", () => this.toggleAccordion(item));\n    });\n  }\n\n  // Iniciar funcção\n  init() {\n    if (this.accordionList.length) {\n      // ativar primeiro item\n      this.toggleAccordion(this.accordionList[0])\n      this.addAccordionEvent()\n    }\n    return this\n  }\n}\n\n\n//# sourceURL=webpack://curso-javascript-origamid/./js/modules/accordion.js?");

/***/ }),

/***/ "./js/modules/anima-numeros.js":
/*!*************************************!*\
  !*** ./js/modules/anima-numeros.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initAnimaNumeros\n/* harmony export */ });\nfunction initAnimaNumeros() {\n  function animaNumeros() {\n    const numeros = document.querySelectorAll(\"[data-numero]\");\n\n    numeros.forEach((numero) => {\n      const total = +numero.innerText;\n      const incremento = Math.floor(total / 100);\n      let start = 0;\n\n      const timer = setInterval(() => {\n        start += incremento;\n        numero.innerText = start;\n        if (start > total) {\n          numero.innerText = total;\n          clearInterval(timer);\n        }\n      }, 25 * Math.random());\n    });\n  }\n\n  let obsover;\n\n  function handleMutation(mutation) {\n    if (mutation[0].target.classList.contains(\"ativo\")) {\n      obsover.disconnect();\n      animaNumeros();\n    }\n  }\n  obsover = new MutationObserver(handleMutation);\n  const observeTarget = document.querySelector(\".numeros\");\n  obsover.observe(observeTarget, { attributes: true });\n}\n\n\n//# sourceURL=webpack://curso-javascript-origamid/./js/modules/anima-numeros.js?");

/***/ }),

/***/ "./js/modules/dropdown-menu.js":
/*!*************************************!*\
  !*** ./js/modules/dropdown-menu.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initDropdownMenu\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\n\nfunction initDropdownMenu() {\n  const dropdownMenus = document.querySelectorAll(\"[data-dropdown]\");\n\n  function handleClick(event) {\n    event.preventDefault();\n    this.classList.add(\"active\");\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__.default)(this, [\"touchstart\", \"click\"], () => {\n      this.classList.remove(\"active\");\n    });\n  }\n\n  dropdownMenus.forEach((menu) => {\n    [\"touchstart\", \"click\"].forEach((userEvent) => {\n      menu.addEventListener(userEvent, handleClick);\n    });\n  });\n}\n\n\n//# sourceURL=webpack://curso-javascript-origamid/./js/modules/dropdown-menu.js?");

/***/ }),

/***/ "./js/modules/fecth-animais.js":
/*!*************************************!*\
  !*** ./js/modules/fecth-animais.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initFetchAnimais\n/* harmony export */ });\n/* harmony import */ var _anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anima-numeros.js */ \"./js/modules/anima-numeros.js\");\n\n\nfunction initFetchAnimais() {\n  function createAnimal(animal) {\n    const div = document.createElement(\"div\");\n    div.classList.add(\"numero-animal\");\n    div.innerHTML = ` \n        <h3>${animal.especie}</h3>\n        <span data-numero>${animal.total}</span>`;\n    return div;\n  }\n  \n  async function fetchAnimais(url) {\n    try {\n      const responseAnimais = await fetch(url);\n      const jsonAnimais = await responseAnimais.json();\n      const gridNumeros = document.querySelector(\".numeros-grid\");\n      jsonAnimais.forEach((animal) => {\n        const divAnimais = createAnimal(animal);\n        gridNumeros.appendChild(divAnimais);\n      });\n      (0,_anima_numeros_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n    } catch (erro) {\n      console.log(Error(erro));\n    }\n  }\n\n  fetchAnimais(\"./animais.json\");\n}\n\n\n//# sourceURL=webpack://curso-javascript-origamid/./js/modules/fecth-animais.js?");

/***/ }),

/***/ "./js/modules/fecth-bitcoin.js":
/*!*************************************!*\
  !*** ./js/modules/fecth-bitcoin.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initFetchBitcoins\n/* harmony export */ });\nfunction initFetchBitcoins() {\r\n  fetch(\"https://blockchain.info/ticker\")\r\n    .then((response) => response.json())\r\n    .then((json) => {\r\n      const btcPreco = document.querySelector('.btc-preco')\r\n      btcPreco.innerText = (1000/json.BRL.sell).toFixed(4)\r\n    }).catch(erro => {\r\n        console.log(Error(erro))\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack://curso-javascript-origamid/./js/modules/fecth-bitcoin.js?");

/***/ }),

/***/ "./js/modules/funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initFuncionamento\n/* harmony export */ });\nfunction initFuncionamento() {\n  const funcionamento = document.querySelector(\"[data-semana]\");\n  const diasSemana = funcionamento.dataset.semana.split(\",\").map(Number);\n  const hotarioSemana = funcionamento.dataset.horario.split(\",\").map(Number);\n  const dataAgora = new Date();\n  const diaAgora = dataAgora.getDay();\n  const horarioAgora = dataAgora.getHours();\n\n  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;\n  const horarioAberto =\n    horarioAgora >= hotarioSemana[0] && horarioAgora < hotarioSemana[1];\n\n  if (semanaAberto && horarioAberto) {\n    funcionamento.classList.add(\"aberto\");\n  }\n}\n\n\n//# sourceURL=webpack://curso-javascript-origamid/./js/modules/funcionamento.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initMenuMobile\n/* harmony export */ });\n/* harmony import */ var _outsideclick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outsideclick.js */ \"./js/modules/outsideclick.js\");\n\r\n\r\nfunction initMenuMobile() {\r\n  const menuButton = document.querySelector('[data-menu=\"button\"]');\r\n  const menuList = document.querySelector('[data-menu=\"list\"]');\r\n  const eventos = [\"click\", \"touchstart\"];\r\n\r\n  function openMenu() {\r\n    menuButton.classList.add(\"active\");\r\n    menuList.classList.add(\"active\");\r\n    (0,_outsideclick_js__WEBPACK_IMPORTED_MODULE_0__.default)(menuList, eventos, () => {\r\n      menuButton.classList.remove(\"active\");\r\n      menuList.classList.remove(\"active\");\r\n    });\r\n  }\r\n\r\n  if (menuButton) {\r\n    eventos.forEach((event) => {\r\n      menuButton.addEventListener(event, openMenu);\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://curso-javascript-origamid/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Modal\n/* harmony export */ });\nclass Modal {\n  constructor(botaoAbrir, botaoFechar, containerModal) {\n    this.botaoAbrir = document.querySelector(botaoAbrir);\n    this.botaoFechar = document.querySelector(botaoFechar);\n    this.containerModal = document.querySelector(containerModal);\n\n    // bind this ai callback para fazer referencia ao obj da classe\n    this.eventToggleModal = this.eventToggleModal.bind(this);\n    this.cliqueForaModal = this.cliqueForaModal.bind(this);\n  }\n\n  // abre e fecha o modal\n  toggleModal() {\n    this.containerModal.classList.toggle(\"ativo\");\n  }\n\n  // adc o evento de toggle ao modal\n  eventToggleModal(event) {\n    event.preventDefault();\n    this.toggleModal();\n  }\n\n  // fecha o modal ao clicar no lado de fora\n  cliqueForaModal(event) {\n    if (event.target === this.containerModal) {\n      this.toggleModal();\n    }\n  }\n\n  // adc os eventos aos elementos do madal\n  addModalEvent() {\n    this.botaoAbrir.addEventListener(\"click\", this.eventToggleModal);\n    this.botaoFechar.addEventListener(\"click\", this.eventToggleModal);\n    this.containerModal.addEventListener(\"click\", this.cliqueForaModal);\n  }\n\n  init() {\n    if (this.botaoAbrir && this.botaoFechar && this.containerModal) {\n      this.addModalEvent();\n    }\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://curso-javascript-origamid/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/outsideclick.js":
/*!************************************!*\
  !*** ./js/modules/outsideclick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ outsideClick\n/* harmony export */ });\nfunction outsideClick(element, events, callback) {\n  const html = document.documentElement;\n  const outside = 'data-outside';\n\n  if(!element.hasAttribute(outside)) {\n    events.forEach(userEvent => {\n      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick));\n    });\n    element.setAttribute(outside, '');\n  }\n  function handleOutsideClick(event) {\n    if(!element.contains(event.target)) {\n      element.removeAttribute(outside);\n      events.forEach(userEvent => {\n        html.removeEventListener(userEvent, handleOutsideClick);\n      })\n      callback();\n    }\n  }\n}\n\n//# sourceURL=webpack://curso-javascript-origamid/./js/modules/outsideclick.js?");

/***/ }),

/***/ "./js/modules/scroll-animacao.js":
/*!***************************************!*\
  !*** ./js/modules/scroll-animacao.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initAnimacaoScroll\n/* harmony export */ });\nfunction initAnimacaoScroll() {\n  const sections = document.querySelectorAll('[data-anime=\"scroll\"]');\n  const windowMetade = window.innerHeight * 0.6;\n\n  function animaScroll() {\n    sections.forEach((section) => {\n      const sectionTop = section.getBoundingClientRect().top;\n      const isSectionVisible = sectionTop - windowMetade < 0;\n      if (isSectionVisible) section.classList.add(\"ativo\");\n      else if (section.classList.contains(\"ativo\")) {\n        section.classList.remove(\"ativo\");\n      }\n    });\n  }\n  if (sections.length) {\n    animaScroll();\n\n    window.addEventListener(\"scroll\", animaScroll);\n  }\n}\n\n\n//# sourceURL=webpack://curso-javascript-origamid/./js/modules/scroll-animacao.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ ScrollSuave\n/* harmony export */ });\nclass ScrollSuave {\r\n  constructor(link, options) {\r\n    this.linksInternos = document.querySelectorAll(link);\r\n    if (options === undefined) {\r\n      this.options = {\r\n        behavior: \"smooth\",\r\n        block: \"start\",\r\n      };\r\n    } else {\r\n      this.options = options;\r\n    }\r\n\r\n    this.scrollToSection = this.scrollToSection.bind(this);\r\n  }\r\n\r\n  scrollToSection(event) {\r\n    event.preventDefault();\r\n    const href = event.currentTarget.getAttribute(\"href\");\r\n    const section = document.querySelector(href);\r\n    section.scrollIntoView(this.options);\r\n  }\r\n\r\n  addLinkEvente() {\r\n    this.linksInternos.forEach((link) => {\r\n      link.addEventListener(\"click\", this.scrollToSection);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    if (this.linksInternos.length) {\r\n      this.addLinkEvente();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://curso-javascript-origamid/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/modules/tabnav.js":
/*!******************************!*\
  !*** ./js/modules/tabnav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ TabNav\n/* harmony export */ });\nclass TabNav {\n  constructor(menu, content) {\n    this.tabMenu = document.querySelectorAll(menu);\n    this.tabContent = document.querySelectorAll(content);\n    this.activeClass = \"ativo\";\n  }\n\n  // ativa a tab de acordo com o index da mesma \n  activeTab(index) {\n    this.tabContent.forEach((section) => {\n      section.classList.remove(this.activeClass);\n    });\n    const direcao = this.tabContent[index].dataset.anime;\n    this.tabContent[index].classList.add(this.activeClass, direcao);\n  }\n\n  // adicona eventos nas tabs\n  addTabNavEvent() {\n    this.tabMenu.forEach((itemMenu, index) => {\n      itemMenu.addEventListener(\"click\", () => this.activeTab(index));\n    });\n  }\n\n  init() {\n    if (this.tabMenu.length && this.tabContent.length) {\n      // ativa primeiro item  \n      this.activeTab(0)\n      this.addTabNavEvent();\n    }\n\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://curso-javascript-origamid/./js/modules/tabnav.js?");

/***/ }),

/***/ "./js/modules/tooltip.js":
/*!*******************************!*\
  !*** ./js/modules/tooltip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ initTooltip\n/* harmony export */ });\nfunction initTooltip() {\n  const tooltips = document.querySelectorAll(\"[data-tooltip]\");\n\n  const onMouseMove = {\n    handleEvent(event) {\n      this.tooltipBox.style.top = `${event.pageY + 20} px`\n      this.tooltipBox.style.left = `${event.pageX + 20} px`;\n    },\n  };\n\n  const onMouseLeave = {\n    handleEvent() {\n      this.tooltipBox.remove();\n      this.element.removeEventListener(\"mouseleave\", onMouseLeave);\n      this.element.removeEventListener(\"mousemove\", onMouseMove);\n    },\n  };\n\n  function criarTooltipBox(element) {\n    const tooltipBox = document.createElement(\"div\");\n    const text = element.getAttribute(\"aria-label\");\n    tooltipBox.classList.add(\"tooltip\");\n    tooltipBox.innerText = text;\n    document.body.appendChild(tooltipBox);\n    return tooltipBox;\n  }\n\n  function onMouseOver() {\n    const tooltipBox = criarTooltipBox(this);\n\n    onMouseMove.tooltipBox = tooltipBox;\n    this.addEventListener(\"mousemove\", onMouseMove);\n\n    onMouseLeave.tooltipBox = tooltipBox;\n    onMouseLeave.element = this;\n    this.addEventListener(\"mouseleave\", onMouseLeave);\n  }\n\n  tooltips.forEach((item) => {\n    item.addEventListener(\"mouseover\", onMouseOver);\n  });\n\n\n}\n\n\n//# sourceURL=webpack://curso-javascript-origamid/./js/modules/tooltip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-animacao.js */ \"./js/modules/scroll-animacao.js\");\n/* harmony import */ var _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/accordion.js */ \"./js/modules/accordion.js\");\n/* harmony import */ var _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabnav.js */ \"./js/modules/tabnav.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tooltip.js */ \"./js/modules/tooltip.js\");\n/* harmony import */ var _modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dropdown-menu.js */ \"./js/modules/dropdown-menu.js\");\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/funcionamento.js */ \"./js/modules/funcionamento.js\");\n/* harmony import */ var _modules_fecth_animais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/fecth-animais.js */ \"./js/modules/fecth-animais.js\");\n/* harmony import */ var _modules_fecth_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/fecth-bitcoin.js */ \"./js/modules/fecth-bitcoin.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst scrollSuave = new _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_0__.default('[data-menu=\"suave\"] a[href^=\"#\"]');\r\nscrollSuave.init();\r\n\r\nconst accordion = new _modules_accordion_js__WEBPACK_IMPORTED_MODULE_2__.default('[data-anime=\"accordion\"] dt');\r\naccordion.init();\r\n\r\nconst tabNav = new _modules_tabnav_js__WEBPACK_IMPORTED_MODULE_3__.default(\r\n  '[data-tab=\"menu\"] li',\r\n  '[data-tab=\"content\"] section'\r\n);\r\ntabNav.init();\r\n\r\nconst modal = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__.default(\r\n  '[data-modal=\"abrir\"]',\r\n  '[data-modal=\"fechar\"]',\r\n  '[data-modal=\"container\"]'\r\n);\r\nmodal.init();\r\n\r\n(0,_modules_scroll_animacao_js__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n\r\n(0,_modules_tooltip_js__WEBPACK_IMPORTED_MODULE_5__.default)();\r\n(0,_modules_dropdown_menu_js__WEBPACK_IMPORTED_MODULE_6__.default)();\r\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_7__.default)();\r\n(0,_modules_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__.default)();\r\n(0,_modules_fecth_animais_js__WEBPACK_IMPORTED_MODULE_9__.default)();\r\n(0,_modules_fecth_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__.default)();\r\n\n\n//# sourceURL=webpack://curso-javascript-origamid/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./js/script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;