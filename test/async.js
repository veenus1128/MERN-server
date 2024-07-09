//async.js
//how we can perform unit test on async fun
function fetchData(callback){
    setTimeout(()=>{
        callback('admin')
    },1000);
}
function MyData(callback){
    setTimeout(()=>{
        callback({id:10001});
    },3000)
}
//returns callback calls admin after 4sec
module.exports={fetchData,MyData};