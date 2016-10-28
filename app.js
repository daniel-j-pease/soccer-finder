const express         = require('express');
const logger          = require('morgan');
const bodyParser      = require('body-parser');
const methodOverride  = require('method-override');
require('dotenv').config();

const app             = express();
const PORT            = process.argv[2] || process.env.PORT || 3000;

const homeRoute = require('./routes/home');
const searchRoute = require('./routes/search');

app.use(logger('dev'));
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');

app.use('/', homeRoute);
app.use('/search', searchRoute);

app.listen(PORT, () => console.warn(`Server listening on port ${PORT}`));
