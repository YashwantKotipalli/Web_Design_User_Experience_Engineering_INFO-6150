
// importing the sticky model from the models directory
import Sticky from './../models/sticky';


// binding the search todos in the sticky services
const search = (filter) => {
    const promise = Sticky.find(filter).exec();
    return promise;
};

// binding the GET todos in the sticky services
const get = (id) => {
    const promise = Sticky.findById(id).exec();
    return promise;
}

// binding the CREATE todos in the sticky services
const create = (newSticky) => {
    const sticky = new Sticky(newSticky);
    const promise = sticky.save();
    return promise;
}

// binding the UPDATION todos in the sticky services
const update = (id, updatedSticky) => {
    const promise = Sticky.findByIdAndUpdate(
        { _id: id },
        updatedSticky,
        { new: true }
    ).exec();
    return promise;
}

// binding the DELETION todos in the sticky services
const remove = (id) => {
    const promise = Sticky.remove({ _id: id }).exec();
    return promise;
}

// exporting the services
export default {
    search: search,
    get: get,
    create: create,
    update: update,
    remove: remove
}











