const mongoose = require('mongoose');


const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        minlength: 10,
        maxlength: 10,
        required: true,
        unique: true
    }
});


const Contact = mongoose.model('Contact', ContactSchema);

module.exports = {Contact, ContactSchema};