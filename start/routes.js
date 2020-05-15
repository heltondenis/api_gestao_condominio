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
Route.delete('/apartaments/:id', 'ApartamentController.destroy')
Route.put('/apartaments/:id', 'ApartamentController.update')

/** Residents */
Route.get('/residents/:id', 'ResidentController.index')
Route.get('/residents/people/:id', 'ResidentController.show')
Route.put('/residents/people/:id', 'ResidentController.update')
Route.post('/residents', 'ResidentController.create')
Route.delete('/residents/:id', 'ResidentController.destroy')



