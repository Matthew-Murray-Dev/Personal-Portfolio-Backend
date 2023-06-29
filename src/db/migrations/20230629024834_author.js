/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("Author", (table) => {
        table.increments("id").primary();
table.string('first_name').notNullable();
table.string('last_name').notNullable();
table.integer("country_id").unsigned().nullable();
table.foreign("country_id").references("Country.id").onDelete('CASCADE');
table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("Author");
};
