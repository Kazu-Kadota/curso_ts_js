import app from './src/app'

const port = 3001

console.log(typeof app)

app?.listen(port, () => {
  console.log()
  console.log(`Escutando na porta ${port}`)
  console.log(`CTRL + Clique em http://localhost:${port}`)
})
