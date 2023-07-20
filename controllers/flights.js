const flight = require("../models/flight")
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
        await flight.destinations.push({destAirport: req.body.destAirport, arrival: req.body.arrival})
        await flight.save()
        res.redirect('flights')
    } catch(err){
        console.log(err.message)
        res.render('flights/new', {
            title: `Failed to Add a Flight: ${err.message}`, })
    }
}
function today(){
    return new Date().toISOString().slice(0,10);
}
async function showFlight(req,res){
    const flight = await Flight.findById(req.params.id)
    res.render("flights/show", {title: "Flight Details", flight: flight, id: req.params.id, today: today()})
}

function newFlight(req,res){
    res.render("flights/new", {title: "Add Flight", today: today()})
}

async function addDestination(req,res){
    for (let key in req.body){
        if (req.body[key] === '') delete req.body.key
    }
    try {
    const flight = await Flight.findById(req.params.id)
    await flight.destinations.push({destAirport: req.body.destAirport, arrival: req.body.arrival })
    flight.save()
    res.redirect(`/flights/${req.params.id}`)
    } catch(err){
        console.log(err.message)
        res.render('flights/new', {
            title: `Failed to Add a Flight: ${err.message}`, })

    }

    
}

module.exports = {
    index,
    create: createFlight,
    show: showFlight,
    new: newFlight,
    addDestination
}