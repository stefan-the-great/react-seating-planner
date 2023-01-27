import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DragDrop from "./components/DragDrop.jsx"


function App() {
  return (
    <div className="App">
      {/* <Switch> */}
        {/* <Route path={"/"}></Route> */}
        <DndProvider backend={HTML5Backend}>
            <DragDrop />        
        </DndProvider>
      {/* </Switch> */}
    </div>

  );
}

export default App;
