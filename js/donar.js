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
document.getElementById('donar').addEventListener('click', function() {
    const form = document.getElementById('formu');
    form.classList.toggle('hidden');
});

document.getElementById('cerrar').addEventListener('click', function() {
    document.getElementById('formu').classList.add('hidden');
});

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    const amount = parseFloat(document.getElementById('amount').value);
    if (amount <= 0) {
        alert("Por favor, ingrese un monto válido.");
        return;
    }

    document.getElementById('formu').classList.add('hidden');
    document.getElementById('gracias').classList.remove('hidden');
});

document.getElementById('cerrar-mensaje').addEventListener('click', function() {
    document.getElementById('gracias').classList.add('hidden');
});

// Función para limpiar el formulario
document.getElementById('limpiar-form').addEventListener('click', function() {
    document.getElementById('form').reset(); // Limpia los campos del formulario
});
