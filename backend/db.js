/*Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, 
provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.*/

// the MongoDB URI (Uniform Resource Identifier), which specifies the location of the MongoDB database.

const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/";    //if i want to deploy this project somewhere else then i will change this uri

//This line declares an asynchronous function named connectToMongo. 
//The async keyword is used because Mongoose operations are asynchronous and return promises.
const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    // Optionally, you can rethrow the error if you want the app to crash on connection failure
    // throw error;
  }
};

//the connectToMongo function is exported from the module 
//so that it can be used in other parts of your application.
module.exports = connectToMongo;
