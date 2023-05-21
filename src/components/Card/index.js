import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getPokemonDetails } from '../../api/api';

const CardContainer = styled.div`
  width: 150px;
  height: 150px;
  background: #403D3D;
  border-radius: 16px;
  margin: 1%;
`;

const PokemonImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`;

const PokemonName = styled.p`
  color: #FFFFFF;
  font-size: 14px;
`;

function Card() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    // Fetch the details of a specific Pokemon (e.g., Pikachu with ID 25)
    getPokemonDetails(25)
      .then(data => {
        setPokemon(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <CardContainer>
      {pokemon && (
        <>
          <PokemonImage src={pokemon.sprites.front_default} alt={pokemon.name} />
          <PokemonName>{pokemon.name}</PokemonName>
        </>
      )}
    </CardContainer>
  );
}

export default Card;
