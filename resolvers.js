//to preprocess the queries
//query->to retrieve the data(exactly what data to fetch)
//mutation->to update the data
const { Query } = require('mongoose');
const User=require('./model/userSchema');
//define resolvers to execute
const resolvers = {
    Query:{
        
        getUsers:async(_,{_id})=>{
            return await User.findById(_id);
        },
        getAllUsers:async()=>{return await User.find()}
        
    },
    Mutation:{
        createUser: async (_,{input})=>{
            
            try{
                const {name,email,password}=input;
                if(!name || !email || !password){
                    throw new Error("please enter all feilds");
                }
                const newUser=new User({name,email,password})
                 return await newUser.save();
            }catch(err){throw Error (Error `Creating User : ${err}`)}
            
        },
        changePass:async(_,{_id,password})=>{
            try{
                const userNew=await User.findByIdAndUpdate(_id,{password:password},{new:true});
                if(!userNew){
                   throw new Error ('USER not found');
                }
            }
            catch(err){
                throw Error(err)

            }
        },
       
},
    User:{
        email:(parent)=> parent.email || '',
        name:(parent)=>parent.name || '',
        password:(parent)=>parent.name || '',


    }
};
module.exports=resolvers;