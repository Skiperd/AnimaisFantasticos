import outSideClick from "./outsideclick.js";

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');


dropdownMenus.forEach((menu) => {
  ['touchstart', 'click'].forEach((useEvent) => {
    menu.addEventListener(useEvent, handleClick);

  })
})

function handleClick(event) {
  event.preventDefault();
  this.classList.add('active')
  outSideClick(this, ['touchstart', 'click'], () => {
    this.classList.remove('active')
  });
}
}


