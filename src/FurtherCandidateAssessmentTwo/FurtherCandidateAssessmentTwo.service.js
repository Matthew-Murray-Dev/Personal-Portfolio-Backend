const knex = require("../db/connection");

function listAuthorsAndBooks(){
    return knex("author as a").join("country as c","a.country_id","c.id").select("a.*").where({"c.code":"USA"}).count();
}

function listAuthorsByCountryCode(){
    return knex("author as a").join("country as c","a.country_id","c.id").select("a.*").where({"c.code":"USA"}).count();

}

function listAuthorsByNumberOfBooks(){
    return knex("author as a").join("country as c","a.country_id","c.id").select("a.*").where({"c.code":"USA"}).count();
}

function countBooksFromUSAAuthors(){
    return knex("author as a").join("country as c","a.country_id","c.id").select("a.*").where({"c.code":"USA"}).count();
}

function listBooks20Discount30(){
    return knex("author as a").join("country as c","a.country_id","c.id").select("a.*").where({"c.code":"USA"}).count();
}

function listCheapestBookPerAuthor(){
    return knex("author as a").join("country as c","a.country_id","c.id").select("a.*").where({"c.code":"USA"}).count();
}

module.exports = {
    listAuthorsAndBooks,
   listAuthorsByCountryCode,
   listAuthorsByNumberOfBooks,
    countBooksFromUSAAuthors,
    listBooks20Discount30,
    listCheapestBookPerAuthor
  };