const mongoose = require('mongoose')
const userschema = new mongoose.Schema ({
    Nom: String,
    Prenom: String ,
    Email:{type:String , unique:true} ,
    password:String 
  
});
const UserModel= mongoose.model('user',userschema);
module.exports = UserModel ;