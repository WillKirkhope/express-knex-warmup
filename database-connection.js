const CONFIG = require('./knexfile')[process.env.NODE_ENV || 'development']
//in the knex file object, give me the process.env port or! development

module.exports = require('knex')(CONFIG)
