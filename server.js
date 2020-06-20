const express = require('express');
const path = require('path');
const ejs = require('ejs');
// require('dotenv').config();
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 5000;
const app = express();

// import routes
const indexRoute = require('./routes/index');
const usersRoute = require('./routes/users');
const uploadRoute = require('./routes/upload');
// To parse form data
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));
const dataBASE_URL = 'mongodb+srv://jorel:Barcelone10@cluster0-h6kk4.mongodb.net/<dbname>?retryWrites=true&w=majority'
// Connect to database
mongoose.connect(dataBASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});   
  
const db = mongoose.connection;
db.on('error', err => console.log('Error in connecting mongodb'));
db.once('open', () => console.log('Mongodb Connected...'));        

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
  
// create server 
app.listen(port, () => console.log('Server is listening on port' + port));     