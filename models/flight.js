const mongoose = require('mongoose')
const Schema = mongoose.Schema

const flightsSchema = new Schema({
airline: {
    type: String,
    enum: ['American', 'Southwest', 'United'],
},
airport:{
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN',
},
flightNo: {
    type: Number,
    min: 10,
    max: 9999,
},
departs: {
   type: Date, 
   default: ()=>{
    let d = new Date();
    d.setDate(d.getDate()+365)
   }
},
})

module.exports = mongoose.model('Flight', flightsSchema)