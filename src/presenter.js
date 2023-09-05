import Ocurencias from "./ContadorOcurrencias";

const cadenaTexto = document.querySelector("#Texto");
const form = document.querySelector("#Texto-form");
const div = document.querySelector("#Ocurrencias-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "<p>" + Ocurencias(cadenaTexto.value) + "</p>";
});
