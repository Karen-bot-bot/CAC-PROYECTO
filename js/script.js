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
