import mongoose from "mongoose";

let isConnected = false; // track connection status

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is Already Connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true, // Corrected property name
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB is connected");
  } catch (error) {
    console.log(
      "MongoDB is not connected, and this error occurred --> " + error
    );
  }
};
