const express = require('express');
const bcrypt = require('bcrypt');
const pool = require('../database/database');

const router = express.Router();

router.post('/register', async (req, res) => {
    const { nombre, apellidos, email, pass_word, confirm_password, clase } = req.body;

    if (pass_word !== confirm_password) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    const hashedPassword = await bcrypt.hash(pass_word, 10);

    try {
        await pool.query('INSERT INTO usuarios (nombre, apellidos, email, pass_word, clase) VALUES (?, ?, ?, ?, ?)', [nombre, apellidos, email, hashedPassword, clase]);
        res.status(201).redirect('/');
    } catch (err) {
        if (err.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ message: 'User with these details already exists' });
        }
        res.status(500).json({ message: 'Database error', error: err });
    }
});

module.exports = router;
