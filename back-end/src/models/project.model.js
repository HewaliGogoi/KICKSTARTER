<<<<<<< HEAD
const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    id : {type : String, required: true},
    image : {type : String, required: true},
    vedio : {type : String},
    title : {type : String, required: true},
    subtitle : {type : String, required: true},
    author : {type : String, required: true},
    fund : {type : Number, required: true},
    goal : {type : Number, reuired: false},
});

=======
const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    id : {type : String, required: true},
    image : {type : String, required: true},
    vedio : {type : String},
    title : {type : String, required: true},
    subtitle : {type : String, required: true},
    author : {type : String, required: true},
    fund : {type : Number, required: true},
    goal : {type : Number, reuired: false},
});

>>>>>>> 8043242aae90293efbf41190a5a38d5728f806f6
module.exports = mongoose.model("project", projectSchema);