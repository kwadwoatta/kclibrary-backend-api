const jwt = require('jsonwebtoken');
const { User } = require('./schema/UserSchema');

const create = ({firstname, lastname, username, password}) => {
    let salt = 'dm0u0249'
    let hashed = jwt.sign(password, salt)
    let user = new User({ firstname, lastname,  username, password: hashed })
    return user.save().then(person => {
            Promise.resolve(person);
        }).catch(error => {
            Promise.reject(error);
        })
};

const login = ({username, password}) => {
    return User.find({username}).then(user => {
        //password things
        let salt = 'dm0u0249'
        let hashed = jwt.sign(password, salt)
        if (user.password === hashed) {
            Promise.resolve(user);
        } else {
            return Promise.reject({message: 'User password incorrect'})
        }
    }).catch(error => {
        Promise.reject(error);
    })
};

const remove = ({username}) => {
    return User.findOneAndDelete({username})
        .then(user => {
                Promise.resolve(user);
        }).catch(error => {
        Promise.reject(error);
    })
};


module.exports = { create, login, remove };
