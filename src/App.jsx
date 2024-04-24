import Home from "./pages/home";
import Menu from "./pages/menu";
import Reciclagem from "./pages/raciclagem";
import PreJogo from "./pages/preJogo";
import Jogo from "./pages/jogo";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reciclagem" element={<Reciclagem />} />
        <Route path="/prejogo" element={<PreJogo />} />
        <Route path="/jogo/:userName" element={<Jogo />} />
      </Routes>
    </>
  );
}

export default App;
