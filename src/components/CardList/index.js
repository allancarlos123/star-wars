import React from 'react'

import { Container, Content, CardGrid, Card, CardBody, CardTitle } from './styles.js';

const CardList = ({ characters }) => (
  <Container>
    <Content>
      <CardGrid>
      {characters.map((character, i) => (
        <Card>
          <CardBody>
            <CardTitle>{character.name}</CardTitle>
          </CardBody>
        </Card>
      ))}
      </CardGrid>
    </Content>
  </Container>
)

export default CardList;