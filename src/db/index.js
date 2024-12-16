import mongoose from 'mongoose'
import { DB_Name } from '../constants.js'
 
const connectDB = async () => {
try {
   const connectionResponse =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
   console.log("database connected !!! DB host:",connectionResponse.connection.host)
} catch (error) {
    console.log("Database connection failed:",error)
    process.exit(1);
}
}
export default connectDB;