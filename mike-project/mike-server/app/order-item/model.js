const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const orderItemSchema = Schema ({

    name: {
        type: String,
        minlength: [50, 'Panjang nama makanan minimal 50 karakter'],
        required: [true, 'name must be filled']
    },

    qty: {
        type: Number,
        required: [true, 'qty harus diisi'],
        min: [1, 'minimal qty adalah 1']
    },

    price: {
        type: Number,
        required: [true, 'Harga item harus number']  
    },

    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product'
    },

    order: {
        type: Schema.Types.ObjectId,
        ref: 'Order'
    }
});

module.exports = model('OrderItem', orderItemSchema);