import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaHospital,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaUserPlus,
  FaAmbulance,
  FaCheckCircle,
  FaArrowRight,
  FaPhoneAlt,
  FaTint,
  FaClock,
  FaLock,
} from "react-icons/fa";

const MotionLink = motion(Link);

const floatingIcons = [
  {
    icon: <FaHospital />,
    className: "top-16 left-10 text-[#C1121F]",
    delay: 0,
  },
  {
    icon: <FaAmbulance />,
    className: "bottom-20 left-16 text-[#C1121F]",
    delay: 0.8,
  },
  {
    icon: <FaMapMarkerAlt />,
    className: "top-24 right-16 text-[#111827]",
    delay: 1.4,
  },
  {
    icon: <FaShieldAlt />,
    className: "bottom-24 right-20 text-[#16A34A]",
    delay: 2,
  },
  {
    icon: <FaTint />,
    className: "top-[52%] left-[47%] text-[#EF4444]",
    delay: 2.5,
  },
];

const bloodDrops = [
  { top: "12%", left: "7%", size: "w-4 h-4", delay: 0 },
  { top: "32%", left: "14%", size: "w-3 h-3", delay: 1 },
  { top: "16%", right: "12%", size: "w-5 h-5", delay: 1.5 },
  { bottom: "20%", right: "8%", size: "w-4 h-4", delay: 2 },
  { bottom: "12%", left: "12%", size: "w-5 h-5", delay: 2.7 },
];

function FloatingMedicalIcon({ item }) {
  return (
    <motion.div
      animate={{
        y: [-10, 10, -10],
        rotate: [-4, 4, -4],
        opacity: [0.25, 0.7, 0.25],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: item.delay,
      }}
      className={`absolute hidden lg:flex w-12 h-12 items-center justify-center rounded-2xl bg-white/80 backdrop-blur-xl border border-[#E5E7EB] shadow-lg text-xl ${item.className}`}
    >
      {item.icon}
    </motion.div>
  );
}

function FloatingBloodDrop({ item }) {
  return (
    <motion.div
      animate={{
        y: [-14, 14, -14],
        rotate: [45, 55, 35, 45],
        scale: [0.9, 1.08, 0.9],
        opacity: [0.22, 0.6, 0.22],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: item.delay,
      }}
      className={`absolute ${item.size} hidden md:block bg-gradient-to-br from-[#EF4444] to-[#780000] rounded-full rounded-tr-none shadow-lg shadow-red-200`}
      style={{
        top: item.top,
        left: item.left,
        right: item.right,
        bottom: item.bottom,
      }}
    />
  );
}

function PulseRing({ className, delay }) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.25, 1],
        opacity: [0.28, 0.05, 0.28],
      }}
      transition={{
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={`absolute rounded-full border border-[#C1121F]/25 ${className}`}
    />
  );
}

function TrustPill({ icon, text }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      className="flex items-center gap-2 rounded-2xl bg-white/85 backdrop-blur-xl border border-[#E5E7EB] px-4 py-3 shadow-sm hover:shadow-md transition"
    >
      <span className="text-[#C1121F] text-sm">{icon}</span>
      <span className="text-sm font-semibold text-[#111827]">{text}</span>
    </motion.div>
  );
}

function HeroSection() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-[#FCFCFD] via-[#FEF2F2] to-white">
      {/* Animated background blobs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 25, 0],
          y: [0, -18, 0],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-28 w-[26rem] h-[26rem] bg-[#C1121F]/10 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.14, 1],
          x: [0, -25, 0],
          y: [0, 18, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-36 -right-28 w-[28rem] h-[28rem] bg-[#EF4444]/10 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-28 left-[42%] w-72 h-72 bg-[#E0F2FE]/70 rounded-full blur-3xl"
      />

      {/* Pulse rings */}
      <PulseRing delay={0} className="top-16 right-[34%] w-36 h-36" />
      <PulseRing delay={1} className="top-10 right-[31%] w-52 h-52" />
      <PulseRing delay={2} className="top-4 right-[28%] w-64 h-64" />

      {/* Floating blood drops */}
      {bloodDrops.map((item, index) => (
        <FloatingBloodDrop key={index} item={item} />
      ))}

      {/* Floating medical icons */}
      {floatingIcons.map((item, index) => (
        <FloatingMedicalIcon key={index} item={item} />
      ))}

      {/* Hero content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 min-h-[calc(100vh-80px)] grid lg:grid-cols-2 gap-8 items-center py-3 lg:py-4">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pt-0"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-[#E5E7EB] shadow-sm mb-4"
          >
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <FaHeartbeat className="text-[#C1121F]" />
            </motion.span>

            <span className="text-xs sm:text-sm font-bold text-[#6B7280]">
              Smart blood donation support for urgent care
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-[58px] font-extrabold leading-[1.04] text-[#111827]">
            Connect donors <br />
            with patients{" "}
            <span className="relative inline-block text-[#C1121F]">
              instantly
              <span className="absolute left-0 -bottom-1.5 w-full h-2.5 bg-[#EF4444]/20 -z-10 rounded-full" />
            </span>
          </h1>

          <p className="mt-4 text-base md:text-lg text-[#6B7280] max-w-xl leading-relaxed">
            BloodLink helps patients and hospitals reach suitable nearby donors
            through secure request posting, donor availability, location support,
            and verified communication.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <MotionLink
              to="/register"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="group relative overflow-hidden px-7 py-3.5 rounded-2xl bg-[#C1121F] text-white font-bold shadow-lg shadow-red-200 hover:bg-[#780000] transition flex items-center justify-center gap-3"
            >
              <span className="relative z-10">Start Blood Request</span>
              <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition" />
              <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </MotionLink>

            <MotionLink
              to="/register"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="px-7 py-3.5 rounded-2xl bg-white border border-[#E5E7EB] text-[#C1121F] font-bold shadow-sm hover:shadow-md hover:bg-[#FEF2F2] hover:border-[#C1121F] transition flex items-center justify-center gap-3"
            >
              <FaUserPlus />
              Donate Blood
            </MotionLink>
          </div>

          {/* Short professional trust row */}
          <div className="mt-5 grid sm:grid-cols-3 gap-3 max-w-2xl">
            <TrustPill icon={<FaShieldAlt />} text="Verified contact" />
            <TrustPill icon={<FaClock />} text="Fast response" />
            <TrustPill icon={<FaLock />} text="Secure requests" />
          </div>
        </motion.div>

        {/* Right animation area */}
        <motion.div
          initial={{ opacity: 0, x: 45 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative min-h-[360px] lg:min-h-[430px] flex items-center justify-center"
        >
          {/* Behind animation glow */}
          <motion.div
            animate={{
              scale: [1, 1.06, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[300px] h-[300px] md:w-[340px] md:h-[340px] lg:w-[370px] lg:h-[370px] rounded-full bg-[#FEF2F2] border border-[#E5E7EB]"
          />

          <motion.div
            animate={{
              scale: [1, 1.18, 1],
              opacity: [0.22, 0.04, 0.22],
            }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[380px] h-[380px] md:w-[430px] md:h-[430px] lg:w-[470px] lg:h-[470px] rounded-full border border-[#C1121F]/25"
          />

          {/* Lottie animation */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative z-10 w-full max-w-[430px] h-[330px] md:h-[380px] lg:h-[420px] flex items-center justify-center"
          >
            <DotLottieReact
              src="https://lottie.host/a6ba2e72-9001-4465-9ce7-52f0e7489f5e/aEtDVFM2IS.lottie"
              loop
              autoplay
              className="w-full h-full"
            />
          </motion.div>

          {/* Compact floating cards */}
          <motion.div
            animate={{ y: [7, -7, 7] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-6 left-0 md:left-6 z-20 bg-white/95 backdrop-blur-xl border border-[#E5E7EB] rounded-2xl shadow-lg p-3 hidden sm:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#16A34A]/10 flex items-center justify-center text-[#16A34A]">
                <FaCheckCircle />
              </div>
              <div>
                <p className="text-xs text-[#6B7280]">Donor Status</p>
                <h4 className="text-sm font-bold text-[#111827]">
                  Available Nearby
                </h4>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 4.7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-16 right-0 md:right-4 z-20 bg-white/95 backdrop-blur-xl border border-[#E5E7EB] rounded-2xl shadow-lg p-3 hidden lg:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] flex items-center justify-center text-[#111827]">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-xs text-[#6B7280]">Location Support</p>
                <h4 className="text-sm font-bold text-[#111827]">
                  Nearby Hospital
                </h4>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [6, -6, 6] }}
            transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 left-0 z-20 bg-white/95 backdrop-blur-xl border border-[#E5E7EB] rounded-2xl shadow-lg p-3 hidden lg:block"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FEF2F2] flex items-center justify-center text-[#C1121F]">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-xs text-[#6B7280]">Secure Contact</p>
                <h4 className="text-sm font-bold text-[#111827]">
                  Verified Donor
                </h4>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
}

export default HeroSection;
