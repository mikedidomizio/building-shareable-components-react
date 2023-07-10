import { useGetContext } from "../LocationsProvider/LocationsProvider";
import { ContinentName } from "./ContinentName";
import { Countries } from "./Countries";

export const Continents = () => {
  const { state } = useGetContext();

  return state.continents.map((continent: any) => {
    return (
      <table key={continent.name}>
        <tr>
          <td>
            <ContinentName continentName={continent.name} />
          </td>
        </tr>
        <tr>
          <td>
            <Countries countries={continent.countries} />
          </td>
        </tr>
      </table>
    );
  });
};
