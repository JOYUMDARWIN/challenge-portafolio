const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");
const form = document.getElementById("form");
const parrafo = document.getElementById("mensajeError");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  let mensajeError = "";
  let entrar = false;
  let regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  parrafo.innerHTML = "";

  if (nombre.value.length < 1) {
    mensajeError += `El nombre no puede estar vacio <br>`;
    //entrar = true;
  } else if (nombre.value.length > 50) {
    mensajeError += `El nombre debe tener maximo 50 caracteres <br>`;
    entrar = true;
  }

  if (correo.value.length < 1) {
    mensajeError += `El E-mail no puede estar vacio <br>`;
  } else if (!regexEmail.test(correo.value)) {
    mensajeError += `El E-mail debe tener este formato: nombre de usuario + @ + servidor + dominio <br>`;
    entrar = true;
  }

  if (asunto.value.length < 1) {
    mensajeError += `El campo ASUNTO no puede estar vacio <br>`;
  } else if (asunto.value.length > 50) {
    mensajeError += `El asunto debe tener maximo 50 caracteres <br>`;
    entrar = true;
  }

  if (mensaje.value.length < 1) {
    mensajeError += `El campo MENSAJE no puede estar vacio <br>`;
    entrar = true;
  } else if (mensaje.value.length > 300) {
    mensajeError += `El mensaje debe tener maximo 300 caracteres <br>`;
    entrar = true;
  }

  if (entrar) {
    parrafo.innerHTML = mensajeError;
  } else {
    parrafo.innerHTML = "Mensaje enviado";
  }
});
