import React from "react";
import "./App.css";
import Container from "./components/layouts/Container";
import Home from "./pages/Home";
import Security from "./pages/Security";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container>
      <Routes>
        <Route index element={<Home />} />
        <Route path="security" element={<Security />} />
      </Routes>
    </Container>
  );
}

export default App;
