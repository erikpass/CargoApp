import { useEffect, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Context from "./../Store/context";

export default function DetailsComponent() {
  const { globalState, globalDispatch } = useContext(Context);
  const [company, setCompany] = useState({});
  const [bays, setBays] = useState(0);

  const location = useLocation().pathname.slice(1);

  useEffect(() => {
    //console.log("loaded details");
    if (company) {
      getRequiredBays(company.boxes);
    }
    setCompany(globalState.data.find((company) => company.name === location));
  }, []);

  //close menu when selected company changes
  useEffect(() => {
    globalDispatch({ type: "TOGGLE_MENU" });
  }, [location]);

  useEffect(() => {
    //console.log("update");
    if (company) {
      getRequiredBays(company.boxes);
    }
    setCompany(globalState.data.find((company) => company.name === location));
  }, [location, globalState, company]);

  const updateGlobalState = (e) => {
    if (e.key === "Enter") {
      const boxesInput = e.target.value;
      let newCompany = company;
      newCompany.boxes = boxesInput;
      let shipments = globalState.data;
      let companyId = globalState.data.indexOf((x) => x.name === company.name);
      shipments[companyId] = newCompany;

      globalDispatch({ type: "SET_SHIPMENTS", payload: shipments });
    }
  };

  //calculates number of bays required and updates the value
  const getRequiredBays = (boxesString) => {
    if (boxesString === null || boxesString === undefined) return setBays(0);

    const boxesArray = boxesString.split(",");
    //console.log(boxesArray);
    let totalCargo = 0;
    boxesArray.forEach((boxString) => {
      totalCargo += parseFloat(boxString);
    });
    //console.log(totalCargo);
    if (isNaN(totalCargo)) {
      return setBays(0);
    }
    setBays(Math.ceil(totalCargo / 10));
  };

  const CompanyDetails = () => {
    if (company)
      return (
        <div className="details" key={"detailsView"}>
          <h1 className="name">{company.name}</h1>
          <h3 className="email">{company.email}</h3>
          <br />
          <p>Required cargo bays {bays}</p>
          <br />
          <p>Cargo boxes</p>
          <input
            key={"boxesInputField"}
            defaultValue={company.boxes || 0}
            onKeyPress={updateGlobalState}
          ></input>
        </div>
      );
    else {
      return (
        <div className="details">
          <h1>To view details, select company from list.</h1>
        </div>
      );
    }
  };

  return <CompanyDetails key={"companyDetailsComponent"} />;
}
