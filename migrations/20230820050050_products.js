/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    
    return knex.schema.createTable('products',   (table) => {
        table.increments('id_product').primary();
        table.integer('SKU').notNullable();
        table.string('name_product').notNullable();
        table.string('description').notNullable();
        table.boolean('active').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
