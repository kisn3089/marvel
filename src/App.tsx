import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import CardDetail from "./components/CardDetail/CardDetail";
import Header from "./components/Header/Header";
import { CharacterListPage } from "./pages/CharacterListPage";
import CreateCardPage from "./pages/CreateCardPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/chlist" element={<CharacterListPage />} />
        <Route path="/chlist/:id" element={<CardDetail />} />
        <Route path="/card/create" element={<CreateCardPage />} />
        <Route path="*" element={<Navigate to="/chlist" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
