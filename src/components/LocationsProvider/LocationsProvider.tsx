import * as React from "react";

type T = any;

export const CountriesContext = React.createContext<T>(undefined);

export function LocationsProvider({
  children,
  value: initialValue
}: {
  children: React.ReactNode;
  value: T;
}) {
  const [state, setState] = React.useState<T>(initialValue);

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

export function useGetContext() {
  const context = React.useContext(CountriesContext);
  if (context === undefined || context === null) {
    throw new Error("Must be used within a CountriesProvider");
  }

  return context;
}
