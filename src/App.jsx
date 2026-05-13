// src/App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutPage from "./components/AboutPage";

function App() {
  return (
    <BrowserRouter>

      <div className="bg-cream min-h-screen">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;