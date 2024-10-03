import mongoose from "mongoose";

const connectToDb = async () => {
  const uri = process.env.URI;
  try {
    mongoose.connect(uri);
    console.log("App connected to database 🔗");
  } catch (error) {
    throw new Error(`Error while connecting to DB! ${error} ⛔`);
  }
};

export default connectToDb;
