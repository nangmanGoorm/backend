const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
require('dotenv').config();

const { stream } = require('./utils/winston');

require('./utils/morgan');

const indexRouter = require('./routes/index');

const app = express();

app.set('trust proxy', true);
app.use(morgan('customFormat', { stream }));

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

require('./middlewares/error_handler')(app);

module.exports = app;
