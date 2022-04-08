const mongoose = require('mongoose');
const {model, Schema} = mongoose;

const productSchema = Schema({
    name: {
        type: String,
        minlength: [3, 'Panjang nama minimal 3 character'],
        maxlength: [20, 'Panjang description maximal 1000 character'],
        required: [true, 'Nama makanan harus diisi']
    }
})

module.exports = model('Tag', productSchema);