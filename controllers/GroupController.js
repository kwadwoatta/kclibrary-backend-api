const { addGroup, editGroup, deleteGroup } = require('../models/GroupModel');

module.exports = {
    add : (res, req) => {
        addGroup(
            {
                name : req.body.name, 
                members: req.body.members
            })
            .then(group => {
            res.status(200).json(group);
        }).catch(err => {
            return res.status(500).json(err)
        })
    },

    edit : (res, req) => {
        editGroup(
            {
                name: req.body.name,
                newName: rew.body.newName
            }).then(group => {
                res.status(200).json(group);
            }).catch(err => {
                return res.status(500).json(err)
            })
    },

    remove : (req, res) => {
        deleteGroup(
            {
                name: req.body.name,
            }).then(group => {
                res.status(200).json(group);
        }).catch(err => {
            return res.status(500).json(err)
        })
    }
}