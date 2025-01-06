const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    skuId: { type: String, required: true },
    productId: { type: String, required: true },
    reference: { type: String, required: true },
    derivation: { type: String, required: true },
    code: { type: String, required: true },
    name: { type: String, required: true }
});

module.exports = mongoose.model('Product', productSchema);
