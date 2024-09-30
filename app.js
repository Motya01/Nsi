const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const app = express();

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Redirect root URL to frontendsql.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'frontendsql.html'));
});

// Connect to SQLite database
const db = new sqlite3.Database('./database.db');

// Route to fetch data from the SQLite database
app.get('/data', (req, res) => {
    db.all('SELECT * FROM students', [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
