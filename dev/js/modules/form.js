export default (el) => {
  let form = {};
  document.querySelectorAll(".form__controller").forEach((el) => {
    form[el.getAttribute('name')] = el.value;
  });
  emailjs.send("smtp_server", "bearsoft", form)
  .then(function(response) {
    el.reset();
    alert("¡Mensaje enviado!");
  }, function(err) {
    console.log(err);
    alert("Ocurrió un error al enviar el mensaje");
  });
}