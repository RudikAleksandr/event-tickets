import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import config from './config';

// Connecting with mongo db
mongoose.Promise = global.Promise;
mongoose.connect(`${config.DB_URL}/${config.DB_NAME}`, {
  useNewUrlParser: true,
}).then(() => {
  console.log('Database sucessfully connected');
}, (error) => {
  console.log(`Database could not connected: ${error}`);
});

// Setting up port with express js
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist/event-tickets')));
app.use('/', express.static(path.join(__dirname, 'dist/event-tickets')));

// Create port
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});

// error handler
app.use((err, req, res) => {
  console.error(err.message); // Log error message in our server's console
  if (!err.statusCode) {
    // If err has no specified error code, set error code to 'Internal Server Error (500)'
    // eslint-disable-next-line no-param-reassign
    err.statusCode = 500;
  }
  // All HTTP requests must have a response, so let's send
  // back an error with its status code and message
  res.status(err.statusCode).send(err.message);
});
