const environment = process.env.NODE_ENV || "development";
const config = require("../../knexfile")["development"];
const knex = require("knex")(config);
//config

module.exports = knex;
