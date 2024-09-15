const mongoose = require('mongoose')
const godasseSchema = new mongoose.Schema({
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
module.exports = mongoose.model('Godasse', godasseSchema)