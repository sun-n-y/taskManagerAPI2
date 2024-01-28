const express = require('express');
const app = express();
const tasksRouter = require('./router/tasks');

//middleware
app.use(express.json());

//routes
app.get('/hello', (req, res) => {
  res.json({ msg: 'hi' });
});

app.use('/api/v1/tasks', tasksRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening to port ${port}...`);
});
