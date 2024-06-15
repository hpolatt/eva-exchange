const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');

const shareRoutes = require('./shareRoutes');
const portfolioRoutes = require('./portfolioRoutes');
const tradeRoutes = require('./tradeRoutes');

router.use('/shares', shareRoutes);
router.use('/portfolios', portfolioRoutes);
router.use('/trades', tradeRoutes);
router.use('/users', userRoutes);

module.exports = router;
