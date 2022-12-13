import React from "react"

import { Paragrafo, Title } from "./styled"
import { Container } from "../../styles/global-styles"

export default function Login() {
  return (
    <Container>
      <Title isRed = {false}>
        Login
        <small>Oie</small>
      </Title>
      <Paragrafo>Lorem</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  )
}
