const path = require('path');
const express = require('express');
const app = express();

function showForm(req,res){
    res.sendFile(path.join(__dirname, './index.html'));
}

const port = process.env.PORT || 3000;
app.listen(port,() => {console.log(`Listening on port ${port}.`)});

// EXPORTS
module.exports = {app,showForm};