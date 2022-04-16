const express = require('express');
const app = express();
const dine_app = express();
const port = 3000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require('ejs');
var session = require('express-session');
var flush = require("connect-flash");

const cookieParser = require('cookie-parser');
const e = require('connect-flash');
app.use(express.static('orderUI'))
app.use(bodyParser.urlencoded({extended: true}));
dine_app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser('secret'))
app.use(session({
    secret: 'secret',
    cookie: {maxAge:null },
    resave: false,
    saveUninitialized: false
}));
app.use(flush());

// Set View's
app.set('views', './views');
app.set('view engine', 'ejs');

mongoose.connect("mongodb://localhost:27017/hotelDB",{ useNewUrlParser: true ,  useUnifiedTopology: true });

const feedbackSchema= {
    f_name: String,
    l_name: String,
    email: String,
    Address: String,
    mobile: Number,
    subject: String,
    comment: String

}

const dineSchema= {
    tableno:Number,
    f_name: String,
    l_name: String,
    contact: Number,
    noperson: Number,
    datereserve: Date,
    timereserve: String

}

const roomSchema= {
    room_no:Number,
    name: String,
    email: String,
    checkin: Date,
    checkout: Date,
    adultperson: Number,
    children: String,
    reserved:Number,
    status:String,
    availableRooms:[{
        type: Number
    }]

}
const PunjabimenuSchema= {
    item_no: Number,
    item_name: String,
    price: Number,
}

const Feedback =mongoose.model("Feedback",feedbackSchema);

const Dine =mongoose.model("dine",dineSchema);

const Room =mongoose.model("room",roomSchema);

const Punjabimenu =mongoose.model("punjabimenu",PunjabimenuSchema);

app.use(express.static(__dirname+'/public'));




// Navigation

app.get('/admin_login', function(req, res){
        res.render('loginadmin', { message: req.flash("message") })
});

app.get('/rooms', (req, res) => {
    Room.find({}, function(err,rooms){
        res.render('roomsuser', { 
            roomList: rooms
        });
    });
})

app.get('/dine_reservation', (req, res) => {
    Dine.find({}, function(err,dines){
        res.render('tableuser', { 
            dineList: dines
        });
    });
})

app.get('/roominfo', (req, res) => {
    var id =  req.query.id;
    console.log("id is "+id);
    Room.find({}, function(err,rooms){
        res.render('Roominformation', { 
        roomList: rooms,
        fetch_id : id,
        // Room_No: 1
        })
    })
   
});
app.get('/dine_reservation_details', (req, res) => {

    Dine.find({}, function(err,dines){
        res.render('tables', { 
        dineList: dines 
        })
    })
})

app.get('/tableinfo', (req, res) => {
    var id =  req.query.id;
    console.log("id is "+id);
    Dine.find({}, function(err,dines){
        res.render('tableinformation', { 
        dineList: dines,
        fetch_id : id,
        // Room_No: 1
        })
    })
   
});
// var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,
// 25,26,27,28,29,30];
// var arr=[];
// array.forEach(function(item) {
//     arr.push(item);
// });
// arr.forEach(function(item) {
//     console.log("-->" + item);
// });

app.get('/AdminRooms', function(req, res){

    Room.find({}, function(err,rooms){
        res.render('rooms', { 
        roomList: rooms,
        // availablerooms :arr
        // Room_No: 156
        })
    })
});


app.get('/showname', function(req, res){
    var name =  req.query.name;
    console.log("name is "+name);
    Room.find({}, function(err,rooms){
        res.render('showguest', { 
        roomList: rooms,
        // availablerooms :arr
        // Room_No: 156
        fetch_name:name
        })
    })
});

app.get('/feedback_details', (req, res) => {

    Feedback.find({}, function(err,feedbacks){
        res.render('viewfeedbackdetails', { 
        feedbackList: feedbacks 
        })
    })
})
app.get('/menu', (req, res) => {
    res.sendFile(__dirname+'/orderUI/user.html')
    
})


app.get('/room_reservation_details', (req, res) => {

    Room.find({}, function(err,rooms){
        res.render('viewroomreservations', { 
        roomList: rooms
        })
    })
})

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/public/index.html')
})

app.get('/contact', (req, res) => {
    res.sendFile(__dirname+'/public/contact.html')
})


// app.get('/dine_reservation', (req, res) => {
//     res.sendFile(__dirname+'/public/dinereservation.html')
// })



app.get('/room_reservation', (req, res) => {
    res.sendFile(__dirname+'/public/room.html')
})


// app.get('/roominfo', (req, res) => {
//     res.sendFile(__dirname+'/public/random.html')
// })
app.get('/feedback', (req, res) => {
    res.sendFile(__dirname+'/public/feedback.html')
})

// app.get('/admin_home', (req, res) => {
//     res.sendFile(__dirname+'/public/viewreservations.html')
// })

app.get('/admin_home', (req, res) => {
    res.render('adminhome.ejs');
});

app.post("/",function(req,res){
    let newFeedback = new Feedback({
        f_name: req.body.firstname,
        l_name: req.body.lastname,
        email: req.body.email,
        Address: req.body.Address,
        mobile: req.body.mobile,
        subject: req.body.subject,
        comment: req.body.comment        
    });
    newFeedback.save();
    res.redirect('/');
})

app.post("/top",function(req,res){
    let newDine = new Dine({
        tableno: req .body.tableno,
        f_name: req .body.firstname,
        l_name: req.body.lastname,
        contact: req.body.contact,
        noperson: req.body.nopersons,
        datereserve: req.body.datereserve,
        timereserve: req.body.timereserve

    });
    newDine.save();
    res.redirect('/');
})

app.post("/r_submit",function(req,res){
    let newRoom = new Room({
        room_no : req.body.room_no,
        name: req.body.name,
        email: req.body.email,
        checkin: req.body.checkin,
        checkout: req.body.checkout,
        adultperson: req.body.adultperson,
        children: req.body.children,
        status : "available"

    });
    // newRoom.findOne({ room_no : req.body.room_no, })
    // .then(
    //     (room) => {
    //         room_no : room.room_no},{
    //         name: room.name},{
    //         email: room.email},{
    //         checkin: room.checkin},{
    //         checkout: room.checkout},{
    //         adultperson: room.adultperson},{
    //         children: room.children}
    //     );
    
    newRoom.save();
    res.redirect('/');
})

app.post('/login', function (req, res)
   {
      var user=req.body.username;
      var password=req.body.password;
      if((user=='admin')&&(password=='admin'))
         { 
            res.redirect('/admin_home');
          }
       else
          {
            if((user==' ')&&(password==' ')){

            }
            else{
            req.flash('message','Enter Correct Credentials!');
            res.redirect('/admin_login');
            }
        } 
    })



app.listen(port, () => console.info(`App listening on port ${port} `))