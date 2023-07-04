const mongoose = require('mongoose')


// DataBase Conection
const dbConnect = async () =>{
    await mongoose.connect('mongodb+srv://henish09:henish098@cluster0.jrkurve.mongodb.net/MernStack?retryWrites=true&w=majority')
     .then(()=>{
         console.log('db connected');
     })
     .catch((err)=>{
          console.log('error',err);
     })
  }

module.exports = dbConnect;