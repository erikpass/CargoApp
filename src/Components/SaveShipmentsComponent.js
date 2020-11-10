import { useContext } from "react";
import Context from "./../Store/context";

export default function LoadShipmentsComponent() {
  const { globalState } = useContext(Context);

  //save state data into local storage
  const saveData = () => {
    localStorage.setItem("shipments", JSON.stringify(globalState.data));
  };

  return (
    <button
      className="savebutton"
      onClick={() => {
        saveData();
      }}
    >
      Save
    </button>
  );
}
