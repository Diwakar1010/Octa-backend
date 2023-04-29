const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataModelSchema = new Schema({
    first_name:{type: String , },  
    last_name:{type: String },  
    wheeler:{type: String },  
    vehicle_type:{type: String },  
    vehicle_model:{type: String },  
    date_range:{type: String }

});

const DataModels = mongoose.model('finaldata', dataModelSchema);
module.exports = DataModels;