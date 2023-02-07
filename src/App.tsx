import React, { useEffect } from "react";
import { testAPI } from "./lib/api/testAPI";

function App() {
  useEffect(() => {
    testAPI().then((res) => console.log(res));
  }, []);
  return (
    <div className="App">
      <h1>H1</h1>
    </div>
  );
}

export default App;
