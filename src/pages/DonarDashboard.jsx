import React from "react";
import { motion } from "framer-motion";
import {
  FaTint,
  FaHeartbeat,
  FaHospital,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaShieldAlt,
  FaCalendarAlt,
  FaClock,
  FaHandHoldingMedical,
  FaBell,
  FaAward,
  FaChartLine,
  FaCheckCircle,
  FaExclamationTriangle,
  FaClipboardList,
  FaMedal,
  FaArrowRight,
  FaEdit,
  FaDownload,
  FaUserShield,
  FaAmbulance,
  FaStethoscope,
  FaLocationArrow,
  FaBolt,
  FaSearch,
} from "react-icons/fa";

const donorProfile = {
  name: "Ali Khan",
  bloodGroup: "A+",
  location: "Main Swabi",
  city: "Swabi",
  phone: "+92 300 0000001",
  whatsapp: "+92 300 0000001",
  availability: "Available",
  verified: true,
  lastDonation: "12 May 2026",
  nextEligible: "12 Aug 2026",
  totalDonations: 6,
  livesHelped: 18,
  responseRate: "96%",
  avgReply: "8 min",
};

const dashboardStats = [
  {
    title: "Total Donations",
    value: "06",
    note: "Successful donations",
    icon: FaHandHoldingMedical,
    bg: "bg-[#FEF2F2]",
    color: "text-[#C1121F]",
  },
  {
    title: "Lives Helped",
    value: "18",
    note: "Estimated impact",
    icon: FaHeartbeat,
    bg: "bg-[#FEF2F2]",
    color: "text-[#EF4444]",
  },
  {
    title: "Response Rate",
    value: "96%",
    note: "Requester replies",
    icon: FaChartLine,
    bg: "bg-[#ECFDF5]",
    color: "text-[#16A34A]",
  },
  {
    title: "Avg Reply",
    value: "8m",
    note: "Fast donor response",
    icon: FaClock,
    bg: "bg-[#FFFBEB]",
    color: "text-[#F59E0B]",
  },
];

const quickHighlights = [
  { label: "Next Eligible", value: donorProfile.nextEligible, icon: FaCalendarAlt },
  { label: "Response Time", value: donorProfile.avgReply, icon: FaClock },
  { label: "Lives Helped", value: donorProfile.livesHelped, icon: FaHeartbeat },
  { label: "Verified", value: "Yes", icon: FaShieldAlt },
];

const floatingIcons = [
  { icon: FaTint, className: "left-[5%] top-[15%]", delay: 0 },
  { icon: FaHeartbeat, className: "right-[7%] top-[18%]", delay: 0.4 },
  { icon: FaHospital, className: "left-[12%] bottom-[20%]", delay: 0.8 },
  { icon: FaWhatsapp, className: "right-[10%] bottom-[18%]", delay: 1.2 },
  { icon: FaShieldAlt, className: "left-[45%] top-[8%]", delay: 1.6 },
  { icon: FaAmbulance, className: "right-[32%] top-[12%]", delay: 2 },
  { icon: FaCalendarAlt, className: "left-[35%] bottom-[8%]", delay: 2.3 },
  { icon: FaStethoscope, className: "right-[45%] bottom-[10%]", delay: 2.7 },
];

const DonorDashboard = () => {
  const whatsappNumber = donorProfile.whatsapp.replace(/\D/g, "");

  return (
    <section className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.10),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(239,68,68,0.10),transparent_35%),linear-gradient(135deg,#FCFCFD_0%,#FEF2F2_100%)] text-[#111827]">
      {/* Premium Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-28 top-20 h-96 w-96 rounded-full bg-[#C1121F]/15 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.45, 0.75, 0.45] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute -right-32 bottom-10 h-[28rem] w-[28rem] rounded-full bg-[#EF4444]/15 blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.45, 0.7, 0.45] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute left-[38%] top-[20%] h-72 w-72 rounded-full bg-[#E0F2FE]/70 blur-3xl"
          animate={{ y: [0, 25, 0], opacity: [0.35, 0.65, 0.35] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute left-1/2 top-20 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full border border-[#C1121F]/10" />
        <div className="absolute left-1/2 top-5 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full border border-[#C1121F]/5" />

        {floatingIcons.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              className={`absolute ${item.className} hidden h-12 w-12 items-center justify-center rounded-2xl border border-[#E5E7EB] bg-white/75 text-[#C1121F] shadow-[0_18px_45px_rgba(17,24,39,0.08)] backdrop-blur-xl sm:flex`}
              animate={{
                y: [0, -16, 0],
                rotate: [0, 5, 0],
                opacity: [0.55, 0.95, 0.55],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: item.delay,
                ease: "easeInOut",
              }}
            >
              <Icon className="text-xl" />
            </motion.div>
          );
        })}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-3 py-6 sm:px-6 lg:px-8 lg:py-8">
        {/* Top Bar */}
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 flex items-center justify-between rounded-[1.8rem] border border-[#E5E7EB] bg-white/85 px-4 py-4 shadow-[0_20px_70px_rgba(17,24,39,0.08)] backdrop-blur-xl sm:px-6"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#780000] to-[#C1121F] text-white shadow-lg shadow-[#C1121F]/25">
              <FaTint className="text-xl" />
            </div>

            <div>
              <h1 className="text-lg font-black text-[#111827] sm:text-2xl">
                BloodLink
              </h1>
              <p className="text-xs font-semibold text-[#6B7280] sm:text-sm">
                Donor Dashboard
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-[#E5E7EB] bg-white text-[#C1121F] shadow-sm transition hover:bg-[#FEF2F2]">
              <FaBell />
              <span className="absolute right-2 top-2 h-3 w-3 rounded-full border-2 border-white bg-[#EF4444]" />
            </button>

            <a
              href="/find-donors"
              className="hidden rounded-2xl bg-[#C1121F] px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-[#C1121F]/25 transition hover:bg-[#780000] sm:inline-flex"
            >
              Find Donors
            </a>
          </div>
        </motion.div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-white/90 p-5 shadow-[0_24px_80px_rgba(17,24,39,0.08)] backdrop-blur-xl sm:p-6"
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#FEF2F2]" />
            <div className="relative flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2.8, repeat: Infinity }}
                  className="flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-[#C1121F] text-xl font-black text-white shadow-xl shadow-[#C1121F]/25"
                >
                  {donorProfile.bloodGroup}
                </motion.div>

                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-black text-[#111827]">{donorProfile.name}</h2>
                    {donorProfile.verified && (
                      <span className="rounded-full bg-[#DCFCE7] px-2 py-1 text-[10px] font-extrabold uppercase tracking-wide text-[#16A34A]">
                        Verified
                      </span>
                    )}
                  </div>
                  <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-[#6B7280]">
                    <FaMapMarkerAlt className="text-[#C1121F]" />
                    {donorProfile.location}, {donorProfile.city}
                  </p>
                </div>
              </div>

              <span className="rounded-full border border-[#BBF7D0] bg-[#DCFCE7] px-3 py-1 text-xs font-extrabold text-[#16A34A]">
                {donorProfile.availability}
              </span>
            </div>

            <div className="relative mt-5 grid gap-3 sm:grid-cols-2">
              <ProfileMini icon={FaPhoneAlt} label="Phone" value={donorProfile.phone} />
              <ProfileMini icon={FaWhatsapp} label="WhatsApp" value={donorProfile.whatsapp} />
              <ProfileMini icon={FaCalendarAlt} label="Last Donation" value={donorProfile.lastDonation} />
              <ProfileMini icon={FaClock} label="Next Eligible" value={donorProfile.nextEligible} />
            </div>

            <div className="relative mt-5 flex flex-wrap gap-3">
              <motion.a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-2xl bg-[#16A34A] px-4 py-3 text-sm font-extrabold text-white shadow-lg shadow-[#16A34A]/20 transition hover:bg-[#12803A]"
              >
                <FaWhatsapp />
                WhatsApp
              </motion.a>
              <motion.a
                href="/find-donors"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 text-sm font-extrabold text-[#780000] transition hover:border-[#C1121F] hover:bg-[#FEF2F2]"
              >
                <FaSearch />
                Find Donors
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="rounded-[2rem] border border-[#E5E7EB] bg-white/90 p-5 shadow-[0_24px_80px_rgba(17,24,39,0.08)] backdrop-blur-xl sm:p-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-black text-[#111827]">Your Impact</h3>
                <p className="mt-1 text-sm font-semibold text-[#6B7280]">A quick snapshot of your contribution.</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FEF2F2] text-[#C1121F]">
                <FaAward className="text-xl" />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {quickHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="rounded-[1.2rem] border border-[#E5E7EB] bg-[#FCFCFD] p-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#6B7280]">
                      <Icon className="text-[#C1121F]" />
                      {item.label}
                    </div>
                    <p className="mt-2 text-lg font-black text-[#111827]">{item.value}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProfileMini = ({ icon: Icon, label, value }) => {
  return (
    <div className="rounded-2xl border border-[#E5E7EB] bg-[#FCFCFD] p-3">
      <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#6B7280]">
        <Icon className="text-[#C1121F]" />
        {label}
      </div>

      <p className="truncate text-sm font-black text-[#111827]">{value}</p>
    </div>
  );
};

export default DonorDashboard;