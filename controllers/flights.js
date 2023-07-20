const Flight = require("../models/flight")

async function index(req,res){
    const flights = await Flight.find({})
    res.render("flights/index.ejs", {title: "Flights", flights: flights})
}

module.exports = {
    index
}