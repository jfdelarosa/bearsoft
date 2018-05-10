import parallax from "./modules/parallax";
import scrollTo from "./modules/scrollTo";
import formSubmit from "./modules/form";

parallax();
document.querySelectorAll(".nav__element").forEach((el) => {
  el.addEventListener("click", () => {
    let to = document.querySelector(el.dataset.element);
    scrollTo(to);
  });
});

document.querySelector(".form").addEventListener("submit", (e) => {
  formSubmit(e.target);
  e.preventDefault();
});