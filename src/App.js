import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
          <h4>What word do you want to look up?</h4>
          <main>
            <Dictionary />
          </main>
        </header>
      </div>
    </div>
  );
}

export default App;
