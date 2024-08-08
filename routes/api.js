const express = require('express');
const registerRoutes = require('./register');

const router = express.Router();

router.use(registerRoutes);

module.exports = router;
