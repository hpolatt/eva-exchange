const { portfolio } = require('../models');
const schema = require('../schemas/portfolioSchema.json');
const { Validator } = require('jsonschema');

class PortfolioController {
  static async createPortfolio(req, res) {
    try {
      const schemaValidator = new Validator();
      schemaValidator.validate(req.body, schema, { throwError: true });

      const createdPortfolio = await portfolio.create(req.body);
      res.json(createdPortfolio);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = PortfolioController;
