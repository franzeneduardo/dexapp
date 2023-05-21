import React from 'react';
import styled from 'styled-components';
import Input from '../Input';
import CardContent from '../CardContent';

const ContentContainer = styled.div`
  margin: 5% 10%;
`;

function Content() {
  return (
    <ContentContainer>
      <Input label="Buscar" type="text" placeholder="Enter your search query" />
      <CardContent />
    </ContentContainer>
  );
}

export default Content;
