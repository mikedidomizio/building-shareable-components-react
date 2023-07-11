import { ContinentName } from "../CountriesCommon/ContinentName";
import { Countries } from "./Countries";
import {Header} from "../CountriesCommon/Header";
import {CountriesProvider} from "../Providers/Countries/CountriesProvider";
import {useContinents} from "../Providers/Continents/useContinents";

export const Continents = () => {
  const continents = useContinents()

  return continents.map((continent: any) => {
    return <div className="border-black border-[1px]">
        <Header>
          <div className="flex flex-row gap-2 items-center p-3 text-white">
            <ContinentName>{continent.name}</ContinentName>
          </div>
        </Header>
        <CountriesProvider value={continent.countries}>
          <Countries />
        </CountriesProvider>
      </div>
  });
};
