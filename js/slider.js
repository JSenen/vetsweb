
/* SLIDER */

//Comienza en el indice 1. Se le asigna a la variable slideIndex. 

var slideIndex = 1;
showSlides(slideIndex); //Llamada a la funcion showSlides(1)

// Control de antes y despues
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Controla el numero de la foto que le ha pasado fichero html al momento de pulsar raton sobre circulo
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");//Obtiene la catidad de fotos  por el nombre de la clase (html)
  var dots = document.getElementsByClassName("dot");//Obtiene cantidad de puntos de la foto por el nombre de la clase (html)
  //Si el número de fotos es mayor al total, vuelve a la 1
  if (n > slides.length) {slideIndex = 1}
  //Si es menor de 1 volvera a la ultima (9)
  if (n < 1) {slideIndex = slides.length}
  //Bucle desde la 0 hasta 8. Suma de 1 en 1 y al array slides[numero bucle] le aplica el efecto escondido.
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  //Bucle similar para activar los puntos de la foto activa 
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 


