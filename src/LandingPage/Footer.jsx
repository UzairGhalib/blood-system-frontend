import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaTint,
  FaHeartbeat,
  FaHospital,
  FaUserPlus,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaShieldAlt,
  FaAmbulance,
  FaHandHoldingMedical,
  FaArrowRight,
} from "react-icons/fa";

// Change these names according to your actual assets folder images
import logo from "../assets/ChatGPT Image Jun 19, 2026, 09_43_24 AM.png";
import footerImage from "../assets/footer-donor.png";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Find Donors", path: "/find-donors" },
  { name: "Requests", path: "/requesters" },
  { name: "How It Works", path: "/how-it-works" },
  { name: "Contact", path: "/contact" },
];

const services = [
  "Emergency Blood Requests",
  "Verified Donor Profiles",
  "Nearby Donor Search",
  "Hospital Support",
];

const floatingIcons = [
  { Icon: FaTint, className: "left-[5%] top-[18%]", delay: 0 },
  { Icon: FaHeartbeat, className: "left-[22%] top-[45%]", delay: 0.4 },
  { Icon: FaHospital, className: "right-[8%] top-[20%]", delay: 0.8 },
  { Icon: FaAmbulance, className: "right-[26%] top-[48%]", delay: 1.2 },
  { Icon: FaShieldAlt, className: "left-[12%] bottom-[20%]", delay: 1.6 },
  { Icon: FaHandHoldingMedical, className: "right-[14%] bottom-[16%]", delay: 2 },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#780000] via-[#C1121F] to-[#780000] text-white">
      {/* Animated Background Glow */}
      <motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [0.35, 0.65, 0.35] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#EF4444]/30 blur-3xl"
      />

      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.55, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        className="absolute -right-32 bottom-10 h-[420px] w-[420px] rounded-full bg-[#EF4444]/25 blur-3xl"
      />

      {/* Animated Circle Lines */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/10"
      />

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, className, delay }, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -20, 0],
            rotate: [0, index % 2 === 0 ? 10 : -10, 0],
            opacity: [0.15, 0.45, 0.15],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            delay,
          }}
          className={`absolute hidden h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-white/10 text-[#FECACA] shadow-xl backdrop-blur-md md:flex ${className}`}
        >
          <Icon className="text-4xl" />
        </motion.div>
      ))}

      {/* Blood Dots */}
      <div className="absolute inset-0 hidden md:block">
        {[...Array(28)].map((_, index) => (
          <motion.span
            key={index}
            animate={{
              y: [0, -18, 0],
              scale: [1, 1.4, 1],
              opacity: [0.12, 0.45, 0.12],
            }}
            transition={{
              duration: 3 + (index % 5),
              repeat: Infinity,
              delay: index * 0.15,
            }}
            className="absolute h-2.5 w-2.5 rounded-full bg-white/40"
            style={{
              left: `${4 + ((index * 13) % 92)}%`,
              top: `${8 + ((index * 19) % 78)}%`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
        {/* Top Emergency CTA */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-md lg:p-8"
        >
          <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-[#FECACA]">
                <FaHeartbeat className="text-[#EF4444]" />
                Emergency Blood Support
              </div>

              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
                Need blood urgently? BloodLink helps you find nearby donors fast.
              </h2>

              <p className="mt-4 max-w-2xl text-sm leading-6 text-[#FECACA] sm:text-base">
                Connect with verified donors, hospitals, and requesters through a clean and emergency-focused donation system.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/find-donors"
                  className="inline-flex items-center gap-2 rounded-full bg-[#EF4444] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-red-950/20 transition hover:bg-[#C1121F] hover:shadow-xl"
                >
                  Find Donors
                  <FaArrowRight />
                </Link>

                <Link
                  to="/requesters"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#C1121F]"
                >
                  Create Request
                </Link>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative mx-auto hidden max-w-xs lg:block"
            >
              <div className="absolute inset-0 rounded-full bg-white/15 blur-3xl" />
              <img
                src={footerImage}
                alt="Blood donation"
                className="relative z-10 w-full drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-lg">
                <img src={logo} alt="BloodLink logo" className="h-10 w-10 object-contain" />
              </div>

              <div>
                <h3 className="text-2xl font-extrabold tracking-tight text-white">
                  BloodLink
                </h3>
                <p className="text-xs font-medium text-[#FECACA]">
                  Smart Blood Donation System
                </p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-[#FECACA]">
              BloodLink connects patients, hospitals, requesters, and nearby donors in real time for faster emergency blood support.
            </p>

            <div className="mt-6 flex gap-3">
              {[FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp].map((Icon, index) => (
                <motion.a
                  key={index}
                  whileHover={{ y: -5, scale: 1.08 }}
                  href="#"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-[#FEE2E2] transition hover:bg-white hover:text-[#C1121F]"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <h4 className="mb-5 text-lg font-bold text-white">Quick Links</h4>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-[#FEE2E2] transition hover:text-white"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#EF4444] transition group-hover:w-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
          >
            <h4 className="mb-5 text-lg font-bold text-white">BloodLink Services</h4>

            <ul className="space-y-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-3 text-sm font-medium text-[#FECACA]"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[#EF4444]">
                    <FaTint className="text-xs" />
                  </span>
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact + Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.3 }}
          >
            <h4 className="mb-5 text-lg font-bold text-white">Stay Connected</h4>

            <div className="space-y-4 text-sm text-[#FECACA]">
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#EF4444]" />
                Swabi, Khyber Pakhtunkhwa
              </p>

              <p className="flex items-center gap-3">
                <FaEnvelope className="text-[#EF4444]" />
                support@bloodlink.com
              </p>

              <p className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#EF4444]" />
                +92 300 0000000
              </p>
            </div>

            <form className="mt-6 flex overflow-hidden rounded-full border border-white/10 bg-white p-1 shadow-lg">
              <input
                type="email"
                placeholder="Email address"
                className="min-w-0 flex-1 bg-white px-4 text-sm text-[#111827] outline-none placeholder:text-[#6B7280]"
              />

              <button
                type="submit"
                className="rounded-full bg-[#EF4444] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#C1121F]"
              >
                Join
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-[#FECACA] md:flex-row">
            <p>
              © {new Date().getFullYear()} BloodLink. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-5">
              <Link to="/privacy-policy" className="transition hover:text-white">
                Privacy Policy
              </Link>
              <Link to="/terms" className="transition hover:text-white">
                Terms
              </Link>
              <Link to="/contact" className="transition hover:text-white">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;