/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.hasTable('homes').then(function (exists) {
    if (exists) {
      return knex.schema.hasColumn('fk_user').then(function (exists) {
        if (!exists) {
          return knex.schema.table('homes', function (table) {
            table.integer('fk_user').unsigned().references('users.user_id')
          })
        }
      })
    }
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.hasTable('homes').then(function (exists) {
        if (exists){
          return knex.schema.table('homes', function (table) {
            table.dropColumn('fk_user')
          })
        }
  })
}