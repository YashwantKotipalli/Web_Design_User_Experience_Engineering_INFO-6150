// imports
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import model from './models';
import routes from './routes';

// mongoose instance connection url connection

mongoose.connect('mongodb://localhost:27017/stickydb2', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// mongoose promise
mongoose.Promise = global.Promise;

// initializing the app as an express app
const app = express();

// using the logger to initialize it as a developer mode
app.use(logger('dev'));
// using the json format
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// binding the routes to the app
routes(app);

// exporting the Expressjs app as app
export default app;
