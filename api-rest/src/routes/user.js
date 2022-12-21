import { Router } from 'express'
import UserController from '../controllers/User'

import login from '../middlewares/login'

const router = new Router()

router.get('/', UserController.index)
router.get('/:id', UserController.show)

router.post('/', UserController.create)
router.put('/', login, UserController.update)
router.delete('/', login, UserController.delete)

export default router
