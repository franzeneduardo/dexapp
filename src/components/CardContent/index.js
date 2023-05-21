import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../Card';
import { getAllPokemonIds } from '../../api/api';

const CardContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  height: auto;
  border: 1px solid red;
`;

function CardContent() {
  const [pokemonIds, setPokemonIds] = useState([]);

  useEffect(() => {
    // Fetch all Pokémon IDs
    getAllPokemonIds()
      .then(ids => {
        setPokemonIds(ids);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <CardContentContainer>
      {pokemonIds.map(pokemonId => (
        <Card key={pokemonId} pokemonId={pokemonId} />
      ))}
    </CardContentContainer>
  );
}

export default CardContent;
