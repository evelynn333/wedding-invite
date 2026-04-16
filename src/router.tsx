import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { Admin } from "./pages/admin";
import { Login } from "./pages/login";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};