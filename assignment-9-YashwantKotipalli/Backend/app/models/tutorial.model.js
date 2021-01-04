
// exporting the mongoose code containing the schema
// in the form of a module
module.exports = mongoose => {

    // schema variable having the mongoose Schema
    var schema = mongoose.Schema(
      {
        // the todo schema containing the title, description and the published status 
        title: String,
        description: String,
        published: Boolean
      },
      // having the timestamps, for the created date and updated date
      { timestamps: true }
    );

    // The id function is read as _id by default
    // which makes it undefined while using the frontend
    // to avoid this problem, we override using the toJson method
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    // this assigns the tutorial variable with the mongoose model
    // taking in the tutorial and the schema as input and returns the Tutorial variable
    const Tutorial = mongoose.model("tutorial", schema);
    return Tutorial;
  };



  /**
   * This undeerlying model is for just testing the backend
   * it does not contain the overriding function for the id attribute
   * throws an error for `undefined id specified` when use with the frontend
   */
  // module.exports = mongoose => {
  //   const Tutorial = mongoose.model(
  //     "tutorial",
  //     mongoose.Schema(
  //       {
  //         title: String,
  //         description: String,
  //         published: Boolean
  //       },
  //       { timestamps: true }
  //     )
  //   );
  
  //   return Tutorial;
  // };