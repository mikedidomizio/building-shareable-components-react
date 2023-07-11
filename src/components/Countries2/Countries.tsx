export const Countries = ({ countries }: any) => {
  return (
    <>
      {countries.map((country: any) => {
        return (
          <div className="p-4 border-t-black border-[1px]" key={country.name}>
            <div className="flex gap-2">
              <h4 className="inline">{country.name}</h4>
              {country.emoji}
            </div>
            <div>
              Currencies: {country.currency}
            </div>
          </div>
        );
      })}
    </>
  );
};
