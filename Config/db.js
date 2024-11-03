require("dotenv").config();
const mongoose = require("mongoose");
async function dbConnection() {
    try {
        const url = process.env.MONGO_URL;
        await mongoose.connect(url, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log("DB connected successfully");
    } catch (err) {
        console.error("DB connection failed", err);
    }
}
module.exports = dbConnection;
