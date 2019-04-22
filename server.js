
// dependencies
const express = require('express');
const mongoose = require('mongoose');
const routes =require('./routes)');

// application setup
const app = express();
const port = process.env.PORT || 3001;

// data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// add api and view routes
app.use(routes);
mongoose.connect(process.env.MONGO_URI || 'mongod://localhost/nikommerce_leads_db');

// start api server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});