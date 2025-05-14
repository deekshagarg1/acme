const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();
// const PORT = 3700;
const SECRET_KEY = 'mysecretkey';
// const secret = "ramlal"; can be written in any form(variable)

app.use(bodyParser.json());
app.use(cors())


// -----------------jwt-----------------

mongoose.connect('mongodb://localhost:27017/patient', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));


 const userSchema = new mongoose.Schema({
        username: String,
        password: String 
      });

const User = mongoose.model('User', userSchema);


app.post("/Register" , async(req, resp)=>{
    let data = new User(req.body)
    let result = await data.save()
    result=result.toObject()
    resp.send(result)
})



      app.post('/login', async (req, res) => {
        const { username, password } = req.body;
      
        const user = await User.findOne({ username, password });
        if (!user) return res.status(401).json({ message: 'Invalid credentials' });
      
        const token = jwt.sign({ id: user._id, username: user.username }, SECRET_KEY, {
          expiresIn: '1h'
        });
      
        res.json({ token, 
          
          id: user._id, username: user.username  });
      });
      
   
      function authenticateToken(req, res, next) {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
      
        if (!token) return res.sendStatus(401);
      
        jwt.verify(token, SECRET_KEY, (err, user) => {
          if (err) return res.sendStatus(403);
          req.user = user;
          next();
        });
      }


      app.get('/get', authenticateToken, (req, res) => {
  res.json({ message: `Hello ${req.user.username}, you accessed protected data.` });
});



// -----------mongoose backend=---------------

const patientSchema = new mongoose.Schema({
  name :String , 
  age: Number, 
  place :String,
  date: String , 
  gen: String,
  date :String,
  department:String,
  blood:String,
  phone:String,
  birthdate:String,

})

const patient = mongoose.model("patient" , patientSchema)


app.post('/post1' , async(req , resp)=>{
  let data = new patient(req.body)
  let result = await data.save()
  result = result.toObject();
  resp.send(result)
})


app.get('/get1' , async(req, resp)=>{
  let result = await patient.find()
  if(result){
    resp.send(result)
  }
  else{
    resp.send("Data not found")
  }
})


app.put('/put1/:id' , async(req, resp)=>{
  let result= await patient.updateOne({_id:req.params.id} , {$set : req.body})
  resp.send(result)
})


app.delete('/delete1/:id' , async(req,resp)=>{
  let result = await patient.deleteOne({_id:req.params.id})
resp.send(result)
})


app.get('/searchapi/:key' , async(req, resp)=>{
  let result = await patient.find({"$or" :[{"name":{$regex:req.params.key}},{"department":{$regex:req.params.key}}, {"place":{$regex:req.params.key}} , {"date":{$regex:req.params.key}}] })
  resp.send(result)
})


      
  app.listen(4100)