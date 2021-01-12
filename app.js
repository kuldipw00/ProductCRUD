const express=require('express')
const router = require('./routes/productsRoutes')
const bodyParser=require('body-parser')
const app=express()

const mongoose=require('mongoose')

app.use(bodyParser.json())

mongoose.connect("mongodb://localhost:27017/Product_DB",{ useUnifiedTopology: true , useNewUrlParser: true })
.then(result=>{
    console.log("DB CONNECTED")
}).catch(err=>{
    console.log("ERROR CONNECTING DB")
})

app.use('/api',router)

app.listen(3000,()=>{
    console.log("listening")
})


