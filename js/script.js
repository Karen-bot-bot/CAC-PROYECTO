/* Links activos */
document.addEventListener("DOMContentLoaded", function () {
  var navBar = document.querySelector(".contenedor-head .navbar-nav");
  var links = navBar.getElementsByClassName("nav-link");

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
      var current = navBar.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].classList.remove("active");
      }
      this.classList.add("active");
    });

    if (links[i].href === window.location.href) {
      links[i].classList.add("active");
    }
  }
});

/*Desactivar flechas de incremento y decremento en el placeholder Total*/
var numberInput = document.getElementById("total");
numberInput.addEventListener("keydown", function (event) {
  if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    event.preventDefault();
  }
});

/* ===============
  FORMULARIO  */

let valorEntrada = 200;
let cantidadEntradas;
let categoria;
let compraTotal = document.getElementById("total");
let placeholderOriginal = compraTotal.placeholder;

document.getElementById("resumen").addEventListener("click", function (event) {
  event.preventDefault();

  cantidadEntradas = document.getElementById("cantidad").value;
  categoria = document.getElementById("categoria").value;
  let totalFinal = 0;

  if (categoria === "estudiante") {
    totalFinal = cantidadEntradas * valorEntrada * 0.2;
  } else if (categoria === "trainee") {
    totalFinal = cantidadEntradas * valorEntrada * 0.5;
  } else if (categoria === "junior") {
    totalFinal = cantidadEntradas * valorEntrada * 0.85;
  }

  compraTotal.placeholder = "Total a pagar: $" + totalFinal.toFixed(2);
  console.log(compraTotal.placeholder);
});

// Al presionar en el botón "Borrar" se restablece el formulario
document.getElementById("reset").addEventListener("click", function () {
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("correo").value = "";
  document.getElementById("cantidad").value = "";
  document.getElementById("categoria").value = "estudiante";

  compraTotal.placeholder = placeholderOriginal;
});
