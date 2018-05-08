export default () => {
  window.addEventListener("scroll", () => {
    const offset = 150,
    constante = 2;
    let offsetY = window.pageYOffset + offset;
    document.querySelectorAll(".section .container").forEach((el, index, array) => {
      let limit = el.offsetTop + el.offsetHeight + offset;
      if(offsetY > el.offsetTop && offsetY <= limit){
        el.style.backgroundPositionY = (offsetY - el.offsetTop) / constante + "px";
      }else{
        el.style.backgroundPositionY =  "1rem";
      }
    });
  });
};
