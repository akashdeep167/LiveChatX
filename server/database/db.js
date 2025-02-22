import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const connection = async () => {
  const url = `mongodb://${USERNAME}:${PASSWORD}@ac-huu6uk5-shard-00-00.uaocjwe.mongodb.net:27017,ac-huu6uk5-shard-00-01.uaocjwe.mongodb.net:27017,ac-huu6uk5-shard-00-02.uaocjwe.mongodb.net:27017/?ssl=true&replicaSet=atlas-1310bg-shard-0&authSource=admin&retryWrites=true&w=majority`;
  try {
    await mongoose.connect(url, { useUnifiedTopology: true });
    console.log("database connected successfully");
  } catch (err) {
    console.log("error while connecting with the database", err.message);
  }
};

export default connection;
