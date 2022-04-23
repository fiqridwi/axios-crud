import React from "react";
import { Container } from "react-bootstrap";
import Read from "./components/Read/Read";
import Create from "./components/Create/Create";
import Update from "./components/Update";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container style={{ maxWidth: "30rem", marginTop: "1rem" }}>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/read" element={<Read />} />
        <Route path="/read/update" element={<Update />} />
      </Routes>
    </Container>
  );
}
export default App;
