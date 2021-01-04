
// initializing the app as an expressJs REST API
const express = require("express");

// helps parse request and create the req.body object
const bodyParser = require("body-parser");

// Cross Origin Resource Sharing (CORS) 
// Express Middleware to enable CORS with various options

const cors = require("cors");


//set port, listen for requests

// const PORT = ...;


// initializing the app as an expressJs REST API for the NodeJs to Connect with the MongoDb Backend
const app = express();

// setting the origin port
var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json

app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({ extended: true }));

// mongoose code to connect to MongodDb database

const db = require("./app/models");
db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to the database!");
})

.catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
});


// simple route

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Yashwant's MERN stack application" });
});

require("./app/routes/tutorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});