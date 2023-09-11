import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import BookPage from "./pages/BookPage";
import BooksList from "./pages/BooksList";
import { Container } from "@mui/material";
import Header from "./components/Header";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Container sx={{ mt: "1rem", mb: "10rem" }}>
        <Routes>
          <Route path="/books" element={<BooksList />} />
          <Route path="/books/:id" element={<BookPage />} />
          <Route path="/*" element={<Navigate to="/books" replace />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;