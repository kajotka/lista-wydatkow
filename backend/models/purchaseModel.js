const mongoose = require('mongoose');


const purchaseSchema = new mongoose.Schema({
    'name': {
        type: String,
        required: true
    },
    'category': {
        type: String,
        required: true
    },
    'price': {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('Purchase', purchaseSchema);