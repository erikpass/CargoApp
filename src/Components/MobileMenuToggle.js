import { useState, useContext, useEffect } from "react";
import Context from "./../Store/context";

export default function MobileMenuToggle() {
  const [open, setOpen] = useState(false);
  const { globalDispatch, globalState } = useContext(Context);

  const toggleMenu = () => {
    setOpen(!open);
    globalDispatch({ type: "TOGGLE_MENU" });
  };

  useEffect(() => {
    if (!globalState.menu) {
      setOpen(false);
    }
  }, [globalState]);

  return (
    <div
      className={open ? "menuToggle open" : "menuToggle"}
      onClick={() => toggleMenu()}
    ></div>
  );
}
