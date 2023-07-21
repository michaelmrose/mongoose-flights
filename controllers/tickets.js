const Ticket = require('../models/ticket')
const Flight = require('../models/flight')

function humanizeErrorMessage (msg){
    if (msg.match(/duplicate key error.*seat/))
        return `Seat already booked`
    else return msg
}
async function createTicket(req,res) {
    let flight =await Flight.findById(req.params.id)
    for (let key in req.body){
        if (req.body[key] === '') delete req.body.key
    }
    try {
        let ticket = await Ticket.create({
            price: req.body.price,
            seat: req.body.seat,
            flight: flight,
            })
            res.redirect(`/flights/${req.params.id}/tickets`)
    } catch(err){
        console.log(err.message)
            // res.redirect(`/flights/${req.params.id}/tickets`)
        let tickets = await Ticket.find({flight: flight._id})
        res.render('tickets/show',{title:  "Tickets", error:`Failed to book ticket ${humanizeErrorMessage(err.message)}`, tickets:tickets, id: req.params.id})
    }
 }

async function showTicket(req,res){
    let flight = await Flight.findById(req.params.id)
    let tickets = await Ticket.find({flight: flight._id})
    res.render('tickets/show',{title: "Tickets", tickets:tickets, id: req.params.id, error: ''})
}

async function newTicket(req,res){
    res.render('tickets/new',{title: "Create Ticket", id: req.params.id, error: ''})
}

module.exports = {
    create: createTicket,
    show: showTicket,
    new: newTicket,
}