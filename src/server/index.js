const express = require('express');
const app = express();
const path = require('path');

const port = 9000;

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+"/../app/home.html"));
});

app.listen(port);
console.log('Now listening on port ' + port.toString());
