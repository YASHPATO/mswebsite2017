const express = require("express");
const app = express();
const path = require("path");
const bodyparser = require("body-parser");
const flash = require("flash");

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({ extended: true }));
// app.use(flash());
app.use(express.static(path.join(__dirname, 'static'), { maxAge: 31557600000 }));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname , 'views','index.html'));
});

app.get('/contact', (req,res) => {
    res.sendFile(path.join(__dirname , 'views','contact.html'));
});

app.get("/team", (req,res) => {
    res.sendFile(path.join(__dirname , 'views','team.html'));
});

app.listen(app.get('port'), () => {
    console.log(' App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env')); 
    console.log('  Press CTRL-C to stop\n');
});