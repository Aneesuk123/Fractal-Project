document.getElementById('studentForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const roll = document.getElementById('roll').value;
    const className = document.getElementById('class').value;

    try {
        const response = await fetch('http://backend-service:3000/students', {
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
