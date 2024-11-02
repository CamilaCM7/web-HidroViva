let data = []; // Variable para almacenar los datos del JSON

// Función para cargar los datos desde el archivo JSON
function loadData() {
    fetch('ciua.json')
        .then(response => response.json())
        .then(jsonData => {
            data = jsonData; // Almacenar los datos en la variable global
            populateFilters();
            renderTable(data.slice(0, 10)); // Mostrar los primeros 10 datos
        })
        .catch(error => console.error('Error al cargar los datos:', error));
}

// Función para renderizar la tabla
function renderTable(dataToRender) {
    const tbody = document.getElementById('dataTable').querySelector('tbody');
    tbody.innerHTML = ''; // Limpiar el tbody antes de agregar datos

    dataToRender.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.Especie}</td>
            <td>${row.Orden}</td>
            <td>${row.Familia}</td>
            <td>${row.Municipio}</td>
            <td>${row.CuerpoAgua}</td>
            <td>${row.CoordenadaLatitud}</td>
            <td>${row.CoordenadaLongitud}</td>
        `;
        tbody.appendChild(tr);
    });
}

// Función para llenar los filtros
function populateFilters() {
    const columns = ["Especie", "Orden", "Familia", "Municipio"];
    columns.forEach(column => {
        const select = document.getElementById(`${column.toLowerCase()}Filter`);
        const uniqueValues = [...new Set(data.map(item => item[column]))];

        uniqueValues.forEach(value => {
            const option = document.createElement('option');
            option.value = value;
            option.textContent = value;
            select.appendChild(option);
        });
    });
}

// Función para filtrar la tabla
function filterTable() {
    const filters = {};
    document.querySelectorAll('.filters select').forEach(select => {
        if (select.value) filters[select.dataset.column] = select.value;
    });

    const filteredData = data.filter(row => {
        return Object.keys(filters).every(column => {
            return row[column] && row[column].toString() === filters[column];
        });
    });

    renderTable(filteredData.slice(0, 10)); // Muestra los primeros 10 resultados
}

// Cargar los datos cuando la página se haya cargado
document.addEventListener('DOMContentLoaded', loadData);


