import Home from "./pages/home";
import Menu from "./pages/menu";
import Reciclagem from "./pages/raciclagem";
import PreJogo from "./pages/preJogo";
import Jogo from "./pages/jogo";
import { Route, Routes } from "react-router-dom";
import PontosColeta from "./pages/pontos-coleta";
import Duvidas from "./pages/duvidas";
import Denuncia from "./pages/denuncia";
import BatePapo from "./pages/bate-papo";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reciclagem" element={<Reciclagem />} />
        <Route path="/prejogo" element={<PreJogo />} />
        <Route path="/jogo/:userName" element={<Jogo />} />
        <Route path="/pontos-coleta" element={<PontosColeta />} />
        <Route path="/duvidas" element={<Duvidas />} />
        <Route path="/denuncia" element={<Denuncia />} />
        <Route path="/batePapo" element={<BatePapo />} />
      </Routes>
    </>
  );
}

export default App;
