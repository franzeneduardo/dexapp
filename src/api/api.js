import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2', // Base URL of the PokeAPI
});

// Example API request to get a list of Pokemon
export const getPokemonList = () => {
  return api.get('/pokemon')
    .then(response => response.data)
    .catch(error => {
      console.error(error);
      throw error;
    });
};

// Example API request to get details of a specific Pokemon
export const getPokemonDetails = (pokemonId) => {
  return api.get(`/pokemon/${pokemonId}`)
    .then(response => response.data)
    .catch(error => {
      console.error(error);
      throw error;
    });
};

export default api;
