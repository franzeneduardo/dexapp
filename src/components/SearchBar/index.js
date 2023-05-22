import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../Input';
import Button from '../Button';
import { searchPokemon } from '../../api/api';

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledInput = styled(Input)`
  margin-right: 10px;
`;

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (value) => {
    setSearchQuery(value);
  };

  const handleSearchClick = async () => {
    try {
      const pokemon = await searchPokemon(searchQuery);
      alert(`Pokémon found: ${pokemon.name}`);
    } catch (error) {
      alert('Pokémon not found!');
    }
  };

  return (
    <SearchBarContainer>
      <StyledInput
        label="Buscar"
        type="text"
        placeholder="Type here and find a Pokemon!"
        value={searchQuery}
        onInputChange={handleInputChange}
      />
      <Button onClick={handleSearchClick} />
    </SearchBarContainer>
  );
}

export default SearchBar;
