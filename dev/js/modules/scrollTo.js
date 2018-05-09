export default (el) => {
  if(el){
    const requestAnimFrame = (() => {
      return  window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(callback){
        window.setTimeout(callback, 1000 / 60);
      };
    })();
  
    let i = 0;
    let pos = el.offsetTop - el.scrollTop + el.clientTop;
    let animateScroll = () => {
      window.scrollTo(0, i += 40);
      if(i < pos){
        requestAnimFrame(animateScroll);
      }
    }
    animateScroll();
  }
}