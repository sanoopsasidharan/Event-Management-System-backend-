const db = require ('../../config/connection');
const objectId = require('mongodb').ObjectId
const collection = require('../../config/collectionName');

module.exports={

    // get all users 
    getAllUsers: async (req,res)=>{
        try{
           const user =  await db.get().collection(collection.usersCollection).find({}).toArray();
           res.json(user)
        }catch(err){
            console.log(err);
        }

    }
}