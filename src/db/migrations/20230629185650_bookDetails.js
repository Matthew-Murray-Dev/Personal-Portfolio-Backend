/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable("bookdetails", (table) => {
        table.increments("id").primary();
table.decimal('price').notNullable();
table.decimal('discount').notNullable();
table.boolean('is_hard_copy');
table.integer("book_id").unsigned().unique().nullable();
table.foreign("book_id").references("book.id").onDelete('CASCADE');
table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable("bookdetails");
};
