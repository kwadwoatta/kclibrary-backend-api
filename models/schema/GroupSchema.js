const mongoose = require('mongoose');
const { ContactSchema } = require('./ContactSchema');

const GroupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    members: [{ContactSchema}]
})

const Group = mongoose.model('Group', GroupSchema);

module.exports = {Group};