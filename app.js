const express         = require('express');
const logger          = require('morgan');
const bodyParser      = require('body-parser');
const methodOverride  = require('method-override');
//what does silent/true do?
const dotEnv          = require('dotenv').config({silent: true});
const session         = require('express-session');
const cookieParser    = require('cookie-parser');
const path            = require('path')

const app             = express();
const PORT            = process.argv[2] || process.env.PORT || 3000;
const SECRET          = 'tacos3000';

const homeRoute = require('./routes/home');
const authRoute = require('./routes/auth');
const usersRoute = require('./routes/users');
const searchRoute = require('./routes/search/search');
const searchInRoute = require('./routes/search/in');
// const parksRoute = require('./routes/park');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(cookieParser());

app.set('view engine', 'ejs');

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SECRET,
}));

app.use('/', homeRoute);
app.use('/auth', authRoute);
app.use('/users', usersRoute);
app.use('/search', searchRoute);
app.use('/search/in', searchInRoute);
// app.use('/parks', parksRouter);

app.listen(PORT, () => console.warn(`Server listening on port ${PORT}`));
