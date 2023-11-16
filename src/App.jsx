import { Route, Routes } from "react-router-dom";
import Home from './pages/home'
import Menu from './pages/menu'

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </>
  )
}

export default App
