const bookDetails = require("./00-bookdetails.json");

exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE bookdetails RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("bookdetails").insert(bookDetails);
    });
};
