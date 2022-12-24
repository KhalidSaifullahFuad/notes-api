// Dependencies
const mongoose = require('mongoose');
require('dotenv').config();

// MongoDB Connection
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})
    .then(() => {
        console.log(`\x1b[32m> MongoDB is Connected...\x1b[0m`);
    })
    .catch(err => {
        console.log(err);
    });

// Export
module.exports = mongoose;