const express = require('express');

const app = express();

//View Engine
app.set('view engine', 'ejs'); //Use ejs for View engine, for the files inside views, change extension to ejs for it to work.

app.get('/', (req, res) => {
  //Send Data
  res.send('Hi'); //Baisc generic send

  res.sendStatus(200); //Send Status code 200

  res.status(500).send('Message'); //Send status code with message

  res.status(200).json({
    message: 'Hello world', //Send status code with json
  });

  res.json({
    Message: 'API triggered', //Default success
  });

  res.download('app.js'); //Download file to user

  res.render('index'); //Pass a file to render (All file are under the Views file)

  //Pass data into view
  res.render('index', { text: 'Passing data' });
});

const userRouter = require('./routes/users');

app.use('/users', userRouter); //Use exported route functions from routers

app.listen(3001);
