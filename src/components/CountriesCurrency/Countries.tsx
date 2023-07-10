import { Languages } from "./Languages";
import {Currencies} from "./Currencies";

export const Countries = ({ countries }: any) => {
  return (
    <>
      {countries.map((country: any) => {
        return (
          <p style={{ border: "1px solid #888" }} key={country.capital}>
            <h4  style={{ backgroundColor: '#888', marginTop: '0' }} >{country.capital}</h4>
            <br />
            Languages: <Languages languages={country.languages} />
            <br/>
            U+1F1E6
            Currencies: <Currencies currency={country.currency} />
          </p>
        );
      })}
    </>
  );
};
