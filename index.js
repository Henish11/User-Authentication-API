const express = require('express');
const app = express();
const dbConnect = require('./config/database')
dbConnect()
require('dotenv').config()
const port = process.env.PORT || 8000
const routes = require('./config/routes')
const cors = require('cors')
const Users = require('./app/models/user')

const usersData = [
    {
      id: 1,
      name: "John Doe",
      age: 28,
      email: "john.doe@example.com",
      address: {
        street: "123 Main Street",
        city: "New York",
        state: "NY",
        country: "USA"
      }
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 32,
      email: "jane.smith@example.com",
      address: {
        street: "456 Elm Street",
        city: "Los Angeles",
        state: "CA",
        country: "USA"
      }
    },
    {
      id: 3,
      name: "Alice Johnson",
      age: 24,
      email: "alice.johnson@example.com",
      address: {
        street: "789 Oak Street",
        city: "Chicago",
        state: "IL",
        country: "USA"
      }
    },
    {
      id: 4,
      name: "Michael Brown",
      age: 40,
      email: "michael.brown@example.com",
      address: {
        street: "10 Pine Street",
        city: "San Francisco",
        state: "CA",
        country: "USA"
      }
    },
    {
      id: 5,
      name: "Emily Davis",
      age: 31,
      email: "emily.davis@example.com",
      address: {
        street: "222 Cedar Street",
        city: "Seattle",
        state: "WA",
        country: "USA"
      }
    }
  ];
  

app.use(express.json())
app.use(cors())
app.use('/', routes)
app.get('/',(req,res)=>{
    res.send(usersData)
})

// app.get('/users',(req,res)=>{
//     Users.find({})
//          .then((data)=>{
//             res.json(data)
//          }).catch((err)=>{
//             res.json(err)
//     })
// })


app.listen(port,()=>{
   console.log(`Server is Running on port : ${port}`);
})  