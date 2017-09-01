var exports = module.exports = {};
var mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://microsoftclub:pjqZG2MZNmexC6CJ4MTmPyIqDouhGSD2QR3xPDFQnBeSfFHwkwYrtiaUTIBcK0DJk3CljvGKYFLZ5aQsLblwhQ==@microsoftclub.documents.azure.com:10255/?ssl=true", 
function (err, db) {
  db.close();
});