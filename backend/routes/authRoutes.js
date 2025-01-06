const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const jwtSecret = 'secreto';

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
        console.log('Usuário não encontrado:', username);
        return res.status(401).json({ success: false, message: 'Usuário ou senha incorretos' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        console.log('Senha incorreta para o usuário:', username);
        return res.status(401).json({ success: false, message: 'Usuário ou senha incorretos' });
    }

    const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '1h' });
    res.json({ success: true, token });
});

router.get('/user', async (req, res) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, jwtSecret);
        const user = await User.findById(decoded.userId);
        res.json({ username: user.username });
    } catch (error) {
        res.status(401).json({ success: false, message: 'Não autorizado' });
    }
});

module.exports = router;
