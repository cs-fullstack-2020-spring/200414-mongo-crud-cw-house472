//import mongoose model
mongoose = require('mongoose')

//create reference to Schema
let Schema = mongoose.Schema;

let EntrySchema = new Schema(
    {

        firstName: String,
        lastName: String,
        pets: Array,
        single: Boolean,
        phoneNumber: Number

    }
)

module.exports = mongoose.model('entry200414cw', EntrySchema)