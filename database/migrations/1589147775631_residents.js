'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ResidentsSchema extends Schema {
  up () {
    this.create('residents', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('residents')
  }
}

module.exports = ResidentsSchema
