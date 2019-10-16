let express = require("express")
let ourApp = express(); 

ourApp.use(express.urlencoded({extended: false})) //boilerplate code

ourApp.get('/',function(req, res){
    res.send(`
    <form action="/answer" method="POST">
        <p>What color is the sky on a clear and sunny day?</p>
        <input name="skyColor" autocomplete="off">
        <button>Submit Answer</button>
    </form>
    `)
})

ourApp.post('/answer', function(req, res){
    if(req.body.skyColor.toUpperCase() == "BLUE"){  //targeting specific value ID of input. Eval answer
        res.send(`
            <p>Congrats, that is the correct answer!</p>
            <a href="/">Back to homepage</p>
        `)
    }else{
        res.send(`
            <p>Sorry!  Wrong answer bud!</p>
            <a href="/">Back to homepage</p>
        `)
    }
})

ourApp.get('/answer', function(req, res){
    res.send("Uhhh lost much?! ")
})
ourApp.listen(3000)