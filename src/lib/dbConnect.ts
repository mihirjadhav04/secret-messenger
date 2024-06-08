import { log } from "console";
import mongoose from "mongoose";


type ConnectionObject = {
    isConnected?: number
}

const connection: ConnectionObject = {}

async function dbConnect(): Promise<void> {

    // to check whether db is already connected or not, if connected then returning directly with log message.
    if (connection.isConnected) {
        console.log("Already connected to database.");
        return  
    }
    // mongoose allows multiple connections but it generates load on db and db chocking can happen, 
    //so to avoid that we need to check first whether db is connected or not.


    // if not connected than handling with try catch and connecting it to db.
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || "", {})

        connection.isConnected = db.connections[0].readyState // extracting the number value of readyState for our connection object.

        console.log("DB Connected Successfully!");
        
    } catch (error) {
        console.log(" Database connection failed", error);
        process.exit(1)
        
    }
}


export default dbConnect;