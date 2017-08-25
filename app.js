const express = require("express");
const app = express();
const path = require("path");
const bodyparser = require("body-parser");
const flash = require("flash");
const requestSanitizer = require('request-sanitizer')();
var GoogleSpreadsheet = require('google-spreadsheet');
var creds = require('./client-secret.json');
// Boilerplate code to set up Google sheets as DataStore
const doc = new GoogleSpreadsheet('1n3oV_9LyEC_v26GctaUPDMfSQK0oZXkdFlXNzE532gY');
const setUp = () => {
    console.log(doc);
    doc.useServiceAccountAuth(creds, function(err){
        if (err) {
            console.log("Creds me error");
            return err;
        }
    });
}

// Sample request
// insertARow(["Lokesh" , "RA1511003010524","lokesh.slg06@gmail.com","3rd", "CSE", "2nd,3rd"])
const insertARow = ([name , regno , email , year, dept, rsvpevents]) => {
    doc.addRow(1, {name:name, regno:regno, email:email , year:year, dept:dept, rsvpevents:rsvpevents}, (err) => {
        if(err) {console.log(err);}
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

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

app.get("/team", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'team.html'));
});

app.get('/imagine', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'imagine.html'));
});

app.post('/imagine', (req, res) => {

});

app.listen(app.get('port'), () => {
    console.log(' App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env')); 
    console.log('  Press CTRL-C to stop\n');
})