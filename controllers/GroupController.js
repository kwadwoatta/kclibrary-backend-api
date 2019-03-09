const { addGroup, editGroup, deleteGroup, deleteGroupMember } = require('../models/GroupModel');

module.exports = {
    // add route
    add : (req, res) => {
        addGroup({ name:req.body.name, members:req.body.members })
            .then(group => {
            res.status(200).json(group);
        }).catch(err => {
            return res.status(500).json(err)
        })
    },

    // edit route
    edit : (req, res) => {
        editGroup(
            {
                name: req.body.name,
                members: req.body.members
            }).then(group => {
                res.status(200).json(group);
            }).catch(err => {
                return res.status(500).json(err)
            })
    },

    // delete route
    remove : (req, res) => {
        deleteGroup(
            {
                name: req.body.name,
            }).then(group => {
                res.status(200).json(group);
        }).catch(err => {
            return res.status(500).json(err)
        })
    },

    // delete member route
    removeMember : (req, res) => {
        deleteGroupMember(
            {
                name: req.body.name,
                member: req.body.member
            }).then(group => {
                res.status(200).json(group);
        }).catch(err => {
            return res.status(500).json(err)
        })
    }
}