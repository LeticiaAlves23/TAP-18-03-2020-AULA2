/*var express = require("express");
var app = express();
app.listen(3000, () => {
 console.log("Server running on port 3000");
});
*/

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('An alligator approaches!');
});

app.listen(3000, () => console.log('Gator app listening on port 3000!'));