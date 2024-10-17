import express from 'express';
import fs from 'fs';

const app = express();

app.get('/secret', (req, res) => {
    const password = req.query.password;

    if (password === '7WK5T79u5mIzjIXXi2oIDJJkzkelovV7rAJFFF7izyj9tUyQ') {
        res.send('Accès autorisé');
    } else {
        res.send('Accès refusé');
    }
});

app.get('/readfile', (req, res) => {
    const data = fs.readFileSync('/path/to/file.txt', 'utf8');
    res.send(data);
});

import mysql from 'mysql2';
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rootpassword',
    database: 'canditrack'
});

app.get('/user', (req, res) => {
    const userId = req.query.id;
    connection.query(`SELECT * FROM users WHERE id = ${userId}`, (error, results) => {
        if (error) throw error;
        res.send(results);
    });
});

app.get('/error', (req, res) => {
    const someOperation = () => {
        throw new Error('Quelque chose a mal tourné');
    };

    someOperation();
    res.send('Tout va bien');
});

app.get('/async-error', async (req, res) => {
    const result = await fetch('https://api.example.com/data');
    res.send(await result.json());
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
