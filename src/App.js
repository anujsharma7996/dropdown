import "./App.css";
import Dropdown from "./components/Dropdown";

function App() {
  const items = ["One", "Two", "Three"];
  return (
    <div className="App">
      <Dropdown items={items} />
    </div>
  );
}

export default App;
