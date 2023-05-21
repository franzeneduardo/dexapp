import React from 'react';
import styled from 'styled-components';
import Input from '../Input';

const ContentContainer = styled.div`
  margin: 5% 10%;
`;

function Content() {
  return (
    <ContentContainer>
      <Input label="Buscar" type="text" placeholder="Enter your search query" />
    </ContentContainer>
  );
}

export default Content;
