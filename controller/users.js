var express = require('express');
var router = express.Router();
const userHelpers = require('../model/users/usersHelper');
const eventHelpers = require('../model/users/eventHelpers');
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
router.post('/login',userHelpers.loginUser);

// edit user password
router.put("/editPassword",auth,userHelpers.updatePassword);

// logOut user
router.post('/logoutUser',userHelpers.logOutUser)

// add events
router.post('/createEvent',auth,eventHelpers.createEvents)

// get user all events 
router.get('/userAllEvents',eventHelpers.getAllEvents)

// show single event 
router.get('/getSingleEvent',eventHelpers.getSingleEvent)

// update event 
router.put('/updateEvent',eventHelpers.updateEvent);


// @search event
// @body eventName
// @return  findEvent
router.post('/searchEvent',eventHelpers.searchEvent)

// @sort events
// @body eventName
// @return events
router.get('/sortingEvents',eventHelpers.sortingEvent)


module.exports = router;
