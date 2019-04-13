
// dependencies
const express = require('express');

// application setup
const app = express();
const port = 5000;

// data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// listener
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});