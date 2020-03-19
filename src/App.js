import React from 'react';
import Header from './components/Header';

import GlobalStyle, { Wrapper } from './styles/global';

function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Header />
    </Wrapper>
  );
}

export default App;
