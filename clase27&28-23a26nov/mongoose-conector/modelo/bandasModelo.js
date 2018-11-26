const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BandaSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'Debe llenar el campo nombre']
    },

    año: {
        type: Number
    },

    activa: {
        type: Boolean,
        default: false
    }
})

const Banda = mongoose.model('banda', BandaSchema)

module.exports = Banda