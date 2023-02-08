import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import { CharacterListPage } from "./pages/CharacterListPage";

function App() {
  // const { data } = useQuery("todo", () => testAPI(), {
  //   onSuccess: (data) => console.log(data),
  // });
  // useEffect(() => {
  //   testAPI().then((res) => console.log(res));
  // }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/chlist" element={<CharacterListPage />} />
        <Route path="*" element={<Navigate to="/chlist" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
