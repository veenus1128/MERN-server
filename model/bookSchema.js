//MongoDB user Schema
//Copable of storing data in my mongodb
const mongoose=require('mongoose')
const  bookSchema =mongoose.Schema({
    _id:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },publisher:{
        type:String,
        required:true,
    },description:{
        type:String,
        required:true,
    },author_id:{
        type:String,
        required:true,
    },
})
//convert this into mongoose schema
module.exports= mongoose.model('book',bookSchema);