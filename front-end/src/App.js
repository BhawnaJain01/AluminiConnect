import "./App.css";
// import Sidebar from './Components/Others/Sidebar';
import ChatBox from "./Components/ChatApp/ChatBox";
// import LoginRegister from './Components/Others/LoginRegister';
// import SidebarMain from './Components/Others/SidebarMain';
// import Dashboard from './Components/Others/Dashboard';

import routes from "./Routes/routes";
import { UserContext } from "./UserContext";
import { useRoutes } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const routing = useRoutes(routes);

  return (
    <>
      <UserContext>{routing}</UserContext>
    </>
  );
}

export default App;
