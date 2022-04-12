var express = require("express");
var bodyparser = require("body-parser");
const Order = require("../models/Order");
const router = express.Router();                    // Creates sub-server
var nodemailer = require('nodemailer');


router.post("/place", async (req, res) => {
    let body = req.body;
    let order = new Order();
    order.orderdate = new Date();
    order.productid = body.data.productid;
    order.size = body.data.size;
    order.color = body.data.color;
    order.name = body.data.name;
    order.email = body.data.email;
    order.mobileno = body.data.mobileno;
    order.address = body.data.address;
    order.pincode = body.data.pincode;
    order.quantity = body.data.quantity;
    order.price = body.data.price;
    order.shipping = body.data.shipping;
    order.total = body.data.total;
    order.status = "pending";
    order.imagepath = body.data.imagepath;

    order.save().then(result => {
        res.end(JSON.stringify(result));

    }, err => {
        res.end(JSON.stringify(err));
        console.log(err);
    });
});

router.post("/list", async (req, res) => {
    
    let order = await Order.find({status : "paid"});
    res.json({ data: order });
})

router.post("/get", async (req, res) => {
    let body = req.body;
    let order = await Order.findById(body.data.id);
    res.json({ data: order });
});

// router.post("/get", async (req, res) => {
//     let body = req.body;
//     let order = await Order.find(body.data.status = "paid");
//     res.json({ data: order });
// });

router.post("/delete", async (req, res) => {
    let body = req.body;
    let order = await Order.findByIdAndDelete(body.data.id);
    let data = {
        "data": {
            "status": "success"
        }
    }
    res.end(JSON.stringify(data));
});

router.post("/changestatus", async (req, res) => {
    let body = req.body;
    let order = await Order.findById(body.data.id);
    order.status = body.data.status;
    order.save().then(result => {
        res.end(JSON.stringify(result));

    }, err => {
        res.end(JSON.stringify(err));
        console.log(err);
    });
})

router.post("/paymentsuccess", async (req, res) => {
    let body = req.body;
    let order = await Order.findById(body.data.id);
    order.status = "paid";
    order.save().then(result => {
        //Send Email to admin and user
        //
        let body = getadminmail(order);
        sendmail("pawarom097@gmail.com", "Order received", body);

        body = getusermail(order);
        sendmail(order.email, "Hello " + order.name + ", your order received", body);

        res.end(JSON.stringify(result));
    }, err => {
        res.end(JSON.stringify(err));
        console.log(err);
    });
})

function getadminmail(order)
{
    var body = "Hello admin, order received.";
    return body;
}

function getusermail(order)
{
    var body = "Hello user, your order received.";
    return body;
}

function sendmail(to, subject, body)
{   
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'prajaktahosting@gmail.com',
        pass: 'Praju@2626'
      }
    });    
    var mailOptions = {
      from: 'prajaktahosting@gmail.com',
      to: to,
      subject: subject,
      text: body
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
}

module.exports = router;