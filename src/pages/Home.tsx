import "../index.css"
import "../styles.css";

import { Locations } from "../components/Countries/Locations";
import { Locations as Locations2 } from "../components/Countries2/Locations";

export default function Home() {
  return (
    <div className="flex gap-10">
      <div>
        <Locations />
      </div>

      <div>
        <Locations2 />
      </div>

    </div>
  );
}
