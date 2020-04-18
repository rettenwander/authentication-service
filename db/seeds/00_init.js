/**
 * @author Niklas Rettenwander
*/

// eslint-disable-next-line no-unused-vars
const Knex = require('knex');
const tableNames = require('../../src/constants/tableNames');
const coutries = require('../data/countries');


/**
 * @param {Knex} knex
*/
exports.seed = async (knex) => {
  await knex(tableNames.country).del();
  await knex(tableNames.country).insert(coutries);

  await knex(tableNames.role).del();
  await knex(tableNames.role).insert([
    { name: 'Admin' },
    { name: 'Moderator' },
    { name: 'Member' },
    { name: 'Everyone' },
  ]);
};
