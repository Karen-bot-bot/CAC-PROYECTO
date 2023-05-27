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

/*Desactivar flechas de incremento y decremento*/

var numberInput = document.getElementById("total");
numberInput.addEventListener("keydown", function (event) {
  if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    event.preventDefault();
  }
});

/**/

let valorEntrada = 200;
let cantidadEntradas = document.getElementById("cantidad");
let categoria = document.getElementById("categoria");
let compraTotal = document.getElementById("total");

document.getElementById("resumen").addEventListener("click", function (event) {
  event.preventDefault();

  let totalFinal = 0;

  if (categoria === "estudiante") {
    totalFinal = cantidadEntradas * valorEntrada * 0.2;
    console.log(totalFinal);
  } else if (categoria === "trainee") {
    totalFinal = cantidadEntradas * valorEntrada * 0.5;
    console.log(totalFinal);
  } else if (categoria === "junior") {
    totalFinal = cantidadEntradas * valorEntrada * 0.15;
    console.log(totalFinal);
  }

  compraTotal.textContent = "Total a pagar: $" + totalFinal.toFixed(2);
  console.log(
    (compraTotal.textContent = "Total a pagar: $" + totalFinal.toFixed(2))
  );
});

alert("Hola");
