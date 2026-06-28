import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './LandingPage/Navbar.jsx'
import Footer from './LandingPage/Footer.jsx'
import Home from './LandingPage/Home.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'
import Regester from './pages/Regester.jsx'

import DonaterDashboard from './pages/DonarDashboard.jsx'
import RequesterDashboard from './pages/RequesterDashboard.jsx'
import FindDonars from './pages/FindDonars.jsx'

const App = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      <Navbar />
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Home />} />
        
        {/* Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Regester />} />
        {/* <Route path="/donation-history" element={<DonationHistory />} /> */}
        <Route path="/donor-dashboard" element={<DonaterDashboard />} />
        <Route path="/requester-dashboard" element={<RequesterDashboard />} />
        <Route path="/find-donors" element={<FindDonars />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App