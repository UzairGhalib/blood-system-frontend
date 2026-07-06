import React from "react";
import { Link } from "react-router-dom";
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
  FaAmbulance,
  FaUserInjured,
  FaNotesMedical,
  FaArrowRight,
} from "react-icons/fa";

const dummyRequesters = [
  {
    id: 1,
    requesterName: "Danish Khan",
    cnic: "16101-0000007-7",
    patientName: "Patient A",
    bloodGroup: "B-",
    urgency: "Critical",
    status: "Active",
    location: "Chota Lahor",
    city: "Swabi",
    hospital: "Chota Lahor Medical Center",
    phone: "+92 366 0000007",
    whatsapp: "+92 366 0000007",
    neededDate: "14 Apr",
    distance: "11.2 km",
    units: 2,
    responseTime: "30m",
    verified: true,
    note: "Patient needs urgent blood support.",
  },
  {
    id: 2,
    requesterName: "Ammar Yousaf",
    cnic: "16101-0000011-1",
    patientName: "Patient B",
    bloodGroup: "A+",
    urgency: "Urgent",
    status: "Active",
    location: "Main Swabi",
    city: "Swabi",
    hospital: "Swabi Medical Complex",
    phone: "+92 300 0000011",
    whatsapp: "+92 300 0000011",
    neededDate: "Today",
    distance: "2.1 km",
    units: 1,
    responseTime: "12m",
    verified: true,
    note: "Blood required before evening.",
  },
  {
    id: 3,
    requesterName: "Hamza Iqbal",
    cnic: "16101-0000002-2",
    patientName: "Patient C",
    bloodGroup: "O+",
    urgency: "Critical",
    status: "Waiting",
    location: "Topi",
    city: "Swabi",
    hospital: "Topi Civil Hospital",
    phone: "+92 311 0000002",
    whatsapp: "+92 311 0000002",
    neededDate: "Today",
    distance: "7.4 km",
    units: 3,
    responseTime: "18m",
    verified: true,
    note: "Emergency surgery case.",
  },
  {
    id: 4,
    requesterName: "Usman Shah",
    cnic: "16101-0000003-3",
    patientName: "Patient D",
    bloodGroup: "AB+",
    urgency: "Normal",
    status: "Pending",
    location: "Shewa Adda",
    city: "Swabi",
    hospital: "Shewa Health Unit",
    phone: "+92 322 0000003",
    whatsapp: "+92 322 0000003",
    neededDate: "Tomorrow",
    distance: "5.1 km",
    units: 1,
    responseTime: "25m",
    verified: false,
    note: "Blood needed for patient treatment.",
  },
  {
    id: 5,
    requesterName: "Bilal Ahmed",
    cnic: "16101-0000004-4",
    patientName: "Patient E",
    bloodGroup: "O-",
    urgency: "Critical",
    status: "Active",
    location: "Kotha",
    city: "Swabi",
    hospital: "Kotha Medical Care",
    phone: "+92 333 0000004",
    whatsapp: "+92 333 0000004",
    neededDate: "Today",
    distance: "3.6 km",
    units: 2,
    responseTime: "10m",
    verified: true,
    note: "Rare blood group needed urgently.",
  },
  {
    id: 6,
    requesterName: "Faizan Noor",
    cnic: "16101-0000005-5",
    patientName: "Patient F",
    bloodGroup: "A-",
    urgency: "Urgent",
    status: "Waiting",
    location: "Maneri",
    city: "Swabi",
    hospital: "Maneri Health Center",
    phone: "+92 344 0000005",
    whatsapp: "+92 344 0000005",
    neededDate: "16 Apr",
    distance: "2.3 km",
    units: 1,
    responseTime: "15m",
    verified: true,
    note: "Patient needs blood for operation.",
  },
  {
    id: 7,
    requesterName: "Hassan Raza",
    cnic: "16101-0000006-6",
    patientName: "Patient G",
    bloodGroup: "B+",
    urgency: "Urgent",
    status: "Active",
    location: "Zaida",
    city: "Swabi",
    hospital: "Zaida Medical Unit",
    phone: "+92 355 0000006",
    whatsapp: "+92 355 0000006",
    neededDate: "17 Apr",
    distance: "4.9 km",
    units: 2,
    responseTime: "20m",
    verified: true,
    note: "Blood required for admitted patient.",
  },
];

const floatingIcons = [
  { icon: FaTint, className: "left-[6%] top-[16%]", delay: 0 },
  { icon: FaHeartbeat, className: "right-[9%] top-[18%]", delay: 0.4 },
  { icon: FaHospital, className: "left-[16%] bottom-[16%]", delay: 0.8 },
  { icon: FaMapMarkerAlt, className: "right-[18%] bottom-[20%]", delay: 1.1 },
  { icon: FaPhoneAlt, className: "left-[44%] top-[10%]", delay: 1.4 },
  { icon: FaWhatsapp, className: "right-[4%] top-[46%]", delay: 1.7 },
  { icon: FaShieldAlt, className: "left-[5%] top-[54%]", delay: 2.0 },
  { icon: FaCalendarAlt, className: "right-[46%] bottom-[10%]", delay: 2.2 },
  { icon: FaClock, className: "left-[50%] bottom-[8%]", delay: 2.5 },
  { icon: FaHandHoldingMedical, className: "right-[30%] top-[8%]", delay: 2.8 },
];

const MotionLink = motion(Link);

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const getUrgencyClass = (urgency) => {
  if (urgency === "Critical") {
    return "bg-[#FEF2F2] text-[#C1121F] border-[#FECACA]";
  }

  if (urgency === "Urgent") {
    return "bg-[#FFFBEB] text-[#B45309] border-[#FDE68A]";
  }

  return "bg-[#DCFCE7] text-[#16A34A] border-[#BBF7D0]";
};

const getStatusClass = (status) => {
  if (status === "Active") {
    return "bg-[#DCFCE7] text-[#16A34A]";
  }

  if (status === "Waiting") {
    return "bg-[#FFFBEB] text-[#B45309]";
  }

  return "bg-[#FEF2F2] text-[#C1121F]";
};

const RequesterRequestsSection = () => {
  const displayedRequests = dummyRequesters.slice(0, 7);

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.08),transparent_35%),linear-gradient(135deg,#FCFCFD_0%,#FFF8F8_100%)] py-20 sm:py-24">
      {/* Animated Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#C1121F]/15 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.45, 0.7, 0.45] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute -right-24 bottom-20 h-96 w-96 rounded-full bg-[#EF4444]/15 blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.75, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute right-[20%] top-24 h-72 w-72 rounded-full bg-[#E0F2FE]/70 blur-3xl"
          animate={{ y: [0, 25, 0], opacity: [0.45, 0.7, 0.45] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute left-1/2 top-32 h-72 w-72 -translate-x-1/2 rounded-full border border-[#C1121F]/10" />
        <div className="absolute left-1/2 top-20 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full border border-[#C1121F]/10" />
        <div className="absolute left-1/2 top-8 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full border border-[#C1121F]/5" />

        {floatingIcons.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              className={`absolute ${item.className} flex h-9 w-9 items-center justify-center rounded-2xl border border-[#E5E7EB]/80 bg-white/70 text-[#C1121F] shadow-sm backdrop-blur-md sm:h-11 sm:w-11`}
              animate={{
                y: [0, -14, 0],
                rotate: [0, 4, 0],
                opacity: [0.55, 0.9, 0.55],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: item.delay,
                ease: "easeInOut",
              }}
            >
              <Icon className="text-base sm:text-xl" />
            </motion.div>
          );
        })}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-[#FECACA] bg-[#FEF2F2] px-5 py-2 text-sm font-semibold text-[#780000] shadow-sm">
            <FaAmbulance className="text-[#C1121F]" />
            Live Blood Requests
          </div>

          <h2 className="text-4xl font-black tracking-tight text-[#111827] sm:text-5xl lg:text-6xl">
            Patients Need <span className="text-[#C1121F]">Blood Support</span>{" "}
            Near You
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold leading-7 text-[#6B7280] sm:text-base">
            View urgent dummy blood requests from requesters in Swabi and help
            connect patients with suitable donors faster.
          </p>
        </motion.div>

        {/* Requester Cards */}
        <motion.div
          className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {displayedRequests.map((requester) => (
            <RequesterCard key={requester.id} requester={requester} />
          ))}
        </motion.div>

        {/* Show All Button */}
        <div className="mt-8 flex justify-center">
          <MotionLink
            to="/requests"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#C1121F] px-7 py-4 text-sm font-extrabold text-white shadow-lg shadow-[#C1121F]/25 transition before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-transform before:duration-700 hover:bg-[#780000] hover:before:translate-x-full"
          >
            <span className="relative z-10">Show All Requests</span>
            <FaArrowRight className="relative z-10" />
          </MotionLink>
        </div>
      </div>
    </section>
  );
};

const RequesterCard = ({ requester }) => {
  const whatsappNumber = requester.whatsapp.replace(/\D/g, "");
  const phoneNumber = requester.phone.replace(/\s/g, "");

  const whatsappMessage = encodeURIComponent(
    `Hello ${requester.requesterName}, I found your dummy blood request on BloodLink. I want to help with ${requester.bloodGroup} blood support for ${requester.patientName}.`,
  );

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -8, scale: 1.01 }}
      className="group relative isolate overflow-hidden rounded-[1.4rem] border border-[#E5E7EB] bg-white p-3 shadow-[0_20px_60px_rgba(17,24,39,0.08)] transition hover:border-[#FECACA] hover:shadow-[0_26px_80px_rgba(193,18,31,0.14)] sm:rounded-[2rem] sm:p-5"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[1.4rem] bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.12),transparent_45%),linear-gradient(135deg,#fffdfd_0%,#fff7f7_100%)] sm:rounded-[2rem]"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#FECACA]/70 blur-2xl"
        animate={{ y: [0, -10, 0], opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="pointer-events-none absolute bottom-4 left-4 h-16 w-16 rounded-full bg-[#C1121F]/10 blur-2xl"
        animate={{ x: [0, 8, 0], opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute right-4 top-4 text-[#C1121F]/10 sm:right-5 sm:top-5">
        <FaHeartbeat className="text-4xl sm:text-6xl" />
      </div>

      {/* Top */}
      <div className="relative flex items-start justify-between gap-2 sm:gap-4">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#C1121F] text-base font-black text-white shadow-lg shadow-[#C1121F]/30 sm:h-16 sm:w-16 sm:rounded-3xl sm:text-xl"
        >
          {requester.bloodGroup}
        </motion.div>

        <div className="flex flex-col items-end gap-1">
          <span
            className={`rounded-full border px-2 py-1 text-[9px] font-extrabold leading-none sm:px-3 sm:text-xs ${getUrgencyClass(
              requester.urgency,
            )}`}
          >
            {requester.urgency}
          </span>

          <span
            className={`rounded-full px-2 py-1 text-[9px] font-extrabold leading-none sm:px-3 sm:text-xs ${getStatusClass(
              requester.status,
            )}`}
          >
            {requester.status}
          </span>
        </div>
      </div>

      {/* Requester Info */}
      <div className="relative mt-4 sm:mt-5">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <h3 className="text-sm font-extrabold leading-tight text-[#111827] sm:text-lg">
            {requester.requesterName}
          </h3>

          {requester.verified && (
            <span className="inline-flex items-center gap-1 rounded-full bg-[#DCFCE7] px-2 py-1 text-[9px] font-bold leading-none text-[#16A34A] sm:px-2.5 sm:text-xs">
              <FaShieldAlt />
              Verified
            </span>
          )}
        </div>

        <p className="mt-1 break-words text-[10px] font-semibold leading-snug text-[#6B7280] sm:text-xs">
          Dummy CNIC ID: {requester.cnic}
        </p>

        <p className="mt-2 flex items-center gap-1.5 text-[10px] font-bold text-[#780000] sm:text-xs">
          <FaUserInjured className="text-[#C1121F]" />
          Patient: {requester.patientName}
        </p>
      </div>

      {/* Contact Info */}
      <div className="relative mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
        <InfoRow icon={FaHospital} label={requester.hospital} />

        <InfoRow
          icon={FaMapMarkerAlt}
          label={`${requester.location}, ${requester.city}`}
        />

        <InfoRow icon={FaPhoneAlt} label={requester.phone} />

        <InfoRow
          icon={FaWhatsapp}
          label={requester.whatsapp}
          iconClassName="text-[#16A34A]"
        />
      </div>

      {/* Mini Stats */}
      <div className="relative mt-4 grid grid-cols-2 gap-2 sm:mt-5">
        <MiniInfo
          icon={FaCalendarAlt}
          title="Need"
          value={requester.neededDate}
        />

        <MiniInfo
          icon={FaMapMarkerAlt}
          title="Dist"
          value={requester.distance}
        />

        <MiniInfo icon={FaTint} title="Units" value={`${requester.units}x`} />

        <MiniInfo icon={FaClock} title="Reply" value={requester.responseTime} />
      </div>

      {/* Note */}
      <div className="relative mt-4 rounded-2xl border border-[#FECACA] bg-[#FEF2F2] p-3">
        <div className="flex items-start gap-2">
          <FaNotesMedical className="mt-0.5 shrink-0 text-[#C1121F]" />

          <p className="line-clamp-2 text-[10px] font-bold leading-5 text-[#780000] sm:text-xs">
            {requester.note}
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="relative mt-4 grid gap-2 sm:mt-5 sm:grid-cols-3">
        <motion.a
          href={`tel:${phoneNumber}`}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.96 }}
          className="flex min-h-[42px] items-center justify-center gap-1.5 rounded-2xl border border-[#C1121F] bg-white px-2.5 py-2.5 text-[11px] font-extrabold text-[#C1121F] transition hover:bg-[#FEF2F2] sm:gap-2 sm:px-4 sm:py-3 sm:text-sm"
        >
          <FaPhoneAlt className="shrink-0" />
          <span className="truncate whitespace-nowrap">Call</span>
        </motion.a>

        <motion.a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.96 }}
          className="flex min-h-[42px] min-w-0 items-center justify-center gap-1.5 rounded-2xl bg-[#16A34A] px-2.5 py-2.5 text-[10px] font-extrabold leading-none text-white shadow-lg shadow-[#16A34A]/20 transition hover:bg-[#12803A] sm:gap-2 sm:px-4 sm:py-3 sm:text-xs xl:text-sm"
        >
          <FaWhatsapp className="shrink-0 text-sm sm:text-base" />
          <span className="min-w-0 truncate whitespace-nowrap">WhatsApp</span>
        </motion.a>

        <MotionLink
          to="/find-donors"
          state={{ requester }}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.96 }}
          className="relative flex min-h-[42px] items-center justify-center gap-1.5 overflow-hidden rounded-2xl bg-[#C1121F] px-2.5 py-2.5 text-[11px] font-extrabold text-white shadow-lg shadow-[#C1121F]/25 transition before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-transform before:duration-700 hover:bg-[#780000] hover:before:translate-x-full sm:col-span-3 sm:gap-2 sm:px-4 sm:py-3 sm:text-sm"
        >
          <FaHandHoldingMedical className="relative z-10 shrink-0" />

          <span className="relative z-10 truncate whitespace-nowrap">
            Help Request
          </span>
        </MotionLink>
      </div>
    </motion.article>
  );
};

const InfoRow = ({ icon: Icon, label, iconClassName = "text-[#C1121F]" }) => {
  return (
    <div className="flex min-w-0 items-center gap-2 text-[10px] font-semibold text-[#6B7280] sm:gap-3 sm:text-sm">
      <span
        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-[#FEF2F2] text-xs sm:h-9 sm:w-9 sm:text-base ${iconClassName}`}
      >
        <Icon />
      </span>

      <span className="min-w-0 truncate">{label}</span>
    </div>
  );
};

const MiniInfo = ({ icon: Icon, title, value }) => {
  return (
    <div className="rounded-2xl border border-[#E5E7EB]/80 bg-[#FCFCFD]/95 p-2 sm:p-3">
      <div className="mb-1 flex items-center gap-1 text-[9px] font-bold uppercase tracking-wide text-[#6B7280] sm:mb-1.5 sm:gap-1.5 sm:text-xs">
        <Icon className="shrink-0 text-[#C1121F]" />
        <span className="truncate">{title}</span>
      </div>

      <p className="truncate text-[11px] font-extrabold leading-tight text-[#111827] sm:text-sm">
        {value}
      </p>
    </div>
  );
};

export default RequesterRequestsSection;
