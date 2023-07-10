import { useQuery } from "@apollo/client";
import {GET_CONTINENTS_BY_CODE} from "../../apollo/continents";

import { LocationsProvider } from "../LocationsProvider/LocationsProvider";
import { Continents } from "./Continents";

export const Locations = () => {
  const { loading, error, data } = useQuery(GET_CONTINENTS_BY_CODE, {
    variables: {
      "filter": {
        "code": {
          "eq": "NA"
        }
      }
    }
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <LocationsProvider value={data}>
      List of continents and countries/languages/currencies
      <Continents />
    </LocationsProvider>
  );
};
