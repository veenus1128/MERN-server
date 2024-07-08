const express=require('express');
const mongoose=require('mongoose');
const {ApolloServer,gql}=require('apollo-server-express');
const typeDefs=require('./schema')
const resolvers=require('./resolvers')
const userApiFromRouter=require('./routes/userRoutes')
const cors=require('cors')
const app=express();
const port= 3001;
app.use(express.json());
app.use(cors())//using cors
const url='mongodb+srv://sharmilaveenus123:p6y1ndp0hEg8ZZKR@cluster0.ibi3e4v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(url).then(()=>{console.log('MONGODB CONNECTED')})
.catch((err)=>{console.log(err)});
//start my apollo server 
const server=new ApolloServer({typeDefs,resolvers});
app.use('/users',userApiFromRouter)
app.get('/users', async(req,res)=>{
    try{
        const {data,errors} =await server.executeOperation({
            query:gql`query{
            getUsers{
            name
            email}
            }`
        });
        if(errors){
            console.log(errors);
            res.status(500).send({errors});
        }
        res.status(200).send(data);

    }catch(err){
        res.send(500).send({message:err})
    }
})
app.get('/users/search/:name',async(req,res)=>{
    try{
        const name= req.params.name
        const {data,error} = await server.executeOperation({
            query:gql`query{ searchUsers(name:${name}){_id name email}}`
        });
        if(error){res.status(500).send(error)}
        res.status(200).send(data)
    }catch(err){
        res.send(500).send({message:err})
    }
 })   
app.post('/users',async(req,res)=>{
    const {name,email,assowrd}=req.body;
    try{
        const{data,error}=await server.executeOperation({
            query:gql`mutation{
            createUser(input:{name:"${name}",email:"${email}",password:"${password}"}){
            name
            email
            }}`
    })
    if(error){return res.status(500).send({message:error})}
    res.status(200).send(data)
    }
    catch(err){
        res.send(500).send({message:err})
    }
    
})
app.put('/users/changepass/:_id',async(req,res)=>{
    const _id=req.params;
    try{

    }catch{}
})
async function StartServer(){
    await server.start();
    server.applyMiddleware({app}); //run my express code
    app.listen(port,()=>{
        console.log(server live 3001);
    })
}
function Testing(){
    return 0;
}
Testing();
StartServer();