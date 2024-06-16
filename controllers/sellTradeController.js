const { trade } = require('../models');
const BaseTradeController = require('./baseTradeController');

class SellTradeController {
  static async sell(req, res) {
    const { userId, symbol, quantity, portfolioId} = req.body;
    try {
      const user = await BaseTradeController.getUserWithPortfolio(userId);
      const share = await BaseTradeController.getRegisteredShare(symbol);
      const portfolio = await BaseTradeController.getPortfolio(user.id, portfolioId);

      const totalBought = await trade.sum('quantity', {
        where: { type: 'BUY', shareId: share.id, portfolioId: portfolio.id }
      });
      const totalSold = await trade.sum('quantity', {
        where: { type: 'SELL', shareId: share.id, portfolioId: portfolio.id }
      });
      if (totalBought - totalSold < quantity) {
        throw new Error(`Insufficient shares available for sale. You have a maximum of ${totalBought - totalSold} shares that can be sold.`);
      }

      const sellTrade = await trade.create({
        type: 'SELL',
        shareId: share.id,
        portfolioId: portfolio.id,
        quantity
      });

      res.json(sellTrade);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = SellTradeController;
