import React from 'react';
import styled from 'styled-components';
import Input from '../Input';
import Button from '../Button';

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledInput = styled(Input)`
  margin-right: 10px;
`;

function SearchBar() {
  return (
    <SearchBarContainer>
      <StyledInput label="Buscar" type="text" placeholder="Enter your search query" />
      <Button />
    </SearchBarContainer>
  );
}

export default SearchBar;
