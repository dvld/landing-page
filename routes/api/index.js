
// dependencies
const router = require('express').Router();
const leadRoutes = require('./leads');

// Lead routes
leadRoutes.use('/leads', leadRoutes);

module.exports = router;