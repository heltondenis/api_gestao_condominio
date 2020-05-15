'use strict'

const Database = use('Database')
const Resident = use("App/Models/Resident")

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with residents
 */
class ResidentController {
  /**
   * Show a list of all residents.
   * GET residents
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const resident_id = request.params.id;
     const residents = await Database.select('*')
     .from('residents')
     .where('resident_id', resident_id)

     return response.status(200).json({ data: residents });
  }

  /**
   * Render a form to be used for creating a new resident.
   * GET residents/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {

    const {id, full_name, cpf, fone, date, email } = request.body;
      try {
        const residents = await Database
        .table('residents')
        .where('id', id)
        .insert({resident_id: id, full_name: full_name, cpf: cpf,
          fone: fone, date: date, email: email})

        return response.status(200).json('Residente cadastrado com sucesso');
      } catch (error) {
        return response.status(400).json({ error: "Ops! Verifique se você já não cadastrou esse morador." });
      }
  }

  /**
   * Create/save a new resident.
   * POST residents
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single resident.
   * GET residents/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const {id} = request.params;

    try {
      const data = await Database
      .table('residents')
      .where('id', id)
      .first()

      if(!data) {
        return response.status(400).send();
      }

      return response.status(200).json({ data: data });

    } catch (error) {
      return response.status(400).json({ error: "Não encontramos a sua busca." });
    }
  }

  /**
   * Render a form to update an existing resident.
   * GET residents/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update resident details.
   * PUT or PATCH residents/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const { id } = request.params;
    const { full_name, cpf, fone, date, email } = request.body;

       const z = await Database
         .table('residents')
         .where('id', id)
         .update({full_name: full_name,
                 cpf: cpf, fone: fone,
                 date: date,
                 email: email
         });

         return response.status(200).send();
  }

  /**
   * Delete a resident with id.
   * DELETE residents/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const { id } = request.params;

    try {
      const data = await Database
      .table('residents')
      .where('id', id)
      .delete()

      return response.status(204).send();
    } catch (error) {
      return response.status(400).json({ error: "Houve algum problema na exclusão." });
    }
  }
}


module.exports = ResidentController
