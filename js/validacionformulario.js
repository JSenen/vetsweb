/* Asignamos una constante a cada campo del formulario por medio del campo ID de cada uno*/ 

const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const email = document.getElementById('mail');
const telefono = document.getElementById('telefono');
const pregunta = document.getElementById('pregunta');

// Montamos funcióm para mostrar mensaje de error
function showError(input, message) {
  const formControl = input.parentElement; //Elemento padre
  formControl.className = 'form-control error'; //Nombre de la clse
  const small = formControl.querySelector('small'); //Primer elemento del grupo seleccionado
  small.innerText = message;
}

// Función entrada correcta. Devuelve al clase CSS form-control success
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//Funcion comprobar validez email por medio de una Expresión regular
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) { //Condicional
    showSuccess(input);
  } else {
    showError(input, 'Correo electrónico no valido');
  }
}


// Comprobacion campos requeridos
function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach(function(input) { //Recorre el campo
    /*Condicion muestra menasje si el campo no esta relleno */
    if (input.value.trim() === '') { //Condicion si campo vacio
      showError(input, `${getFieldName(input)} Campo requerido`);
      isRequired = true;
    } else {
      showSuccess(input);
    }
  });

  return isRequired;
}

// Comprobacion longitud texto entrada
function checkLength(input, min, max) { //Comprueba longitud
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} como mínimo ${min} caracteres`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} Tiene que se menos de ${max} caracteres`
    );
  } else {
    showSuccess(input);
  }
}


// Obitne el nombre del campo. Se usará con funcion anterior
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Control de eventos del formulario al pulsar el botón
form.addEventListener('submit', function(e) {
  e.preventDefault();

  //Condiciónes campos requeridos
  if(!checkRequired([nombre, email, telefono, pregunta])){
    checkLength(nombre, 3, 15); /*comprueba longitud nombre */
    checkLength(telefono, 9, 10); /*Comprueba longitud telefono */
    checkLength(pregunta,20,200); /* Comprueba longitud texto introducido. Minimo 20, maximo 200 */
    checkEmail(email); /*Comprueba mail */

  }

});
