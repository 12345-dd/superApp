import { Route, Routes } from "react-router-dom"
import Categories from "./pages/Categories/Categories"
import Dashboard from "./pages/Dashboard/Dashboard"
import Movies from "./pages/Movies/Movies"
import Register from "./pages/Register/Register"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </>
  )
}

export default App
