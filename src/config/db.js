const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');
// Use Google's DNS servers to bypass ISP DNS issues
dns.setServers(['8.8.8.8', '8.8.4.4']);

const mongoose = require('mongoose');
const connectDb = async () => {
    try {
        console.log('Attempting to connect to MongoDB...');
        console.log('MongoDB URI:', process.env.MONGO_URL);

        await mongoose.connect(process.env.MONGO_URL);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed');
        console.error('Error Code:', error.code);
        console.error('Error Message:', error.message);
        console.error('Full Error:', error);
    }
}
module.exports = connectDb;