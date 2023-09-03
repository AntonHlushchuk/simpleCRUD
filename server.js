const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;
const app = express();
const port = process.env.PORT || 3001;

const db = mysql.createConnection({
    host,
    user,
    password,
    database
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

app.use(bodyParser.json());
app.use(cors());

app.get('/api/data', async (req, res) => {
    try {
        const query = 'SELECT * FROM products';
        const results = await executeQuery(query);

        res.status(200).json(results);
    } catch (error) {
        console.error('Error executing MySQL query:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

function executeQuery(query) {
    return new Promise((resolve, reject) => {
        db.query(query, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app;