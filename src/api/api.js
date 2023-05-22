import axios from 'axios';

const API_BASE_URL = 'https://pokeapi.co/api/v2';

// Function to fetch details of a specific Pokémon by ID
export const getPokemonDetails = async (pokemonId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pokemon/${pokemonId}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch Pokémon details');
  }
};

// Function to fetch all Pokémon IDs
export const getAllPokemonIds = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pokemon?limit=151`);
    const pokemonList = response.data.results;
    const pokemonIds = pokemonList.map((pokemon) => extractPokemonId(pokemon.url));
    return pokemonIds;
  } catch (error) {
    throw new Error('Failed to fetch Pokémon IDs');
  }
};

// Utility function to extract Pokémon ID from the URL
const extractPokemonId = (url) => {
  const urlParts = url.split('/');
  return parseInt(urlParts[urlParts.length - 2]);
};

// Function to search for a Pokémon by name or ID
export const searchPokemon = async (searchQuery) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/pokemon/${searchQuery}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch Pokémon');
  }
};
