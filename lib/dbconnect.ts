
import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL ,{dbName: "personal" });
    console.log("Database connected succefully");
  } catch(error:any){
    console.log("Database connection Error",error.message);
  };
   
};

export default connectDb;