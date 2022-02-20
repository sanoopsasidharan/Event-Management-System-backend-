 const key = 'sanoop'
 const jwt = require('jsonwebtoken');

  const auth = async(req,res,next)=>{
    if(req.cookies.userToken){
      const tocken = req.cookies.userToken
      const verified = await jwt.verify(tocken,key);
      console.log('user valid');
      if(verified) next();
      else res.json({message:'user not valid'})
    }else{
      console.log('user not valid');
      res.json({message:'user not valid'})
    }
  }

  module.exports={
      auth
  }