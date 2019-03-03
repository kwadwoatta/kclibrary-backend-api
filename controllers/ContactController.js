const { addContact, editContact, deleteContact } = require('../models/ContactModel');

module.exports = {
    add : (req, res) => {
        addContact(
            {
                name: req.body.name,
                phone: req.body.phone
            }).then(contact => {
                res.status(200).json(contact);
        }).catch(err => {
            return res.status(500).json(err)
        })
    },

    edit : (req, res) => {
        editContact(
            {
                name: req.body.name, 
                phone: req.body.phone, 
                newName: req.body.newName, 
                newNumber: req.body.newNumber
            }).then(contact => {
                res.status(200).json(contact);
        }).catch(err => {
            return res.status(500).json(err)
        })
    },

    remove : (req, res) => {
        deleteContact(
            {
                name: req.body.name, 
                phone: req.body.phone
            }).then(contact => {
                res.status(200).json(contact);
        }).catch(err => {
            return res.status(500).json(err)
        })
    }
}