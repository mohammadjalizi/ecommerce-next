const mongoose = require("mongoose");
 
export const connectMongoDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://mjalizi1376:KbJ4r5lhjTJYz4Rk@cluster0.hbkpu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("connected to MongoDB");
  } catch (error) {
    console.log("ERROR WITH CONNECTING  MongoDB", error);
  }
};