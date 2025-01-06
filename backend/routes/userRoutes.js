const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

router.post('/', async (req, res) => {
    const { username, name, email, password } = req.body;
    const newUser = new User({ username, name, email, password });
    await newUser.save();
    res.json({ success: true, message: 'Usuário criado com sucesso' });
});

module.exports = router;
