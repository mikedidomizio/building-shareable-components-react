import { Languages } from "./Languages";
import {useRemoveCountry} from "./useRemoveCountry";

export const Countries = ({ countries }: any) => {
  const removeCountry = useRemoveCountry()

  return (
    <>
      {countries.map((country: any) => {
        return (
          <div className="p-4 border-t-black border-[1px]" key={country.name}>
            <button
              onClick={() => removeCountry(country.name)}
              className="bg-red-500 text-white rounded-full inline p-1 float-right pt-0 pb-0">X</button>

            <div>
              Country: <h4 className="mt-0 inline">{country.name}</h4>
            </div>
            <div>
              Capital: <h4 className="mt-0 inline">{country.capital}</h4>
            </div>
            <br />
            Languages: <Languages languages={country.languages} />
          </div>
        );
      })}
    </>
  );
};
