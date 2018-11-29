// Requires
var express = require('express');
var mongoose = require('mongoose');

// variables
var app = express();

// Conection to DB
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {
  if( err ) throw err;

  console.log('Base de datos puerto 27017: \x1b[32m%s\x1b[0m', 'online');

})

// Routes
app.get('/', (req, res, next ) => {

  res.status(200).json({
    ok: true,
    message: 'Petición realizada correctamente'
  })

});

// Requests
app.listen(300, () => {
  console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
})