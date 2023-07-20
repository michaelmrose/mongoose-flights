const Flight = require("../models/flight")

async function index(req,res){
    const flights = await Flight.find({})
    res.render("flights/index", {title: "Flights", flights: flights})
}

async function createFlight(req,res){
    for (let key in req.body){
        if (req.body[key] === '') delete req.body.key
    }
    try {
        const flight = await Flight.create(req.body)
        res.redirect('flights')
    } catch(err){
        console.log(err)
        res.render('/flights/new', {
            title: "Failed to Add a Flight",
            errorMessage: err.errorMessage})
    }
}

function newFlight(req,res){
    res.render("flights/new", {title: "Add Flight"})
}

module.exports = {
    index,
    create: createFlight,
    new: newFlight,
}