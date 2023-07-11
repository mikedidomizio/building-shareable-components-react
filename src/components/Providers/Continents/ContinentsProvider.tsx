import * as React from "react";

export const ContinentsContext = React.createContext<any>(undefined);

export function ContinentsProvider({
  children,
  value: initialValue
}: {
  children: React.ReactNode;
  value: any;
}) {
  const [state, setState] = React.useState(initialValue);

  return (
    <ContinentsContext.Provider
      value={{
        state,
        setState
      }}
    >
      {children}
    </ContinentsContext.Provider>
  );
}
