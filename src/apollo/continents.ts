import { gql } from "@apollo/client";

export const GET_CONTINENTS_BY_CODE = gql`
  query Continents($filter: ContinentFilterInput) {
    continents(filter: $filter) {
      code
      name
      countries {
        name
        capital
        emoji
        emojiU
        currency
        languages {
          name
        }
      }
    }
  }
`;

