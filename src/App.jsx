import { Routes, Route, Navigate } from 'react-router-dom'
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
import ProtectedRoute from './components/ProtectedRoute.jsx'

const getCurrentUser = () => {
  try {
    return JSON.parse(localStorage.getItem('bloodlinkCurrentUser') || 'null')
  } catch {
    return null
  }
}

const normalizeRole = (role = '') => {
  const value = String(role).toLowerCase().trim()

  if (value === 'donar' || value === 'donor') return 'donor'
  if (value === 'requester' || value === 'requestor') return 'requester'

  return ''
}

const getDashboardPath = (role) => {
  const normalizedRole = normalizeRole(role)

  if (normalizedRole === 'donor') return '/donor-dashboard'
  if (normalizedRole === 'requester') return '/requester-dashboard'

  return '/login'
}

const DashboardRedirect = () => {
  const currentUser = getCurrentUser()

  if (!currentUser) {
    return <Navigate to="/login" replace />
  }

  return <Navigate to={getDashboardPath(currentUser.role)} replace />
}

const RedirectTo = ({ to }) => <Navigate to={to} replace />

const App = () => {
  return (
    <div className="min-h-screen bg-[var(--app-bg)] text-[var(--app-text)]">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/become-donor" element={<RedirectTo to="/register" />} />
        <Route path="/dashboard" element={<DashboardRedirect />} />

        <Route element={<ProtectedRoute allowedRole="donor" />}>
          <Route path="/donor-dashboard" element={<DonaterDashboard />} />
        </Route>

        <Route element={<ProtectedRoute allowedRole="requester" />}>
          <Route path="/requester-dashboard" element={<RequesterDashboard />} />
        </Route>

        <Route path="/find-donors" element={<FindDonars />} />
        <Route path="/blood-requests" element={<Requesters />} />
        <Route path="/requesters" element={<RedirectTo to="/blood-requests" />} />
        <Route path="/requests" element={<RedirectTo to="/blood-requests" />} />
        <Route path="/request-blood" element={<RequestBloodPage />} />
        <Route path="/how-it-works" element={<Workflow />} />
        <Route path="/How-it-Works" element={<RedirectTo to="/how-it-works" />} />
        <Route path="/contact" element={<RedirectTo to="/about" />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
