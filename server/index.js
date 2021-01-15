const express = require('express');
const path = require('path');
const cors = require('cors');
const mongoose = require('mongoose');
const db = require('./db/db.js');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'client')));
app.use(cors());
app.use((req, res, next) => {
  console.log(`Serving ${req.method} at ${req.url}`);
  next();
});

app.get((req, res, next) => {
  
})

app.listen(3000, () => {
  console.log(`Main Description Server listening on port ${port}`);
});