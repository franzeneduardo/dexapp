import React from 'react';
import styled from 'styled-components';
import Card from '../Card';

const CardContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  border: 1px solid red;
`;

function CardContent() {
  return (
    <CardContentContainer>
      <Card />
    </CardContentContainer>
  );
}

export default CardContent;
