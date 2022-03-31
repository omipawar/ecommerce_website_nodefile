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
            type:String,
            required: true
        },
        colors:{
            type:String,
            required: true
        },
        colors:{
            type:String,
            required: true
        },
        sizes:{
            type:String,
            required: true
        }
    }
);
const Product = mongoose.model("products", schema);         // objectives collection in resumebuilding database
module.exports = Product;