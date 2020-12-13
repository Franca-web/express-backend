const express = require('express')
const mongoose = require('mogoose')
const app = express()
app.get("/",(request,response)=>{
    response.send(
        "<h1>hey you're here</h1>"
    )
})
app.listen(2000,()=>{
    console.log('server started on localhost:2000')


    
    
})