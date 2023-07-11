import * as React from "react";
import {ContinentsContext} from "./ContinentsProvider";

export const useContinents = () => {
  const context = React.useContext(ContinentsContext);
  if (context === undefined || context === null) {
    throw new Error("Must be used within a ContinentsProvider");
  }

  // todo should it just be state?
  return context.state.continents
}
