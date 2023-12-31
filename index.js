const express = require('express');
const app = express();
const dbConnect = require('./config/database')
dbConnect()
require('dotenv').config()
const port = process.env.PORT || 8000
const routes = require('./config/routes')
const cors = require('cors')
const Users = require('./app/models/user')


app.use(express.json())
app.use(cors())
app.use('/', routes)
app.get('/',(req,res)=>{
    res.send('User Authentication API')
})

app.listen(port,()=>{
   console.log(`Server is Running on port : ${port}`);
})  