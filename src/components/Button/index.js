import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  width: 113px;
  height: 55px;
  background: #D53B47;
  border-radius: 16px;
  font-family: 'Varela';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  color: #FFFFFF;
`;

function Button({ onClick }) {
  const handleClick = () => {
    onClick();
  };

  return <ButtonContainer onClick={handleClick}>Buscar</ButtonContainer>;
}

export default Button;
