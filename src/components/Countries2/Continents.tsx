import { useGetContext } from "../LocationsProvider/LocationsProvider";
import { ContinentName } from "../CommonCountries/ContinentName";
import { Countries } from "./Countries";
import {Header} from "../CommonCountries/Header";

export const Continents = () => {
  const { state } = useGetContext();

  return state.continents.map((continent: any) => {
    return <div className="border-black border-[1px]">
        <Header>
          <div className="flex flex-row gap-2 items-center p-3 text-white">
            <ContinentName>{continent.name}</ContinentName>
          </div>
        </Header>
        <Countries countries={continent.countries} />
      </div>
  });
};
