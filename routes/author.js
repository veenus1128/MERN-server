//routes->users.js
//routes->users.js
const express = require('express')
const router = express.Router();
const Author = require('../model/authorSchema');
//REST API POST METHOD TO HANDLE POST REQUEST
router.post('/',(req, res) => {
 try {
 const {_id,name, age, totalbooks,description } = req.body;
 const userQuery= new Author({_id,name, age,totalbooks,description });
 //after our query is created
 userQuery.save();
 res.status(201).send({message:"AUTHOR CREATED",userQuery});
 } catch (err) {
 res.status(500).send({message:err});
 }

});
//get the data 
router.get('/',async (req,res)=>{
    try{
        const data = await Author.find();
        res.status(201).send(data);
    }catch(err){
        res.status(500).send({message:err})
    }
})
//put the data(update the data)
router.put('/:id',async (req,res)=>{
    try{
        const {password}=req.body;
        const userId = req.params.id;
        const updatedUser= await User.findByIdAndUpdate(userId,{password: password},{new:true});
        if(!updatedUser)
        {
           return res.status(404).send({message:"User  not found"});
        }
        res.status(201).send({message:"Password updated sucessfully",updatedUser});
    }
    catch(err)
    {
        res.status(500).send({message:err})
    }
})
router.delete('/:id',async(req,res)=>{
    try{
        const userId = req.params.id;
        const deleteUser=await User.findByIdAndDelete(userId);
        if(!deleteUser){
            return res.status(404).send({message:"user doesn't exis"})
        }
        res.status(200).send({message:"user deleted",deleteUser});
    }
    catch(err){
        res.status(500).send({message:err})
    }
})
module.exports=router;