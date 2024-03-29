import React from 'react'
import { Link } from 'react-router-dom'
import { get } from 'lodash'
import { FaUserCircle, FaEdit, FaWindowClose, FaExclamation } from 'react-icons/fa'
import { toast } from 'react-toastify'

import { AlunoContainer, NovoAluno, ProfilePicture } from './styled'
import { Container } from '../../styles/global-styles'
import axios from '../../services/axios'
import Loading from '../../components/loading'

export default function Alunos() {
  const [alunos, setAlunos] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(false)

  React.useEffect(() => {
    async function getData() {
      setIsLoading(true)
      const response = await axios.get('/alunos')
      setAlunos(response.data)
      setIsLoading(false)
    }

    getData()
  }, [])

  const handleDeleteAsk = e => {
    e.preventDefault()
    const exclamation = e.currentTarget.nextSibling
    exclamation.setAttribute('display', 'block')
    e.currentTarget.remove()
  }

  const handleDelete = async (e, id, index) => {
    e.persist()

    try {
      setIsLoading(true)

      await axios.delete(`/alunos/${id}`)

      const novosAlunos = [...alunos]
      novosAlunos.splice(index, 1)

      toast.success('Aluno excluído com sucesso')

      setAlunos(novosAlunos)
      setIsLoading(false)
    } catch(error) {
      setIsLoading(false)
      const status = get(error, 'response.status', [])

      if(status === 401) {
        toast.error('Você precisa fazer login')
        return
      } else {
        toast.error('Ocorreu um erro ao excluir aluno')
      }
    }
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Alunos</h1>

      <NovoAluno to="/aluno/">Novo aluno</NovoAluno>

      <AlunoContainer>
        {alunos.map((aluno, index) => (
          <div key={String(aluno.id)}>
            <ProfilePicture>
              {get(aluno, 'Fotos[0].url', false) ? (
                <img crossOrigin='anonymous' src={aluno.Fotos[0].url} alt='' />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>

            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>

            <Link to={`/aluno/${aluno.id}/edit`}>
              <FaEdit size={16}/>
            </Link>

            <Link onClick={handleDeleteAsk} to={`/aluno/${aluno.id}/delete`}>
              <FaWindowClose size={16}/>
            </Link>

            <FaExclamation
              size={16}
              display="none"
              cursor="pointer"
              onClick={e => handleDelete(e, aluno.id, index)}
            />
          </div>
        ))}
      </AlunoContainer>
    </Container>
  )
}
