//Menú hamburguesa

const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir-menu");
const cerrar = document.querySelector("#cerrar-menu");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

//botón donar

document.getElementById("donar").onclick = function() {
    window.location.href = "donar.html"; // Cambia esto por la ruta de tu página interna
};