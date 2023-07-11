import * as React from "react";
import {CountriesContext} from "../LocationsProvider/LocationsProvider";

export const useCountries = () => {
  const context = React.useContext(CountriesContext);
  if (context === undefined || context === null) {
    throw new Error("Must be used within a CountriesProvider");
  }

  const removeCountry = (countryName: string) => {
    context.setState((state: any) => {
      // this really only works because we added filtering to our query and have one continent
      // for demo purposes it shouldn't really matter
      const newCountryList = state.continents[0].countries.filter((country: any) => {
        return country.name !== countryName
      })

      return {
        ...state,
        continents: [{
          ...state.continents[0],
          countries: newCountryList
        }],
      }
    })
  }

  return {
    countries: context.state.continents[0].countries,
    removeCountry,
  }
}
