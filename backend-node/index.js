const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({"greeting": "hello"});
});

app.listen(5000);
