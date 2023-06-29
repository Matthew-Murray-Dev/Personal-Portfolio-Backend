const book = require("./00-book.json");

exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE book RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("book").insert(book);
    });
};
