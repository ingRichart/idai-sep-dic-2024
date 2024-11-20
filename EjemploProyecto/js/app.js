var btnMenuOpen = document.getElementById("btnMenuOpen"),
    btnMenuClose = document.getElementById("btnMenuClose"),
    menuResponsive = document.getElementById("menuBar");

btnMenuOpen.addEventListener("click", function(){
    menuResponsive.classList.add("active");
});

btnMenuClose.addEventListener("click", function(){
    menuResponsive.classList.remove("active");
});

var enlaces = document.getElementById("enlaces");

enlaces.addEventListener("click", function(){
    menuResponsive.style.transformStyle = "0.5s"
    menuResponsive.classList.remove("active");
});

// SLIDER DE PRODUCTOS
var  contenedor = document.querySelector('.slider'),
     btnIzquierdo = document.getElementById("btn-izquierda"),
     btnDerecho = document.getElementById("btn-derecha");

     // EVENTO PARA EL BOTON DERECHO
     btnDerecho.addEventListener("click", function () {
          contenedor.scrollLeft += contenedor.offsetWidth;  
     });

     // EVENTO PARA EL BOTON IZQUIERDO
     btnIzquierdo.addEventListener("click", function () {
          contenedor.scrollLeft -= contenedor.offsetWidth;  
     });

