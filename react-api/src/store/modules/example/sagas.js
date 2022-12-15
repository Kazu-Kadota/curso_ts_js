import { call, put, all, takeLatest } from '@redux-saga/core/effects'
import { toast } from 'react-toastify'
import * as actions from './actions'
import * as types from '../types'

const req = () => new Promise((resolve) => {
  setTimeout(() => {
    resolve()
  }, 600)
})

function* exampleRequest() {
  try {
    yield call(req)
    yield put(actions.clicaBotaoSuccess())
  } catch {
    toast.error('Deu erro')
    yield put(actions.clicaBotaoFailure())
  }
}

export default all([
  takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)
])
