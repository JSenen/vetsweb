/* TESTIMONIOS */

//Asigna constantes a cada elemento padre indicado
const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

//Usuarios, Datos del usuario, foto y mensajes predefinidos en la constante. Creamos una Array
const testimonials = [
  {
    name: 'Antonia Gonzalez',
    position: 'Cliente',
    photo:
      'https://randomuser.me/api/portraits/women/54.jpg',
    text:
      ".He acudido muchas veces y siempre me han atendido profesionalmente. Cualquier duda es resuelta con prontitud y el trato a mi mascota es exquisito.",
  },
  {
    name: 'Ana Armas',
    position: 'Cliente',
    photo: 'https://randomuser.me/api/portraits/women/20.jpg',
    text:
      '.Un centro de plena confianza y profesionalidad. Acudi para consultar sobre una cirujia para mi gato y sali muy satisfecha por el trato, las explicaciones y la amabilidad',
  },
  {
    name: 'Enrique Iglesias',
    position: 'Cliente',
    photo: 'https://randomuser.me/api/portraits/men/68.jpg',
    text:
      "Vine a vivir hace poco al pueblo y me preocupaba encontrar una buena clínica para mis animales. Por suerte encontre este centro. De plena confianza.",
  },
  {
    name: 'José Andrés',
    position: 'Cliente',
    photo: 'https://randomuser.me/api/portraits/men/10.jpg',
    text:
      "Muy satisfecho!!. Como cliente recomiendo 100% los servicios. Pueden atender la gran mayoria de casos y en situaciones de urgencia disponen de acuerdos con hospitales cercanos.",
  },
  {
    name: 'Irena Irene',
    position: 'Cliente',
    photo: 'https://randomuser.me/api/portraits/women/1.jpg',
    text:
      "Que decir que no se sepa. Cualquiera que haya solicitado sus servicios estará plenamente satisfecho",
  },
  {
    name: 'Carlos Jesus',
    position: 'Cliente',
    photo:
      'https://randomuser.me/api/portraits/men/21.jpg',
    text:
      'Cualquier cosa que pueda decir se queda corta. Muy satisfecho con su atención a mis 5 gatos',
  },
  {
    name: 'Romina Romana',
    position: 'Cliente',
    photo: 'https://randomuser.me/api/portraits/women/9.jpg',
    text:
      'De los mejores centros que he conocido. Llevo muchos años llevando aquí a mis animales, así como comprando todo tipo de comida o complementos. Un perfecto asesoramiento y mucho cariño a mis mascotas.',
  },
]

//Variable contador indice
let idx = 1

//Funcion actuliza los testimonios que se ven
function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx] //Asigna los valores de las constantes al indice

  //Los introduce en el HTML
  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  //Suma 1 al indice
  idx++

  //Condicion cuando índice pasa del numero de testimonios del array y lo inicializa a 0
  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

//Establece el intervalo entre testimonios 
setInterval(updateTestimonial, 10000)
