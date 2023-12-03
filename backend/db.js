const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/";    //if i want to deploy this project somewhere else then i will change this uri

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

// const mongoose = require('mongoose');
// const mongoURI = "mongodb://localhost:27017/"
// const connectToMongo = () => {
//     mongoose.connect(mongoURI,()=>{
//         console.log("Connected to Mongo Successfully");
// })
// }

module.exports = connectToMongo;
