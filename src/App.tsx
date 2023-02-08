import React, { useEffect } from "react";
import { testAPI } from "./lib/api/testAPI";

function App() {
  useEffect(() => {
    testAPI().then((res) => console.log(res));
  }, []);
  return (
    <div className="App">
      <h1>H1</h1>
      <img
        src={"http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784"}
        alt="qwe"
      />
    </div>
  );
}

export default App;
