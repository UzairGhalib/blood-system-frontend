import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { motion, AnimatePresence } from "framer-motion";
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
  FaChevronDown,
  FaUser,
  FaCity,
  FaSave,
  FaCheckCircle,
  FaUserPlus,
  FaRedoAlt,
  FaNotesMedical,
  FaAmbulance,
  FaExclamationTriangle,
} from "react-icons/fa";

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const availabilityOptions = ["Available", "Busy", "Recently Donated"];

const urgencyOptions = ["Normal", "Urgent", "Critical"];

const locations = [
  "Main Swabi",
  "Topi",
  "Shewa Adda",
  "Kotha",
  "Maneri",
  "Zaida",
  "Chota Lahor",
  "Gohati",
  "Yar Hussain",
  "Tordher",
  "Marghuz",
  "Bam Khel",
];

const roleOptions = [
  {
    id: "donor",
    title: "Register as Donor",
    subtitle: "Add your blood donor information",
    icon: FaTint,
  },
  {
    id: "requester",
    title: "Register as Requester",
    subtitle: "Request blood for a patient",
    icon: FaHandHoldingMedical,
  },
];

const floatingIcons = [
  { icon: FaTint, className: "left-[5%] top-[14%]", delay: 0 },
  { icon: FaHeartbeat, className: "right-[8%] top-[16%]", delay: 0.4 },
  { icon: FaHospital, className: "left-[12%] bottom-[16%]", delay: 0.8 },
  { icon: FaWhatsapp, className: "right-[6%] bottom-[18%]", delay: 1.2 },
  { icon: FaShieldAlt, className: "left-[46%] top-[8%]", delay: 1.6 },
  { icon: FaCalendarAlt, className: "right-[34%] top-[10%]", delay: 2 },
  { icon: FaClock, className: "left-[38%] bottom-[8%]", delay: 2.4 },
  { icon: FaAmbulance, className: "right-[44%] bottom-[10%]", delay: 2.8 },
];

const donorInitialValues = {
  name: "",
  bloodGroup: "A+",
  phone: "",
  whatsapp: "",
  city: "Swabi",
  location: "Main Swabi",
  availability: "Available",
  lastDonationDate: "",
  consent: false,
};

const requesterInitialValues = {
  requesterName: "",
  patientName: "",
  bloodGroup: "A+",
  phone: "",
  whatsapp: "",
  city: "Swabi",
  location: "Main Swabi",
  hospital: "",
  urgency: "Urgent",
  units: "1",
  neededDate: "",
  note: "",
  consent: false,
};

const formatDate = (value) => {
  if (!value) return "Not added";

  const date = new Date(value);

  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const RegistrationPage = () => {
  const [activeRole, setActiveRole] = useState("donor");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const isDonor = activeRole === "donor";

  const formik = useFormik({
    initialValues: donorInitialValues,

    validate: (values) => {
      const errors = {};

      if (isDonor) {
        if (!values.name) errors.name = "Full name is required.";
        if (!values.phone) errors.phone = "Phone number is required.";
        if (!values.whatsapp) errors.whatsapp = "WhatsApp number is required.";
        if (!values.city) errors.city = "City is required.";
        if (!values.location) errors.location = "Location is required.";
        if (!values.consent) errors.consent = "Please confirm your donor consent.";
      } else {
        if (!values.requesterName)
          errors.requesterName = "Requester name is required.";
        if (!values.patientName) errors.patientName = "Patient name is required.";
        if (!values.phone) errors.phone = "Phone number is required.";
        if (!values.whatsapp) errors.whatsapp = "WhatsApp number is required.";
        if (!values.hospital) errors.hospital = "Hospital name is required.";
        if (!values.city) errors.city = "City is required.";
        if (!values.location) errors.location = "Location is required.";
        if (!values.neededDate) errors.neededDate = "Required date is needed.";
        if (!values.consent)
          errors.consent = "Please confirm the requester information.";
      }

      return errors;
    },

    onSubmit: (values, actions) => {
      const now = new Date();

      if (isDonor) {
        const newDonor = {
          id: Date.now(),
          type: "donor",
          name: values.name,
          bloodGroup: values.bloodGroup,
          phone: values.phone,
          whatsapp: values.whatsapp,
          city: values.city,
          location: values.location,
          availability: values.availability,
          lastDonationDate: formatDate(values.lastDonationDate),
          totalDonations: 0,
          responseTime: "Usually replies in 10 min",
          verified: false,
          createdAt: now.toISOString(),
        };

        const oldDonors = JSON.parse(
          localStorage.getItem("bloodlinkDonors") || "[]"
        );

        localStorage.setItem(
          "bloodlinkDonors",
          JSON.stringify([newDonor, ...oldDonors])
        );

        localStorage.setItem(
          "bloodlinkCurrentUser",
          JSON.stringify({
            id: newDonor.id,
            role: "donor",
            email: values.phone,
            loggedInAt: now.toISOString(),
          })
        );

        const submissionRecord = {
          id: Date.now(),
          page: "registration",
          role: "donor",
          name: values.name,
          bloodGroup: values.bloodGroup,
          phone: values.phone,
          whatsapp: values.whatsapp,
          city: values.city,
          location: values.location,
          availability: values.availability,
          lastDonationDate: values.lastDonationDate,
          consent: values.consent,
          submittedAt: now.toISOString(),
          submittedAtLabel: now.toLocaleString(),
        };

        const oldSubmissions = JSON.parse(
          localStorage.getItem("bloodlinkFormSubmissions") || "[]"
        );
        const updatedSubmissions = [submissionRecord, ...oldSubmissions].slice(0, 50);

        localStorage.setItem(
          "bloodlinkFormSubmissions",
          JSON.stringify(updatedSubmissions)
        );

        window.dispatchEvent(new Event("bloodlink-auth-change"));

        console.groupCollapsed("BloodLink Registration Submission");
        console.table([submissionRecord]);
        console.log("Stored registration form data:", submissionRecord);
        console.groupEnd();

        setSuccessMessage("Donor information saved successfully.");
      } else {
        const newRequest = {
          id: Date.now(),
          type: "requester",
          requesterName: values.requesterName,
          patientName: values.patientName,
          bloodGroup: values.bloodGroup,
          phone: values.phone,
          whatsapp: values.whatsapp,
          city: values.city,
          location: values.location,
          hospital: values.hospital,
          urgency: values.urgency,
          units: values.units,
          neededDate: formatDate(values.neededDate),
          note: values.note,
          status: "Pending",
          createdAt: now.toISOString(),
        };

        const oldRequests = JSON.parse(
          localStorage.getItem("bloodlinkRequests") || "[]"
        );

        localStorage.setItem(
          "bloodlinkRequests",
          JSON.stringify([newRequest, ...oldRequests])
        );

        localStorage.setItem(
          "bloodlinkCurrentUser",
          JSON.stringify({
            id: newRequest.id,
            role: "requester",
            email: values.phone,
            loggedInAt: now.toISOString(),
          })
        );

        const submissionRecord = {
          id: Date.now(),
          page: "registration",
          role: "requester",
          requesterName: values.requesterName,
          patientName: values.patientName,
          bloodGroup: values.bloodGroup,
          phone: values.phone,
          whatsapp: values.whatsapp,
          city: values.city,
          location: values.location,
          hospital: values.hospital,
          urgency: values.urgency,
          units: values.units,
          neededDate: values.neededDate,
          note: values.note,
          consent: values.consent,
          submittedAt: now.toISOString(),
          submittedAtLabel: now.toLocaleString(),
        };

        const oldSubmissions = JSON.parse(
          localStorage.getItem("bloodlinkFormSubmissions") || "[]"
        );
        const updatedSubmissions = [submissionRecord, ...oldSubmissions].slice(0, 50);

        localStorage.setItem(
          "bloodlinkFormSubmissions",
          JSON.stringify(updatedSubmissions)
        );

        window.dispatchEvent(new Event("bloodlink-auth-change"));

        console.groupCollapsed("BloodLink Registration Submission");
        console.table([submissionRecord]);
        console.log("Stored registration form data:", submissionRecord);
        console.groupEnd();

        setSuccessMessage("Blood request information saved successfully.");
      }

      actions.resetForm({
        values: isDonor ? donorInitialValues : requesterInitialValues,
      });

      navigate(isDonor ? "/donor-dashboard" : "/requester-dashboard", {
        replace: true,
      });

      actions.setSubmitting(false);
    },
  });

  const switchRole = (role) => {
    setActiveRole(role);
    setSuccessMessage("");

    formik.resetForm({
      values: role === "donor" ? donorInitialValues : requesterInitialValues,
    });
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(239,68,68,0.10),transparent_36%),linear-gradient(135deg,#FCFCFD_0%,#FFF8F8_100%)] py-20 text-[#111827] sm:py-24">
      {/* Animated Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-28 top-20 h-96 w-96 rounded-full bg-[#C1121F]/15 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.45, 0.75, 0.45] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute -right-28 bottom-20 h-[28rem] w-[28rem] rounded-full bg-[#EF4444]/15 blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.45, 0.7, 0.45] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute left-[38%] top-[22%] h-72 w-72 rounded-full bg-[#E0F2FE]/70 blur-3xl"
          animate={{ y: [0, 26, 0], opacity: [0.35, 0.65, 0.35] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute left-1/2 top-24 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full border border-[#C1121F]/10" />
        <div className="absolute left-1/2 top-8 h-[44rem] w-[44rem] -translate-x-1/2 rounded-full border border-[#C1121F]/5" />

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

      <div className="relative z-10 mx-auto max-w-5xl px-3 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-[#FECACA] bg-[#FEF2F2] px-5 py-2 text-sm font-extrabold text-[#780000] shadow-sm">
            <FaUserPlus className="text-[#C1121F]" />
            BloodLink Registration
          </div>

          <h1 className="text-4xl font-black tracking-tight text-[#111827] sm:text-5xl lg:text-6xl">
            Register as{" "}
            <span className="text-[#C1121F]">
              {isDonor ? "Donor" : "Requester"}
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-7 text-[#6B7280] sm:text-base">
            Choose your role and fill a simple form to save your information
            locally in BloodLink.
          </p>
        </motion.div>

        {/* Main Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative mt-10 overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-white/90 p-4 shadow-[0_28px_90px_rgba(17,24,39,0.08)] backdrop-blur-xl sm:p-6 lg:p-8"
        >
          <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#FEF2F2]" />
          <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#C1121F]/5" />

          {/* Role Buttons */}
          <div className="relative mb-8 grid gap-4 md:grid-cols-2">
            {roleOptions.map((role) => {
              const Icon = role.icon;
              const active = activeRole === role.id;

              return (
                <motion.button
                  key={role.id}
                  type="button"
                  onClick={() => switchRole(role.id)}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.97 }}
                  className={`relative overflow-hidden rounded-[1.5rem] border p-5 text-left transition ${
                    active
                      ? "border-[#C1121F] bg-[#FEF2F2] shadow-lg shadow-[#C1121F]/10"
                      : "border-[#E5E7EB] bg-[#FCFCFD] hover:border-[#FECACA] hover:bg-[#FEF2F2]"
                  }`}
                >
                  {active && (
                    <motion.div
                      layoutId="activeRegisterRole"
                      className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.14),transparent_45%)]"
                    />
                  )}

                  <div className="relative flex items-center gap-4">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
                        active
                          ? "bg-[#C1121F] text-white"
                          : "bg-white text-[#C1121F]"
                      }`}
                    >
                      <Icon className="text-2xl" />
                    </div>

                    <div>
                      <h3 className="text-lg font-black text-[#111827]">
                        {role.title}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-[#6B7280]">
                        {role.subtitle}
                      </p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Form Header */}
          <div className="relative mb-7 flex items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl font-black text-[#111827]">
                {isDonor ? "Donor Information" : "Blood Request Information"}
              </h2>

              <p className="mt-2 text-sm font-semibold leading-6 text-[#6B7280]">
                {isDonor
                  ? "Add your basic donor details so requesters can contact you."
                  : "Add basic patient and request details so donors can respond quickly."}
              </p>
            </div>

            <div className="hidden h-14 w-14 items-center justify-center rounded-2xl bg-[#FEF2F2] text-[#C1121F] sm:flex">
              {isDonor ? (
                <FaTint className="text-2xl" />
              ) : (
                <FaAmbulance className="text-2xl" />
              )}
            </div>
          </div>

          <form onSubmit={formik.handleSubmit} className="relative">
            <AnimatePresence mode="wait">
              {isDonor ? (
                <motion.div
                  key="donor-form"
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 18 }}
                  transition={{ duration: 0.25 }}
                  className="grid gap-4 md:grid-cols-2"
                >
                  <FormikInput
                    label="Full Name"
                    name="name"
                    icon={FaUser}
                    placeholder="Enter your full name"
                    formik={formik}
                    required
                  />

                  <FormikSelect
                    label="Blood Group"
                    name="bloodGroup"
                    icon={FaTint}
                    options={bloodGroups}
                    formik={formik}
                  />

                  <FormikInput
                    label="Phone Number"
                    name="phone"
                    icon={FaPhoneAlt}
                    placeholder="+92 300 0000000"
                    formik={formik}
                    required
                  />

                  <FormikInput
                    label="WhatsApp Number"
                    name="whatsapp"
                    icon={FaWhatsapp}
                    placeholder="+92 300 0000000"
                    formik={formik}
                    required
                  />

                  <FormikInput
                    label="City"
                    name="city"
                    icon={FaCity}
                    placeholder="Swabi"
                    formik={formik}
                    required
                  />

                  <FormikSelect
                    label="Area / Location"
                    name="location"
                    icon={FaMapMarkerAlt}
                    options={locations}
                    formik={formik}
                  />

                  <FormikSelect
                    label="Availability"
                    name="availability"
                    icon={FaClock}
                    options={availabilityOptions}
                    formik={formik}
                  />

                  <FormikInput
                    label="Last Donation Date"
                    name="lastDonationDate"
                    icon={FaCalendarAlt}
                    type="date"
                    formik={formik}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="requester-form"
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 18 }}
                  transition={{ duration: 0.25 }}
                  className="grid gap-4 md:grid-cols-2"
                >
                  <FormikInput
                    label="Requester Name"
                    name="requesterName"
                    icon={FaUser}
                    placeholder="Enter requester name"
                    formik={formik}
                    required
                  />

                  <FormikInput
                    label="Patient Name"
                    name="patientName"
                    icon={FaHeartbeat}
                    placeholder="Enter patient name"
                    formik={formik}
                    required
                  />

                  <FormikSelect
                    label="Required Blood Group"
                    name="bloodGroup"
                    icon={FaTint}
                    options={bloodGroups}
                    formik={formik}
                  />

                  <FormikSelect
                    label="Urgency"
                    name="urgency"
                    icon={FaExclamationTriangle}
                    options={urgencyOptions}
                    formik={formik}
                  />

                  <FormikInput
                    label="Phone Number"
                    name="phone"
                    icon={FaPhoneAlt}
                    placeholder="+92 300 0000000"
                    formik={formik}
                    required
                  />

                  <FormikInput
                    label="WhatsApp Number"
                    name="whatsapp"
                    icon={FaWhatsapp}
                    placeholder="+92 300 0000000"
                    formik={formik}
                    required
                  />

                  <FormikInput
                    label="Hospital Name"
                    name="hospital"
                    icon={FaHospital}
                    placeholder="Example: Swabi Medical Complex"
                    formik={formik}
                    required
                  />

                  <FormikInput
                    label="Required Units"
                    name="units"
                    icon={FaTint}
                    type="number"
                    placeholder="1"
                    formik={formik}
                  />

                  <FormikInput
                    label="City"
                    name="city"
                    icon={FaCity}
                    placeholder="Swabi"
                    formik={formik}
                    required
                  />

                  <FormikSelect
                    label="Area / Location"
                    name="location"
                    icon={FaMapMarkerAlt}
                    options={locations}
                    formik={formik}
                  />

                  <FormikInput
                    label="Required Date"
                    name="neededDate"
                    icon={FaCalendarAlt}
                    type="date"
                    formik={formik}
                    required
                  />

                  <FormikTextArea
                    label="Short Note"
                    name="note"
                    icon={FaNotesMedical}
                    placeholder="Example: Patient needs blood for surgery."
                    formik={formik}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Consent */}
            <div className="mt-5 rounded-[1.5rem] border border-[#FECACA] bg-[#FEF2F2] p-4">
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  checked={formik.values.consent}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="mt-1 h-5 w-5 accent-[#C1121F]"
                />

                <span>
                  <span className="block text-sm font-extrabold text-[#780000]">
                    {isDonor
                      ? "I agree to share my donor information on BloodLink."
                      : "I confirm this blood request information is correct."}
                  </span>

                  {formik.touched.consent && formik.errors.consent && (
                    <span className="mt-1 block text-xs font-bold text-[#EF4444]">
                      {formik.errors.consent}
                    </span>
                  )}
                </span>
              </label>
            </div>

            {/* Success Message */}
            {successMessage && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 rounded-[1.5rem] border border-[#BBF7D0] bg-[#DCFCE7] p-4 text-[#16A34A]"
              >
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-xl" />
                  <div>
                    <h4 className="font-black">{successMessage}</h4>
                    <p className="text-sm font-semibold">
                      Saved locally in browser localStorage.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Buttons */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <motion.button
                type="submit"
                disabled={formik.isSubmitting}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="relative flex flex-1 items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[#C1121F] px-6 py-4 text-sm font-black text-white shadow-lg shadow-[#C1121F]/25 transition before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-transform before:duration-700 hover:bg-[#780000] hover:before:translate-x-full disabled:cursor-not-allowed disabled:opacity-70"
              >
                <FaSave className="relative z-10" />
                <span className="relative z-10">
                  {isDonor ? "Save Donor Information" : "Save Blood Request"}
                </span>
              </motion.button>

              <motion.button
                type="button"
                onClick={() => {
                  setSuccessMessage("");
                  formik.resetForm({
                    values: isDonor
                      ? donorInitialValues
                      : requesterInitialValues,
                  });
                }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 rounded-2xl border border-[#E5E7EB] bg-white px-6 py-4 text-sm font-black text-[#780000] transition hover:border-[#C1121F] hover:bg-[#FEF2F2]"
              >
                <FaRedoAlt />
                Reset Form
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const FormikInput = ({
  label,
  name,
  icon: Icon,
  formik,
  placeholder,
  type = "text",
  required = false,
}) => {
  const hasError = formik.touched[name] && formik.errors[name];

  return (
    <div>
      <label className="mb-2 block text-sm font-black text-[#111827]">
        {label} {required && <span className="text-[#C1121F]">*</span>}
      </label>

      <div className="relative">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C1121F]" />

        <input
          id={name}
          name={name}
          type={type}
          value={formik.values[name] || ""}
          onChange={(event) => {
            formik.handleChange(event);
          }}
          onBlur={formik.handleBlur}
          placeholder={placeholder}
          className={`w-full rounded-2xl border bg-[#FCFCFD] py-4 pl-11 pr-4 text-sm font-bold text-[#111827] outline-none transition placeholder:text-[#9CA3AF] focus:bg-white focus:ring-4 ${
            hasError
              ? "border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]/10"
              : "border-[#E5E7EB] focus:border-[#C1121F] focus:ring-[#C1121F]/10"
          }`}
        />
      </div>

      {hasError && (
        <p className="mt-2 text-xs font-bold text-[#EF4444]">
          {formik.errors[name]}
        </p>
      )}
    </div>
  );
};

const FormikSelect = ({ label, name, icon: Icon, formik, options }) => {
  const hasError = formik.touched[name] && formik.errors[name];

  return (
    <div>
      <label className="mb-2 block text-sm font-black text-[#111827]">
        {label}
      </label>

      <div className="relative">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C1121F]" />

        <select
          id={name}
          name={name}
          value={formik.values[name] || ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`w-full appearance-none rounded-2xl border bg-[#FCFCFD] py-4 pl-11 pr-11 text-sm font-bold text-[#111827] outline-none transition focus:bg-white focus:ring-4 ${
            hasError
              ? "border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]/10"
              : "border-[#E5E7EB] focus:border-[#C1121F] focus:ring-[#C1121F]/10"
          }`}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#6B7280]" />
      </div>

      {hasError && (
        <p className="mt-2 text-xs font-bold text-[#EF4444]">
          {formik.errors[name]}
        </p>
      )}
    </div>
  );
};

const FormikTextArea = ({
  label,
  name,
  icon: Icon,
  formik,
  placeholder,
}) => {
  const hasError = formik.touched[name] && formik.errors[name];

  return (
    <div>
      <label className="mb-2 block text-sm font-black text-[#111827]">
        {label}
      </label>

      <div className="relative">
        <Icon className="absolute left-4 top-4 text-[#C1121F]" />

        <textarea
          id={name}
          name={name}
          value={formik.values[name] || ""}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder={placeholder}
          rows="1"
          className={`min-h-[56px] w-full resize-none rounded-2xl border bg-[#FCFCFD] py-4 pl-11 pr-4 text-sm font-bold text-[#111827] outline-none transition placeholder:text-[#9CA3AF] focus:bg-white focus:ring-4 ${
            hasError
              ? "border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]/10"
              : "border-[#E5E7EB] focus:border-[#C1121F] focus:ring-[#C1121F]/10"
          }`}
        />
      </div>

      {hasError && (
        <p className="mt-2 text-xs font-bold text-[#EF4444]">
          {formik.errors[name]}
        </p>
      )}
    </div>
  );
};

export default RegistrationPage;
