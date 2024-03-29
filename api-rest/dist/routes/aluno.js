"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _Aluno = require('../controllers/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);

var _login = require('../middlewares/login'); var _login2 = _interopRequireDefault(_login);

const router = new (0, _express.Router)()

router.get('/', _Aluno2.default.index)
router.post('/', _login2.default, _Aluno2.default.create)
router.put('/:id', _login2.default, _Aluno2.default.update)
router.get('/:id', _Aluno2.default.show)
router.delete('/:id', _login2.default, _Aluno2.default.delete)

exports. default = router
