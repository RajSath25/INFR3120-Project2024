//const { Collection, default: mongoose } = require("mongoose");

const mongoose = require("mongoose");

let cipherModel = mongoose.Schema({
    firstname: String,
    lastname: String,
    plaintext: String,
    encryption: String,
    key: Number
},
{
    collection: "cipher"
});
module.exports = mongoose.model('cipher', cipherModel);