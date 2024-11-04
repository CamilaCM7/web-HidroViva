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

//Boton donar
// Mostrar el formulario y el fondo oscuro al hacer clic en el botón
document.getElementById("donar").addEventListener("click", function() {
    document.getElementById("formu").style.display = "block";
    document.getElementById("fondo-oscuro").style.display = "block";
});

// Ocultar el formulario y el fondo oscuro al hacer clic en el botón de cerrar
document.getElementById("cerrar").addEventListener("click", function() {
    document.getElementById("formu").style.display = "none";
    document.getElementById("fondo-oscuro").style.display = "none";
});

// Ocultar el formulario y el fondo oscuro al hacer clic fuera del formulario
document.getElementById("fondo-oscuro").addEventListener("click", function() {
    document.getElementById("formu").style.display = "none";
    document.getElementById("fondo-oscuro").style.display = "none";
});

// Mostrar el mensaje de agradecimiento al enviar el formulario
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío real del formulario
    document.getElementById("formu").style.display = "none"; // Ocultar el formulario
    document.getElementById("fondo-oscuro").style.display = "none"; // Ocultar el fondo oscuro
    document.getElementById("gracias").style.display = "block"; // Mostrar el mensaje de agradecimiento

    // Ocultar el mensaje de agradecimiento después de 3 segundos
    setTimeout(function() {
        document.getElementById("gracias").style.display = "none";
    }, 3000);
});