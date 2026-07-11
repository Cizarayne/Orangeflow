import mongoose from "mongoose";
import dns from "dns";

dns.setServers(["1.1.1.1", "8.8.8.8", "8.8.4.4"]);

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connection successful", mongoose.connection.host);
  } catch (error) {
    console.log("Database connection failed", error);
    process.exit(1);
  }
};
export default connectDatabase;
