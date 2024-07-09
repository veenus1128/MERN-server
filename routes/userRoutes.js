const express = require('express');
const router = express.Router();
const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require('../schema');
const resolvers = require('../resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const { data, errors } = await server.executeOperation({
      query: gql`
        mutation CreateUser($input: CreateUserInput!) {
          createUser(input: $input) {
            _id
            name
            email
            password
          }
        }
      `,
      variables: {
        input: { name, email, password }
      }
    });

    if (errors) {
      return res.status(500).send({ message: errors });
    }

    res.status(201).send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});
router.get('/',async (req,res)=>{
  try{
     const {data,error}=await server.executeOperation({
      query:gql`
      query{
      getAllUsers{
      _id
      name
      email
      password
     }}`
     })
     if(error){return res.status(500).send({message:error})}
     res.status(200).send(data)
  }catch(err){
    res.status(500).send({messange:err})
  }
})
module.exports = router;