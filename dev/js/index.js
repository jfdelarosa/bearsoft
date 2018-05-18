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

emailjs.init("user_CfOH4dIY9G8E7IaO0h3tJ");
document.querySelector(".form").addEventListener("submit", (e) => {
  formSubmit(e.target);
  e.preventDefault();
});

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:885215,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');