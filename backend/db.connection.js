import mongoose from "mongoose";

const dbconnect = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Db connection success..."))
    .catch((error) => console.log("Db connection failed due to " + error))
}    

export default dbconnect;