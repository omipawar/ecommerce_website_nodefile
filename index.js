var express = require("express");
var bodyparser = require("body-parser");
var mongodb = require("mongodb");
var mongoose = require("mongoose");
var nodemailer = require("nodemailer");

var app = express();
var jsonparser = bodyparser.json();

app.use(bodyparser.json({ limit: '50mb' }));
app.use(bodyparser.urlencoded({ limit: '50mb', extended: true }));



app.use(express.static("assets"));

mongoose.connect("mongodb://localhost:27017/e-commerce");
const db = mongoose.connection;
db.on("error", error => console.log(error));
db.on("open", () => console.log("Connection Established...."));

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    if (req.method == "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT,POST,GET,PATCH,DELETE");
        return res.status(200).json({});
    }
    next();
});

app.get("/", (req, res) => {
    res.send("Hello welcome to E-commerce website......");
    res.end();
});

app.get("/hello", (req, res) => {
    res.send("This is hello page.....");
    res.end();
});

app.use("/admin", require("./routes/admin"));
app.use("/product", require("./routes/product"));
app.use("/subscription", require("./routes/subscription"));
app.use("/order", require("./routes/order"));

app.listen(8081, (err) => {
    if (err) throw err;
    else {
        console.log("Website started");
    }
});