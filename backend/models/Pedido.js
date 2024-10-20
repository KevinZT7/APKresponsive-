const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    pizzas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pizza' }],
    total: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Pedido', pedidoSchema);
