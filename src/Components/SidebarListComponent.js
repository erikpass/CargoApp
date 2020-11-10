import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Context from "./../Store/context";

export default function SidebarComponent() {
  const { globalState, globalDispatch } = useContext(Context);
  const companies = globalState.data || [];
  const [selection, setSelection] = useState("");

  //load data from localstorage
  useEffect(() => {
    if (localStorage.getItem("shipments")) {
      //console.log(localStorage.getItem("shipments"));
      globalDispatch({
        type: "SET_SHIPMENTS",
        payload: JSON.parse(localStorage.getItem("shipments")),
      });
    }
  }, []);

  const Data = () => {
    if (localStorage.getItem("shipments")) {
      return results;
    } else {
      return (
        <div>
          <p>No Companies found, click 'Load' to load list from network.</p>
        </div>
      );
    }
  };

  const results = companies.map((company) => {
    let companyName = company.name.toLowerCase();
    let longName = false;
    let selected = false;
    if (globalState.filter !== "") {
      if (!companyName.includes(globalState.filter.toLowerCase())) {
        return;
      }
    }
    if (company.name.length > 25) {
      longName = true;
    }
    if (company.name === selection) {
      selected = true;
    }

    const getClassName = () => {
      let className = "";
      if (longName) {
        className += "long";
      }
      if (selected) {
        className += " selected";
      }
      return className;
    };

    return (
      <Link
        to={`/${company.name}`}
        key={company.id}
        className={getClassName()}
        onClick={(e) => setSelection(e.target.innerText)}
      >
        {company.name}
      </Link>
    );
  });

  return (
    <div
      className={globalState.menu ? "sidebar open" : "sidebar"}
      key={"sidebar"}
    >
      <Data />
    </div>
  );
}
