
import mongoose from "mongoose";

const connectDb = async () => {
  try {
      const dbUrl = process.env.DATABASE_URL;

    if (!dbUrl) {
      console.error("DATABASE_URL is not defined");
      throw new Error("DATABASE_URL is not defined");
    }

    await mongoose.connect(dbUrl, { dbName: "personal" });
    console.log("Database connected succefully");
  } catch(error:any){
    console.log("Database connection Error",error.message);
  };
   
};

export default connectDb;