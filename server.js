const express = require('express');
const path = require('path');

const app = new express();
app.use(express.static('./public'));


app.get('*', (req, res) => {
    "use strict";
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});



app.listen(3000, function () {
    console.log('Example app listening at port 3000：');
});