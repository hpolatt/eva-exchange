const { user, share, portfolio } = require('../models');

class BaseTradeController {
  static async getUserWithPortfolio(userId) {
    const selectedUser = await user.findByPk(userId);
    if (!selectedUser) throw new Error('User not found');
    return selectedUser;
  }

  static async getRegisteredShare(symbol) {
    const selectedShare = await share.findOne({ where: { symbol } });
    if (!selectedShare) throw new Error('Share not registered');
    return selectedShare;
  }

  static async getPortfolio(userId) {
    const userPortfolio = await portfolio.findOne({ where: { userId } });
    if (!userPortfolio) throw new Error('Portfolio not found');
    return userPortfolio;
  }
}

module.exports = BaseTradeController;
