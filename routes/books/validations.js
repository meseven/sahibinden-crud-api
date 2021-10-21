const Joi = require('joi');

const schema = Joi.object({
  title: Joi.string().min(4).max(20).required(),
  description: Joi.string(),
  year: Joi.number().integer().min(1500).max(2022),
});

module.exports = schema;
