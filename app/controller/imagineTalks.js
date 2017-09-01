var mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://microsoftclub:pjqZG2MZNmexC6CJ4MTmPyIqDouhGSD2QR3xPDFQnBeSfFHwkwYrtiaUTIBcK0DJk3CljvGKYFLZ5aQsLblwhQ==@microsoftclub.documents.azure.com:10255/?ssl=true", 
function (err, database) {
    if(!err)
    {
        db = database;
        console.log('DB Connected at ImagineTalks');
    }
});

var db;

var exports = module.exports = {};
exports.login = function(request, response)
{
    
}

exports.register = function(body)
{
    db.collection('Users').insertOne(body, function(err, data)
    {
        console.log('Error : ' + err);
        console.log('Written Data');
    });
}