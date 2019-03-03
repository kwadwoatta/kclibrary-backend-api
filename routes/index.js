var express = require('express');
var router = express.Router();

const { UserController, GroupController, ContactController } = require('../controllers');
// User controllers
router.post('/user/add', UserController.create);

router.post('/user/login', UserController.logIn);

router.post('/user/delete', UserController.removeUser);

// Group controllers
router.post('/group/add', GroupController.add);

router.put('/group/edit', GroupController.edit);

router.put('/group/delete', GroupController.remove);

// Contact controllers
router.post('/contact/add', ContactController.add);

router.put('/contact/edit', ContactController.edit);

router.delete('/contact/remove', ContactController.remove);


module.exports = router;