import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    }
    catch(err){
        console.log(`Error: ${err}`)
        process.exit(1)
    }
}
