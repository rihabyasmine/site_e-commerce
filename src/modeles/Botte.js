const mongoose = require('mongoose')
const botteSchema = new mongoose.Schema({
    name : {
     type : String,
     required:true

    },
    img : {
     type: String,
     required:true
    },
    pointure : [Number],
    couleur : [String],
    prix: {
        type : Number,
        required:true
    }
   
})
module.exports = mongoose.model('Botte', botteSchema)