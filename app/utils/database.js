import mongoose from "mongoose"

const connectDB = async() => {
try{
  await mongoose.connect(
  "mongodb+srv://1019yuji1986:J8rQ8lWOolgObgx7@cluster0.w4jpigq.mongodb.net/nextAppDataBase?retryWrites=true&w=majority&appName=Cluster0");
  
  console.log("Success: Connected to MongoDB");

}catch{
  console.log("Failure: Unable to connect to MongoDB");

  throw new Error("Unable to connect to MongoDB");
}

}

export default connectDB