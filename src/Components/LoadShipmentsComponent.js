import { useContext } from "react";
import Context from "./../Store/context";
import shipments from "./../JSON/shipments.json";

export default function LoadShipmentsComponent() {
  const { globalDispatch } = useContext(Context);

  //load data from source and update state and local storage
  const getData = () => {
    globalDispatch({ type: "SET_SHIPMENTS", payload: shipments });
    localStorage.setItem("shipments", JSON.stringify(shipments));
  };

  return (
    <button
      className="loadbutton"
      onClick={() => {
        getData();
      }}
    >
      Load
    </button>
  );
}
