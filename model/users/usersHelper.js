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

    },
    // add new user
    createUser: async (req,res)=>{
        try{
            if(req.body.name && req.body.password){
                const userAdd = await db.get().collection(collection.usersCollection)
                .insertOne({name:req.body.name,password:req.body.password})  
                res.json({message:'new user add'})                            
            }else{
                res.json({message:'name or password is empty'})
            }
        }catch(err){
           res.json({message:'something error'})
        }
    }
}