const { trade } = require('../models');
const BaseTradeController = require('./baseTradeController');

class BuyTradeController {
  
  static async buy(req, res) {
    const { userId, symbol, quantity, portfolioId } = req.body;
    try {
      const user = await BaseTradeController.getUserWithPortfolio(userId);
      const share = await BaseTradeController.getRegisteredShare(symbol);
      const portfolio = await BaseTradeController.getPortfolio(user.id, portfolioId);

      const buyTrade = await trade.create({
        type: 'BUY',
        shareId: share.id,
        portfolioId: portfolio.id,
        quantity
      });

      res.json(buyTrade);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = BuyTradeController;
