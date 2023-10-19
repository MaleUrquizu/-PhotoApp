import mongoose from 'mongoose';

const url = "mongodb://127.0.0.1:27017/PhotoApp";

try {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('Connected to MongoDB!')
    }).catch((error) => {
        console.error('Error connecting to MongoDB!', error)
    });
} catch (error) {
    console.error('Error connecting to MongoDB!', error);
    process.exit(1);
}

export default mongoose.connection;
