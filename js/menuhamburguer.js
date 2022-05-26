
/* MENU HAMBURGUESA */

// selector de la clase .hamburger
var menu = document.querySelector('.hamburger');

// funcion para cambiar el menu y se abra
function toggleMenu (event) {
  this.classList.toggle('is-active');
  //Asociado a la clase .menuppal pasando a clase is_active
  //Coge primer elemento con caracteres ".menuppal" y lo pone como activo añadiendo "is_active" a la clase
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault(); //Cancela evento anterior
}

// evento a la espera del click para activar función toogleMenu
menu.addEventListener('click', toggleMenu, false);