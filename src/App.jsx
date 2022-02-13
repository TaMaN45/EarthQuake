import { Route, Routes } from "react-router-dom";
import "./App.css";
import Details from "./screens/Details";
import Home from "./screens/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="details/:eventid" element={<Details />} />
    </Routes>
  );
}

export default App;
