const {Group} = require('./schema/GroupSchema')

const addGroup = ({name, members}) => {
    let group = new Group({name, members})
    group.save().then(group => {
        Promise.resolve(group)
    }).catch(error => {
        Promise.reject(error)
    }); 
};

const editGroup = ({name, newName}) => {
    Group.findOneAndUpdate(
        {
            name
        }, 
        {
            name: newName
        })
        .then(group => {
        Promise.resolve(group)
    }).catch(error => {
        Promise.reject(error)
    }); 
};

const deleteGroup = ({name}) => {
    Group.findOneAndDelete({name})
        .then(group => {
        Promise.resolve(group)
    }).catch(error => {
        Promise.reject(error)
    }); 
};

module.exports = {
    addGroup,
    editGroup,
    deleteGroup
}