const express = require("express")

const app = express()

app.get("/", (req, res) => {
  const sum = parseInt(req.query.a) + parseInt(req.query.b)
  // /?a=5&b=4 => sum= 9
  res.json({sum})
})

module.exports = app