const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const users = require('./user.model')


let taskSchema = new Schema ({
    name : { 
        type: String,
        required: true,
        unique: false
    } ,

    email : {
        type: String,
        required: true,
        unique: true,
    } , 

    password : {
        type: String,
        required: true
    } , 

    description: { 
        type: String ,
        required : true
    },

    date_created: { 
        type: Date ,
        required: true
    },

    editable: { 
        type: Boolean, 
        default: true 
    },

});

// Export the model
//module.exports = mongoose.model("users", userSchema);
module.exports = mongoose.model("task" , taskSchema);