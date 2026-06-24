import { Route, Routes } from "react-router-dom"
import Categories from "./pages/Categories/Categories"
import Dashboard from "./pages/Dashboard/Dashboard"
import Movies from "./pages/Movies/Movies"
import Register from "./pages/Register/Register"
import ProtectedRoute from "./routes/ProtectedRoute"
import DashboardRoute from "./routes/DashboardRoute"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/categories" element={<ProtectedRoute><Categories /></ProtectedRoute>} />
        <Route path="/dashboard" element={<DashboardRoute><Dashboard /></DashboardRoute>} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>
  )
}

export default App
