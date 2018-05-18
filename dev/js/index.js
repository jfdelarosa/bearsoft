import scrollTo from "./modules/scrollTo";
import formSubmit from "./modules/form";

document.querySelectorAll(".nav__element").forEach((el) => {
  el.addEventListener("click", () => {
    let to = document.querySelector(el.dataset.element);
    scrollTo(to);
  });
});

emailjs.init("user_CfOH4dIY9G8E7IaO0h3tJ");
document.querySelector(".form").addEventListener("submit", (e) => {
  formSubmit(e.target);
  e.preventDefault();
});

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-119483926-1');