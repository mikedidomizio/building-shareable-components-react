import { useGetContext } from "../LocationsProvider/LocationsProvider";
import { ContinentName } from "./ContinentName";
import { Countries } from "./Countries";
import {NumberOfCountries} from "./NumberOfCountries";
import {Header} from "./Header";

export const Continents = () => {
  const { state } = useGetContext();

  return state.continents.map((continent: any) => {
    return <div className="border-black border-[1px]">
        <Header>
          <div className="flex flex-row gap-2 items-center p-3">
            <ContinentName continentName={continent.name} />
            <NumberOfCountries>{continent.countries.length}</NumberOfCountries>
          </div>
        </Header>
        <Countries countries={continent.countries} />
      </div>
  });
};
