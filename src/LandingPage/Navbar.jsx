import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaUserPlus,
  FaSignInAlt,
  FaChevronDown,
  FaHeartbeat,
  FaClipboardList,
  FaHospital,
} from "react-icons/fa";

import logo from "../assets/bloodlink-logo.svg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Find Donors", path: "/find-donors" },
  { name: "Blood Requests", path: "/blood-requests" },
  { name: "How It Works", path: "/how-it-works" },
];

const dashboardLinks = [
  {
    name: "Donor",
    path: "/donor-dashboard",
    desc: "Manage availability",
    icon: <FaHeartbeat />,
  },
  {
    name: "Requester",
    path: "/requester-dashboard",
    desc: "Manage blood requests",
    icon: <FaClipboardList />,
  },
];

function DesktopNavLink({ link }) {
  return (
    <NavLink
      to={link.path}
      className={({ isActive }) =>
        `group relative overflow-hidden rounded-2xl px-4 py-2.5 text-sm font-bold transition-all duration-300 ${
          isActive
            ? "text-[#C1121F] bg-[#FEF2F2] shadow-sm"
            : "text-[#6B7280] hover:text-[#C1121F] hover:bg-[#FEF2F2]/80"
        }`
      }
    >
      {({ isActive }) => (
        <>
          <span
            className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
              isActive
                ? "bg-[#FEF2F2]"
                : "bg-[#FEF2F2]/0 group-hover:bg-[#FEF2F2]"
            }`}
          />

          <span className="relative z-10 flex items-center">
            {link.name}
          </span>

          <span
            className={`absolute left-4 right-4 bottom-1 h-0.5 rounded-full bg-[#C1121F] transition-all duration-300 ${
              isActive
                ? "opacity-100 scale-x-100"
                : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
            }`}
          />

          <span
            className={`absolute top-1.5 right-2 w-1.5 h-1.5 rounded-full bg-[#C1121F] transition-all duration-300 ${
              isActive
                ? "opacity-100 scale-100"
                : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
            }`}
          />
        </>
      )}
    </NavLink>
  );
}

function MobileNavLink({ link, onClick }) {
  return (
    <NavLink
      to={link.path}
      onClick={onClick}
      className={({ isActive }) =>
        `group flex items-center justify-between rounded-2xl px-4 py-3.5 font-bold transition-all duration-300 ${
          isActive
            ? "bg-[#FEF2F2] text-[#C1121F] border border-red-100 shadow-sm"
            : "text-[#6B7280] hover:bg-[#FEF2F2] hover:text-[#C1121F]"
        }`
      }
    >
      <span className="flex items-center gap-3">
        {link.name}
      </span>

      <span className="w-2 h-2 rounded-full bg-[#C1121F] opacity-0 group-hover:opacity-100 transition" />
    </NavLink>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[#E5E7EB]/80 bg-[#FCFCFD]/75 backdrop-blur-2xl">
      {/* soft top glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#FEF2F2]/80 via-white/40 to-[#E0F2FE]/50" />
      <div className="pointer-events-none absolute -top-16 left-1/2 h-28 w-[34rem] -translate-x-1/2 rounded-full bg-[#C1121F]/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-5 lg:px-6">
        <div className="h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group shrink-0">
            <motion.div
              whileHover={{ rotate: 6, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <span className="absolute inset-0 rounded-3xl bg-[#C1121F]/25 blur-xl opacity-70 group-hover:opacity-100 transition" />

              <div className="relative w-14 h-14 rounded-3xl bg-white border border-[#E5E7EB] shadow-lg shadow-red-100/60 flex items-center justify-center overflow-hidden">
                <img
                  src={logo}
                  alt="BloodLink Logo"
                  className="w-11 h-11 object-contain"
                />
              </div>
            </motion.div>

            <div className="leading-none">
              <h1 className="text-2xl md:text-[28px] font-black tracking-tight">
                <span className="text-[#C1121F]">Blood</span>
                <span className="text-[#111827]">Link</span>
              </h1>

              <div className="mt-1 hidden sm:flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />
                <p className="text-xs font-semibold text-[#6B7280]">
                  Smart Blood Donation System
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-1.5 rounded-3xl border border-[#E5E7EB] bg-white/75 backdrop-blur-xl px-2 py-2 shadow-sm">
            {navLinks.map((link) => (
              <DesktopNavLink key={link.path} link={link} />
            ))}

            {/* Dashboard Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDashboardOpen(!dashboardOpen)}
                onBlur={() => setTimeout(() => setDashboardOpen(false), 160)}
                className={`group relative overflow-hidden rounded-2xl px-4 py-2.5 text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                  dashboardOpen
                    ? "bg-[#FEF2F2] text-[#C1121F]"
                    : "text-[#6B7280] hover:text-[#C1121F] hover:bg-[#FEF2F2]"
                }`}
              >
                <FaHospital className="text-xs group-hover:scale-110 transition" />
                Dashboard
                <FaChevronDown
                  className={`text-xs transition duration-300 ${
                    dashboardOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {dashboardOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 14, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 14, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-4 w-80 overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white/95 backdrop-blur-2xl shadow-2xl shadow-red-100"
                  >
                    <div className="p-4 bg-gradient-to-br from-[#FEF2F2] to-white border-b border-[#E5E7EB]">
                      <p className="text-xs uppercase tracking-wider font-black text-[#C1121F]">
                        BloodLink Dashboards
                      </p>
                      <p className="mt-1 text-sm text-[#6B7280]">
                        Manage donor and requester workflows.
                      </p>
                    </div>

                    <div className="p-3 space-y-2">
                      {dashboardLinks.map((item) => (
                        <NavLink
                          key={item.path}
                          to={item.path}
                          onClick={() => setDashboardOpen(false)}
                          className={({ isActive }) =>
                            `group flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300 ${
                              isActive
                                ? "bg-[#FEF2F2] text-[#C1121F]"
                                : "text-[#6B7280] hover:bg-[#FEF2F2] hover:text-[#C1121F]"
                            }`
                          }
                        >
                          <span className="w-11 h-11 rounded-2xl bg-[#FEF2F2] text-[#C1121F] flex items-center justify-center group-hover:bg-[#C1121F] group-hover:text-white transition">
                            {item.icon}
                          </span>

                          <span>
                            <span className="block font-black text-sm">
                              {item.name}
                            </span>
                            <span className="block text-xs text-[#6B7280]">
                              {item.desc}
                            </span>
                          </span>
                        </NavLink>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <NavLink
              to="/login"
              className="group px-5 py-2.5 rounded-2xl border border-[#E5E7EB] bg-white/85 text-[#111827] font-bold hover:text-[#C1121F] hover:bg-[#FEF2F2] hover:border-red-100 transition flex items-center gap-2 shadow-sm"
            >
              <FaSignInAlt className="text-[#C1121F] group-hover:scale-110 transition" />
              Login
            </NavLink>

            <NavLink
              to="/register"
              className="group relative overflow-hidden px-5 py-2.5 rounded-2xl bg-[#C1121F] text-white font-bold shadow-lg shadow-red-200 hover:bg-[#780000] transition flex items-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                <FaUserPlus />
                Register
              </span>
              <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </NavLink>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden w-12 h-12 rounded-2xl bg-[#FEF2F2] text-[#C1121F] flex items-center justify-center border border-red-100 shadow-sm"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="xl:hidden overflow-hidden border-t border-[#E5E7EB] bg-[#FCFCFD]/95 backdrop-blur-2xl"
          >
            <div className="px-5 py-5 space-y-3">
              {navLinks.map((link) => (
                <MobileNavLink
                  key={link.path}
                  link={link}
                  onClick={() => setIsOpen(false)}
                />
              ))}

              <div className="pt-4 border-t border-[#E5E7EB]">
                <p className="px-2 mb-3 text-xs uppercase tracking-wider font-black text-[#C1121F]">
                  Dashboards
                </p>

                <div className="space-y-3">
                  {dashboardLinks.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `group flex items-center gap-3 rounded-2xl px-4 py-3.5 font-bold transition ${
                          isActive
                            ? "bg-[#FEF2F2] text-[#C1121F] border border-red-100"
                            : "text-[#6B7280] hover:bg-[#FEF2F2] hover:text-[#C1121F]"
                        }`
                      }
                    >
                      <span className="w-10 h-10 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center text-[#C1121F]">
                        {item.icon}
                      </span>

                      <span>
                        <span className="block">{item.name}</span>
                        <span className="block text-xs text-[#6B7280] font-semibold">
                          {item.desc}
                        </span>
                      </span>
                    </NavLink>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-4">
                <NavLink
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3.5 rounded-2xl border border-[#E5E7EB] bg-white text-[#111827] font-black text-center hover:bg-[#FEF2F2] hover:text-[#C1121F] transition"
                >
                  Login
                </NavLink>

                <NavLink
                  to="/register"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3.5 rounded-2xl bg-[#C1121F] text-white font-black text-center hover:bg-[#780000] transition shadow-lg shadow-red-200"
                >
                  Register
                </NavLink>
              </div>

              <div className="mt-4 rounded-3xl bg-gradient-to-br from-[#FEF2F2] via-white to-[#E0F2FE] border border-[#E5E7EB] p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#C1121F] text-white flex items-center justify-center shadow-lg shadow-red-200">
                    <FaHospital />
                  </div>

                  <div>
                    <h4 className="font-black text-[#111827]">
                      BloodLink System
                    </h4>
                    <p className="text-sm text-[#6B7280]">
                      Faster donor and requester connection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;