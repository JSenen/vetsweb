/* CALL ACTION (Efecto imagenes)
*/
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);

/* Script utilizado en las imagenes del Call Action. Por medio de el, se modifica la propiedad "hover", y cuando el ratón deja de estar sobre la imagen se hace no visible la clase "hover"*/