import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-family: Varela;
  font-style: normal;
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 10px;
  color: #FFFFFF;
`;

const Input = styled.input`
  height: 55px;
  width: 330px;
  border-radius: 16px;
  background: #FFFFFF;
  mix-blend-mode: normal;
  border: none;
  padding: 10px;
  font-family: Varela;
  font-size: 20px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  text-align: left;
`;

function InputComponent({ label, ...rest }) {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input {...rest} />
    </InputContainer>
  );
}

export default InputComponent;
