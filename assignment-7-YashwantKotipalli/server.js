const express = require('express');
const app = express();


// set port
const port = process.env.PORT || 8080


// allows us to run all the static code in the dirname variable which evaluates to the folder being used to run the file
app.use(express.static(__dirname));

// routes // function having request and a response
app.get("/", function(req, res){

    // rendering the response
    res.render("index");
})

// Sever listening for requests and send responses accordingly
app.listen(port, function(){
    console.log("app running");
})

