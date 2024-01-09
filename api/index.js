const express = require("express");
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/User.js')
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")
const cookieParser = require('cookie-parser')

const salt = bcrypt.genSaltSync(10);
const secret = "gfsdhugfy8uwefg87eqydfgbe78fg1387ry824eyybfe8fd"

app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser)

mongoose.connect("mongodb+srv://AshC1ty:lt_ghost@tempposts.ynrdfkg.mongodb.net/?retryWrites=true&w=majority");

app.post('/register',async (req,res)=>{
    const {username,password} = req.body;
    try{
        const userDoc = await User.create({username, password:bcrypt.hashSync(password,salt)});
        res.json(userDoc);
    }
    catch(e){
        res.status(400).json(e);
    }
});

app.post('/login',async (req,res)=>{
    const {username,password} = req.body;
    const userDoc = await User.findOne({username});
    
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if(passOk){
        //loggedIn
        jwt.sign({username,id:userDoc._id}, secret,{},(err,token)=>{
            if(err) throw err;
            res.cookie('token',token).json("ok")
        })
    } else{
        res.status(400).json('WrongCredentials');
    }
})

app.get('/profile', (req,res)=>{
    res.json(req.cookies);
})

app.listen(4000);
