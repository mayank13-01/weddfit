var express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")

const app = express()

app.use(bodyParser.json())
app.use(express.static('public1'))
app.use(bodyParser.urlencoded({
    extended: true
}))

mongoose.connect('mongodb://localhost:27017/mydb2', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error', () => console.log("Error in connecting to database"));
db.on('open', () => console.log("Connected to database"));

app.post("/sign_up", (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    var password1 = req.body.password1;

    var data = {
        "email": email,
        "password": password,
        "password1": password1
    }

    db.collection('users').insertOne(data, (err, collection) => {
        if (err) {
            throw err;
        }
        console.log("Record Inserted Successfully");
    });
    return res.redirect('signup_success.html');

})


app.get("/", (req, res) => {
    // res.send("Hello from Server")
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('index.html');
}).listen(5000);


console.log("Listening on PORT 5000");