import {useCountries} from "../Providers/Countries/useCountries";

export const NumberOfCountries = () => {
  const { countries } = useCountries()

  return <div className="bg-white inline rounded-full p-2 pt-1 pb-1">{countries.length}</div>
}
