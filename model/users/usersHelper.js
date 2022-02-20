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
    },
    // login user 
    loginUser: async (req,res) =>{
        console.log(req.body);
        try{
            if(req.body.name && req.body.password){
                const user = await db.get().collection(collection.usersCollection)
                .findOne({name:req.body.name,password:req.body.password})  
                res.json(user)                            
            }else{
                res.json({message:'name or password is empty'})
            }
        }catch(err){
            res.json({message:'something error'})
        }
    },
    // update user password 
    updatePassword : async (req,res)=>{
        try{
            const user = await db.get().collection(collection.usersCollection).findOne({_id:objectId(req.body.id)})
            console.log(user);
            if (user.password == req.body.password){
                const updateUserDetails = await db.get().collection(collection.usersCollection)
                .updateOne({_id:objectId(user._id)},{$set:{password:req.body.newPassword}})
                console.log(updateUserDetails);
                if (updateUserDetails.acknowledged) res.json({message:'password changed'})
            }else{
                res.json({message:'password is not valid'})
            }
        }catch(err){
            res.json({message:'something error'})
        }
    }
}