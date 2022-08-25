import { navAnim, menuToggleAnim } from "./animations";

const menuToggle = document.querySelector(".menu-toggle");

function toggleMenu() {
  if (navAnim.progress() === 0) {
    navAnim.play(0);
    menuToggleAnim.play(0);
    return;
  }
  navAnim.reverse();
  menuToggleAnim.reverse();
}

menuToggle.addEventListener("click", toggleMenu);
