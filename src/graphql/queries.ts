import { gql } from '@apollo/client';

export const SEARCH_CHARACTERS = gql`
  query SearchCharacters($searchTerm: String!, $specie: String!) {
    searchResults: characters(filter: { name: $searchTerm, species: $specie }) {
      results {
        name
        id
        image,
        species
      }
    }
  }
`;

export const DETAIL_CHARACTER = gql`
  query SearchCharacter($characterId: ID!) {
    character(id: $characterId) {
      id
      name
      status
      species
      type
      gender
      image
    }
  }
`;