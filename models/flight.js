const mongoose = require('mongoose')
const Schema = mongoose.Schema

const flightsSchema = new Schema({
airline: {
    type: String,
    enum: ['American', 'Southwest', 'United'],
    required: true,
},
airport:{
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN',
    required: true,
},
flightNo: {
    type: Number,
    min: 10,
    max: 9999,
    required: true,
    unique: true
},
departs: {
   type: Date, 
   required: true,
},
})

module.exports = mongoose.model('Flight', flightsSchema)