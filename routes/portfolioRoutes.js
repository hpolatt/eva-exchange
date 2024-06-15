const express = require('express');
const PortfolioController = require('../controllers/portfolioController');
const router = express.Router();

router.post('/create', PortfolioController.createPortfolio);
// Define other routes for portfolios if needed

module.exports = router;
