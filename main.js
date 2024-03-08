// Seleccionando los elementos necesarios
const captchaTextBox = document.querySelector(".captch_box input");
const refreshButton = document.querySelector(".refresh_button");
const captchaInputBox = document.querySelector(".captch_input input");
const message = document.querySelector(".message");
const submitButtonCaptcha = document.querySelector("#submitButtonCaptcha");
const submitButton = document.querySelector("#submitButton");

// Variable para guardar el captcha generado
let captchaText = null;

// Function para generar el captcha
const generateCaptcha = () => {
  const randomString = Math.random().toString(36).substring(2, 7);
  const randomStringArray = randomString.split("");
  const changeString = randomStringArray.map((char) => (Math.random() > 0.5 ? char.toUpperCase() : char));
  captchaText = changeString.join("   ");
  captchaTextBox.value = captchaText;
  console.log(captchaText);
};

const refreshBtnClick = (event) => {
  event.preventDefault();
  generateCaptcha();
  captchaInputBox.value = "";
  captchaKeyUpValidate();
};

const captchaKeyUpValidate = () => {
  //Cambiar el valor del del botón del captcha dependiendo de la información respuesta
  submitButtonCaptcha.classList.toggle("disabled", !captchaInputBox.value);

  if (!captchaInputBox.value) message.classList.remove("active");
};

// Función para validar el captcha 
const submitBtnClick = () => {
  captchaText = captchaText
    .split("")
    .filter((char) => char !== " ")
    .join("");
  message.classList.add("active");
  // Revisar si el captcha es correcto o no
  if (captchaInputBox.value === captchaText) {
    message.innerText = "El captcha es correcto";
    message.style.color = "#0b6623";
    submitButton.removeAttribute("disabled");
  } else {
    message.innerText = "El captcha es incorrecto";
    message.style.color = "#d30000";
    submitButton.setAttribute("disabled", true);
  }
};

// Add event listeners for the refresh button, captchaInputBox, submit button
refreshButton.addEventListener("click", refreshBtnClick);
captchaInputBox.addEventListener("keyup", captchaKeyUpValidate);
submitButtonCaptcha.addEventListener("click", submitBtnClick);

// Generar un captcha cuando la página carga
generateCaptcha();