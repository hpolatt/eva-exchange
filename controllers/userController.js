const { user } = require('../models');
const schema = require('../schemas/userSchema.json');
const { Validator } = require("jsonschema")

class UserController {
  static async createUser(req, res) {
    try {
      const schemaValidator = new Validator();
      schemaValidator.validate(req.body, schema, { throwError: true });

      const createdUser = await user.create(req.body);
      res.json(createdUser);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async getAllUsers(req, res) {
    try {
      const users = await user.findAll();
      res.json(users);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Add more methods as needed for user-related operations
}

module.exports = UserController;
