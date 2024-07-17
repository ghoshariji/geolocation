const mongoose = require("mongoose")


const baseSchema =  mongoose.Schema({
    lattitude:{
        type:String,
        required:true
    },
    longitude:{
        type:String,
        required:true
    }
})


const baseModal = new mongoose.model("base",baseSchema);
module.exports = baseModal