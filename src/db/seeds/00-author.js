const author = require("./00-author.json");

exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE author RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("author").insert(author);
    });
};
