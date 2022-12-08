import "./App.css";
import { Route, Routes } from "react-router-dom";
import Healthcheck from "./Components/Healthcheck";

function App() {
  return (
    <Routes>
      <Route exact path="/healthcheck" element={<Healthcheck/>} />
    </Routes>
  );
}

export default App;
