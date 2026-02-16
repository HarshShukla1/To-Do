const express = require("express")
const morgan  = require("morgan")
const dotenv = require("dotenv")

//env config

dotenv.config()
 
//rest object

const app = express()

//middleware

app.use(express.json())
app.use(morgan("dev"))

//routes
app.get("/test" , (req,res)=>{
    res.status(200).send("<h1> welcome to node server</h1>")
})


//port
const PORT= process.env.PORT || 8000


//listen
app.listen(PORT,()=>{
    console.log(`Node Server running on ${process.env.DEV_MODE} node on port no ${PORT}`)
})