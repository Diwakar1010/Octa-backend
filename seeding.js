const express = require("express")
const mongoose = require("mongoose")
const VehicleTypes = require("./models/vehicleType");
const VehicleModels = require("./models/vehicleModel");
// const VehicleModels = require("./models/vehicleModel")
const app = express();


const uri = "mongodb+srv://diwakargud202:diwaoctalogic@cluster0.fi9d80v.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(uri)
//  storaging the data in database
let map = new Map();
map.set("hatchback",'Tata Tiago')
map.set("suv" ,"Mahindra Thar")
map.set("sedan", "Honda City")
map.set("cruiser", 'Kawasaki W175')
map.set("sports", 'Monster BS6')
// console.log(map)

const fun = async () => {

    const typesData = await VehicleTypes.create({
      car_types: ["hatchback", "suv", "sedan"],
      bike_types: ["cruiser", "sports"],
      model: map
    })

  // console.log(typesData);
}
fun();
const gun = async () => {

  const typesData = await VehicleModels.create({
    hatchback:'Tata Tiago',  
    suv:"Mahindra Thar",  
    sedan:"Honda City",  
    cruiser:'Kawasaki W175',  
    sports:'Monster BS6'
  })

// console.log(typesData);
}
gun();




// routing starts








