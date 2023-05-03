/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("titanDefensiveLines", (table) => {
    table.increments("titanDef_id").primary();
    table.text("defLine", null);
    table.integer("maxPower", null);
    table.text("offLine", null);
    table.text("comments", null);
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("titanDefensiveLines");
};
