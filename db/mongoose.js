const mongoose = require("mongoose");

// Enable use of promises in mongoose
mongoose.Promise = global.Promise;

mongoose.set('useCreateIndex', true);

try {
    mongoose.connect("mongodb://localhost:27017/kclibrary", {useNewUrlParser: true});
    console.log('Successfully connected to database server');
} catch(err) {
    console.log(err);
}

// Export mongoose 
module.exports = { mongoose };