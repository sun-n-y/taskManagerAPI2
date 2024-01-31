const express = require('express');
const app = express();
const tasksRouter = require('./router/tasks');
const connectDB = require('./db/connect');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
require('dotenv').config();

//middleware
app.use(express.static('./public'));
app.use(express.json());

//routes
// app.get('/hello', (req, res) => {
//   res.json({ msg: 'hi' });
// });

app.use('/api/v1/tasks', tasksRouter);

//error handling
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server listening to port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
