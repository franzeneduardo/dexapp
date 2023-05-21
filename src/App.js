import React from 'react';
import GlobalStyle from './styles/globalStyle';
import SharedHeader from './components/SharedHeader';
import Content from './components/Content';

function App() {
  return (
    <>
      <GlobalStyle />
      <SharedHeader />
      <Content />
    </>
  );
}

export default App;
