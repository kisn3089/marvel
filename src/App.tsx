import React, { useEffect } from "react";
import { testAPI } from "./lib/api/testAPI";

function App() {
  useEffect(() => {
    testAPI("5318a13f480b07a76f3b2969").then((res) => console.log(res));
  }, []);
  return (
    <div className="App">
      <h1>H1</h1>
    </div>
  );
}

export default App;
