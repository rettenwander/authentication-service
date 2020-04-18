/**
 * @author Niklas Rettenwander
*/

// eslint-disable-next-line no-unused-vars
const Knex = require('knex');
const tableNames = require('../../src/constants/tableNames');


function references(table, tableName, notNullable = true) {
  const definition = table
    .integer(`${tableName}_id`)
    .unsigned()
    .references('id')
    .inTable(tableName)
    .onDelete('cascade');

  if (notNullable) {
    definition.notNullable();
  }
}


/**
 * @param {Knex} knex
*/
exports.up = async (knex) => {
  await knex.schema.createTable(tableNames.country, (table) => {
    table.increments().notNullable();
    table.string('name').notNullable().unique();
    table.string('language', 2);
  });

  await knex.schema.createTable(tableNames.user, (table) => {
    table.increments().notNullable();
    table.string('user_id', 60).unique().notNullable();
    table.string('username', 10).unique().notNullable();
    table.string('email', 254).unique().notNullable();
    table.string('password', 127).notNullable();
    table.dateTime('last_login');
    table.string('language');
    references(table, tableNames.country);
  });

  await knex.schema.createTable(tableNames.role, (table) => {
    table.increments().notNullable();
    table.string('name').notNullable().unique();
  });

  await knex.schema.createTable(tableNames.userRole, (table) => {
    references(table, tableNames.user);
    references(table, tableNames.role);
  });
};

/**
 * @param {Knex} knex
*/
exports.down = async (knex) => {
  await knex.schema.dropTable(tableNames.userRole);
  await knex.schema.dropTable(tableNames.role);
  await knex.schema.dropTable(tableNames.user);
  await knex.schema.dropTable(tableNames.country);
};
