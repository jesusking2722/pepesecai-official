import React from "react";
import "./App.css";
import Container from "./components/layouts/Container";
import Home from "./pages/Home";
import Security from "./pages/Security";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/security" Component={Security} />
      </Routes>
    </Container>
  );
}

export default App;
