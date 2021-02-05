var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var passport = require('passport')
var session = require('express-session')


// 라우터 추가하면 여기에 불러오기
var indexRouter = require('./server/routes/index');
var usersRouter = require('./server/routes/users');
var contentListRouter = require('./server/routes/contentList')
var createRouter = require('./server/routes/create')
var readRouter = require('./server/routes/read')
var loginRouter = require('./server/routes/login');
const { allowedNodeEnvironmentFlags } = require('process');


var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({secret:'MySecret', resave:false, saveUninitialized:true}))

app.use(passport.initialize())
app.use(passport.session())


// 라우터 추가하면 여기에 추가하기
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/contentList', contentListRouter)
app.use('/create', createRouter)
app.use('/read',readRouter)
app.use('/login',loginRouter)



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

module.exports = app;
