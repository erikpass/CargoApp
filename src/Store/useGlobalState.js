import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SHIPMENTS": {
      return {
        ...state,
        data: action.payload,
      };
    }
    case "SET_FILTER": {
      return {
        ...state,
        filter: action.payload,
      };
    }
    case "TOGGLE_MENU": {
      return {
        ...state,
        menu: !state.menu,
      };
    }
    default:
      return state;
  }
};

const useGlobalState = () => {
  const [globalState, globalDispatch] = useReducer(reducer, {
    data: [],
    filter: "",
    menu: false,
  });
  return { globalState, globalDispatch };
};

export default useGlobalState;
