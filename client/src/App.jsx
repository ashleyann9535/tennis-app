import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import CourtForm from "./components/CourtForm";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route element={<Main />} path="/" default />
            <Route element={<CourtForm />} path="addcourt" />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
