import "../index.css"
import "../styles.css";

import { Locations } from "../components/Countries/Locations";
import { Locations as CountriesCurrency } from "../components/CountriesCurrency/Locations";

export default function Home() {
  return (
    <div className="flex gap-10">
      <div>
        <Locations />
      </div>

      <div>
        <CountriesCurrency />
      </div>
    </div>
  );
}
