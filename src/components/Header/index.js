import React from 'react'

import { Container, Content, Logo } from './styles.js';

import logoSrc from '../../logo.svg';

const Header = () => (
  <Container>
    <Content>
      <a href="/">
        <Logo src={logoSrc} alt="logo" />
      </a>
    </Content>
  </Container>
)

export default Header;