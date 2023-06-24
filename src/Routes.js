import { BrowserRouter, Route, Routes } from "react-router-dom";

import { NavBar } from "./components/navbar/NavBar";
import { Home } from "./pages/home/Home";
import { NotFound } from "./pages/NotFound";
import { Map } from "./pages/map/Map";

function RoutesProvider() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/first" element={<Map />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesProvider;
