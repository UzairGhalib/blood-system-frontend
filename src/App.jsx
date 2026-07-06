import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './LandingPage/Navbar.jsx'
import Footer from './LandingPage/Footer.jsx'
import Home from './LandingPage/Home.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'
import RegistrationPage from './pages/RegistrationPage.jsx'
import DonaterDashboard from './pages/DonarDashboard.jsx'
import RequesterDashboard from './pages/RequesterDashboard.jsx'
import FindDonars from './pages/FindDonars.jsx'
import RequestBloodPage from './pages/RequestBloodPage.jsx'
import Workflow from './pages/Workflow.jsx'
import Requesters from './pages/Requesters.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

const App = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      <ScrollToTop />
      <Navbar />
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Home />} />
        
        {/* Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/donor-dashboard" element={<DonaterDashboard />} />
        <Route path="/requester-dashboard" element={<RequesterDashboard />} />
        <Route path="/find-donors" element={<FindDonars />} />
        <Route path="/blood-requests" element={<Requesters />} />
        <Route path="/requesters" element={<Requesters />} />
        <Route path="/requests" element={<Requesters />} />

        <Route path="/request-blood" element={<RequestBloodPage />} />
        <Route path="/how-it-works" element={<Workflow />} />
        <Route path="/How-it-Works" element={<Workflow />} />
        <Route path="/contact" element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App