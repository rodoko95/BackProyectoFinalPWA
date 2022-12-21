const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const maidenSchema = new Schema({ 
    nombre: {
        type: 'string',
        required: true
    },
    numero: {
        type: 'string',
        required: true
    },
    Arma: {
        type: 'string',
        required: true
    },
    Kanji: {
        type: 'string',
        required: true
    }
});

const Maiden = mongoose.model('Maiden',maidenSchema)

module.exports = Maiden;