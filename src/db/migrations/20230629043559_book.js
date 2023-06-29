/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("Book", (table) => {
        table.increments("id").primary();
table.string('title',225).notNullable();
table.bigInteger('isbn',13).notNullable();
table.integer("author_id").unsigned().nullable();
table.foreign("author_id").references("Author.id").onDelete('CASCADE');
table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("Book");
};
