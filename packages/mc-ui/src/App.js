import { add } from "@mc/utils";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>{add(5, 3)}</p>
      </header>
    </div>
  );
}

export default App;
