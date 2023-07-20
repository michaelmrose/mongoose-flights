const mongoose = require('mongoose')
const Schema = mongoose.Schema

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
    match: /[A-F][1-9]\d?/
}

})

module.exports = mongoose.model('Ticket', ticketSchema)