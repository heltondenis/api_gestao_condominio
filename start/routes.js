'use strict'

const Route = use('Route')
const Database = use('Database')

/** Login and Authentication */
Route.post('/users', 'UserController.create')
Route.post('/sessions', 'SessionController.create')

/** Apartaments */
Route.get('/apartaments', 'ApartamentController.index')
Route.get('/apartaments/:number', 'ApartamentController.show')
Route.post('/apartaments', 'ApartamentController.create')

/** Residents */
Route.get('/residents/:id', 'ResidentController.index')
Route.post('/residents', 'ResidentController.create')



