const express = require("express")
const cors = require("cors")
const app = express ()
const mongoose = require("mongoose")
const User = require ('./models/User')
const bcrypt = require('bcryptjs')
const bcryptSalt = bcrypt.genSaltSync(10)
require('dotenv').config()
app.use(express.json())
app.use(cors({
    credentials :true ,
    //the app on port 4000 will communicate with app on port 5173
    origin :'http://localhost:3000',
   
}))
mongoose.connect(process.env.MONGO_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(`the error is ${error}`))
db.once('open' , () => console.log('connected to database'))
app.get (('/test'),(req,res)=>{
    res.json('test ok')
});
app.post('/register',async (req,res)=>{

    
    const {nom,prenom,email,password} =req.body;
    try {
    const userDoc = await User.create({
            nom,
            prenom,
            email,
            password
        })
        res.json(userDoc);
    }
    catch(e) {
        
     res.status(422).json(e)
    }
    });
    app.post ('/login', async (req,res) => {
        const {email , password } = req.body
        const userDoc = await User.findOne({email})
    
       if(userDoc){
        const passOk =bcrypt.compareSync(password ,userDoc.password)
        if (passOk) {
          res.json(userDoc)}
        else {
            res.status(422).json('pass not ok')
        }
       }
       else {
        res.json('not FOUND')
       }
    })
    
app.listen(4000, () => console.log('Server Started'));