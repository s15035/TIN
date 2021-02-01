const authUtil = require('./util/authUtils');

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
const lekarzRouter = require('./routes/lekarzRoute');
const pacjentRouter = require('./routes/pacjentRoute');
const wizytaRouter = require('./routes/wizytaRoute');

const lekarzApiRouter = require('./routes/api/LekarzApiRoute');
const pacjentApiRouter = require('./routes/api/PacjentApiRoute');


var app = express();

const session = require('express-session');
app.use(session({
    secret: 'my_secret_password',
    resave: false
}));

app.use(cookieParser('secret'));

const i18n = require('i18n');
i18n.configure({
    locales: ['pl', 'en'], // jêzyki dostêpne w aplikacji. Dla ka¿dego z nich nale¿y utworzyæ osobny s³ownik
    directory: path.join(__dirname, 'locales'), // œcie¿ka do katalogu, w którym znajduj¹ siê s³owniki
    objectNotation: true, // umo¿liwia korzstanie z zagnie¿d¿onych kluczy w notacji obiektowej
    cookie: 'acme-hr-lang', //nazwa cookies, które nasza aplikacja bêdzie wykorzystywaæ do przechowania informacji o jêzyku aktualnie wybranym przez u¿ytkownika
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    const loggedUser = req.session.loggedUser;
    res.locals.loggedUser = loggedUser;
    if(!res.locals.loginError) {
        res.locals.loginError = undefined;
    }
    next();
});

app.use((req, res, next) => {
    if(!res.locals.lang) {
        const currentLang = req.cookies['acme-hr-lang'];
        res.locals.lang = currentLang;
    }
    next();
});

app.use('/', indexRouter);
app.use('/doctor', lekarzRouter);
app.use('/patient', pacjentRouter);
app.use('/appointment', authUtil.permitAuthenticatedUser, wizytaRouter);

app.use('/api/doctor', lekarzApiRouter);
app.use('/api/patient', pacjentApiRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const sequelizeInit = require('./config/sequelize/init');
sequelizeInit()
    .catch(err => {
        console.log(err);
    });

module.exports = app;
