var express = require('express');
var router = express.Router();
const userHelpers = require('../model/users/usersHelper');
const {auth} = require('../middleware/userAth');

/* GET users listing. */
router.get('/', function(req, res, next) {
 res.send('sanoopsfajsdf')
});

//get all users  
router.get('/getAllUsers', userHelpers.getAllUsers);

// create a user 
router.post('/createNewUser',userHelpers.createUser);

// login user
router.post('/login',auth,userHelpers.loginUser);

// edit user password
router.put("/editPassword",userHelpers.updatePassword);

// logOut user
router.post('/logoutUser',userHelpers.logOutUser)




module.exports = router;
