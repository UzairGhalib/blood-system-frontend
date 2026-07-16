import { useEffect, useMemo, useState } from "react";
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
  FaBell,
  FaAward,
  FaEdit,
  FaAmbulance,
  FaStethoscope,
  FaSave,
  FaTimes,
  FaUndo,
  FaUser,
  FaHome,
  FaNotesMedical,
  FaCheckCircle,
  FaLocationArrow,
} from "react-icons/fa";

const STORAGE_KEY = "bloodlinkDonorProfile";

const defaultDonorProfile = {
  name: "Ali Khan",
  bloodGroup: "A+",
  location: "Main Swabi",
  city: "Swabi",
  fullAddress: "Near Main Bazaar, Swabi",
  phone: "+92 300 0000001",
  whatsapp: "+92 300 0000001",
  email: "ali.donor@bloodlink.com",
  age: "24",
  gender: "Male",
  availability: "Available",
  verified: true,
  lastDonation: "12 May 2026",
  nextEligible: "12 Aug 2026",
  totalDonations: "6",
  livesHelped: "18",
  responseRate: "96%",
  avgReply: "8 min",
  medicalStatus: "Healthy",
  preferredContactTime: "Anytime",
  notes: "Available for emergency blood donation requests in Swabi.",
};

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const floatingIcons = [
  { icon: FaTint, className: "left-[5%] top-[15%]", delay: 0 },
  { icon: FaHeartbeat, className: "right-[7%] top-[18%]", delay: 0.4 },
  { icon: FaHospital, className: "left-[12%] bottom-[20%]", delay: 0.8 },
  { icon: FaWhatsapp, className: "right-[10%] bottom-[18%]", delay: 1.2 },
  { icon: FaShieldAlt, className: "left-[45%] top-[8%]", delay: 1.6 },
  { icon: FaAmbulance, className: "right-[32%] top-[12%]", delay: 2 },
  { icon: FaCalendarAlt, className: "left-[35%] bottom-[8%]", delay: 2.3 },
  { icon: FaStethoscope, className: "right-[45%] bottom-[10%]", delay: 2.7 },
  { icon: FaPhoneAlt, className: "left-[7%] top-[48%]", delay: 3 },
  { icon: FaLocationArrow, className: "right-[20%] top-[45%]", delay: 3.3 },
];

const getStoredProfile = () => {
  try {
    const savedProfile = localStorage.getItem(STORAGE_KEY);

    if (!savedProfile) {
      return defaultDonorProfile;
    }

    return {
      ...defaultDonorProfile,
      ...JSON.parse(savedProfile),
    };
  } catch {
    return defaultDonorProfile;
  }
};

const DonorDashboard = () => {
  const [donorProfile, setDonorProfile] = useState(getStoredProfile);
  const [draftProfile, setDraftProfile] = useState(donorProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [savedMessage, setSavedMessage] = useState("");
  const [bloodRequests] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("bloodlinkRequests") || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setSavedMessage("");
    }, 2600);

    return () => clearTimeout(timer);
  }, [savedMessage]);

  const profileCompletion = useMemo(() => {
    const fields = [
      donorProfile.name,
      donorProfile.bloodGroup,
      donorProfile.location,
      donorProfile.city,
      donorProfile.fullAddress,
      donorProfile.phone,
      donorProfile.whatsapp,
      donorProfile.email,
      donorProfile.age,
      donorProfile.gender,
      donorProfile.lastDonation,
      donorProfile.nextEligible,
      donorProfile.medicalStatus,
      donorProfile.preferredContactTime,
    ];

    const completedFields = fields.filter(Boolean).length;

    return Math.round((completedFields / fields.length) * 100);
  }, [donorProfile]);

  const quickHighlights = useMemo(
    () => [
      {
        label: "Next Eligible",
        value: donorProfile.nextEligible,
        icon: FaCalendarAlt,
      },
      {
        label: "Response Time",
        value: donorProfile.avgReply,
        icon: FaClock,
      },
      {
        label: "Lives Helped",
        value: donorProfile.livesHelped,
        icon: FaHeartbeat,
      },
      {
        label: "Profile Complete",
        value: `${profileCompletion}%`,
        icon: FaShieldAlt,
      },
    ],
    [donorProfile, profileCompletion]
  );

  const whatsappNumber =
    String(donorProfile.whatsapp || donorProfile.phone).replace(/\D/g, "") ||
    "923000000001";

  const handleEditProfile = () => {
    setDraftProfile(donorProfile);
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setDraftProfile(donorProfile);
    setIsEditing(false);
  };

  const handleResetProfile = () => {
    localStorage.removeItem(STORAGE_KEY);
    setDonorProfile(defaultDonorProfile);
    setDraftProfile(defaultDonorProfile);
    setIsEditing(false);
    setSavedMessage("Profile reset successfully.");
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setDraftProfile((previousProfile) => ({
      ...previousProfile,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSaveProfile = (event) => {
    event.preventDefault();

    const updatedProfile = {
      ...draftProfile,
      totalDonations: String(draftProfile.totalDonations || "0"),
      livesHelped: String(draftProfile.livesHelped || "0"),
      responseRate: draftProfile.responseRate || "0%",
      avgReply: draftProfile.avgReply || "0 min",
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedProfile));
    setDonorProfile(updatedProfile);
    setDraftProfile(updatedProfile);
    setIsEditing(false);
    setSavedMessage("Profile updated successfully.");
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.10),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(239,68,68,0.10),transparent_35%),linear-gradient(135deg,#FCFCFD_0%,#FEF2F2_100%)] text-[#111827]">
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
                Premium Donor Dashboard
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button className="relative flex h-11 w-11 items-center justify-center rounded-2xl border border-[#E5E7EB] bg-white text-[#C1121F] shadow-sm transition hover:bg-[#FEF2F2]">
              <FaBell />
              <span className="absolute right-2 top-2 h-3 w-3 rounded-full border-2 border-white bg-[#EF4444]" />
            </button>

            <button
              onClick={handleEditProfile}
              className="hidden items-center gap-2 rounded-2xl bg-[#C1121F] px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-[#C1121F]/25 transition hover:bg-[#780000] sm:inline-flex"
            >
              <FaEdit />
              Edit Profile
            </button>

            <Link
              to="/find-donors"
              className="hidden rounded-2xl border border-[#E5E7EB] bg-white px-5 py-3 text-sm font-extrabold text-[#780000] shadow-sm transition hover:border-[#C1121F] hover:bg-[#FEF2F2] lg:inline-flex"
            >
              Find Donors
            </Link>
          </div>
        </motion.div>

        {savedMessage && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 flex items-center gap-3 rounded-2xl border border-[#BBF7D0] bg-[#DCFCE7] px-4 py-3 text-sm font-extrabold text-[#16A34A]"
          >
            <FaCheckCircle />
            {savedMessage}
          </motion.div>
        )}

        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-white/90 p-5 shadow-[0_24px_80px_rgba(17,24,39,0.08)] backdrop-blur-xl sm:p-6"
          >
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#FEF2F2]" />
            <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[#E0F2FE]/60" />

            <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-center gap-4">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2.8, repeat: Infinity }}
                  className="flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-[#C1121F] text-xl font-black text-white shadow-xl shadow-[#C1121F]/25 sm:h-20 sm:w-20 sm:text-2xl"
                >
                  {donorProfile.bloodGroup}
                </motion.div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-2xl font-black text-[#111827] sm:text-3xl">
                      {donorProfile.name}
                    </h2>

                    {donorProfile.verified && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#DCFCE7] px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wide text-[#16A34A]">
                        <FaShieldAlt />
                        Verified
                      </span>
                    )}
                  </div>

                  <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-[#6B7280]">
                    <FaMapMarkerAlt className="text-[#C1121F]" />
                    {donorProfile.location}, {donorProfile.city}
                  </p>

                  <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-[#6B7280]">
                    <FaHome className="text-[#C1121F]" />
                    {donorProfile.fullAddress}
                  </p>
                </div>
              </div>

            </div>

            <div className="relative mt-6 grid gap-3 sm:grid-cols-2">
              <ProfileMini
                icon={FaPhoneAlt}
                label="Phone"
                value={donorProfile.phone}
              />
              <ProfileMini
                icon={FaWhatsapp}
                label="WhatsApp"
                value={donorProfile.whatsapp}
              />
            </div>

            <div className="relative mt-5 rounded-[1.5rem] border border-[#FECACA] bg-[#FEF2F2] p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-[#C1121F]">
                  <FaNotesMedical />
                </div>

                <div>
                  <h4 className="text-sm font-black text-[#780000]">
                    Donor Notes
                  </h4>
                  <p className="mt-1 text-sm font-semibold leading-6 text-[#6B7280]">
                    {donorProfile.notes}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative mt-5 rounded-[1.5rem] border border-[#E5E7EB] bg-[#FCFCFD] p-4">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-black text-[#111827]">Live Blood Requests</h4>
                  <p className="text-xs font-semibold text-[#6B7280]">Requesters needing your help are listed here.</p>
                </div>
                <span className="rounded-full bg-[#FEF2F2] px-3 py-1 text-xs font-black text-[#C1121F]">
                  {bloodRequests.length} active
                </span>
              </div>

              <div className="space-y-3">
                {bloodRequests.length > 0 ? (
                  bloodRequests.slice(0, 4).map((request) => (
                    <div key={request.id} className="rounded-2xl border border-[#E5E7EB] bg-white p-3">
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <p className="text-sm font-black text-[#111827]">{request.requesterName || request.name}</p>
                          <p className="text-xs font-semibold text-[#6B7280]">{request.bloodGroup} • {request.location || request.hospitalLocation}</p>
                        </div>
                        <span className="rounded-full bg-[#FEF2F2] px-2.5 py-1 text-[10px] font-extrabold text-[#C1121F]">
                          {request.urgency || "Urgent"}
                        </span>
                      </div>
                      <div className="mt-2 flex items-center gap-2 text-xs font-semibold text-[#6B7280]">
                        <FaHospital className="text-[#C1121F]" />
                        {request.hospital || request.hospitalLocation || "Hospital info pending"}
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-sm font-semibold text-[#6B7280]">No blood requests yet. New requester requests will appear here.</p>
                )}
              </div>
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
                href={`tel:${String(donorProfile.phone).replace(/\s/g, "")}`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-2xl border border-[#C1121F] bg-white px-4 py-3 text-sm font-extrabold text-[#C1121F] transition hover:bg-[#FEF2F2]"
              >
                <FaPhoneAlt />
                Call
              </motion.a>

              <motion.button
                onClick={handleEditProfile}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-2xl bg-[#C1121F] px-4 py-3 text-sm font-extrabold text-white shadow-lg shadow-[#C1121F]/25 transition hover:bg-[#780000]"
              >
                <FaEdit />
                Edit Details
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="rounded-[2rem] border border-[#E5E7EB] bg-white/90 p-5 shadow-[0_24px_80px_rgba(17,24,39,0.08)] backdrop-blur-xl sm:p-6"
          >
            {isEditing ? (
              <form onSubmit={handleSaveProfile}>
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-black text-[#111827]">
                      Edit Donor Profile
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-[#6B7280]">
                      Update your name, contact, address, location and medical
                      availability.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleCancelEdit}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#E5E7EB] bg-white text-[#C1121F] transition hover:bg-[#FEF2F2]"
                  >
                    <FaTimes />
                  </button>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <InputField
                    icon={FaUser}
                    label="Donor Name"
                    name="name"
                    value={draftProfile.name}
                    onChange={handleChange}
                    placeholder="Enter donor name"
                  />

                  <SelectField
                    icon={FaTint}
                    label="Blood Group"
                    name="bloodGroup"
                    value={draftProfile.bloodGroup}
                    onChange={handleChange}
                    options={bloodGroups}
                  />

                  <InputField
                    icon={FaMapMarkerAlt}
                    label="Area / Location"
                    name="location"
                    value={draftProfile.location}
                    onChange={handleChange}
                    placeholder="Main Swabi"
                  />

                  <InputField
                    icon={FaLocationArrow}
                    label="City"
                    name="city"
                    value={draftProfile.city}
                    onChange={handleChange}
                    placeholder="Swabi"
                  />

                  <InputField
                    icon={FaHome}
                    label="Full Address"
                    name="fullAddress"
                    value={draftProfile.fullAddress}
                    onChange={handleChange}
                    placeholder="House, street, area"
                    className="sm:col-span-2"
                  />

                  <InputField
                    icon={FaPhoneAlt}
                    label="Phone Number"
                    name="phone"
                    value={draftProfile.phone}
                    onChange={handleChange}
                    placeholder="+92 300 0000000"
                  />

                  <InputField
                    icon={FaWhatsapp}
                    label="WhatsApp Number"
                    name="whatsapp"
                    value={draftProfile.whatsapp}
                    onChange={handleChange}
                    placeholder="+92 300 0000000"
                  />

                  <TextAreaField
                    icon={FaNotesMedical}
                    label="Donor Notes"
                    name="notes"
                    value={draftProfile.notes}
                    onChange={handleChange}
                    placeholder="Write donor availability notes..."
                    className="sm:col-span-2"
                  />
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <motion.button
                    type="submit"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#C1121F] px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-[#C1121F]/25 transition hover:bg-[#780000]"
                  >
                    <FaSave />
                    Save Changes
                  </motion.button>

                  <motion.button
                    type="button"
                    onClick={handleCancelEdit}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-[#E5E7EB] bg-white px-5 py-3 text-sm font-extrabold text-[#780000] transition hover:border-[#C1121F] hover:bg-[#FEF2F2]"
                  >
                    <FaTimes />
                    Cancel
                  </motion.button>
                </div>
              </form>
            ) : (
              <>
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-black text-[#111827]">
                      Your Impact
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-[#6B7280]">
                      A premium snapshot of your contribution.
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FEF2F2] text-[#C1121F]">
                    <FaAward className="text-xl" />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {quickHighlights.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="rounded-[1.2rem] border border-[#E5E7EB] bg-[#FCFCFD] p-3"
                      >
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#6B7280]">
                          <Icon className="text-[#C1121F]" />
                          {item.label}
                        </div>

                        <p className="mt-2 text-lg font-black text-[#111827]">
                          {item.value}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-5 rounded-[1.5rem] border border-[#E5E7EB] bg-[#FCFCFD] p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-black text-[#111827]">
                        Profile Strength
                      </h4>
                      <p className="text-xs font-semibold text-[#6B7280]">
                        Keep your details updated so requesters can contact you.
                      </p>
                    </div>

                    <span className="text-lg font-black text-[#C1121F]">
                      {profileCompletion}%
                    </span>
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-[#F3F4F6]">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${profileCompletion}%` }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-[#780000] via-[#C1121F] to-[#EF4444]"
                    />
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <motion.button
                    onClick={handleEditProfile}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#C1121F] px-5 py-3 text-sm font-extrabold text-white shadow-lg shadow-[#C1121F]/25 transition hover:bg-[#780000]"
                  >
                    <FaEdit />
                    Edit Full Profile
                  </motion.button>

                  <motion.button
                    onClick={handleResetProfile}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-2xl border border-[#FECACA] bg-[#FEF2F2] px-5 py-3 text-sm font-extrabold text-[#C1121F] transition hover:bg-white"
                  >
                    <FaUndo />
                    Reset
                  </motion.button>
                </div>
              </>
            )}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

const ProfileMini = ({ icon: Icon, label, value }) => {
  return (
    <div className="rounded-2xl border border-[#E5E7EB] bg-[#FCFCFD] p-3 transition hover:border-[#FECACA] hover:bg-white">
      <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#6B7280]">
        <Icon className="text-[#C1121F]" />
        {label}
      </div>

      <p className="truncate text-sm font-black text-[#111827]">{value}</p>
    </div>
  );
};

const InputField = ({
  icon: Icon,
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  className = "",
}) => {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-[#6B7280]">
        <Icon className="text-[#C1121F]" />
        {label}
      </span>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="h-12 w-full rounded-2xl border border-[#E5E7EB] bg-[#FCFCFD] px-4 text-sm font-bold text-[#111827] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#C1121F] focus:bg-white focus:ring-4 focus:ring-[#C1121F]/10"
      />
    </label>
  );
};

const SelectField = ({
  icon: Icon,
  label,
  name,
  value,
  onChange,
  options,
  className = "",
}) => {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-[#6B7280]">
        <Icon className="text-[#C1121F]" />
        {label}
      </span>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="h-12 w-full rounded-2xl border border-[#E5E7EB] bg-[#FCFCFD] px-4 text-sm font-bold text-[#111827] outline-none transition focus:border-[#C1121F] focus:bg-white focus:ring-4 focus:ring-[#C1121F]/10"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
};

const TextAreaField = ({
  icon: Icon,
  label,
  name,
  value,
  onChange,
  placeholder,
  className = "",
}) => {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 flex items-center gap-2 text-xs font-extrabold uppercase tracking-wide text-[#6B7280]">
        <Icon className="text-[#C1121F]" />
        {label}
      </span>

      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows="4"
        className="w-full resize-none rounded-2xl border border-[#E5E7EB] bg-[#FCFCFD] px-4 py-3 text-sm font-bold text-[#111827] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#C1121F] focus:bg-white focus:ring-4 focus:ring-[#C1121F]/10"
      />
    </label>
  );
};

export default DonorDashboard;
