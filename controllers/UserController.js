const { login, createUser, remove }= require('../models/UserModel');

module.exports = {
    logIn : (req, res) => {
        login({username: req.body.username, password: req.body.password}).then(user => {
            res.status(200).json(user);
        }).catch(err => {
            return res.status(500).json(err)
        })
    },

    create : (req, res) => {
        createUser(
            {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                username: req.body.username, 
                password: req.body.password
            })
            .then(user => {
                res.status(200).json(user);
            }).catch(err => {
                return res.status(500).json(err)
            })
    },

    removeUser : (req, res) => {
        remove({ username: req.body.username})
            .then(user => {
                res.status(200).json(user);
            }).catch(err => {
                return res.status(500).json(err)
            })
    }
}