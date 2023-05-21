import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 150px;
  height: 150px;
  background: #403D3D;
  border-radius: 16px;
  margin: 1%;
`;

function Card() {
  return <CardContainer>This is the Card component</CardContainer>;
}

export default Card;
