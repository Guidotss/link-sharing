import mongoose from "mongoose";
import config from "./config/config";

const connect = async () => {
  try {
    await mongoose.connect(
      config.Uri,
      config.options as mongoose.ConnectOptions
    );
    console.log("Database connected");
  } catch (error) {
    mongoose.disconnect();
    throw new Error(`${error}`);
  }
};

connect();
