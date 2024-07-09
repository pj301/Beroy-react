import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p>CC313 REACT-PROJECT</p>
      <p>MEMBERS</p>
      <div className="box">
        <h1>PETER JOHN Z. BEROY</h1>
        <h2>JOHN PAUL B. CANO</h2>
      </div>
    </div>
  );
}

export default App;
