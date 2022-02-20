var express = require('express');
var router = express.Router();
const userHelpers = require('../model/users/usersHelper');

/* GET users listing. */
router.get('/', function(req, res, next) {
 res.send('sanoopsfajsdf')
});

//get all users  
router.get('/getAllUsers',userHelpers.getAllUsers)

// create a user 
router.post('/createNewUser',userHelpers.createUser)

router.post('/login',userHelpers.loginUser)



module.exports = router;
