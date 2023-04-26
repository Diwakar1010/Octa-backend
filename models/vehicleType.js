const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const typeSchema = new Schema({
    car_types:{type: Array , required:true },  
    bike_types:{type: Array , required:true},  
});

const VehicleTypes = mongoose.model('typeOfVehicle', typeSchema);
module.exports = VehicleTypes;