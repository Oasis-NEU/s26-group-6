import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import DiningDollars from './pages/DiningDollars'
import Swipes from './pages/Swipes'
import FoodGood from './pages/FoodGood'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dining-dollars" element={<DiningDollars />} />
          <Route path="/swipes" element={<Swipes />} />
          <Route path="/food-good" element={<FoodGood />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
