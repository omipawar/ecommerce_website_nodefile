const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema(
    {
        name:{
            type:String,
            required: true
        },
        email:{
            type:String,
            required: true
        },
        mobileno:{
            type:String,
            required: true
        },
        password:{
            type:String,
            required: true
        }
    }
);
const Admin = mongoose.model("admins", schema);         // objectives collection in resumebuilding database
module.exports = Admin;