import * as React from "react";
import {CountriesContext} from "./CountriesProvider";

export const useCountries = () => {
  const context = React.useContext(CountriesContext);
  if (context === undefined || context === null) {
    throw new Error("Must be used within a CountriesProvider");
  }

  const removeCountry = (countryName: string) => {
    context.setState((state: any) => {
      // this really only works because we added filtering to our query and have one continent
      // for demo purposes it shouldn't really matter
      return state.filter((country: any) => {
        return country.name !== countryName
      })
    })
  }

  return {
    countries: context.state,
    removeCountry,
  }
}
