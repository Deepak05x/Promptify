import mongoose from "mongoose";

const mongodb = process.env.MONGO_DB_URI;

if (!mongodb) {
    throw new Error("THE MONGODB VARIABLE IS NOT DEFINED PROPERLY");
}

const connectToDb = async () => {
    try {
        const connection = await mongoose.connect(mongodb);
        console.log("DATABASE CONNECTED");
        return connection;
    } catch (error) {
        console.log(error.message);
    }
};

export default connectToDb;
