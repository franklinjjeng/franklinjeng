var express = require('express');
var path = require('path');

var port = process.env.PORT || 3000;

var app = express();


// serve static client-facing files
app.use(express.static(path.resolve(__dirname, '../public')));

app.use('*', function (request, response){
  response.sendFile(path.resolve(__dirname, '../public', 'index.html'))
})

// spin up server
app.listen(port, function() {
  console.log('Listening on port ', port);
});

// export app
module.exports = app;
