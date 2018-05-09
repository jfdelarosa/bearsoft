import parallax from "./modules/parallax";
import scrollTo from "./modules/scrollTo";

parallax();
document.querySelectorAll(".nav__element").forEach((el) => {
  el.addEventListener("click", () => {
    let to = document.querySelector(el.dataset.element);
    scrollTo(to);
  });
})

