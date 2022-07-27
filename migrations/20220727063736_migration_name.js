/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('user1', table => {
        table.increments('id').primary(),
        table.string('name'),
        table.string('email'),
        table.string('password')
        table.string('age')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('user1')
};
