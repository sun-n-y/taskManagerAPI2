const express = require('express');
const app = express();
const tasksRouter = require('./router/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();

//middleware
app.use(express.static('./public'));
app.use(express.json());

//routes
// app.get('/hello', (req, res) => {
//   res.json({ msg: 'hi' });
// });

app.use('/api/v1/tasks', tasksRouter);

const port = 3000;
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
