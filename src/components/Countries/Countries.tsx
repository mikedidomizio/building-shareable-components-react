import { Languages } from "./Languages";

export const Countries = ({ countries }: any) => {
  return (
    <>
      {countries.map((country: any) => {
        return (
          <div className="p-4 border-t-black border-[1px]" key={country.name}>
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
