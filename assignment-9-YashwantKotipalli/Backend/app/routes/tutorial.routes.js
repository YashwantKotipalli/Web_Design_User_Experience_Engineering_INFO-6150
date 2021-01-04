
// setting the routes and exporting the app as a module
module.exports = app => {
    // importing i.e requiring the controller input from the controllers directory
    // calling all the GET,PUT,POST,DELETE methods which are already defined in the controllers file
    const tutorials = require("../controllers/tutorial.controller.js");

    // initializing it as an express app and making it a router.
    var router = require("express").Router();


    /**
     * /api/tutorials : GET, POST, DELETE
     * /api/tutorials/:id - GET,PUT,DELETE
     * /api/tutorials/published - GET
     */

    //Create a new Todos
    /**
     * POST METHOD
     */
    router.post("/", tutorials.create);

    //Retrieve all Todos
    /**
     * GET METHOD
     */
    router.get("/", tutorials.findAll);

    //Retrieve All published Todos
    /**
     * GET METHOD
     */
    router.get("/published", tutorials.findAllPublished);

    //Retrieve a single todo with id
    /**
     * GET METHOD USING THE ID ATTRIBUTE
     */
    router.get("/:id", tutorials.findOne);

    //Updating a todo with id
    /**
     * PUT METHOD 
     */
    router.put("/:id", tutorials.update);

    //deleting a todo
    /**
     * DELETE METHOD
     */
    router.delete("/:id", tutorials.delete);

    //deleting all the todos from the list
    /**
     * DELETE METHOD
     */
    router.delete("/", tutorials.deleteAll);

    // taking the tutorials and adding the router function to the app
    app.use("/api/tutorials", router);
};