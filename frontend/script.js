// frontend/script.js

// Public backend endpoint through Ingress
const backendPath = "https://74.179.216.182/api";

document.getElementById('studentForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const roll = document.getElementById('roll').value;
    const className = document.getElementById('class').value;

    try {
        const response = await fetch(`${backendPath}/students`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, roll, class: className })
        });

        const result = await response.json();
        document.getElementById('message').innerText =
            result.message || JSON.stringify(result);

        
        loadStudents();

    } catch (error) {
        document.getElementById('message').innerText = 'Error: ' + error.message;
    }
});

async function loadStudents() {
    try {
        const response = await fetch(`${backendPath}/students`);
        const students = await response.json();

        // Display dynamically
        const tableBody = document.getElementById('studentsTableBody');
        tableBody.innerHTML = '';

        students.forEach(s => {
            const row = `<tr>
                <td>${s.name}</td>
                <td>${s.roll}</td>
                <td>${s.class}</td>
            </tr>`;
            tableBody.innerHTML += row;
        });

    } catch (error) {
        console.error('Error loading students:', error);
    }
}

// Load student list at page load
loadStudents();
