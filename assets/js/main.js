import "./smooth-scroll.js";
import { galleryFilter } from './gallery-filter.js';
import { animateHero } from "./animation/hero-animation.js";
import { textAnimation } from "./animation/text-animation.js";
import { animateCards } from "./animation/card-animation.js";
import { hoverEffect } from "./animation/hover-animation.js";
import { navbarScroll } from "./navbar-effect.js";
// import { customSelect } from "./custom-select.js";
import { counterAnimation } from "./animation/counter-animation.js";
import { pricingSection } from "./pricing-section.js";
import { galleryModal } from './gallery-modal.js';


document.addEventListener("DOMContentLoaded", () => {
  animateHero();
  textAnimation();
  animateCards();
  navbarScroll();
  // customSelect();
  counterAnimation();
  pricingSection();
  galleryFilter();
  galleryModal();

  if (window.innerWidth >= 768) {
    import("./cursor.js").then(({ cursorEffect }) => {
      cursorEffect();
      hoverEffect();
    });
  }
});
