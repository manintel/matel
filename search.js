//Search task is performed here, assume all the necessary
//parameters are provided by query terms
const fs = require('fs');
function cabSearch(req,res) {
    res.send('okay i got the search parameters: '+req.query['fromTime']);
}

// EXPORTS
module.exports = {cabSearch};
