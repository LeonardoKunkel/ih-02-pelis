const express = require('express');
const app = express()

const hbs = require('hbs');

const connectDB = require('./config/db');


require('dotenv').config()

connectDB()

app.use(express.static('public'))
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use(express.urlencoded({extended: true}));

app.use('/', require('./routes/index.routes'));
app.use('/celebrities', require('./routes/celebrities.routes'));
app.use('/movies', require('./routes/movies.routes'));

app.listen(process.env.PORT, () => console.log(`It's alive on port ${process.env.PORT}`));
