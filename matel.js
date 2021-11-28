// Create express app
const express = require('express');
const app = express();

// Importing all the js files
const index = require('./index');
const search = require('./search');

// Defining url routes
app.get('/', index.showForm);
app.get('/cabsearch', search.cabSearch); 

// EXPORTS
module.exports = {app};

// Start Server
const port = process.env.PORT || 3000;
app.listen(port,() => {console.log(`Listening on port ${port}.`)});
