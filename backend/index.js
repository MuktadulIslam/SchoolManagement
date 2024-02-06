const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Use the cors middleware
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send('Hi! I am from Express (Backend)');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
