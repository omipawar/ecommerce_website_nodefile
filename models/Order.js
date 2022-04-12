const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema(
    {
        orderdate:{
            type:Date,
            required: true
        },
        productid:{
            type:String,
            required: true
        },
        size:{
            type:String,
            required: true
        },
        color:{
            type:String,
            required: true
        },
        name:{
            type:String,
            required: true
        },
        email:{
            type:String,
            required: true
        },
        mobileno:{
            type:Number,
            required: true
        },
        address:{
            type:String,
            required: true
        },
        pincode:{
            type:Number,
            required: true
        },
        quantity:{
            type:Number,
            required: true
        },
        price:{
            type:Number,
            required: true
        },
        shipping:{
            type:String,
            required: true
        },
        total:{
            type:Number,
            required: true
        },
        status:{
            type:String,
            required: true
        },
        imagepath:{
            type:String,
            required: true
        },
        productname:{
            type:String,
            required: false
        }
        
    }
    
);
const Order = mongoose.model("orders", schema);         // objectives collection in resumebuilding database
module.exports = Order;