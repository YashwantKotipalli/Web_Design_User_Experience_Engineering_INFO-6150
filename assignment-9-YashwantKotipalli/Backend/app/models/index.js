
// initializing dbconfig by assigning it and importing the database config file
const dbconfig = require('../config/db.config.js');

// initializing the mongoose variable with by importing the mongooseJs
const mongoose = require("mongoose");

// making a mongoose promise and making it a global vairbale
mongoose.promise = global.Promise;

// initlializing the db varibale and assigning
// url, tutorial, mongoose and tutorials with the tutorial model
const db={};

db.mongoose = mongoose;
db.url = dbconfig.url;
db.tutorials = require("./tutorial.model")(mongoose);

// exporting the db as a module
module.exports = db;

