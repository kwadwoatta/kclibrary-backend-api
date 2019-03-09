const mongoose = require('mongoose');
const { obj } = require('./ContactSchema').ContactSchema;
let  contactForm = obj;

const GroupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    members: [contactForm]
})

const Group = mongoose.model('Group', GroupSchema);

module.exports = {Group};