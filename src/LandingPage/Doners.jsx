import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTint,
  FaHeartbeat,
  FaHospital,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaShieldAlt,
  FaSearch,
  FaCalendarAlt,
  FaClock,
  FaHandHoldingMedical,
  FaRedoAlt,
  FaChevronDown,
  FaPlus,
  FaFilter,
} from "react-icons/fa";

const bloodGroups = ["All", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const availabilityOptions = ["All", "Available", "Busy", "Recently Donated"];

const locations = [
  "All Swabi",
  "Main Swabi",
  "Topi",
  "Shewa Adda",
  "Kotha",
  "Maneri",
  "Zaida",
  "Chota Lahor",
  "Gohati",
  "Yar Hussain",
];

const dummyDonors = [
  {
    id: 1,
    cnic: "16101-0000001-1",
    name: "Ali Khan",
    bloodGroup: "A+",
    location: "Main Swabi",
    city: "Swabi",
    phone: "+92 300 0000001",
    whatsapp: "+92 300 0000001",
    availability: "Available",
    lastDonationDate: "12 May 2026",
    distance: "1.8 km",
    totalDonations: 6,
    responseTime: "Usually replies in 8 min",
    verified: true,
  },
  {
    id: 2,
    cnic: "16101-0000002-2",
    name: "Hamza Iqbal",
    bloodGroup: "O+",
    location: "Topi",
    city: "Swabi",
    phone: "+92 311 0000002",
    whatsapp: "+92 311 0000002",
    availability: "Available",
    lastDonationDate: "28 Apr 2026",
    distance: "7.4 km",
    totalDonations: 9,
    responseTime: "Usually replies in 12 min",
    verified: true,
  },
  {
    id: 3,
    cnic: "16101-0000003-3",
    name: "Usman Shah",
    bloodGroup: "B+",
    location: "Shewa Adda",
    city: "Swabi",
    phone: "+92 322 0000003",
    whatsapp: "+92 322 0000003",
    availability: "Busy",
    lastDonationDate: "03 Mar 2026",
    distance: "5.1 km",
    totalDonations: 4,
    responseTime: "Usually replies in 25 min",
    verified: false,
  },
  {
    id: 4,
    cnic: "16101-0000004-4",
    name: "Bilal Ahmed",
    bloodGroup: "AB+",
    location: "Kotha",
    city: "Swabi",
    phone: "+92 333 0000004",
    whatsapp: "+92 333 0000004",
    availability: "Recently Donated",
    lastDonationDate: "18 Jun 2026",
    distance: "3.6 km",
    totalDonations: 3,
    responseTime: "Usually replies in 18 min",
    verified: true,
  },
  {
    id: 5,
    cnic: "16101-0000005-5",
    name: "Faizan Noor",
    bloodGroup: "A-",
    location: "Maneri",
    city: "Swabi",
    phone: "+92 344 0000005",
    whatsapp: "+92 344 0000005",
    availability: "Available",
    lastDonationDate: "21 Feb 2026",
    distance: "2.3 km",
    totalDonations: 7,
    responseTime: "Usually replies in 10 min",
    verified: true,
  },
  {
    id: 6,
    cnic: "16101-0000006-6",
    name: "Hassan Raza",
    bloodGroup: "O-",
    location: "Zaida",
    city: "Swabi",
    phone: "+92 355 0000006",
    whatsapp: "+92 355 0000006",
    availability: "Available",
    lastDonationDate: "09 Jan 2026",
    distance: "4.9 km",
    totalDonations: 11,
    responseTime: "Usually replies in 6 min",
    verified: true,
  },
  {
    id: 7,
    cnic: "16101-0000007-7",
    name: "Danish Khan",
    bloodGroup: "B-",
    location: "Chota Lahor",
    city: "Swabi",
    phone: "+92 366 0000007",
    whatsapp: "+92 366 0000007",
    availability: "Busy",
    lastDonationDate: "14 Apr 2026",
    distance: "11.2 km",
    totalDonations: 5,
    responseTime: "Usually replies in 30 min",
    verified: false,
  },
  {
    id: 8,
    cnic: "16101-0000008-8",
    name: "Owais Malik",
    bloodGroup: "AB-",
    location: "Gohati",
    city: "Swabi",
    phone: "+92 377 0000008",
    whatsapp: "+92 377 0000008",
    availability: "Available",
    lastDonationDate: "02 May 2026",
    distance: "8.6 km",
    totalDonations: 2,
    responseTime: "Usually replies in 15 min",
    verified: true,
  },
  {
    id: 9,
    cnic: "16101-0000009-9",
    name: "Zeeshan Ali",
    bloodGroup: "A+",
    location: "Yar Hussain",
    city: "Swabi",
    phone: "+92 388 0000009",
    whatsapp: "+92 388 0000009",
    availability: "Recently Donated",
    lastDonationDate: "20 Jun 2026",
    distance: "12.8 km",
    totalDonations: 8,
    responseTime: "Usually replies in 20 min",
    verified: true,
  },
  {
    id: 10,
    cnic: "16101-0000010-0",
    name: "Saad Rehman",
    bloodGroup: "O+",
    location: "Tordher",
    city: "Swabi",
    phone: "+92 399 0000010",
    whatsapp: "+92 399 0000010",
    availability: "Available",
    lastDonationDate: "16 Mar 2026",
    distance: "10.3 km",
    totalDonations: 10,
    responseTime: "Usually replies in 9 min",
    verified: true,
  },
  {
    id: 11,
    cnic: "16101-0000011-1",
    name: "Ammar Yousaf",
    bloodGroup: "B+",
    location: "Marghuz",
    city: "Swabi",
    phone: "+92 300 0000011",
    whatsapp: "+92 300 0000011",
    availability: "Busy",
    lastDonationDate: "04 Feb 2026",
    distance: "6.7 km",
    totalDonations: 4,
    responseTime: "Usually replies in 35 min",
    verified: false,
  },
  {
    id: 12,
    cnic: "16101-0000012-2",
    name: "Noman Tariq",
    bloodGroup: "A-",
    location: "Bam Khel",
    city: "Swabi",
    phone: "+92 311 0000012",
    whatsapp: "+92 311 0000012",
    availability: "Available",
    lastDonationDate: "25 Apr 2026",
    distance: "9.5 km",
    totalDonations: 6,
    responseTime: "Usually replies in 14 min",
    verified: true,
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

const getAvailabilityClass = (availability) => {
  if (availability === "Available") {
    return "bg-[#DCFCE7] text-[#16A34A] border-[#BBF7D0]";
  }

  if (availability === "Busy") {
    return "bg-[#FFFBEB] text-[#B45309] border-[#FDE68A]";
  }

  return "bg-[#FEF2F2] text-[#780000] border-[#FECACA]";
};

const DonorDirectorySection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("All");
  const [selectedAvailability, setSelectedAvailability] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All Swabi");
  const [showFilters, setShowFilters] = useState(false);

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedBloodGroup("All");
    setSelectedAvailability("All");
    setSelectedLocation("All Swabi");
  };

  const filteredDonors = dummyDonors.filter((donor) => {
    const searchValue = searchTerm.toLowerCase();

    const matchesSearch =
      donor.name.toLowerCase().includes(searchValue) ||
      donor.location.toLowerCase().includes(searchValue) ||
      donor.bloodGroup.toLowerCase().includes(searchValue);

    const matchesBloodGroup =
      selectedBloodGroup === "All" || donor.bloodGroup === selectedBloodGroup;

    const matchesAvailability =
      selectedAvailability === "All" ||
      donor.availability === selectedAvailability;

    const matchesLocation =
      selectedLocation === "All Swabi" || donor.location === selectedLocation;

    return (
      matchesSearch &&
      matchesBloodGroup &&
      matchesAvailability &&
      matchesLocation
    );
  });

  const displayedDonors = filteredDonors.slice(0, 7);

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
          className="mx-auto mt-8 max-w-4xl text-center"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-[#FECACA] bg-[#FEF2F2] px-5 py-2 text-sm font-semibold text-[#780000] shadow-sm">
            <FaShieldAlt className="text-[#C1121F]" />
            Emergency Donor Directory
          </div>

          <h2 className="text-4xl font-black tracking-tight text-[#111827] sm:text-5xl lg:text-6xl">
            Find Trusted{" "}
            <span className="text-[#C1121F]">Blood Donors</span> in Your Area
          </h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="mt-8 rounded-[2rem] border border-[#E5E7EB] bg-white/85 p-4 shadow-[0_24px_70px_rgba(17,24,39,0.08)] backdrop-blur-xl"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <div className="relative flex-1">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]" />
              <input
                type="text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search donor, area, or blood group"
                className="h-12 w-full rounded-2xl border border-[#E5E7EB] bg-[#FCFCFD] pl-11 pr-4 text-sm font-medium text-[#111827] outline-none transition focus:border-[#C1121F] focus:bg-white focus:ring-4 focus:ring-[#C1121F]/10"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <motion.button
                type="button"
                onClick={() => setShowFilters((prev) => !prev)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex h-12 items-center justify-center gap-2 rounded-2xl border border-[#E5E7EB] bg-white px-5 text-sm font-bold text-[#780000] transition hover:border-[#C1121F] hover:bg-[#FEF2F2]"
              >
                <FaFilter />
                Filter
              </motion.button>

              <motion.a
                href="/requests"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="relative flex h-12 items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[#C1121F] px-5 text-sm font-bold text-white shadow-lg shadow-[#C1121F]/25 transition before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-transform before:duration-700 hover:bg-[#780000] hover:before:translate-x-full"
              >
                <FaPlus className="relative z-10" />
                <span className="relative z-10 whitespace-nowrap">
                  Create Request
                </span>
              </motion.a>
            </div>
          </div>

          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  <SelectField
                    value={selectedBloodGroup}
                    onChange={setSelectedBloodGroup}
                    options={bloodGroups}
                  />

                  <SelectField
                    value={selectedAvailability}
                    onChange={setSelectedAvailability}
                    options={availabilityOptions}
                  />

                  <SelectField
                    value={selectedLocation}
                    onChange={setSelectedLocation}
                    options={locations}
                  />

                  <motion.button
                    type="button"
                    onClick={resetFilters}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex h-12 items-center justify-center gap-2 rounded-2xl border border-[#E5E7EB] bg-white px-5 text-sm font-bold text-[#780000] transition hover:border-[#C1121F] hover:bg-[#FEF2F2]"
                  >
                    <FaRedoAlt />
                    Reset
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Donor Cards */}
        {displayedDonors.length > 0 ? (
          <>
            <motion.div
              className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {displayedDonors.map((donor) => (
                <DonorCard key={donor.id} donor={donor} />
              ))}
            </motion.div>

            <div className="mt-6 flex justify-center">
              <Link
                to="/find-donors"
                className="inline-flex items-center justify-center rounded-full bg-[#C1121F] px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-[#C1121F]/25 transition hover:bg-[#780000]"
              >
                View All Donors
              </Link>
            </div>
          </>
        ) : (
          <EmptyState resetFilters={resetFilters} />
        )}
      </div>
    </section>
  );
};

const SelectField = ({ value, onChange, options }) => {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full appearance-none rounded-2xl border border-[#E5E7EB] bg-[#FCFCFD] px-4 pr-10 text-sm font-bold text-[#111827] outline-none transition focus:border-[#C1121F] focus:bg-white focus:ring-4 focus:ring-[#C1121F]/10"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#6B7280]" />
    </div>
  );
};

const DonorCard = ({ donor }) => {
  const whatsappNumber = donor.whatsapp.replace(/\D/g, "");
  const phoneNumber = donor.phone.replace(/\s/g, "");
  const whatsappMessage = encodeURIComponent(
    `Hello ${donor.name}, I found your dummy donor profile on BloodLink. I need ${donor.bloodGroup} blood support in Swabi.`
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

      <div className="relative flex items-start justify-between gap-2 sm:gap-4">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#C1121F] text-base font-black text-white shadow-lg shadow-[#C1121F]/30 sm:h-16 sm:w-16 sm:rounded-3xl sm:text-xl"
        >
          {donor.bloodGroup}
        </motion.div>

        <span
          className={`rounded-full border px-2 py-1 text-[9px] font-extrabold leading-none sm:px-3 sm:text-xs ${getAvailabilityClass(
            donor.availability
          )}`}
        >
          {donor.availability}
        </span>
      </div>

      <div className="relative mt-4 sm:mt-5">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <h3 className="text-sm font-extrabold leading-tight text-[#111827] sm:text-lg">
            {donor.name}
          </h3>

          {donor.verified && (
            <span className="inline-flex items-center gap-1 rounded-full bg-[#DCFCE7] px-2 py-1 text-[9px] font-bold leading-none text-[#16A34A] sm:px-2.5 sm:text-xs">
              <FaShieldAlt />
              Verified
            </span>
          )}
        </div>

        <p className="mt-1 break-words text-[10px] font-semibold leading-snug text-[#6B7280] sm:text-xs">
          Dummy CNIC ID: {donor.cnic}
        </p>
      </div>

      <div className="relative mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
        <InfoRow
          icon={FaMapMarkerAlt}
          label={`${donor.location}, ${donor.city}`}
        />
        <InfoRow icon={FaPhoneAlt} label={donor.phone} />
        <InfoRow
          icon={FaWhatsapp}
          label={donor.whatsapp}
          iconClassName="text-[#16A34A]"
        />
      </div>

      <div className="relative mt-4 grid grid-cols-2 gap-2 sm:mt-5">
        <MiniInfo
          icon={FaCalendarAlt}
          title="Last"
          value={donor.lastDonationDate.replace("2026", "").trim()}
        />
        <MiniInfo icon={FaMapMarkerAlt} title="Dist" value={donor.distance} />
        <MiniInfo icon={FaTint} title="Don" value={`${donor.totalDonations}x`} />
        <MiniInfo
          icon={FaClock}
          title="Reply"
          value={donor.responseTime
            .replace("Usually replies in ", "")
            .replace(" min", "m")}
        />
      </div>

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

        <motion.a
          href="/requests"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.96 }}
          className="relative flex min-h-[42px] items-center justify-center gap-1.5 overflow-hidden rounded-2xl bg-[#C1121F] px-2.5 py-2.5 text-[11px] font-extrabold text-white shadow-lg shadow-[#C1121F]/25 transition before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-transform before:duration-700 hover:bg-[#780000] hover:before:translate-x-full sm:col-span-3 sm:gap-2 sm:px-4 sm:py-3 sm:text-sm"
        >
          <FaHandHoldingMedical className="relative z-10 shrink-0" />
          <span className="relative z-10 truncate whitespace-nowrap">
            Request Blood
          </span>
        </motion.a>
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

const EmptyState = ({ resetFilters }) => {
  return (
    <motion.div
      className="mt-10 rounded-[2rem] border border-[#E5E7EB] bg-white px-6 py-16 text-center shadow-[0_20px_60px_rgba(17,24,39,0.08)]"
      variants={fadeUpVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-[#FEF2F2] text-[#C1121F]">
        <FaSearch className="text-3xl" />
      </div>

      <h3 className="mt-5 text-2xl font-extrabold text-[#111827]">
        No matching donors found
      </h3>

      <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-[#6B7280]">
        Try changing your blood group, location, availability, or search keyword
        to find more dummy donor profiles.
      </p>

      <motion.button
        type="button"
        onClick={resetFilters}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="mt-6 rounded-2xl bg-[#C1121F] px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-[#C1121F]/25 transition hover:bg-[#780000]"
      >
        Reset Filters
      </motion.button>
    </motion.div>
  );
};

export default DonorDirectorySection;