const express = require("express");
const app =express();
const cors = require('cors')

app.use(cors());
app.use(express.json());

app.post('/register',(req,res)=>{
    const {username,password} = req.body;
    res.json({requestData:{username,password}});
});

app.listen(4000);