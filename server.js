
// dependencies
const express = require('express');

// application setup
const app = express();
const port = process.env.PORT || 5000;

// data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// routes
require('./public/routes/api.js')(app);

// listener
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});