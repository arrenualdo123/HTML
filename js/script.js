const employeeForm = document.getElementById('employeeForm');
const employeeTable = document.getElementById('employeeTable');
const modal = document.getElementById('modal');
let currentRow; // Para almacenar la fila que se está editando o eliminando

// Función para agregar una fila a la tabla
function addRow(name, department, city, position) {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${name}</td>
        <td>${department}</td>
        <td>${city}</td>
        <td>${position}</td>
        <td>
            <button class="editBtn">Editar</button>
            <button class="deleteBtn">Eliminar</button>
        </td>
    `;
    employeeTable.appendChild(row);

    // Agregar eventos para editar y eliminar
    row.querySelector('.editBtn').addEventListener('click', () => editRow(row));
    row.querySelector('.deleteBtn').addEventListener('click', () => showModal(row));
}

// Función para mostrar el modal de confirmación
function showModal(row) {
    modal.style.display = 'block';
    currentRow = row;
}

// Función para eliminar la fila
document.getElementById('confirmDelete').addEventListener('click', () => {
    if (currentRow) {
        employeeTable.removeChild(currentRow);
    }
    modal.style.display = 'none';
});

// Función para cancelar la eliminación
document.getElementById('cancelDelete').addEventListener('click', () => {
    modal.style.display = 'none';
});

// Función para editar la fila
function editRow(row) {
    const cells = row.querySelectorAll('td');
    document.getElementById('name').value = cells[0].innerText;
    document.getElementById('department').value = cells[1].innerText;
    document.getElementById('city').value = cells[2].innerText;
    document.getElementById('position').value = cells[3].innerText;
    employeeTable.removeChild(row); // Elimina la fila actual para agregarla después
}

// Evento para registrar un nuevo empleado
employeeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const department = document.getElementById('department').value;
    const city = document.getElementById('city').value;
    const position = document.getElementById('position').value;

    addRow(name, department, city, position);
    employeeForm.reset(); // Resetea el formulario
});
