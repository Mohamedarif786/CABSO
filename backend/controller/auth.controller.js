const user_modal =require('../model/user.modal') 
const login =(req,res)=>{
  console.log(req.body);
  res.send("<h1>arif</h1>")
}

module.exports ={
    login
}