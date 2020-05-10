'use strict'

const Route = use('Route')
const Database = use('Database')

Route.post('/users', 'UserController.create')
