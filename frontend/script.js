document.getElementById('studentForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const roll = document.getElementById('roll').value;
    const className = document.getElementById('class').value;

    try {
        // Use the backend URL from environment variable
        const backendUrl = window.BACKEND_URL || 'http://backend-service:3000';

        const response = await fetch(`${backendUrl}/students`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, roll, class: className })
        });

        const result = await response.json();
        document.getElementById('message').innerText = result.message || JSON.stringify(result);
    } catch (error) {
        document.getElementById('message').innerText = 'Error: ' + error.message;
    }
});

// Load existing students
async function loadStudents() {
    try {
        const backendUrl = window.BACKEND_URL || 'http://backend-service:3000';

        const response = await fetch(`${backendUrl}/students`);
        const students = await response.json();
        const tableBody = document.getElementById('studentsTableBody');
        tableBody.innerHTML = '';
        students.forEach((student, index) => {
            const row = `<tr>
                <td>${index + 1}</td>
                <td>${student.name}</td>
                <td>${student.roll}</td>
                <td>${student.class}</td>
            </tr>`;
            tableBody.innerHTML += row;
        });
    } catch (error) {
        console.error('Error fetching students:', error);
    }
}

// Call on page load
window.onload = loadStudents;
