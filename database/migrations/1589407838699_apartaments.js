'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class Apartaments extends Schema {
  up () {
    this.create('apartaments', (table) => {
      table.increments()
      table.string('number', 254).notNullable().unique()
      table.string('block').notNullable()
      table.boolean('leased').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('apartaments')
  }
}

module.exports = Apartaments
