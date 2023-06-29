const country = require("./00-country.json");

exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE country RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("country").insert(country);
    });
};
