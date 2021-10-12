const express = require('express')
const app = express()
app.get('/',(req, res) =>{
    res.json({message:"Este es el Backend del proyecto"})
} )
app.listen(3001,()=>{console.log("Server ON")})