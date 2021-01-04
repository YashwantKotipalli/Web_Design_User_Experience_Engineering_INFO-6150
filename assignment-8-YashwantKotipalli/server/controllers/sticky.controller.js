
// importing the stickyservice file from the services folder
import stickyService from './../services/sticky.service';



// search operation having a request and a response and responding with status 200 or responding with an error
const index = (request, response) => {
    stickyService.search({})
        .then((stickies) => {
            response.status(200);
            response.json(stickies);
        })
        .catch(handleError(response));
};

// GET operation having a request and a response and responding with status 200 or responding with an error

const get = (request, response) => {
    const id = request.params.id;
    stickyService.get(id)
        .then((sticky) => {
            response.status(200);
            response.json(sticky);
        })
        .catch(handleError(response));
};


// CREATE operation having a request and a response and responding with status 200 or responding with an error
const create = (request, response) => {
    const newSticky = Object.assign({}, request.body);
    stickyService.create(newSticky)
        .then((sticky) => {
            response.status(200);
            response.json(sticky);
        })
        .catch(handleError(response));
};

// UPDATE operation having a request and a response and responding with status 200 or responding with an error
const update = (request, response) => {
    const id = request.params.id;
    const updateSticky = Object.assign({}, request.body);
    stickyService.update(id, updateSticky)
        .then((sticky) => {
            response.status(200);
            response.json(sticky);
        })
        .catch(handleError(response));
};

// DELETION operation having a request and a response and responding with status 200 or responding with an error
const remove = (request, response) => {
    const id = request.params.id;
    stickyService.remove(id)
        .then((sticky) => {
            response.status(200);
            response.json({
                message: "Delete Successful"
            });
        })
        .catch(handleError(response));
};

// Handling errors for any server side problem for any un-specified operation request
const handleError = (response) => {
    return (error) => {
        response.status(500);
        response.json({
            message: error.message
        })
    };
}


// exporting all the CRUD operations 
export default {
    index: index,
    get: get,
    create: create,
    update: update,
    remove: remove
}