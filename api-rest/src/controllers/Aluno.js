import Aluno from '../models/Aluno'
import Foto from '../models/Foto'

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: [
        'id',
        'nome',
        'sobrenome',
        'email',
        'idade',
        'peso',
        'altura'
      ],
      order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
      include: {
        model: Foto,
        attributes: ['url', 'filename']
      }
    })
    res.status(200).json(alunos)
  }

  async create(req, res) {
    try {
      const aluno = await Aluno.create(req.body)

      return res.status(200).json(aluno)
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      })
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID']
        })
      }
      const aluno = await Aluno.findByPk(id, {
        attributes: [
          'id',
          'nome',
          'sobrenome',
          'email',
          'idade',
          'peso',
          'altura'
        ],
        order: [['id', 'DESC'], [Foto, 'id', 'DESC']],
        include: {
          model: Foto,
          attributes: ['url', 'filename']
        }
      })

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe']
        })
      }

      return res.status(200).json(aluno)
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      })
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID']
        })
      }
      const aluno = await Aluno.findByPk(id)

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe']
        })
      }

      const alunoAtualizado = await aluno.update(req.body)

      return res.status(200).json(alunoAtualizado)
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      })
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
          apagado: true
        })
      }
      const aluno = await Aluno.findByPk(id)

      if (!aluno) {
        return res.status(400).json({
          errors: ['Aluno não existe']
        })
      }

      await aluno.destroy()

      return res.status(200).json({
        message: 'Aluno apagado com sucesso'
      })
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message)
      })
    }
  }
}

export default new AlunoController()