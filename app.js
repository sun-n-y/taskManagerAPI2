const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
  res.json({ msg: 'hi' });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening to port ${port}...`);
});
