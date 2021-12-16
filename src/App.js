import "./App.css";
import Dropdown from "./components/Dropdown";

function App() {
  // data to be displayed as options 
  const items = ["One", "Two", "Three"];
  return (
    <div className="App">
      <Dropdown items={items} />
    </div>
  );
}

export default App;
