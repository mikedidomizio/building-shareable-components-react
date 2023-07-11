import * as React from "react";

export const CountriesContext = React.createContext<any>(undefined);

export function CountriesProvider({
                                    children,
                                    value: initialValue
                                  }: {
  children: React.ReactNode;
  value: any;
}) {
  const [state, setState] = React.useState(initialValue);

  return (
    <CountriesContext.Provider
      value={{
        state,
        setState
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}
