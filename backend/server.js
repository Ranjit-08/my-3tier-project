
const express = require('express');
const cors = require('cors');
const db = require('./db');


const app = express();
app.use(cors());
app.use(express.json());


app.get('/users', (req, res) => {
db.query('SELECT * FROM users', (err, results) => {
if (err) return res.status(500).json(err);
res.json(results);
});
});


app.post('/users', (req, res) => {
const { name, email } = req.body;
db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err) => {
if (err) return res.status(500).json(err);
res.json({ message: 'User added successfully' });
});
});


app.listen(3000, () => {
console.log('Backend running on port 3000');
});
