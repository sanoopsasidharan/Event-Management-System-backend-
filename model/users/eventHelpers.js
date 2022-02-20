const db = require ('../../config/connection');
const objectId = require('mongodb').ObjectId
const collection = require('../../config/collectionName');
const jwt = require('jsonwebtoken');
const key = 'sanoop'

module.exports={
    // create an event 
    createEvents:async (req,res)=>{
        try{
            const eventDetails ={
                eventName:req.body.eventName,
                date:req.body.date,
                user:req.session.userId
            }
         console.log(req.session.userId);
         const event = await db.get().collection(collection.eventCollection)
         .insertOne({eventDetails})
         if(event) res.json({message:'add event',event:true})
         else res.json({message:'something err',event:false})
        }catch(err){
            res.json({message:'something err',event:false})
        }
    },
    // get all events 
    getAllEvents: async(req,res)=>{
        try{
           const events =await db.get().collection(collection.eventCollection).find({}).toArray();
           if (events.length > 0) res.json(events);
           else res.json(null);
        }catch(err){
            res.json({message:'something err',events:false})
        }
    },
    // get single event
    getSingleEvent: async (req,res)=>{
        try{
         const getEvent = await db.get().collection(collection.eventCollection).findOne({_id:objectId(req.body.Id)})
         if (getEvent) res.json(getEvent)
         else res.json(null)
        }catch(err){
            res.json({message:'something err',evet:false})
        }
    },
    // update event 
    updateEvent: async (req,res)=>{
        try{
          const updateEvent = await db.get().collection(collection.eventCollection)
          .updateOne({_id:objectId(req.body.id)},{$set:{eventName:req.body.eventName,date:req.body.date}})
          if(updateEvent) res.json({message:'update event',update: true})
          else res.json({message:'not update event',update: false})
        }catch(err){
            res.json({message:'something error',update:false})
        }
    }
}