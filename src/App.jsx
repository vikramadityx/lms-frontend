import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth, Products } from "@/layouts";
import { UpdateProduct } from "./pages/products";

function App() {
  return (
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/products/*" element={<Products />} />
      <Route path="/update-product/:id" element={<UpdateProduct />} />
      <Route path="*" element={<Navigate to="/auth/sign-in" replace />} />
    </Routes>
  );
}

export default App;
