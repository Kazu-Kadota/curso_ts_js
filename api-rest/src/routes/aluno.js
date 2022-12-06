import { Router } from 'express'
import AlunoController from '../controllers/Aluno'

import login from '../middlewares/login'

const router = new Router()

router.get('/', AlunoController.index)
router.post('/', login, AlunoController.create)
router.put('/:id', login, AlunoController.update)
router.get('/:id', AlunoController.show)
router.delete('/:id', login, AlunoController.delete)

export default router
