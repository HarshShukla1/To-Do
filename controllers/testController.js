const testingController = (req,res) =>{
    res.status(200).send("<h1>Reponse from MVC</h1>")
}

module.exports = {testingController};