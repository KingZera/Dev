const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

router.post('/', async (req, res) => {
    const { skuId, productId, reference, derivation, code, name } = req.body;
    const newProduct = new Product({ skuId, productId, reference, derivation, code, name });
    await newProduct.save();
    res.json({ success: true, message: 'Produto criado com sucesso' });
});

module.exports = router;
