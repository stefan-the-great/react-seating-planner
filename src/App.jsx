import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import DragDrop from "./components/DragDrop.jsx"
import Home from "./pages/Home.jsx";
import AddNameList from "./pages/AddNameList/AddNameList.jsx";


function App() {
  return (
    <div className="App">
      {/* <Switch> */}
      <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home/>}></Route>
        <Route path={"add-names"} element={<AddNameList/>}></Route>

      </Routes>
      
      </BrowserRouter>

        {/* <DndProvider backend={HTML5Backend}>
            <DragDrop />        
        </DndProvider> */}
      {/* </Switch> */}
    </div>

  );
}

export default App;
