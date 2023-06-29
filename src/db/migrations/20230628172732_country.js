/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("country", (table) => {
        table.increments("id").primary();
table.string('name', 255).notNullable();
table.string('code',3).notNullable();
table.timestamps(true, true);
    });
};
//replace with varChar

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("country");
};
