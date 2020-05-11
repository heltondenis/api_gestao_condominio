'use strict'

const Route = use('Route')
const Database = use('Database')

/** Login and Authentication */
Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.store')

/** Routes Apartaments */
Route.group(() => {
  Route.get('/apartaments', 'ApartamentController.index')
}).middleware(['auth'])



