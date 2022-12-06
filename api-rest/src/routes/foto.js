import { Router } from 'express'

import login from '../middlewares/login'
import FotoController from '../controllers/Foto'

const router = new Router()

router.post('/', login, FotoController.store)

export default router
