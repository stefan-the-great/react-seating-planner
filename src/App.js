import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DragDrop from "./components/DragDrop.jsx"


function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
          <DragDrop />        
      </DndProvider>
    </div>

  );
}

export default App;
