import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return true;
    }
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connect to DB Successfully :))");
  } catch (error) {
    console.log("Database connection has Error => ", error);
  }
};

export default connectToDB;
