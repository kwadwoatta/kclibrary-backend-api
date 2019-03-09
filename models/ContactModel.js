const {Contact} = require('./schema/ContactSchema.js')

const addContact = ({name, phone }) => {
    let Contact = new Contacts({ name, phone })
    return Contact.save()
        .then(contact => {
            Promise.resolve(contact)
        }).catch(error => {
            Promise.reject(error);
        })
}

const editContact = ({name, phone, newName, newNumber}) => {
    return Contact.findOneAndUpdate({ name, phone },
        {
            name: newName,
            phone: newNumber
        })
        .then(contact => {
            Promise.resolve(contact)
        }).catch(error => {
            Promise.reject(error);
        })
}

const deleteContact = ({name}) => {
    return Contact.findOneAndRemove(
        {
            name
        })
        .then(contact => {
            Promise.resolve(contact)
        }).catch(error => {
            Promise.reject(error);
        })
}

module.exports = {
    addContact, editContact, deleteContact
}