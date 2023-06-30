const knex = require("../db/connection");
//Query 1
function listAuthorsAndBooks() {
  return knex("bookdetails as bd").join("book as b","bd.book_id","b.id").rightOuterJoin("author as a","b.author_id","a.id").join("country as c","a.country_id","c.id").select("a.id","a.first_name","a.last_name","c.name","b.title","b.isbn","bd.price","bd.discount","bd.is_hard_copy").orderBy("a.last_name","a.first_name")
}
//Query 2
function listAuthorsByCountryCode() {
  return knex("author as a")
    .join("country as c", "a.country_id", "c.id")
    .select("a.id", "a.first_name", "a.last_name", "c.name")
    .where({ "c.code": "USA" });
}
//Query 3
function listAuthorsByNumberOfBooks() {
  return knex("book as b")
    .innerJoin("author as a", "b.author_id", "a.id")
    .join("country as c", "a.country_id", "c.id")
    .select("a.id", "a.first_name", "a.last_name", "c.name").groupBy("a.id","c.id")
    .count()
    .orderBy("count", "desc");
}
//Query 4
function countBooksFromUSAAuthors() {
  return knex("book as b")
    .join("author as a", "b.author_id", "a.id")
    .join("country as c", "a.country_id", "c.id")
    .where({ "c.code": "USA" })
    .count("b.id")
    .first();
}
//Query 5
function listBooks20Discount30() {
  return knex("bookdetails as bd")
    .join("book as b", "bd.book_id", "b.id")
    .select("b.title", "b.isbn", "bd.discount", "bd.price")
    .whereNot("bd.discount", "<", 20.0)
    .whereNot("bd.discount", ">", 30.0)
    .orderBy("bd.price", "asc");
}
//Query 6
function listCheapestBookPerAuthor() {
    return knex("author as a").select("a.first_name","a.last_name").leftOuterJoin('book as b','a.id','b.author_id').leftOuterJoin("bookdetails as bd","b.id","bd.book_id").min("bd.price as lowest_price").groupBy('a.first_name','a.last_name').orderBy('a.last_name')
}

module.exports = {
  listAuthorsAndBooks,
  listAuthorsByCountryCode,
  listAuthorsByNumberOfBooks,
  countBooksFromUSAAuthors,
  listBooks20Discount30,
  listCheapestBookPerAuthor,
};
