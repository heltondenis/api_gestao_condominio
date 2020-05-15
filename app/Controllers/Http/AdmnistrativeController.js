'use strict'

const Resident = use("App/Models/Resident")
const Database = use('Database')

class AdmnistrativeController {

  /**
   * Check administrative resident.
   * PUT or PATCH residents/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async verifyCheck ({ params, request, response }) {
    const { data, admin_status } = request.body;
    const { id } = request.params;

    const residentHaveStatusAdmin = await Database
      .table('residents')
      .where('admin_status', 1)

      const IDresidentHaveStatusAdmin = residentHaveStatusAdmin.map(function(e) { return e.id; } );

      await Database
      .table('residents')
      .where('id', id)
      .update({admin_status: 1})

      if(residentHaveStatusAdmin.length > 1) {
        return response.status(400).json({error: 'Há mais de um administrador cadastrado'})
      } else {

        try {
          await Database
          .table('residents')
          .where('id', IDresidentHaveStatusAdmin)
          .update({admin_status: 0})

          await Database
          .table('residents')
          .where('id', id)
          .update({admin_status: 1})

          return response.status(200).send();
        } catch (error) {
          return response.status(400).send();
        }

      }

    return residentHaveStatusAdmin;
  }
}

module.exports = AdmnistrativeController
