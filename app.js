const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const sum = parseInt(req.query.a, 10) + parseInt(req.query.b, 10);
  // /?a=5&b=4 => sum= 9
  res.json({ sum });
});

module.exports = app;
