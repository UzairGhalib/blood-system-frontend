import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaAmbulance,
  FaCalendarAlt,
  FaClock,
  FaFilter,
  FaHandHoldingMedical,
  FaHeartbeat,
  FaHospital,
  FaMapMarkerAlt,
  FaNotesMedical,
  FaPhoneAlt,
  FaSearch,
  FaShieldAlt,
  FaTint,
  FaUserInjured,
  FaWhatsapp,
  FaArrowLeft,
  FaPlus,
} from "react-icons/fa";

const STORAGE_KEY = "bloodlinkRequests";

const dummyRequests = [
  {
    id: 1,
    requesterName: "Ammar Yousaf",
    cnic: "16101-0000011-1",
    patientName: "Patient A",
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
    id: 2,
    requesterName: "Hamza Iqbal",
    cnic: "16101-0000002-2",
    patientName: "Patient B",
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
    id: 3,
    requesterName: "Usman Shah",
    cnic: "16101-0000003-3",
    patientName: "Patient C",
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
    id: 4,
    requesterName: "Bilal Ahmed",
    cnic: "16101-0000004-4",
    patientName: "Patient D",
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
    id: 5,
    requesterName: "Faizan Noor",
    cnic: "16101-0000005-5",
    patientName: "Patient E",
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
    id: 6,
    requesterName: "Hassan Raza",
    cnic: "16101-0000006-6",
    patientName: "Patient F",
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
  {
    id: 7,
    requesterName: "Danish Khan",
    cnic: "16101-0000007-7",
    patientName: "Patient G",
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
    id: 8,
    requesterName: "Noman Ali",
    cnic: "16101-0000008-8",
    patientName: "Patient H",
    bloodGroup: "AB-",
    urgency: "Critical",
    status: "Active",
    location: "Tordher",
    city: "Swabi",
    hospital: "Tordher Health Center",
    phone: "+92 377 0000008",
    whatsapp: "+92 377 0000008",
    neededDate: "Today",
    distance: "8.8 km",
    units: 2,
    responseTime: "22m",
    verified: true,
    note: "Critical patient case. Donor required quickly.",
  },
  {
    id: 9,
    requesterName: "Waqas Alam",
    cnic: "16101-0000009-9",
    patientName: "Patient I",
    bloodGroup: "O+",
    urgency: "Normal",
    status: "Pending",
    location: "Bam Khel",
    city: "Swabi",
    hospital: "Bam Khel Clinic",
    phone: "+92 388 0000009",
    whatsapp: "+92 388 0000009",
    neededDate: "18 Apr",
    distance: "6.7 km",
    units: 1,
    responseTime: "35m",
    verified: false,
    note: "Blood needed for scheduled treatment.",
  },
  {
    id: 10,
    requesterName: "Sajid Khan",
    cnic: "16101-0000010-0",
    patientName: "Patient J",
    bloodGroup: "A+",
    urgency: "Urgent",
    status: "Active",
    location: "Gohati",
    city: "Swabi",
    hospital: "Gohati Medical Point",
    phone: "+92 399 0000010",
    whatsapp: "+92 399 0000010",
    neededDate: "Tomorrow",
    distance: "4.2 km",
    units: 2,
    responseTime: "16m",
    verified: true,
    note: "Blood required for patient recovery support.",
  },
  {
    id: 11,
    requesterName: "Zeeshan Malik",
    cnic: "16101-0000012-2",
    patientName: "Patient K",
    bloodGroup: "B+",
    urgency: "Normal",
    status: "Waiting",
    location: "Yar Hussain",
    city: "Swabi",
    hospital: "Yar Hussain Health Unit",
    phone: "+92 320 0000012",
    whatsapp: "+92 320 0000012",
    neededDate: "19 Apr",
    distance: "9.5 km",
    units: 1,
    responseTime: "28m",
    verified: true,
    note: "Blood support needed for admitted patient.",
  },
  {
    id: 12,
    requesterName: "Irfan Noor",
    cnic: "16101-0000013-3",
    patientName: "Patient L",
    bloodGroup: "O-",
    urgency: "Critical",
    status: "Active",
    location: "Lahor",
    city: "Swabi",
    hospital: "Lahor Medical Center",
    phone: "+92 331 0000013",
    whatsapp: "+92 331 0000013",
    neededDate: "Today",
    distance: "10.1 km",
    units: 3,
    responseTime: "9m",
    verified: true,
    note: "Rare blood group urgently required.",
  },
];

const bloodGroups = ["All", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const urgencyOptions = ["All", "Critical", "Urgent", "Normal"];

const floatingIcons = [
  { icon: FaTint, className: "left-[5%] top-[18%]", delay: 0 },
  { icon: FaHeartbeat, className: "right-[7%] top-[16%]", delay: 0.3 },
  { icon: FaHospital, className: "left-[12%] bottom-[18%]", delay: 0.6 },
  { icon: FaMapMarkerAlt, className: "right-[14%] bottom-[18%]", delay: 0.9 },
  { icon: FaPhoneAlt, className: "left-[42%] top-[10%]", delay: 1.2 },
  { icon: FaWhatsapp, className: "right-[4%] top-[48%]", delay: 1.5 },
  { icon: FaShieldAlt, className: "left-[4%] top-[55%]", delay: 1.8 },
  { icon: FaCalendarAlt, className: "right-[46%] bottom-[8%]", delay: 2.1 },
  { icon: FaClock, className: "left-[52%] bottom-[12%]", delay: 2.4 },
  { icon: FaAmbulance, className: "right-[28%] top-[8%]", delay: 2.7 },
];

const normalizeStoredRequest = (request, index) => {
  return {
    id: request.id || `submitted-${Date.now()}-${index}`,
    requesterName: request.requesterName || request.name || "New Requester",
    cnic: request.cnic || "Submitted from dashboard",
    patientName: request.patientName || "Patient",
    bloodGroup:
      request.bloodGroup || request.requiredBloodGroup || request.group || "A+",
    urgency: request.urgency || "Urgent",
    status: request.status || "Active",
    location: request.location || request.area || "Swabi",
    city: request.city || "Swabi",
    hospital: request.hospital || request.hospitalName || "Hospital not added",
    phone: request.phone || request.phoneNumber || "+92 300 0000000",
    whatsapp: request.whatsapp || request.whatsappNumber || request.phone || "+92 300 0000000",
    neededDate: request.neededDate || request.date || "Today",
    distance: request.distance || "Nearby",
    units: request.units || request.bloodUnits || 1,
    responseTime: request.responseTime || "New",
    verified: request.verified ?? false,
    note: request.note || request.description || "New request submitted from dashboard.",
    isSubmitted: true,
  };
};

const getStoredRequests = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return [];

    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) return [];

    return parsed.map(normalizeStoredRequest);
  } catch {
    return [];
  }
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

const RequestsPage = () => {
  const [storedRequests, setStoredRequests] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("All");
  const [selectedUrgency, setSelectedUrgency] = useState("All");

  useEffect(() => {
    setStoredRequests(getStoredRequests());
  }, []);

  const allRequests = useMemo(() => {
    return [...storedRequests, ...dummyRequests];
  }, [storedRequests]);

  const filteredRequests = useMemo(() => {
    return allRequests.filter((request) => {
      const searchValue = searchText.toLowerCase();

      const matchesSearch =
        request.requesterName.toLowerCase().includes(searchValue) ||
        request.patientName.toLowerCase().includes(searchValue) ||
        request.location.toLowerCase().includes(searchValue) ||
        request.city.toLowerCase().includes(searchValue) ||
        request.hospital.toLowerCase().includes(searchValue) ||
        request.bloodGroup.toLowerCase().includes(searchValue);

      const matchesBloodGroup =
        selectedBloodGroup === "All" || request.bloodGroup === selectedBloodGroup;

      const matchesUrgency =
        selectedUrgency === "All" || request.urgency === selectedUrgency;

      return matchesSearch && matchesBloodGroup && matchesUrgency;
    });
  }, [allRequests, searchText, selectedBloodGroup, selectedUrgency]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#FCFCFD]">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.12),transparent_34%),linear-gradient(135deg,#FCFCFD_0%,#FFF7F7_55%,#FEF2F2_100%)] pb-14 pt-28 sm:pb-20 sm:pt-32">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#C1121F]/15 blur-3xl"
            animate={{ scale: [1, 1.18, 1], opacity: [0.45, 0.75, 0.45] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute -right-28 bottom-12 h-96 w-96 rounded-full bg-[#EF4444]/15 blur-3xl"
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="absolute right-[22%] top-24 h-72 w-72 rounded-full bg-[#E0F2FE]/70 blur-3xl"
            animate={{ y: [0, 25, 0], opacity: [0.45, 0.7, 0.45] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full border border-[#C1121F]/10" />
          <div className="absolute left-1/2 top-8 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full border border-[#C1121F]/10" />
          <div className="absolute left-1/2 -top-8 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full border border-[#C1121F]/5" />

          {floatingIcons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                className={`absolute ${item.className} flex h-9 w-9 items-center justify-center rounded-2xl border border-[#E5E7EB]/80 bg-white/75 text-[#C1121F] shadow-sm backdrop-blur-md sm:h-12 sm:w-12`}
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
                <Icon className="text-base sm:text-xl" />
              </motion.div>
            );
          })}
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="mx-auto max-w-4xl text-center"
          >
            <Link
              to="/"
              className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-[#FECACA] bg-white/80 px-5 py-2 text-sm font-extrabold text-[#780000] shadow-sm backdrop-blur-md transition hover:bg-[#FEF2F2]"
            >
              <FaArrowLeft className="text-[#C1121F]" />
              Back to Home
            </Link>

            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-[#FECACA] bg-[#FEF2F2] px-5 py-2 text-sm font-semibold text-[#780000] shadow-sm">
              <FaAmbulance className="text-[#C1121F]" />
              Verified Requester Posts
            </div>

            <h1 className="text-4xl font-black tracking-tight text-[#111827] sm:text-5xl lg:text-6xl">
              Premium
              <span className="block text-[#C1121F]">Requester Feed</span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm font-semibold leading-7 text-[#6B7280] sm:text-base">
              Browse verified blood requests from requesters in a clean, premium feed with urgent needs and instant contact actions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-[#FCFCFD] py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="rounded-[2rem] border border-[#E5E7EB] bg-white p-4 shadow-[0_20px_70px_rgba(17,24,39,0.08)] sm:p-6"
          >
            <div className="grid gap-3 lg:grid-cols-[1fr_220px_220px]">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C1121F]" />
                <input
                  type="text"
                  value={searchText}
                  onChange={(event) => setSearchText(event.target.value)}
                  placeholder="Search requester, patient, blood group, hospital or location..."
                  className="h-14 w-full rounded-2xl border border-[#E5E7EB] bg-[#FCFCFD] pl-11 pr-4 text-sm font-bold text-[#111827] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#C1121F] focus:bg-white focus:ring-4 focus:ring-[#C1121F]/10"
                />
              </div>

              <div className="relative">
                <FaTint className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C1121F]" />
                <select
                  value={selectedBloodGroup}
                  onChange={(event) => setSelectedBloodGroup(event.target.value)}
                  className="h-14 w-full appearance-none rounded-2xl border border-[#E5E7EB] bg-[#FCFCFD] pl-11 pr-4 text-sm font-extrabold text-[#111827] outline-none transition focus:border-[#C1121F] focus:bg-white focus:ring-4 focus:ring-[#C1121F]/10"
                >
                  {bloodGroups.map((group) => (
                    <option key={group} value={group}>
                      {group === "All" ? "All Blood Groups" : group}
                    </option>
                  ))}
                </select>
              </div>

              <div className="relative">
                <FaFilter className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C1121F]" />
                <select
                  value={selectedUrgency}
                  onChange={(event) => setSelectedUrgency(event.target.value)}
                  className="h-14 w-full appearance-none rounded-2xl border border-[#E5E7EB] bg-[#FCFCFD] pl-11 pr-4 text-sm font-extrabold text-[#111827] outline-none transition focus:border-[#C1121F] focus:bg-white focus:ring-4 focus:ring-[#C1121F]/10"
                >
                  {urgencyOptions.map((urgency) => (
                    <option key={urgency} value={urgency}>
                      {urgency === "All" ? "All Urgency" : urgency}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {filteredRequests.length > 0 ? (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.08,
                  },
                },
              }}
              className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4"
            >
              {filteredRequests.map((requester) => (
                <RequesterCard key={requester.id} requester={requester} />
              ))}
            </motion.div>
          ) : (
            <div className="mt-10 rounded-[2rem] border border-dashed border-[#FECACA] bg-[#FEF2F2] p-10 text-center">
              <FaTint className="mx-auto text-5xl text-[#C1121F]" />
              <h3 className="mt-4 text-2xl font-black text-[#780000]">
                No Requests Found
              </h3>
              <p className="mx-auto mt-2 max-w-xl text-sm font-semibold text-[#6B7280]">
                Try changing your search, blood group, or urgency filter.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

const RequesterCard = ({ requester }) => {
  const whatsappNumber = requester.whatsapp.replace(/\D/g, "");
  const phoneNumber = requester.phone.replace(/\s/g, "");

  const whatsappMessage = encodeURIComponent(
    `Hello ${requester.requesterName}, I found your blood request on BloodLink. I want to help with ${requester.bloodGroup} blood support for ${requester.patientName}.`
  );

  return (
    <motion.article
      variants={{
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
      }}
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

      <div className="absolute right-4 top-4 text-[#C1121F]/10 sm:right-5 sm:top-5">
        <FaHeartbeat className="text-4xl sm:text-6xl" />
      </div>

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
              requester.urgency
            )}`}
          >
            {requester.urgency}
          </span>

          <span
            className={`rounded-full px-2 py-1 text-[9px] font-extrabold leading-none sm:px-3 sm:text-xs ${getStatusClass(
              requester.status
            )}`}
          >
            {requester.status}
          </span>
        </div>
      </div>

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

          {requester.isSubmitted && (
            <span className="inline-flex items-center gap-1 rounded-full bg-[#E0F2FE] px-2 py-1 text-[9px] font-bold leading-none text-[#0369A1] sm:px-2.5 sm:text-xs">
              New Post
            </span>
          )}
        </div>

        <p className="mt-1 break-words text-[10px] font-semibold leading-snug text-[#6B7280] sm:text-xs">
          ID: {requester.cnic}
        </p>

        <p className="mt-2 flex items-center gap-1.5 text-[10px] font-bold text-[#780000] sm:text-xs">
          <FaUserInjured className="text-[#C1121F]" />
          Patient: {requester.patientName}
        </p>
      </div>

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

      <div className="relative mt-4 grid grid-cols-2 gap-2 sm:mt-5">
        <MiniInfo icon={FaCalendarAlt} title="Need" value={requester.neededDate} />
        <MiniInfo icon={FaMapMarkerAlt} title="Dist" value={requester.distance} />
        <MiniInfo icon={FaTint} title="Units" value={`${requester.units}x`} />
        <MiniInfo icon={FaClock} title="Reply" value={requester.responseTime} />
      </div>

      <div className="relative mt-4 rounded-2xl border border-[#FECACA] bg-[#FEF2F2] p-3">
        <div className="flex items-start gap-2">
          <FaNotesMedical className="mt-0.5 shrink-0 text-[#C1121F]" />

          <p className="line-clamp-2 text-[10px] font-bold leading-5 text-[#780000] sm:text-xs">
            {requester.note}
          </p>
        </div>
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
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.96 }}
          className="relative flex min-h-[42px] items-center justify-center gap-1.5 overflow-hidden rounded-2xl bg-[#C1121F] px-2.5 py-2.5 text-[11px] font-extrabold text-white shadow-lg shadow-[#C1121F]/25 transition before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-transform before:duration-700 hover:bg-[#780000] hover:before:translate-x-full sm:col-span-3 sm:gap-2 sm:px-4 sm:py-3 sm:text-sm"
        >
          <FaHandHoldingMedical className="relative z-10 shrink-0" />
          <span className="relative z-10 truncate whitespace-nowrap">
            Help Request
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

export default RequestsPage;
 