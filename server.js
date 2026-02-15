const express = require("express")
 
//rest object

const app = express()

//middleware

app.use(express.json())

//routes
app.get("/test" , (req,res)=>{
    res.status(200).send("<h1> welcome to node server</h1>")
})


//port
const PORT= 8080


//listen
app.listen(PORT,()=>{
    console.log("Node Server running")
})