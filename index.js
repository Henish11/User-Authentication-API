const express = require('express');
const app = express();
const dbConnect = require('./config/database')
dbConnect()
const port = process.env.PORT || 3001
const routes = require('./config/routes')
const cors = require('cors')


app.use(express.json())
app.use(cors())
app.use('/', routes)
app.get('/',(req,res)=>{
    res.send('Server Running')
})
app.listen(port,()=>{
   console.log("Server Running");
})