var express = require('express');
var router = express.Router();
const userHelpers = require('../model/users/usersHelper');
const {myLogger} = require('../middleware/userAth');

/* GET users listing. */
router.get('/', function(req, res, next) {
 res.send('sanoopsfajsdf')
});

//get all users  
router.get('/getAllUsers',myLogger, userHelpers.getAllUsers);

// create a user 
router.post('/createNewUser',userHelpers.createUser);

// login user
router.post('/login',userHelpers.loginUser);

// edit user password
router.put("/editPassword",userHelpers.updatePassword)




module.exports = router;
