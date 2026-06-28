import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion } from "framer-motion";
import {
  FaTint,
  FaHeartbeat,
  FaHospital,
  FaBell,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaUserCheck,
  FaArrowRight,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

const aboutPoints = [
  {
    icon: <FaTint />,
    title: "Trusted Request Posting",
    text: "Requesters can publish urgent blood needs with accurate details, priority levels, and verified contact information.",
  },
  {
    icon: <FaUserCheck />,
    title: "Intelligent Donor Matching",
    text: "BloodLink matches compatible donors using blood type, location, availability, and response readiness.",
  },
  {
    icon: <FaBell />,
    title: "Instant Emergency Alerts",
    text: "Donors receive fast, real-time updates so critical requests are addressed without delay.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Coordination",
    text: "Professionally managed communication keeps every donor-requester exchange safe, structured, and dependable.",
  },
];

const floatingIcons = [
  {
    icon: <FaHospital />,
    className: "top-14 left-8 text-[#C1121F]",
    delay: 0,
  },
  {
    icon: <FaBell />,
    className: "top-20 right-10 text-[#F59E0B]",
    delay: 0.8,
  },
  {
    icon: <FaMapMarkerAlt />,
    className: "bottom-16 left-12 text-[#111827]",
    delay: 1.5,
  },
  {
    icon: <FaShieldAlt />,
    className: "bottom-12 right-12 text-[#16A34A]",
    delay: 2.2,
  },
];

function FloatingIcon({ item }) {
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
      className={`absolute hidden lg:flex w-12 h-12 items-center justify-center rounded-2xl bg-white/80 backdrop-blur-xl border border-[#E5E7EB] shadow-xl text-xl ${item.className}`}
    >
      {item.icon}
    </motion.div>
  );
}

function BloodDrop({ className, delay }) {
  return (
    <motion.div
      animate={{
        y: [-12, 12, -12],
        rotate: [45, 56, 38, 45],
        scale: [0.9, 1.1, 0.9],
        opacity: [0.2, 0.6, 0.2],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={`absolute hidden md:block bg-gradient-to-br from-[#EF4444] to-[#780000] rounded-full rounded-tr-none shadow-lg shadow-red-200 ${className}`}
    />
  );
}

function PulseRing({ className, delay }) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.25, 1],
        opacity: [0.32, 0.06, 0.32],
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

function AboutPoint({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative overflow-hidden rounded-3xl bg-white/90 backdrop-blur-xl border border-[#E5E7EB] p-5 shadow-sm hover:shadow-xl transition"
    >
      <div className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-[#FEF2F2] group-hover:bg-[#C1121F]/10 transition" />

      <div className="relative flex items-start gap-4">
        <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#FEF2F2] text-[#C1121F] flex items-center justify-center text-xl group-hover:bg-[#C1121F] group-hover:text-white transition">
          {item.icon}
        </div>

        <div>
          <h3 className="font-extrabold text-[#111827]">{item.title}</h3>
          <p className="mt-1 text-sm text-[#6B7280] leading-relaxed">
            {item.text}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function FloatingInfoCard({ icon, label, title, className, delay = 0 }) {
  return (
    <motion.div
      animate={{ y: [-8, 8, -8] }}
      transition={{
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={`absolute z-30 hidden sm:flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur-xl border border-[#E5E7EB] shadow-xl px-4 py-3 ${className}`}
    >
      <div className="w-10 h-10 rounded-xl bg-[#FEF2F2] text-[#C1121F] flex items-center justify-center">
        {icon}
      </div>

      <div>
        <p className="text-xs text-[#6B7280]">{label}</p>
        <h4 className="text-sm font-extrabold text-[#111827]">{title}</h4>
      </div>
    </motion.div>
  );
}

function LottieVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 45 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.75 }}
      className="relative min-h-[420px] lg:min-h-[500px] flex items-center justify-center"
    >
      {/* Main glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.75, 1, 0.75],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[310px] h-[310px] md:w-[390px] md:h-[390px] rounded-full bg-[#FEF2F2] border border-[#E5E7EB]"
      />

      <PulseRing delay={0} className="w-[390px] h-[390px]" />
      <PulseRing delay={1} className="w-[480px] h-[480px]" />
      <PulseRing delay={2} className="w-[570px] h-[570px]" />

      {/* Animated light sweep */}
      <motion.div
        animate={{
          x: ["-120%", "120%"],
          opacity: [0, 0.35, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute z-20 w-32 h-[460px] bg-white/40 blur-2xl rotate-12"
      />

      {/* Lottie animation */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 180, damping: 16 }}
        className="relative z-20 w-full max-w-[520px] h-[390px] md:h-[460px] flex items-center justify-center"
      >
        <DotLottieReact
          src="https://lottie.host/e114630b-abfc-4543-b742-55176bf6edf5/W6WJJaRXhd.lottie"
          loop
          autoplay
          className="w-full h-full"
        />
      </motion.div>

      {/* Floating cards */}
      <FloatingInfoCard
        icon={<FaTint />}
        label="Request Type"
        title="Urgent Blood Need"
        className="top-8 left-0 md:left-6"
        delay={0}
      />

      <FloatingInfoCard
        icon={<FaUserCheck />}
        label="Donor Match"
        title="Suitable Donor Found"
        className="bottom-8 left-0 md:left-8"
        delay={1}
      />

      <FloatingInfoCard
        icon={<FaBell />}
        label="Live Update"
        title="Instant Notification"
        className="top-12 right-0 md:right-6"
        delay={1.6}
      />

      <FloatingInfoCard
        icon={<FaCheckCircle />}
        label="Response"
        title="Donation Support"
        className="bottom-14 right-0 md:right-8"
        delay={2.2}
      />

      {/* Bottom mini metrics */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute -bottom-2 z-30 hidden md:grid grid-cols-3 gap-3 w-full max-w-[500px]"
      >
        <div className="rounded-2xl bg-white/95 backdrop-blur-xl border border-[#E5E7EB] p-4 shadow-lg">
          <FaClock className="text-[#F59E0B] mb-2" />
          <h4 className="text-sm font-extrabold text-[#111827]">Fast Flow</h4>
          <p className="text-xs text-[#6B7280] mt-1">Less delay</p>
        </div>

        <div className="rounded-2xl bg-white/95 backdrop-blur-xl border border-[#E5E7EB] p-4 shadow-lg">
          <FaShieldAlt className="text-[#16A34A] mb-2" />
          <h4 className="text-sm font-extrabold text-[#111827]">Secure</h4>
          <p className="text-xs text-[#6B7280] mt-1">Verified contact</p>
        </div>

        <div className="rounded-2xl bg-white/95 backdrop-blur-xl border border-[#E5E7EB] p-4 shadow-lg">
          <FaMapMarkerAlt className="text-[#C1121F] mb-2" />
          <h4 className="text-sm font-extrabold text-[#111827]">Nearby</h4>
          <p className="text-xs text-[#6B7280] mt-1">Location match</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FCFCFD] py-16 lg:py-20"
    >
      {/* Animated glowing background */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 25, 0],
          y: [0, -18, 0],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-28 -left-28 w-[28rem] h-[28rem] rounded-full bg-[#C1121F]/10 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          x: [0, -25, 0],
          y: [0, 18, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-32 -right-28 w-[32rem] h-[32rem] rounded-full bg-[#EF4444]/10 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.65, 1, 0.65],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-36 left-[45%] w-72 h-72 rounded-full bg-[#E0F2FE]/70 blur-3xl"
      />

      {/* Floating icons */}
      {floatingIcons.map((item, index) => (
        <FloatingIcon key={index} item={item} />
      ))}

      {/* Blood drops */}
      <BloodDrop className="top-20 left-[9%] w-5 h-5" delay={0} />
      <BloodDrop className="bottom-24 left-[18%] w-4 h-4" delay={1.2} />
      <BloodDrop className="top-24 right-[12%] w-5 h-5" delay={2} />
      <BloodDrop className="bottom-24 right-[28%] w-3 h-3" delay={2.8} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/90 border border-[#E5E7EB] shadow-sm mb-6">
            <FaHeartbeat className="text-[#C1121F]" />
            <span className="text-sm font-bold text-[#6B7280]">About BloodLink</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#111827]">
            A professional platform for
            <span className="relative mx-3 inline-block text-[#C1121F]">
              faster, smarter
              <span className="absolute left-0 -bottom-2 w-full h-3 bg-[#EF4444]/20 -z-10 rounded-full" />
            </span>
            emergency blood coordination.
          </h2>

          <p className="mt-6 text-base md:text-lg text-[#6B7280] leading-relaxed max-w-3xl mx-auto">
            BloodLink combines secure request posting, intelligent donor matching, and real-time communication to create a modern and dependable blood donation experience.
          </p>
        </motion.div>

        <div className="rounded-[2rem] border border-[#E5E7EB] bg-white/70 backdrop-blur-xl shadow-[0_20px_80px_-35px_rgba(193,18,31,0.25)] p-6 md:p-8 lg:p-10">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -45 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <div className="rounded-3xl border border-[#E5E7EB] bg-gradient-to-br from-[#FFF7F7] to-white p-5 shadow-sm mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#FEF2F2] text-[#C1121F] flex items-center justify-center text-xl">
                    <FaShieldAlt />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#111827]">Professional emergency coordination</p>
                    <p className="text-sm text-[#6B7280]">Built for speed, precision, and trusted care.</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                {aboutPoints.map((item, index) => (
                  <AboutPoint key={index} item={item} index={index} />
                ))}
              </div>

              <div className="mt-7 flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#how-it-works"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="group relative overflow-hidden px-7 py-3.5 rounded-2xl bg-[#C1121F] text-white font-bold shadow-lg shadow-red-200 hover:bg-[#780000] transition flex items-center justify-center gap-3"
                >
                  <span className="relative z-10">See Workflow</span>
                  <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition" />
                  <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </motion.a>
              </div>
            </motion.div>

            <LottieVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;