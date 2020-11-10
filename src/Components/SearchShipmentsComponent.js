import { useContext } from "react";
import Context from "./../Store/context";

export default function SearchShipmentsComponent() {
  const { globalDispatch } = useContext(Context);

  return (
    <input
      key={"filterInput"}
      placeholder="Search"
      spellCheck={false}
      onChange={(e) =>
        globalDispatch({ type: "SET_FILTER", payload: e.target.value })
      }
    ></input>
  );
}
