import useGlobalState from "./useGlobalState";
import Context from "./context";

export default function GlobalStateProvider({ children }) {
  return (
    <Context.Provider value={useGlobalState()}>{children}</Context.Provider>
  );
}
