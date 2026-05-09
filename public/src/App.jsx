import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TicTacToe from "./pages/TicTacToe";
import MemoryGame from "./pages/Memogame";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
        <Route path="/memory-game" element={<Memogame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;