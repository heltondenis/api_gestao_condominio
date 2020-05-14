'use strict'

const Database = use('Database')
const Apartament = use("App/Models/Apartament")

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with apartaments
 */
class ApartamentController {
  /**
   * Show a list of all apartaments.
   * GET apartaments
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const apartaments = await Apartament.all();

    return apartaments;
  }

  /**
   * Render a form to be used for creating a new apartament.
   * GET apartaments/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
    const {block, number} = request.body;
      try {
        const apartaments = await Database
        .table('apartaments')
        .insert({block: block, number: number })

        return response.status(200).json('Apartamento cadastrado com sucesso');
      } catch (error) {
        return response.status(400).json({ error: "Ops! Verifique se você já não cadastrou esse apartamento." });
      }
  }

  /**
   * Create/save a new apartament.
   * POST apartaments
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single apartament.
   * GET apartaments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const {number} = request.params;

    try {
      const data = await Database
      .table('apartaments')
      .where('number', number)
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
   * Render a form to update an existing apartament.
   * GET apartaments/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update apartament details.
   * PUT or PATCH apartaments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a apartament with id.
   * DELETE apartaments/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const { id } = request.params;

    try {
      const data = await Database
      .table('apartaments')
      .where('id', id)
      .delete()

      return response.status(204).send();
    } catch (error) {
      return response.status(400).json({ error: "Houve algum problema na exclusão." });
    }
  }
}

module.exports = ApartamentController
