const express = require('express');
const app = express();
const port = 3000
const mainRouter = require('./src/routes/API/mainRoute')



app.listen(port, () => {
    console.log('Escuchando en el puerto', port);
  });


app.use('/', mainRouter );
