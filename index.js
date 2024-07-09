const express=require('express');
const mongoose=require('mongoose');
const {ApolloServer,gql}=require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers=require('./resolvers');
const userApiFromRouter=require('./routes/userRoutes');
const cors=require('cors');


const app=express();
app.use(cors());
const port= 3001;
const url='mongodb+srv://sharmilaveenus123:p6y1ndp0hEg8ZZKR@cluster0.ibi3e4v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(url).then(()=>{console.log('MONGODB CONNECTED')})
//start my apollo server 
const server = new ApolloServer({typeDefs,resolvers});
app.use('/users',userApiFromRouter);
async function StartServer(){
    await server.start();
    server.applyMiddleware({app}); //run my express code
    app.listen(port,()=>{
        console.log( `server live 3001`);
    })
}
StartServer();