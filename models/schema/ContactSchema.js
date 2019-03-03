const mongoose = require('mongoose');


const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        minlength: 10,
        maxlength: 10,
        required: true,
        trim: true
    }
});


const Contact = mongoose.model('Contact', ContactSchema);

module.exports = {Contact, ContactSchema};