import React from 'react';
import styled from 'styled-components';
import logoPokemon from '../../assets/logoPokemon.png'; // Adjust the import path based on your project structure

const HeaderContainer = styled.div`
  width: 100%;
  height: 96px;
  background-color: #D53B47;
  border-radius: 0px 0px 16px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoImage = styled.img`
  width: 150px;
`;

function SharedHeader() {
  return (
    <HeaderContainer>
      <LogoImage src={logoPokemon} alt="Logo" />
    </HeaderContainer>
  );
}

export default SharedHeader;
