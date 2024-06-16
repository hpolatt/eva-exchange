const { Validator } = require('jsonschema');
const { share } = require('../models');
const schema = require('../schemas/shareSchema.json');
const BaseTradeController = require('./baseTradeController');

class ShareController {
  static async createShare(req, res) {
    try {
      const schemaValidator = new Validator();
      schemaValidator.validate(req.body, schema, { throwError: true });
      const lastShare = await BaseTradeController.getRegisteredShare(req.body.symbol, false);
      req.body.sharedate = new Date();
      if (req.body.sharedate - new Date(lastShare?.sharedate ?? 0) < 1 * 60* 60 * 1000) { // 1 hour
        throw new Error(`Share already registered in the last hour. Your last share record: ${lastShare?.sharedate.toISOString()}`);
      }
      const createdShare = await share.create(req.body);
      res.json(createdShare);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = ShareController;