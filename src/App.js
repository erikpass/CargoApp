import "./App.css";
import SearchBarComponent from "./Components/SearchBarComponent";
import SidebarComponent from "./Components/SidebarListComponent";
import DetailsComponent from "./Components/DetailsComponent";
import GlobalStateProvider from "./Store/GlobalStateProvider";
import { BrowserRouter as Router } from "react-router-dom";
import MobileMenuToggle from "./Components/MobileMenuToggle";

function App() {
  return (
    <Router>
      <GlobalStateProvider>
        <div className="App">
          <MobileMenuToggle />
          <SearchBarComponent />
          <SidebarComponent />
          <DetailsComponent />
        </div>
      </GlobalStateProvider>
    </Router>
  );
}

export default App;
