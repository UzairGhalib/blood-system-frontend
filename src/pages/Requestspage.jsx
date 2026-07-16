import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaTint,
  FaHeartbeat,
  FaHospital,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaShieldAlt,
  FaClock,
  FaHandHoldingMedical,
  FaArrowLeft,
  FaSave,
  FaCheckCircle,
  FaUser,
  FaAmbulance,
  FaExclamationTriangle,
  FaNotesMedical,
  FaPaperPlane,
  FaUserMd,
} from "react-icons/fa";

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
const urgencyOptions = ["Normal", "Urgent", "Critical"];

const floatingIcons = [
  { icon: FaTint, className: "left-[5%] top-[18%]", delay: 0 },
  { icon: FaHeartbeat, className: "right-[8%] top-[18%]", delay: 0.4 },
  { icon: FaHospital, className: "left-[12%] bottom-[18%]", delay: 0.8 },
  { icon: FaAmbulance, className: "right-[15%] bottom-[22%]", delay: 1.2 },
  { icon: FaWhatsapp, className: "right-[5%] top-[48%]", delay: 1.6 },
  { icon: FaShieldAlt, className: "left-[45%] top-[10%]", delay: 2 },
];

const RequestBloodPage = () => {
  const location = useLocation();
  const donor = location.state?.donor;

  const cleanPhone = (value = "") => value.replace(/\s/g, "");
  const cleanWhatsApp = (value = "") => value.replace(/\D/g, "");

  const [formData, setFormData] = useState({
    requesterName: "",
    patientName: "",
    bloodGroup: donor?.bloodGroup || "A+",
    urgency: "Urgent",
    phone: "",
    hospitalLocation: "",
    note: "",
    consent: false,
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.consent) {
      setSuccessMessage("Please confirm the information before submitting.");
      return;
    }

    const request = {
      id: Date.now(),
      type: "blood-request",
      donorName: donor?.name || "No donor selected",
      donorPhone: donor?.phone || "",
      donorWhatsapp: donor?.whatsapp || "",
      donorLocation: donor
        ? `${donor.location}, ${donor.city}`
        : "Not selected",
      requesterName: formData.requesterName,
      patientName: formData.patientName,
      bloodGroup: formData.bloodGroup,
      urgency: formData.urgency,
      phone: formData.phone,
      hospital: formData.hospitalLocation,
      hospitalLocation: formData.hospitalLocation,
      location: formData.hospitalLocation || "Swabi",
      city: "Swabi",
      note: formData.note,
      status: "Pending",
      createdAt: new Date().toISOString(),
      verified: true,
      units: 1,
      neededDate: new Date().toLocaleDateString("en-GB"),
      whatsapp: formData.phone,
      responseTime: "New",
    };

    const storedRequests = JSON.parse(
      localStorage.getItem("bloodlinkRequests") || "[]"
    );

    localStorage.setItem(
      "bloodlinkRequests",
      JSON.stringify([request, ...storedRequests])
    );

    setSuccessMessage("Your emergency blood request has been submitted successfully.");

    setFormData({
      requesterName: "",
      patientName: "",
      bloodGroup: donor?.bloodGroup || "A+",
      urgency: "Urgent",
      phone: "",
      hospitalLocation: "",
      note: "",
      consent: false,
    });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.13),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(239,68,68,0.14),transparent_35%),linear-gradient(135deg,#FCFCFD_0%,#FFF7F7_55%,#FEF2F2_100%)] px-3 py-20 text-[#111827] sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-32 top-16 h-96 w-96 rounded-full bg-[#C1121F]/15 blur-3xl"
          animate={{ scale: [1, 1.14, 1], opacity: [0.45, 0.75, 0.45] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute -right-32 bottom-10 h-[28rem] w-[28rem] rounded-full bg-[#EF4444]/15 blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.45, 0.75, 0.45] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute left-1/2 top-10 h-[35rem] w-[35rem] -translate-x-1/2 rounded-full border border-[#C1121F]/10" />
        <div className="absolute left-1/2 top-0 h-[45rem] w-[45rem] -translate-x-1/2 rounded-full border border-[#C1121F]/5" />

        {floatingIcons.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              className={`absolute ${item.className} hidden h-12 w-12 items-center justify-center rounded-2xl border border-white/80 bg-white/80 text-[#C1121F] shadow-[0_18px_45px_rgba(17,24,39,0.08)] backdrop-blur-xl sm:flex`}
              animate={{
                y: [0, -16, 0],
                rotate: [0, 6, 0],
                opacity: [0.5, 0.95, 0.5],
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

      <div className="relative z-10 mx-auto max-w-6xl">
        <Link
          to="/find-donors"
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FECACA] bg-white/90 px-4 py-2 text-sm font-black text-[#780000] shadow-sm backdrop-blur transition hover:border-[#C1121F] hover:bg-[#FEF2F2]"
        >
          <FaArrowLeft />
          Back to donors
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="mb-7 text-center"
        >
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-[#FECACA] bg-white/85 px-5 py-2 text-sm font-black text-[#780000] shadow-sm backdrop-blur">
            <FaHandHoldingMedical className="text-[#C1121F]" />
            Emergency Blood Request
          </div>

          <h1 className="text-3xl font-black tracking-tight text-[#111827] sm:text-5xl">
            Submit request & connect
            <span className="block text-[#C1121F]">with the donor instantly</span>
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold leading-6 text-[#6B7280]">
            Fill a short professional form and contact the selected donor through call or WhatsApp.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            className="rounded-[2rem] border border-white/80 bg-white/90 p-5 shadow-[0_28px_90px_rgba(17,24,39,0.10)] backdrop-blur-xl"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C1121F] text-white shadow-lg shadow-[#C1121F]/25">
                <FaShieldAlt className="text-2xl" />
              </div>

              <div>
                <h2 className="text-xl font-black text-[#111827]">
                  Selected Donor
                </h2>
                <p className="text-sm font-bold text-[#6B7280]">
                  Direct contact details
                </p>
              </div>
            </div>

            {donor ? (
              <div className="mt-5">
                <div className="relative overflow-hidden rounded-[1.7rem] bg-gradient-to-br from-[#780000] via-[#C1121F] to-[#EF4444] p-5 text-white shadow-xl shadow-[#C1121F]/20">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/15" />
                  <div className="absolute -bottom-12 left-8 h-36 w-36 rounded-full bg-white/10" />

                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.25em] text-white/75">
                        Donor Profile
                      </p>
                      <h3 className="mt-2 text-2xl font-black">{donor.name}</h3>
                      <p className="mt-1 flex items-center gap-2 text-sm font-bold text-white/85">
                        <FaMapMarkerAlt />
                        {donor.location}, {donor.city}
                      </p>
                    </div>

                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl font-black text-[#C1121F] shadow-lg">
                      {donor.bloodGroup}
                    </div>
                  </div>

                  <div className="relative z-10 mt-5 grid grid-cols-2 gap-3">
                    <MiniStat icon={FaClock} label="Status" value={donor.availability} />
                    <MiniStat icon={FaShieldAlt} label="Verified" value={donor.verified ? "Yes" : "No"} />
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <a
                    href={`tel:${cleanPhone(donor.phone)}`}
                    className="flex items-center justify-center gap-2 rounded-2xl border border-[#C1121F] bg-white px-4 py-3 text-sm font-black text-[#C1121F] shadow-sm transition hover:bg-[#FEF2F2]"
                  >
                    <FaPhoneAlt />
                    Call Donor
                  </a>

                  <a
                    href={`https://wa.me/${cleanWhatsApp(donor.whatsapp)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-2xl bg-[#16A34A] px-4 py-3 text-sm font-black text-white shadow-sm transition hover:bg-[#12803A]"
                  >
                    <FaWhatsapp />
                    WhatsApp
                  </a>
                </div>

                <div className="mt-4 rounded-2xl border border-[#E5E7EB] bg-[#FCFCFD] p-4">
                  <InfoLine icon={FaPhoneAlt} label="Phone" value={donor.phone} />
                  <InfoLine icon={FaWhatsapp} label="WhatsApp" value={donor.whatsapp} />
                  <InfoLine icon={FaMapMarkerAlt} label="Location" value={`${donor.location}, ${donor.city}`} />
                </div>
              </div>
            ) : (
              <div className="mt-5 rounded-[1.7rem] border border-dashed border-[#FECACA] bg-[#FFF7F7] p-6 text-center">
                <FaAmbulance className="mx-auto text-4xl text-[#C1121F]" />
                <h3 className="mt-3 text-xl font-black text-[#111827]">
                  No donor selected
                </h3>
                <p className="mt-2 text-sm font-bold text-[#6B7280]">
                  Please go back and select a donor from the donor directory.
                </p>
              </div>
            )}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-white/80 bg-white/90 p-5 shadow-[0_28px_90px_rgba(17,24,39,0.10)] backdrop-blur-xl sm:p-6"
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FEF2F2] text-[#C1121F]">
                  <FaPaperPlane className="text-2xl" />
                </div>

                <div>
                  <h2 className="text-xl font-black text-[#111827]">
                    Submit Request
                  </h2>
                  <p className="text-sm font-bold text-[#6B7280]">
                    Short and professional form
                  </p>
                </div>
              </div>

              <div className="hidden rounded-full bg-[#FEF2F2] px-4 py-2 text-xs font-black text-[#C1121F] sm:block">
                Fast Form
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <FormField
                label="Requester Name"
                name="requesterName"
                value={formData.requesterName}
                onChange={handleChange}
                icon={FaUser}
                placeholder="Your name"
                required
              />

              <FormField
                label="Patient Name"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                icon={FaUserMd}
                placeholder="Patient name"
                required
              />

              <SelectField
                label="Blood Group"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                icon={FaTint}
                options={bloodGroups}
              />

              <SelectField
                label="Urgency"
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                icon={FaExclamationTriangle}
                options={urgencyOptions}
              />

              <FormField
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                icon={FaPhoneAlt}
                placeholder="+92 300 0000000"
                required
              />

              <FormField
                label="Hospital / Location"
                name="hospitalLocation"
                value={formData.hospitalLocation}
                onChange={handleChange}
                icon={FaHospital}
                placeholder="Hospital or area"
                required
              />
            </div>

            <div className="mt-4">
              <TextAreaField
                label="Short Note"
                name="note"
                value={formData.note}
                onChange={handleChange}
                icon={FaNotesMedical}
                placeholder="Example: Patient needs blood urgently today."
              />
            </div>

            <label className="mt-4 flex cursor-pointer items-start gap-3 rounded-2xl border border-[#FECACA] bg-[#FEF2F2] p-4">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 h-5 w-5 accent-[#C1121F]"
              />

              <span>
                <span className="block text-sm font-black text-[#780000]">
                  I confirm this request information is correct.
                </span>
                <span className="mt-1 block text-xs font-bold text-[#EF4444]">
                  This request will be saved locally for BloodLink follow-up.
                </span>
              </span>
            </label>

            {successMessage && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 rounded-2xl border p-4 ${
                  successMessage.includes("Please")
                    ? "border-[#FECACA] bg-[#FEF2F2] text-[#C1121F]"
                    : "border-[#BBF7D0] bg-[#DCFCE7] text-[#16A34A]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-xl" />
                  <p className="text-sm font-black">{successMessage}</p>
                </div>
              </motion.div>
            )}

            <motion.button
              type="submit"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="relative mt-5 flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[#C1121F] px-6 py-4 text-sm font-black text-white shadow-lg shadow-[#C1121F]/25 transition before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-transform before:duration-700 hover:bg-[#780000] hover:before:translate-x-full"
            >
              <FaSave className="relative z-10" />
              <span className="relative z-10">Submit Blood Request</span>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const MiniStat = ({ icon: Icon, label, value }) => (
  <div className="rounded-2xl bg-white/15 p-3 backdrop-blur">
    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-white/70">
      <Icon />
      {label}
    </div>
    <p className="mt-1 text-sm font-black text-white">{value}</p>
  </div>
);

const InfoLine = ({ icon: Icon, label, value }) => (
  <div className="flex items-start gap-3 border-b border-[#E5E7EB] py-3 last:border-b-0">
    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#FEF2F2] text-[#C1121F]">
      <Icon className="text-sm" />
    </div>

    <div>
      <p className="text-xs font-black uppercase tracking-wider text-[#780000]">
        {label}
      </p>
      <p className="mt-1 break-words text-sm font-bold text-[#6B7280]">
        {value}
      </p>
    </div>
  </div>
);

const FormField = ({
  label,
  name,
  value,
  onChange,
  icon: Icon,
  placeholder,
  type = "text",
  required = false,
}) => (
  <div>
    <label className="mb-2 block text-sm font-black text-[#111827]">
      {label}
    </label>

    <div className="relative">
      <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C1121F]" />

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-2xl border border-[#E5E7EB] bg-[#FCFCFD] py-4 pl-11 pr-4 text-sm font-bold text-[#111827] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#C1121F] focus:bg-white focus:ring-4 focus:ring-[#C1121F]/10"
      />
    </div>
  </div>
);

const SelectField = ({ label, name, value, onChange, icon: Icon, options }) => (
  <div>
    <label className="mb-2 block text-sm font-black text-[#111827]">
      {label}
    </label>

    <div className="relative">
      <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C1121F]" />

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full appearance-none rounded-2xl border border-[#E5E7EB] bg-[#FCFCFD] py-4 pl-11 pr-10 text-sm font-bold text-[#111827] outline-none transition focus:border-[#C1121F] focus:bg-white focus:ring-4 focus:ring-[#C1121F]/10"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  </div>
);

const TextAreaField = ({
  label,
  name,
  value,
  onChange,
  icon: Icon,
  placeholder,
}) => (
  <div>
    <label className="mb-2 block text-sm font-black text-[#111827]">
      {label}
    </label>

    <div className="relative">
      <Icon className="absolute left-4 top-4 text-[#C1121F]" />

      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows="3"
        className="w-full resize-none rounded-2xl border border-[#E5E7EB] bg-[#FCFCFD] py-4 pl-11 pr-4 text-sm font-bold text-[#111827] outline-none transition placeholder:text-[#9CA3AF] focus:border-[#C1121F] focus:bg-white focus:ring-4 focus:ring-[#C1121F]/10"
      />
    </div>
  </div>
);

export default RequestBloodPage;
