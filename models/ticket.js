const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Flight = require('./flight')

const ticketSchema = new Schema({
price: {
    type: Number,
    min: 0,
    required: true,
},
flight: {
    type: Schema.Types.ObjectId,
    ref: Flight,
    required: true,
},
seat: {
    type: String,
    required:true,
    match: /[A-F][1-9]\d?/,
    unique: true
}

})

module.exports = mongoose.model('Ticket', ticketSchema)