// Importing all the js files
const index = require('./index');
const search = require('./search');

// Defining url routes
index.app.get('/', index.showForm);
index.app.get('/cabsearch/:fromDate?', search.cabSearch); 
