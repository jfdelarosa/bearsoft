export default (el) => {
  let form = new FormData(el);
  document.querySelectorAll(".form__controller").forEach((el) => {
    form.append(el.getAttribute('name'), el.value);
  });
  fetch("/mail.php", {
      method: "POST",
      body: form
  })
  .then((res) => { return res; })
  .then((data) => {
    console.log(data);
    console.log(JSON.stringify(data));
  });
}