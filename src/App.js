import "./App.css";
import Adduser from "./components/Adduser";
import Allusers from "./components/Allusers";
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sonam from "./components/Sonam";
import Viren from "./Viren";
function App() {
  return (
    <>
              <Viren/>

      {/* <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/all" element={<Allusers />}></Route>
          <Route path="/add" element={<Adduser />}></Route>
          <Route path="/" element={<Sonam />}></Route>
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
