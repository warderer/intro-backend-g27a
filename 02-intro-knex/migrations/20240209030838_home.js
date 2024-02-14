/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex, promise) {
  return knex.schema.hasTable('homes').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('homes', function(table) {
        table.increments('house_id').primary();
        table.string('title');
        table.text('description');
        table.integer('guests');
        table.string('address');
        table.decimal('rental_price', 12, 2);
        table.boolean('active').notNullable().defaultTo(true);
        table.timestamp('created_at').defaultTo(knex.fn.now());
      })
    }   
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.hasTable('homes').then(function(exists) {
    if (exists) {
      return knex.schema.dropTable('homes');
    }
  })
};
