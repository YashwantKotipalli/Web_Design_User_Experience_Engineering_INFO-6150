// importing mongoosejs as mongoose for using it as a layer between ExpressJs and MongoDB
import mongoose from 'mongoose';


/**
 * Fixing the Schema for the data to be saved in the database
 * StcikySchema having details for the todo list like title, description, createdDate, LastModifiedDate
 */
const StickySchema = new mongoose.Schema(
    {

        // adding the title tag for the todo item along with the type: String for the title
        // Making it a required property
        title: {
            type: String,
            required: "Title is a required property."
        },

        // adding the description tag for the todo item along with the type: String for the Description 
        // Making it a required property
        description: {
            type: String,
            required: "description is a required property."
        },

        // adding the createdDate tag for the todo item along with the type: String for the createdDate
        // adding the createdDate using the inbuilt function Date.now
        createdDate: {
            type: Date,
            default: Date.now
        },

        // adding the lastModifiedDate tag for the todo item along with the type: String for the lastModifiedDate
        // adding the lastModifiedDate using the inbuilt function Date.now
        lastModifiedDate: {
            type: Date,
            default: Date.now
        }
    },
    {
        versionKey: false
    }
);



StickySchema.virtual('id').get(function() {
    return this._id.toHexString();
});

// setting sticky schema to json format
StickySchema.set('toJSON', { virtuals: true });


// creating a variable having the mongoose model and exporting it.
const model = mongoose.model('Sticky', StickySchema);
export default model;