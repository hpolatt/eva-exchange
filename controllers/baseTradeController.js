const { user, share, portfolio } = require('../models');

class BaseTradeController {
  static async getUserWithPortfolio(userId) {
    const selectedUser = await user.findOne({where : {id: userId}});
    if (!selectedUser) throw new Error('User not found');
    return selectedUser;
  }

  static async getRegisteredShare(symbol, isTrade = true) {
    const selectedShare = await share.findOne({
      where: { symbol },
      order: [['sharedate', 'DESC']],
      limit: 1
    });
    if (!selectedShare && isTrade) throw new Error('Share not registered');
    return selectedShare;
  }

  static async getPortfolio(userId, portfolioId) {
    const userPortfolio = await portfolio.findOne({ where: { userId, id: portfolioId } });
    if (!userPortfolio) throw new Error('Portfolio not found');
    return userPortfolio;
  }
}

module.exports = BaseTradeController;
