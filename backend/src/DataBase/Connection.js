import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_DB)
        console.log("DB is connected")
    } catch (error) {
        console.log(error)
    }
}
