const express = require('express');
const router = express.Router();
const BuyTradeController = require('../controllers/BuyTradeController');
const SellTradeController = require('../controllers/sellTradeController');

router.post('/buy', BuyTradeController.buy);
router.post('/sell', SellTradeController.sell);
// Define other routes for trades if needed

module.exports = router;
