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

//Scroll slider

const slides = document.querySelectorAll (".slide");
const totalSlides = slides.length;

let currentIndex =0;
let isTransitioning = false; // Evitar cambios durante la transición

// Función para mostrar el slide actual y ocultar los demás
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

// Inicializa mostrando el primer slide
showSlide(currentIndex);

window.addEventListener('wheel', (event) => {
    // Bloquea la acción de desplazamiento solo si estamos en transición
    if (isTransitioning) {
        event.preventDefault();
        return;
    }

    // Scroll hacia abajo
    if (event.deltaY > 0 && currentIndex < totalSlides - 1) {
        event.preventDefault(); // Bloquea el scroll solo cuando cambia el slide
        changeSlide(currentIndex + 1);
    }
    // Scroll hacia arriba
    else if (event.deltaY < 0 && currentIndex > 0) {
        event.preventDefault(); // Bloquea el scroll solo cuando cambia el slide
        changeSlide(currentIndex - 1);
    }
    // Permite el scroll de la página al llegar al último slide
    else if (currentIndex === totalSlides - 1) {
        document.body.style.overflow = 'auto';
    }
}, { passive: false });

// Cambia al slide especificado por 'newIndex'
function changeSlide(newIndex) {
    isTransitioning = true;
    currentIndex = newIndex;

    // Mostrar el nuevo slide
    showSlide(currentIndex);

    // Desbloquear la transición después de 0.5s
    setTimeout(() => {
        isTransitioning = false; // Permitir el siguiente cambio después de la transición
    }, 500);
}