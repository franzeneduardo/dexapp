import React from 'react';
import GlobalStyle from './styles/globalStyle';
import SharedHeader from './components/SharedHeader';
import Input from './components/Input';

function App() {
  return (
    <>
      <GlobalStyle />
      <SharedHeader />
      <Input label="Buscar" type="text" placeholder="Enter your search query" />
    </>
  );
}

export default App;
