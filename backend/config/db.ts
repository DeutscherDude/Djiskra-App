import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try{
        const uri = process.env.MONGO_URI;
        const conn = await mongoose.connect(uri!);
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    }
    catch(err){
        console.log(`Error: ${err}`)
        process.exit(1)
    }
}

export default connectDB;
