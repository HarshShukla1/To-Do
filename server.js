const express = require("express")
const morgan  = require("morgan")
const dotenv = require("dotenv")
const cors = require("cors")

//env config

dotenv.config()
 
//rest object

const app = express()

//middleware

app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

//routes
app.use('/api/v1/test',require('./routes/testRouter'))


//port
const PORT= process.env.PORT || 8000


//listen
app.listen(PORT,()=>{
    console.log(`Node Server running on ${process.env.DEV_MODE} node on port no ${PORT}`)
})