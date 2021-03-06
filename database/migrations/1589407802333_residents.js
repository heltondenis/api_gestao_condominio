'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class Residents extends Schema {
  up () {
    this.create('residents', (table) => {
      table.increments()
      table
      .integer('apartament_id')
      .unsigned()
      .references('id')
      .inTable('apartaments')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.string('full_name').notNullable()
      table.date('date').notNullable()
      table.string('cpf').notNullable()
      table.string('fone').notNullable()
      table.string('email').notNullable()
      table.boolean('admin_status').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('residents')
  }
}

module.exports = Residents
