import LoadShipments from "./LoadShipmentsComponent";
import SaveShipments from "./SaveShipmentsComponent";
import SearchShipments from "./SearchShipmentsComponent";
import { useContext } from "react";
import Context from "./../Store/context";

export default function SearchBarComponent() {
  const { globalState } = useContext(Context);

  return (
    <div className={globalState.menu ? "searchbar open" : "searchbar"}>
      <h1>Cargo Planner</h1>
      <SearchShipments />
      <LoadShipments />
      <SaveShipments />
    </div>
  );
}
