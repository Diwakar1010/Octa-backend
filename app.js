const express = require("express")
var bodyParser = require('body-parser')
const mongoose = require("mongoose")
const cors = require("cors")
const VehicleTypes = require("./models/vehicleType");
const VehicleModels = require("./models/vehicleModel");
const app = express();
const port = 8080 || process.env.PORT


const uri = "mongodb+srv://diwakargud202:bobby@cluster0.0u33siq.mongodb.net/?retryWrites=true&w=majority"

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors());

mongoose.connect(uri)
//  storaging the datain database

const fun = async () => {
  let typesData = await VehicleTypes.create({
    car_types: ["hatchback", "suv", "sedan"],
    bike_types: ["cruiser", "sports"]
  })
}
fun();

const gun = async () => {
  let modelsData = await VehicleModels.create({
    hatchback: 'Tata Tiago',
    suv: "Mahindra Thar",
    sedan: "'Honda City'",
    cruiser: 'Kawasaki W175',
    sports: 'Monster BS6'
  })
}
gun();


// routing starts


app.get("/types", async (req, res) => {
  const data = await VehicleTypes.find()
  res.status(200).json(data)
})
app.get("/models",async (req, res) => {
  const data =await VehicleModels.find()
  res.status(200).json(data)
})

app.listen(port, () => { console.log(`its listening ${port}`) })





