import React from "react";
import { motion } from "framer-motion";
import {
  FaTint,
  FaHeartbeat,
  FaHospital,
  FaMapMarkerAlt,
  FaBell,
  FaShieldAlt,
  FaDatabase,
  FaUserCheck,
  FaArrowRight,
  FaClipboardList,
  FaPhoneAlt,
  FaUsers,
  FaHandsHelping,
  FaSearchLocation,
  FaAmbulance,
} from "react-icons/fa";
const aboutCards = [
  {
    icon: <FaHeartbeat />,
    title: "Real-Time Connection",
    text: "Connect patients, and nearby donors quickly when blood is urgently needed.",
  },
  {
    icon: <FaSearchLocation />,
    title: "Smart Matching",
    text: "Match donors using blood group, location, availability, and compatibility details.",
  },
  {
    icon: <FaBell />,
    title: "Emergency Alerts",
    text: "Send fast alerts for new blood requests, donor responses, and request updates.",
  },
  {
    icon: <FaDatabase />,
    title: "Complete Records",
    text: "Maintain organized request details, donor responses, and donation history.",
  },
];
const processItems = [
  {
    icon: <FaClipboardList />,
    title: "Request Posted",
    text: "Patient, hospital, blood group, units, urgency, date, and contact details.",
  },
  {
    icon: <FaSearchLocation />,
    title: "Donor Matching",
    text: "BloodLink checks compatibility, location, availability, and donor status.",
  },
  {
    icon: <FaBell />,
    title: "Instant Notification",
    text: "Suitable donors receive request alerts and can respond quickly.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Response",
    text: "Requester and donor connect through a cleaner verified process.",
  },
];
const floatingIcons = [
  { icon: <FaTint />, className: "top-20 left-10 text-[#C1121F]", delay: 0 },
  {
    icon: <FaHospital />,
    className: "top-32 right-16 text-[#111827]",
    delay: 0.8,
  },
  {
    icon: <FaAmbulance />,
    className: "bottom-24 left-16 text-[#C1121F]",
    delay: 1.4,
  },
  {
    icon: <FaShieldAlt />,
    className: "bottom-20 right-20 text-[#16A34A]",
    delay: 2,
  },
];
function FloatingIcon({ item }) {
  return (
    <motion.div
      animate={{
        y: [-12, 12, -12],
        rotate: [-4, 4, -4],
        opacity: [0.22, 0.7, 0.22],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: item.delay,
      }}
      className={`absolute hidden lg:flex w-14 h-14 items-center justify-center rounded-2xl bg-white/80 backdrop-blur-xl border border-[#E5E7EB] shadow-xl text-2xl ${item.className}`}
    >
      {" "}
      {item.icon}{" "}
    </motion.div>
  );
}
function BloodDrop({ className, delay }) {
  return (
    <motion.div
      animate={{
        y: [-14, 14, -14],
        rotate: [45, 56, 38, 45],
        scale: [0.9, 1.12, 0.9],
        opacity: [0.18, 0.58, 0.18],
      }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
      className={`absolute hidden md:block bg-linear-to-br from-[#EF4444] to-[#780000] rounded-full rounded-tr-none shadow-lg shadow-red-200 ${className}`}
    />
  );
}
function ProcessItem({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="relative overflow-hidden rounded-3xl bg-white border border-[#E5E7EB] p-5 shadow-sm hover:shadow-xl transition"
    >
      {" "}
      <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#FEF2F2]" />{" "}
      <div className="relative flex items-start gap-4">
        {" "}
        <div className="w-12 h-12 shrink-0 rounded-2xl bg-[#FEF2F2] text-[#C1121F] flex items-center justify-center text-xl">
          {" "}
          {item.icon}{" "}
        </div>{" "}
        <div>
          {" "}
          <h4 className="font-extrabold text-[#111827]">{item.title}</h4>{" "}
          <p className="mt-1 text-sm text-[#6B7280] leading-relaxed">
            {" "}
            {item.text}{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </motion.div>
  );
}
function AboutCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative overflow-hidden rounded-3xl bg-white border border-[#E5E7EB] p-6 shadow-sm hover:shadow-2xl transition"
    >
      {" "}
      <div className="absolute -right-12 -top-12 w-32 h-32 rounded-full bg-[#FEF2F2] group-hover:bg-[#C1121F]/10 transition" />{" "}
      <div className="relative w-14 h-14 rounded-2xl bg-[#FEF2F2] text-[#C1121F] flex items-center justify-center text-2xl mb-5 group-hover:bg-[#C1121F] group-hover:text-white transition">
        {" "}
        {item.icon}{" "}
      </div>{" "}
      <h3 className="relative text-xl font-extrabold text-[#111827]">
        {" "}
        {item.title}{" "}
      </h3>{" "}
      <p className="relative mt-3 text-[#6B7280] leading-relaxed">
        {" "}
        {item.text}{" "}
      </p>{" "}
    </motion.div>
  );
}
function FloatingStatusCard({ icon, label, title, className, delay = 0 }) {
  return (
    <motion.div
      animate={{ y: [-7, 7, -7] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay }}
      className={`absolute z-30 hidden sm:flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur-xl border border-[#E5E7EB] shadow-xl px-4 py-3 ${className}`}
    >
      {" "}
      <div className="w-10 h-10 rounded-xl bg-[#FEF2F2] text-[#C1121F] flex items-center justify-center">
        {" "}
        {icon}{" "}
      </div>{" "}
      <div>
        {" "}
        <p className="text-xs text-[#6B7280]">{label}</p>{" "}
        <h4 className="text-sm font-extrabold text-[#111827]">{title}</h4>{" "}
      </div>{" "}
    </motion.div>
  );
}
function BloodLinkNetworkAnimation() {
  return (
    <div className="relative w-full min-h-[560px] flex items-center justify-center">
      {" "}
      {/* Main glowing base */}{" "}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[340px] h-[340px] md:w-[430px] md:h-[430px] rounded-full bg-[#FEF2F2] border border-[#E5E7EB]"
      />{" "}
      <motion.div
        animate={{ scale: [1, 1.22, 1], opacity: [0.22, 0.05, 0.22] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[440px] h-[440px] md:w-[560px] md:h-[560px] rounded-full border border-[#C1121F]/25"
      />{" "}
      <motion.div
        animate={{ scale: [1, 1.32, 1], opacity: [0.16, 0.03, 0.16] }}
        transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[520px] h-[520px] md:w-[680px] md:h-[680px] rounded-full border border-[#EF4444]/20"
      />{" "}
      <FloatingStatusCard
        icon={<FaClipboardList />}
        label="Blood Request"
        title="O+ · 2 Units"
        className="top-8 left-0 md:left-8"
        delay={0}
      />{" "}
      <FloatingStatusCard
        icon={<FaHospital />}
        label="Hospital"
        title="City Care Center"
        className="top-14 right-0 md:right-8"
        delay={0.8}
      />{" "}
      <FloatingStatusCard
        icon={<FaUserCheck />}
        label="Matched Donor"
        title="Available Nearby"
        className="bottom-12 left-0 md:left-10"
        delay={1.4}
      />{" "}
      <FloatingStatusCard
        icon={<FaShieldAlt />}
        label="Verification"
        title="Secure Contact"
        className="bottom-16 right-0 md:right-10"
        delay={2}
      />{" "}
      <motion.svg
        viewBox="0 0 760 560"
        className="relative z-20 w-full max-w-[680px] h-[520px]"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9 }}
      >
        {" "}
        {/* Ground */}{" "}
        <ellipse
          cx="380"
          cy="500"
          rx="260"
          ry="34"
          fill="#E5E7EB"
          opacity="0.5"
        />{" "}
        {/* Donor Panel (moved to left) */} {" "}
        <motion.g
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        >
          {" "}
          <rect
            x="70"
            y="195"
            width="170"
            height="170"
            rx="32"
            fill="#FFFFFF"
            stroke="#E5E7EB"
            strokeWidth="5"
          />{" "}
          <circle cx="155" cy="240" r="30" fill="#FEF2F2" />{" "}
          <circle cx="155" cy="234" r="17" fill="#FCA5A5" />{" "}
          <rect x="128" y="258" width="54" height="38" rx="18" fill="#C1121F" />{" "}
          <rect x="105" y="315" width="100" height="14" rx="7" fill="#16A34A" />{" "}
          <rect x="105" y="340" width="70" height="12" rx="6" fill="#E5E7EB" />{" "}
          <text
            x="155"
            y="390"
            textAnchor="middle"
            fill="#111827"
            fontSize="18"
            fontWeight="700"
          >
            {" "}
            Donor{" "}
          </text>{" "}
        </motion.g>{" "}
        {/* Center BloodLink Engine */}{" "}
        <motion.g
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        >
          {" "}
          <rect
            x="285"
            y="130"
            width="190"
            height="270"
            rx="38"
            fill="#FFFFFF"
            stroke="#E5E7EB"
            strokeWidth="6"
          />{" "}
          <rect
            x="315"
            y="160"
            width="130"
            height="20"
            rx="10"
            fill="#FEF2F2"
          />{" "}
          <rect x="315" y="195" width="95" height="14" rx="7" fill="#E5E7EB" />{" "}
          <rect
            x="315"
            y="230"
            width="130"
            height="82"
            rx="24"
            fill="#FEF2F2"
          />{" "}
          <circle cx="380" cy="271" r="32" fill="#C1121F" />{" "}
          <rect x="363" y="265" width="34" height="12" rx="4" fill="white" />{" "}
          <rect x="374" y="254" width="12" height="34" rx="4" fill="white" />{" "}
          <rect x="315" y="335" width="130" height="18" rx="9" fill="#16A34A" />{" "}
          <rect x="315" y="365" width="85" height="12" rx="6" fill="#E5E7EB" />{" "}
          <text
            x="380"
            y="430"
            textAnchor="middle"
            fill="#111827"
            fontSize="18"
            fontWeight="800"
          >
            {" "}
            BloodLink{" "}
          </text>{" "}
        </motion.g>{" "}
        {/* Requester Panel (moved to right) */} {" "}
        <motion.g
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
        >
          {" "}
          <rect
            x="520"
            y="195"
            width="170"
            height="170"
            rx="32"
            fill="#FFFFFF"
            stroke="#E5E7EB"
            strokeWidth="5"
          />{" "}
          <circle cx="605" cy="240" r="30" fill="#FEF2F2" />{" "}
          <path
            d="M605 228 C598 218, 582 220, 582 236 C582 257, 605 268, 605 268 C605 268, 628 257, 628 236 C628 220, 612 218, 605 228Z"
            fill="#C1121F"
          />{" "}
          <rect x="555" y="292" width="100" height="14" rx="7" fill="#C1121F" />{" "}
          <rect x="555" y="318" width="72" height="12" rx="6" fill="#E5E7EB" />{" "}
          <text
            x="605"
            y="390"
            textAnchor="middle"
            fill="#111827"
            fontSize="18"
            fontWeight="700"
          >
            {" "}
            Requester{" "}
          </text>{" "}
        </motion.g>{" "}
        {/* Hospital */}{" "}
        <motion.g
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {" "}
          <rect
            x="310"
            y="30"
            width="140"
            height="72"
            rx="22"
            fill="#FFFFFF"
            stroke="#E5E7EB"
            strokeWidth="5"
          />{" "}
          <rect x="370" y="46" width="20" height="40" rx="5" fill="#C1121F" />{" "}
          <rect
            x="360"
            y="56"
            width="40"
            height="20"
            rx="5"
            fill="#C1121F"
          />{" "}
        </motion.g>{" "}
        {/* Connection Lines */}{" "}
        <motion.path
          d="M240 280 C270 230, 300 220, 320 250"
          fill="none"
          stroke="#C1121F"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray="18 12"
          animate={{ strokeDashoffset: [0, -70] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
        />{" "}
        <motion.path
          d="M440 250 C470 220, 500 230, 520 280"
          fill="none"
          stroke="#16A34A"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray="18 12"
          animate={{ strokeDashoffset: [0, -70] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
        />{" "}
        <motion.path
          d="M380 130 C380 112, 380 102, 380 82"
          fill="none"
          stroke="#111827"
          strokeWidth="6"
          strokeLinecap="round"
          strokeDasharray="14 10"
          animate={{ strokeDashoffset: [0, -50] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
          opacity="0.75"
        />{" "}
        {/* Moving Request Drops */}{" "}
        {[0, 1, 2].map((item) => (
          <motion.circle
            key={`drop-${item}`}
            r="8"
            fill="#C1121F"
            animate={{
              cx: [240, 270, 300, 320],
              cy: [280, 230, 220, 250],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              delay: item * 0.55,
              ease: "easeInOut",
            }}
          />
        ))}{" "}
        {/* Moving Donor Match Dots */}{" "}
        {[0, 1, 2].map((item) => (
          <motion.circle
            key={`match-${item}`}
            r="8"
            fill="#16A34A"
            animate={{
              cx: [440, 470, 500, 520],
              cy: [250, 220, 230, 280],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              delay: item * 0.55,
              ease: "easeInOut",
            }}
          />
        ))}{" "}
        {/* Bottom Heart */}{" "}
        <motion.path
          d="M380 458 C368 440, 338 443, 338 470 C338 500, 380 518, 380 518 C380 518, 422 500, 422 470 C422 443, 392 440, 380 458Z"
          fill="#C1121F"
          animate={{ scale: [1, 1.16, 1], opacity: [0.85, 1, 0.85] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "380px 480px" }}
        />{" "}
        <rect
          x="371"
          y="470"
          width="18"
          height="42"
          rx="4"
          fill="white"
          transform="rotate(-90 371 470)"
        />{" "}
        <rect x="371" y="449" width="18" height="42" rx="4" fill="white" />{" "}
      </motion.svg>{" "}
    </div>
  );
}
function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FCFCFD] py-20 lg:py-24"
    >
      {" "}
      {/* Background blobs */}{" "}
      <motion.div
        animate={{ scale: [1, 1.15, 1], x: [0, 25, 0], y: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-28 w-[30rem] h-[30rem] rounded-full bg-[#C1121F]/10 blur-3xl"
      />{" "}
      <motion.div
        animate={{ scale: [1, 1.12, 1], x: [0, -25, 0], y: [0, 18, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-32 -right-28 w-[34rem] h-[34rem] rounded-full bg-[#EF4444]/10 blur-3xl"
      />{" "}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 left-[45%] w-80 h-80 rounded-full bg-[#E0F2FE]/70 blur-3xl"
      />{" "}
      {/* Floating icons */}{" "}
      {floatingIcons.map((item, index) => (
        <FloatingIcon key={index} item={item} />
      ))}{" "}
      {/* Blood drops */}{" "}
      <BloodDrop className="top-24 left-[8%] w-5 h-5" delay={0} />{" "}
      <BloodDrop className="bottom-28 left-[15%] w-4 h-4" delay={1.2} />{" "}
      <BloodDrop className="top-32 right-[12%] w-5 h-5" delay={2} />{" "}
      <BloodDrop className="bottom-32 right-[28%] w-3 h-3" delay={2.8} />{" "}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {" "}
        {/* Big Section Heading */}{" "}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto text-center mb-14"
        >
          {" "}
          {/* 'About BloodLink' badge removed as requested */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-[#111827]">
            {" "}
            About{" "}
            <span className="relative inline-block text-[#C1121F]">
              {" "}
              BloodLink{" "}
              <span className="absolute left-0 -bottom-2 w-full h-3 bg-[#EF4444]/20 -z-10 rounded-full" />{" "}
            </span>{" "}
          </h2>{" "}
          <p className="mt-6 text-lg md:text-xl text-[#6B7280] leading-relaxed max-w-3xl mx-auto">
            {" "}
            A smart blood donation management system built to turn urgent blood
            needs into faster, safer, and more organized donor response.{" "}
          </p>{" "}
        </motion.div>{" "}
        {/* Main About Block */}{" "}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {" "}
          {/* Left Content */}{" "}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            {" "}
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-[#111827]">
              A professional bridge between <span className="text-[#C1121F]">patients</span> and verified donors.
            </h3>
            <p className="mt-5 text-lg text-[#6B7280] leading-relaxed max-w-2xl">
              {" "}
              BloodLink helps requesters create detailed blood requests and
              supports smart donor matching using blood group compatibility,
              location, availability, and verified contact information.{" "}
            </p>{" "}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {" "}
              {processItems.map((item, index) => (
                <ProcessItem key={index} item={item} index={index} />
              ))}{" "}
            </div>{" "}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              {" "}
              <motion.a
                href="#how-it-works"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="group relative overflow-hidden px-7 py-3.5 rounded-2xl bg-[#C1121F] text-white font-bold shadow-lg shadow-red-200 hover:bg-[#780000] transition flex items-center justify-center gap-3"
              >
                {" "}
                <span className="relative z-10">See How It Works</span>{" "}
                <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition" />{" "}
                <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />{" "}
              </motion.a>{" "}
              {/* Explore Features button removed as requested */}
            </div>{" "}
          </motion.div>{" "}
          {/* Right Professional Animation */}{" "}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.75 }}
            className="relative"
          >
            {" "}
            <BloodLinkNetworkAnimation />{" "}
          </motion.div>{" "}
        </div>{" "}
        {/* Bottom Feature Cards */}{" "}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {" "}
          {aboutCards.map((item, index) => (
            <AboutCard key={index} item={item} index={index} />
          ))}{" "}
        </div>{" "}
        {/* Bottom Strip */}{" "}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65 }}
          className="mt-12 rounded-[2rem] bg-[#111827] text-white p-6 md:p-8 overflow-hidden relative"
        >
          {" "}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#C1121F]/30 rounded-full blur-3xl" />{" "}
          <div className="relative grid md:grid-cols-4 gap-6">
            {" "}
            <div className="flex items-center gap-4">
              {" "}
              <FaUsers className="text-[#EF4444] text-3xl" />{" "}
              <div>
                {" "}
                <h4 className="font-extrabold">Donors</h4>{" "}
                <p className="text-sm text-gray-300">
                  Update availability
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex items-center gap-4">
              {" "}
              <FaHospital className="text-[#EF4444] text-3xl" />{" "}
              <div>
                {" "}
                <h4 className="font-extrabold">Hospitals</h4>{" "}
                <p className="text-sm text-gray-300">
                  Receive faster support
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex items-center gap-4">
              {" "}
              <FaPhoneAlt className="text-[#EF4444] text-3xl" />{" "}
              <div>
                {" "}
                <h4 className="font-extrabold">Requesters</h4>{" "}
                <p className="text-sm text-gray-300">Post urgent needs</p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="flex items-center gap-4">
              {" "}
              <FaHandsHelping className="text-[#EF4444] text-3xl" />{" "}
              <div>
                {" "}
                <h4 className="font-extrabold">Community</h4>{" "}
                <p className="text-sm text-gray-300">
                  Save time, save lives
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </motion.div>{" "}
      </div>{" "}
    </section>
  );
}
export default AboutSection;
