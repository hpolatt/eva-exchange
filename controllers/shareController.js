const { Validator } = require('jsonschema');
const { share } = require('../models');
const schema = require('../schemas/shareSchema.json');

class ShareController {
  static async createShare(req, res) {
    try {
      const schemaValidator = new Validator();
      schemaValidator.validate(req.body, schema, { throwError: true });

      const createdShare = await share.create(req.body);
      res.json(createdShare);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

module.exports = ShareController;
