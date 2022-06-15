import { BrowserRouter, Routes, Route } from "react-router-dom";
import Guest from "./layouts/Guest";
import Home from "./pages/home/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Guest />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
