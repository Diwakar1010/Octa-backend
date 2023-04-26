const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vehicleModelSchema = new Schema({
    hatchback:{type: String , required:true },  
    suv:{type: String , required:true},  
    sedan:{type: String , required:true},  
    cruiser:{type: String , required:true},  
    sports:{type: String , required:true},  
});

const VehicleModels = mongoose.model('modelsofvehicle_type', vehicleModelSchema);
module.exports = VehicleModels;