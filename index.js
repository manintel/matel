const path = require('path');

//Sends the HTML form
function showForm(req,res){
    res.sendFile(path.join(__dirname, './index.html'));
}

// Exports
module.exports = {showForm};