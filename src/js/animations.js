import { gsap, Power2 } from "gsap";

export const navAnim = gsap
  .timeline({ paused: true })
  .to('[aria-label="header-nav"]', {
    pointerEvents: "auto",
    visibility: "visible",
    opacity: 1,
    duration: 0.5,
    ease: Power2.ease,
  })
  .to('[aria-label="header-nav"] .menu__item', {
    opacity: 1,
    y: 0,
    stagger: 0.2,
  });

export const menuToggleAnim = gsap
  .timeline({ paused: true, defaults: { duration: 0.5, ease: Power2.ease } })
  .to(
    ".menu-toggle__icon--burger",
    { visibility: "hidden", y: "-20%", opacity: 0 },
    0
  )
  .to(
    ".menu-toggle__icon--close",
    { visibility: "visible", y: 0, opacity: 1 },
    0
  );
