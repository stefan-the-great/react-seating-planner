import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.jsx";
import './style.css'

function App() {
  const style = {
    "padding": "0px",
    "margin": "0px",
    "overflow-x": "hidden",
    "height": "100vh",
    "width": "100vw",
  }
  return (
    <div className="App" style={style}>
      <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
