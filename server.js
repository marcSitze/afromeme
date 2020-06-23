const express = require('express');
const path = require('path');
const ejs = require('ejs');
const ConnectDB = require('./config/db');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 5000;
const app = express();

// import routes
const indexRoute = require('./routes/index');
const usersRoute = require('./routes/users');
const uploadRoute = require('./routes/upload');
const meRoute = require('./routes/me');
// To parse form data
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));

// Connect to mongo database
ConnectDB();

// to display our web pages  
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// middlewares
app.use(cookieParser());

// static folders
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/ups')));
 
// app.use((req, res, next) => {
//     req.requestTime = new Date().toISOString(); 
//     console.log(req.headers); 
// });
   
// Display all the videos and images
app.use('/', indexRoute);
app.use('/', usersRoute);
app.use('/upload', uploadRoute);
app.use('/me', meRoute);
  
// create server 
app.listen(port, () => console.log('Server is listening on port' + port));     