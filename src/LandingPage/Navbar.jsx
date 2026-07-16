import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaUserPlus,
  FaSignInAlt,
  FaHeartbeat,
  FaClipboardList,
  FaHospital,
  FaSignOutAlt,
  FaTint,
} from "react-icons/fa";

import logo from "../assets/bloodlink-logo.svg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Find Donors", path: "/find-donors" },
  { name: "Blood Requests", path: "/blood-requests" },
  { name: "How It Works", path: "/how-it-works" },
];

const normalizeRole = (role = "") => {
  const value = String(role).toLowerCase().trim();

  if (value === "donar" || value === "donor") return "donor";
  if (value === "requester" || value === "requestor") return "requester";

  return "";
};

const getCurrentUser = () => {
  try {
    const savedUser = localStorage.getItem("bloodlinkCurrentUser");
    return savedUser ? JSON.parse(savedUser) : null;
  } catch (error) {
    console.warn("BloodLink user not loaded:", error);
    return null;
  }
};

const getDashboardData = (user) => {
  const role = normalizeRole(user?.role);

  if (role === "donor") {
    return {
      role,
      name: "Donor Dashboard",
      shortName: "Donor",
      path: "/donor-dashboard",
      desc: "View blood requests",
      icon: <FaHeartbeat />,
    };
  }

  if (role === "requester") {
    return {
      role,
      name: "Requester Dashboard",
      shortName: "Requester",
      path: "/requester-dashboard",
      desc: "Find blood donors",
      icon: <FaClipboardList />,
    };
  }

  return {
    role: "",
    name: "Dashboard",
    shortName: "Dashboard",
    path: "/login",
    desc: "Login required",
    icon: <FaHospital />,
  };
};

function DesktopNavLink({ link }) {
  return (
    <NavLink
      to={link.path}
      className={({ isActive }) =>
        `group relative overflow-hidden rounded-2xl px-4 py-2.5 text-sm font-bold transition-all duration-300 ${
          isActive
            ? "bg-[#FEF2F2] text-[#C1121F] shadow-sm"
            : "text-[#6B7280] hover:bg-[#FEF2F2]/80 hover:text-[#C1121F]"
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

          <span className="relative z-10 flex items-center">{link.name}</span>

          <span
            className={`absolute bottom-1 left-4 right-4 h-0.5 rounded-full bg-[#C1121F] transition-all duration-300 ${
              isActive
                ? "scale-x-100 opacity-100"
                : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
            }`}
          />

          <span
            className={`absolute right-2 top-1.5 h-1.5 w-1.5 rounded-full bg-[#C1121F] transition-all duration-300 ${
              isActive
                ? "scale-100 opacity-100"
                : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
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
            ? "border border-red-100 bg-[#FEF2F2] text-[#C1121F] shadow-sm"
            : "text-[#6B7280] hover:bg-[#FEF2F2] hover:text-[#C1121F]"
        }`
      }
    >
      <span>{link.name}</span>
      <span className="h-2 w-2 rounded-full bg-[#C1121F] opacity-0 transition group-hover:opacity-100" />
    </NavLink>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const navigate = useNavigate();
  const dashboardData = useMemo(
    () => getDashboardData(currentUser),
    [currentUser]
  );

  const refreshUser = () => {
    setCurrentUser(getCurrentUser());
  };

  useEffect(() => {
    const handleStorageChange = () => refreshUser();
    const handleAuthChange = () => refreshUser();

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("bloodlink-auth-change", handleAuthChange);
    window.addEventListener("focus", handleAuthChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("bloodlink-auth-change", handleAuthChange);
      window.removeEventListener("focus", handleAuthChange);
    };
  }, []);

  const handleDashboardClick = () => {
    setIsOpen(false);

    if (!currentUser) {
      navigate("/login");
      return;
    }

    navigate(dashboardData.path);
  };

  const handleLogout = () => {
    localStorage.removeItem("bloodlinkCurrentUser");

    window.dispatchEvent(new Event("bloodlink-auth-change"));

    setCurrentUser(null);
    setIsOpen(false);
    navigate("/");
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-[#E5E7EB]/80 bg-[#FCFCFD]/75 backdrop-blur-2xl">
      {/* Premium Navbar Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#FEF2F2]/80 via-white/40 to-[#E0F2FE]/50" />
      <div className="pointer-events-none absolute -top-16 left-1/2 h-28 w-[34rem] -translate-x-1/2 rounded-full bg-[#C1121F]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-5 lg:px-6">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="group flex shrink-0 items-center gap-3">
            <motion.div
              whileHover={{ rotate: 6, scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <span className="absolute inset-0 rounded-3xl bg-[#C1121F]/25 opacity-70 blur-xl transition group-hover:opacity-100" />

              <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-lg shadow-red-100/60">
                <img
                  src={logo}
                  alt="BloodLink Logo"
                  className="h-11 w-11 object-contain"
                />
              </div>
            </motion.div>

            <div className="leading-none">
              <h1 className="text-2xl font-black tracking-tight md:text-[28px]">
                <span className="text-[#C1121F]">Blood</span>
                <span className="text-[#111827]">Link</span>
              </h1>

              <div className="mt-1 hidden items-center gap-1.5 sm:flex">
                <span className="h-1.5 w-1.5 rounded-full bg-[#16A34A]" />
                <p className="text-xs font-semibold text-[#6B7280]">
                  Smart Blood Donation System
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1.5 rounded-3xl border border-[#E5E7EB] bg-white/75 px-2 py-2 shadow-sm backdrop-blur-xl xl:flex">
            {navLinks.map((link) => (
              <DesktopNavLink key={link.path} link={link} />
            ))}

            {currentUser && (
              <NavLink
                to={dashboardData.path}
                className={({ isActive }) =>
                  `group relative flex items-center gap-2 overflow-hidden rounded-2xl px-4 py-2.5 text-sm font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-[#FEF2F2] text-[#C1121F] shadow-sm"
                      : "text-[#6B7280] hover:bg-[#FEF2F2]/80 hover:text-[#C1121F]"
                  }`
                }
              >
                <span className="text-[#C1121F]">{dashboardData.icon}</span>
                {dashboardData.shortName}
              </NavLink>
            )}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden shrink-0 items-center gap-3 md:flex">
            {currentUser ? (
              <>
                <button
                  onClick={handleDashboardClick}
                  className="group flex items-center gap-2 rounded-2xl border border-[#E5E7EB] bg-white/85 px-5 py-2.5 font-bold text-[#111827] shadow-sm transition hover:border-red-100 hover:bg-[#FEF2F2] hover:text-[#C1121F]"
                >
                  <span className="text-[#C1121F] transition group-hover:scale-110">
                    {dashboardData.icon}
                  </span>
                  {dashboardData.name}
                </button>

                <button
                  onClick={handleLogout}
                  aria-label="Log out"
                  className="group relative flex items-center gap-2 overflow-hidden rounded-2xl bg-[#C1121F] px-5 py-2.5 font-bold text-white shadow-lg shadow-red-200 transition hover:bg-[#780000]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <FaSignOutAlt />
                    Logout
                  </span>
                  <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/login"
                  className="group flex items-center gap-2 rounded-2xl border border-[#E5E7EB] bg-white/85 px-5 py-2.5 font-bold text-[#111827] shadow-sm transition hover:border-red-100 hover:bg-[#FEF2F2] hover:text-[#C1121F]"
                >
                  <FaSignInAlt className="text-[#C1121F] transition group-hover:scale-110" />
                  Login
                </NavLink>

                <NavLink
                  to="/register"
                  className="group relative flex items-center gap-2 overflow-hidden rounded-2xl bg-[#C1121F] px-5 py-2.5 font-bold text-white shadow-lg shadow-red-200 transition hover:bg-[#780000]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <FaUserPlus />
                    Register
                  </span>
                  <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
                </NavLink>
              </>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-red-100 bg-[#FEF2F2] text-[#C1121F] shadow-sm xl:hidden"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden border-t border-[#E5E7EB] bg-[#FCFCFD]/95 backdrop-blur-2xl xl:hidden"
          >
            <div className="space-y-3 px-5 py-5">
              {navLinks.map((link) => (
                <MobileNavLink
                  key={link.path}
                  link={link}
                  onClick={() => setIsOpen(false)}
                />
              ))}

              {currentUser && (
                <div className="border-t border-[#E5E7EB] pt-4">
                  <p className="mb-3 px-2 text-xs font-black uppercase tracking-wider text-[#C1121F]">
                    Your Dashboard
                  </p>

                  <button
                    onClick={handleDashboardClick}
                    className="group flex w-full items-center gap-3 rounded-2xl border border-red-100 bg-[#FEF2F2] px-4 py-3.5 text-left font-bold text-[#C1121F] transition"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#E5E7EB] bg-white text-[#C1121F]">
                      {dashboardData.icon}
                    </span>

                    <span>
                      <span className="block">{dashboardData.name}</span>
                      <span className="block text-xs font-semibold text-[#6B7280]">
                        {dashboardData.desc}
                      </span>
                    </span>
                  </button>
                </div>
              )}

              <div className="grid grid-cols-2 gap-3 pt-4">
                {currentUser ? (
                  <>
                    <button
                      onClick={handleDashboardClick}
                      className="rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3.5 text-center font-black text-[#111827] transition hover:bg-[#FEF2F2] hover:text-[#C1121F]"
                    >
                      Dashboard
                    </button>

                    <button
                      onClick={handleLogout}
                      aria-label="Log out"
                      className="rounded-2xl bg-[#C1121F] px-4 py-3.5 text-center font-black text-white shadow-lg shadow-red-200 transition hover:bg-[#780000]"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <NavLink
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className="rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3.5 text-center font-black text-[#111827] transition hover:bg-[#FEF2F2] hover:text-[#C1121F]"
                    >
                      Login
                    </NavLink>

                    <NavLink
                      to="/register"
                      onClick={() => setIsOpen(false)}
                      className="rounded-2xl bg-[#C1121F] px-4 py-3.5 text-center font-black text-white shadow-lg shadow-red-200 transition hover:bg-[#780000]"
                    >
                      Register
                    </NavLink>
                  </>
                )}
              </div>

              <div className="mt-4 rounded-3xl border border-[#E5E7EB] bg-gradient-to-br from-[#FEF2F2] via-white to-[#E0F2FE] p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C1121F] text-white shadow-lg shadow-red-200">
                    {currentUser ? dashboardData.icon : <FaTint />}
                  </div>

                  <div>
                    <h4 className="font-black text-[#111827]">
                      {currentUser
                        ? `Logged in as ${dashboardData.shortName}`
                        : "BloodLink System"}
                    </h4>
                    <p className="text-sm text-[#6B7280]">
                      {currentUser
                        ? dashboardData.desc
                        : "Faster donor and requester connection."}
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
