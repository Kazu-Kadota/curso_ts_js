"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _User = require('../controllers/User'); var _User2 = _interopRequireDefault(_User);

var _login = require('../middlewares/login'); var _login2 = _interopRequireDefault(_login);

const router = new (0, _express.Router)()

router.get('/', _User2.default.index)
router.get('/:id', _User2.default.show)

router.post('/', _User2.default.create)
router.put('/', _login2.default, _User2.default.update)
router.delete('/', _login2.default, _User2.default.delete)

exports. default = router
