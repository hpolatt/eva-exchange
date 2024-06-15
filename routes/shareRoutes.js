const express = require('express');
const router = express.Router();
const ShareController = require('../controllers/ShareController');

router.post('/create', ShareController.createShare);
// Define other routes for shares if needed

module.exports = router;
