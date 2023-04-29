const express = require("express")
var bodyParser = require('body-parser')
const formData = require("express-form-data")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express();
const port = 8080 || process.env.PORT
const VehicleModels = require("./models/vehicleModel")
const VehicleTypes = require("./models/vehicleType")
const DataModels = require("./models/dataModel")


const uri = "mongodb+srv://diwakargud202:diwaoctalogic@cluster0.fi9d80v.mongodb.net/?retryWrites=true&w=majority"

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors());
app.use(formData.parse());


mongoose.connect(uri)

// routing starts
app.post("/name_data" , async (req,res)=>{
const {first_namef, last_namef} = req.body
try{
  const user = await DataModels.create({
    first_name:first_namef,
    last_name:last_namef,
    wheeler:"",  
    vehicle_type:"",  
    vehicle_model:"" ,
    date_range:""
  })
  res.json({
    status:"success",
    user
  })
}catch(err){
    res.status(401).json({
      status:"failed from catch",
      message:err.message,
    })
}

})

app.post("/wheels_no" , async (req,res)=>{
  // console.log(req.body)
  const {wheel_no, mongoId} = req.body
  try{
    const user = await DataModels.findOneAndUpdate({_id:mongoId},{wheeler:wheel_no})
    console.log(user)

    res.json({
      status:"success",
      user
    })
  }catch(err){
      res.status(401).json({
        status:"failed from catch wheels",
        message:err.message,
      })
  }
  
  })


  app.post("/car_types" , async (req,res)=>{
    // console.log(req.body)
    const {car_type, mongoId} = req.body
    try{
      const user = await DataModels.findOneAndUpdate({_id:mongoId},{vehicle_type:car_type})
      console.log(user)
      const c_mod = await VehicleModels.find({})
        if(c_mod[0][car_type]){
          console.log(c_mod[0][car_type])
        }
  
      res.json({
        status:"success",
        mod:c_mod[0][car_type],
        user
      })
    }catch(err){
        res.status(401).json({
          status:"failed from catch car_types",
          message:err.message,
        })
    }
    
    })

    app.post("/bike_types" , async (req,res)=>{
      console.log(req.body)
      const {bike_type, mongoId} = req.body
      try{
        const user = await DataModels.findOneAndUpdate({_id:mongoId},{vehicle_type:bike_type})
        const b_mod = await VehicleModels.find({})
        if(b_mod[0][bike_type]){
          console.log(b_mod[0][bike_type])
        }
        
    
        res.json({
          status:"success",
          mod:b_mod[0][bike_type],
          user
        })
      }catch(err){
          res.status(401).json({
            status:"failed from catch bike_types",
            message:err.message,
          })
      }
      
      })

app.post("/final_data" , async (req,res)=>{
  const { mongoId} = req.body
  try{
    const user = await DataModels.find({_id:mongoId})
    console.log(user)

    res.json({
      status:"success",
      user
    })
  }catch(err){
      res.status(401).json({
        status:"failed from catch final_data",
        message:err.message,
      })
  }
})



app.post("/vehicle_model" , async (req,res)=>{
  const { vehicle_name ,mongoId} = req.body
  try{
    const user = await DataModels.findOneAndUpdate({_id:mongoId},{vehicle_model:vehicle_name})
    console.log(user)

    res.json({
      status:"success",
      user
    })
  }catch(err){
      res.status(401).json({
        status:"failed from catch vehicle_model",
        message:err.message,
      })
  }
})


app.post("/date" , async (req,res)=>{
  const { date_rangef ,mongoId} = req.body
  try{
    const user = await DataModels.findOneAndUpdate({_id:mongoId},{date_range:date_rangef})
    console.log(user)
    console.log(date_rangef)
    res.json({
      status:"success",
      user
    })
  }catch(err){
      res.status(401).json({
        status:"failed from catch date",
        message:err.message,
      })
  }
})







app.get("/types", async (req, res) => {
  const data = await VehicleTypes.find()
  // console.log(data)
  res.status(200).json(data)
})

// app.get("/models",async (req, res) => {
//   const data = await VehicleModels.find()
//   // console.log(data)
//   res.status(200).json(data)
// })


app.listen(port, () => { console.log(`its listening ${port}`) })








