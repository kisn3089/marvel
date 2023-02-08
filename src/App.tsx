import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { testAPI } from "./lib/api/testAPI";

function App() {
  const { data } = useQuery("todo", () => testAPI(), {
    onSuccess: (data) => console.log(data),
  });
  // useEffect(() => {
  //   testAPI().then((res) => console.log(res));
  // }, []);
  return (
    <div className="App">
      <h1>H1</h1>
      <img
        src={"http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg"}
        alt="qwe"
      />
    </div>
  );
}

export default App;
