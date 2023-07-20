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
   default: ()=>{
    let d = new Date();
    d.setDate(d.getDate()+365)
    return d
   }
},
})

module.exports = mongoose.model('Flight', flightsSchema)