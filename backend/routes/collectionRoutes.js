const express = require('express');
const router = express.Router();
const Collection = require('../models/Collection');

router.get('/', async (req, res) => {
    const collections = await Collection.find();
    res.json(collections);
});

router.post('/', async (req, res) => {
    const { name, startDate, endDate } = req.body;
    const newCollection = new Collection({ name, startDate, endDate });
    await newCollection.save();
    res.json({ success: true, message: 'Coleção criada com sucesso' });
});

module.exports = router;
