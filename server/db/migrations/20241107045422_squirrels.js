/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    return knex.schema.createTable('squirrels', (table) => {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.string('class').notNullable()
        table.string('catch_phrase')
        table.text('bio')
    })
  }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
    return knex.schema.dropTable('squirrels')
  }
