const knex = require("../db/connection");

function create(newTitanDef) {
  return knex("titanDefensiveLines").insert(newTitanDef).returning("*");
}

function list() {
  return knex("titanDefensiveLines").select("*");
}

function listTitanDef(titanDef_id) {
 // if (titanDef_id) {
    return knex("titanDefensiveLines").select("*").where({ titanDef_id });
 // } else {
 //   return false;
//  }
}

function updateTitanDef(updatedTitanDef) {
  return knex("titanDefensiveLines")
    .select("*")
    .where({ titanDef_id: updatedTitanDef.titanDef_id })
    .update(updatedTitanDef);
}

function deleteTitanDef(titanDef_id) {
  return knex("titanDefensiveLines").where({ titanDef_id }).del();
}

module.exports = {
  create,
  list,
  listTitanDef,
  updateTitanDef,
  deleteTitanDef,
};
