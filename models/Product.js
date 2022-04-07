const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema(
    {
        name:{
            type:String,
            required: true
        },
        descriptions:{
            type:String,
            required: true
        },
        sizes:{
            type:Array,
            required: true
        },
        colors:{
            type:Array,
            required: true
        },
        mrp:{
            type:Number,
            required: true
        },
        price:{
            type:Number,
            required: true
        },
        imagepath:{
            type:String
        },
        instock:{
            type:String,
            required: true
        },
        status:{
            type:String,
            required: true
        },
        sku:{
            type:String,
            required: true
        }
        
    }
);
const Product = mongoose.model("products", schema);         // objectives collection in resumebuilding database
module.exports = Product;