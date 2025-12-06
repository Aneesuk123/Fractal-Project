const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection pool
const db = mysql.createPool({
    host: 'mysql',
    user: 'root',
    password: 'rootpassword',
    database: 'studentsdb',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Test initial connection
db.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL!');
    connection.release();
});

// Create students table if it doesn't exist
db.query(
    `CREATE TABLE IF NOT EXISTS students (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        roll VARCHAR(50),
        class VARCHAR(50)
    )`,
    (err) => {
        if (err) console.error('Error creating table:', err);
    }
);

// Routes
app.get('/students', (req, res) => {
    db.query('SELECT * FROM students', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

app.post('/students', (req, res) => {
    const { name, roll, class: className } = req.body;
    db.query(
        'INSERT INTO students (name, roll, class) VALUES (?, ?, ?)',
        [name, roll, className],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'Student added successfully', id: result.insertId });
        }
    );
});

// Health check for readiness/liveness probes
app.get('/health', (req, res) => {
    res.send('OK');
});

// Start server
app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
