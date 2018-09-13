const mongoose = require('mongoose')
const Schema = mongoose.Schema

const quoteSchema = new Schema({
    status : String
},{
    timestamps:true
})

const Quote = mongoose.model('Quote',quoteSchema)

module.exports = Quote