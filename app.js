const express = require("express");
const app = express();
const path = require("path");
const bodyparser = require("body-parser");
const flash = require("flash");
const requestSanitizer = require('request-sanitizer')();
var GoogleSpreadsheet = require('google-spreadsheet');
var creds = require('./client-secret.json');
const doc = new GoogleSpreadsheet('1n3oV_9LyEC_v26GctaUPDMfSQK0oZXkdFlXNzE532gY');
var imagine = require('./app/controller/imagineTalks.js');
var mongoConnect = require('./app/Utilities/mongoConnect.js');
const setUp = () => {
    // console.log(doc);
    doc.useServiceAccountAuth(creds, function(err){
        if (err) {
            console.log("Creds me error");
            return err;
        }
    });
}

// Sample request
// insertARow(["Lokesh" , "RA1511003010524","lokesh.slg06@gmail.com","3rd", "CSE", "Smmple No."])
const insertARow = ([name , regno , email , year, dept, phone]) => {
    doc.addRow(1, {name:name, regno:regno, email:email , year:year, dept:dept, phone:phone}, (err) => {
        if(err) {console.log(err);}
        console.log("I was here")
    });
}


setUp();


app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(requestSanitizer.sanitize);
app.use(express.static(path.join(__dirname, 'static'), { maxAge: 31557600000 }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.set('view engine', 'ejs')

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});
app.post('/contact', (req,res) => {
    console.log(req.body);
    res.status(200);
    res.end();
})

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/imagine', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'imagine.html'));
});

app.get('/imagineTalks', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'imagineTalks.html'));
});

app.post('/imagineTalksLogin', imagine.login);

app.get('/checkCount', (req, res) => {
    imagine.checkCount(function(data)
    {
        res.end(JSON.stringify(data));  
    });
    
});

app.post('/imagine/', (req, res) => {
    console.log(req.body);
    imagine.register(req.body);
    // const { name , regno , email , year , dept , phone } = req.body;
    // insertARow([name, regno , email , year , dept , phone]);
    res.status(304);
    res.end();
});

app.listen(app.get('port'), () => {
    console.log(' App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env')); 
    console.log('  Press CTRL-C to stop\n');
});