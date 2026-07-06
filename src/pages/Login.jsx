import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
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
  FaUserShield,
  FaUserPlus,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaSignInAlt,
  FaAmbulance,
} from "react-icons/fa";

const roleOptions = [
  {
    id: "donor",
    title: "Donor Login",
    subtitle: "Access your donor profile",
    icon: FaTint,
  },
  {
    id: "requester",
    title: "Requester Login",
    subtitle: "Access your blood request panel",
    icon: FaHandHoldingMedical,
  },
];

const floatingIcons = [
  { icon: FaTint, className: "left-[5%] top-[15%]", delay: 0 },
  { icon: FaHeartbeat, className: "right-[7%] top-[17%]", delay: 0.4 },
  { icon: FaHospital, className: "left-[13%] bottom-[18%]", delay: 0.8 },
  { icon: FaWhatsapp, className: "right-[9%] bottom-[18%]", delay: 1.2 },
  { icon: FaShieldAlt, className: "left-[45%] top-[8%]", delay: 1.6 },
  { icon: FaAmbulance, className: "right-[32%] top-[10%]", delay: 2 },
  { icon: FaClock, className: "left-[38%] bottom-[8%]", delay: 2.4 },
  { icon: FaPhoneAlt, className: "left-[7%] top-[55%]", delay: 3.1 },
  { icon: FaMapMarkerAlt, className: "right-[16%] top-[48%]", delay: 3.4 },
];

const LoginPage = () => {
  const [activeRole, setActiveRole] = useState("donor");
  const [showPassword, setShowPassword] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: true,
    },

    validate: (values) => {
      const errors = {};

      if (!values.email) {
        errors.email = "Email address is required.";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = "Enter a valid email address.";
      }

      if (!values.password) {
        errors.password = "Password is required.";
      } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters.";
      }

      return errors;
    },

    onSubmit: (values, actions) => {
      const now = new Date();

      const sessionData = {
        role: activeRole,
        email: values.email,
        loginAt: now.toISOString(),
        rememberMe: values.rememberMe,
      };

      const loginRecord = {
        id: Date.now(),
        role: activeRole,
        email: values.email,
        status: "Success",
        time: now.toLocaleString(),
      };

      const submissionRecord = {
        id: Date.now(),
        page: "login",
        role: activeRole,
        email: values.email,
        password: values.password,
        rememberMe: values.rememberMe,
        submittedAt: now.toISOString(),
        submittedAtLabel: now.toLocaleString(),
      };

      const oldHistory = JSON.parse(
        localStorage.getItem("bloodlinkLoginHistory") || "[]"
      );

      const updatedHistory = [loginRecord, ...oldHistory].slice(0, 10);
      const oldSubmissions = JSON.parse(
        localStorage.getItem("bloodlinkFormSubmissions") || "[]"
      );
      const updatedSubmissions = [submissionRecord, ...oldSubmissions].slice(0, 50);

      localStorage.setItem("bloodlinkAuthUser", JSON.stringify(sessionData));
      localStorage.setItem(
        "bloodlinkLoginHistory",
        JSON.stringify(updatedHistory)
      );
      localStorage.setItem(
        "bloodlinkFormSubmissions",
        JSON.stringify(updatedSubmissions)
      );

      console.groupCollapsed("BloodLink Login Submission");
      console.table([submissionRecord]);
      console.log("Stored login form data:", submissionRecord);
      console.groupEnd();

      setLoginSuccess(true);

      actions.setFieldValue("password", "");
      actions.setSubmitting(false);
    },
  });

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.10),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(239,68,68,0.12),transparent_35%),linear-gradient(135deg,#FCFCFD_0%,#FFF8F8_100%)] px-3 py-20 text-[#111827] sm:px-6">
      {/* Animated Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-28 top-20 h-96 w-96 rounded-full bg-[#C1121F]/15 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.45, 0.75, 0.45] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute -right-32 bottom-20 h-[30rem] w-[30rem] rounded-full bg-[#EF4444]/15 blur-3xl"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.45, 0.75, 0.45] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute left-[38%] top-[20%] h-72 w-72 rounded-full bg-[#E0F2FE]/70 blur-3xl"
          animate={{ y: [0, 26, 0], opacity: [0.35, 0.65, 0.35] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="absolute left-1/2 top-20 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full border border-[#C1121F]/10" />
        <div className="absolute left-1/2 top-4 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full border border-[#C1121F]/5" />

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

      {/* Login Form Card */}
      <motion.div
        initial={{ opacity: 0, y: 35, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="relative z-10 w-full max-w-xl overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-white/90 p-5 shadow-[0_28px_90px_rgba(17,24,39,0.10)] backdrop-blur-xl sm:p-8"
      >
        <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#FEF2F2]" />
        <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#C1121F]/5" />

        <div className="relative text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-[#780000] to-[#C1121F] text-white shadow-lg shadow-[#C1121F]/25">
            <FaUserShield className="text-2xl" />
          </div>

          <h1 className="text-3xl font-black tracking-tight text-[#111827] sm:text-4xl">
            Login to <span className="text-[#C1121F]">BloodLink</span>
          </h1>

          <p className="mx-auto mt-3 max-w-md text-sm font-semibold leading-6 text-[#6B7280]">
            Select your account type and continue securely.
          </p>
        </div>

        {/* Role Buttons */}
        <div className="relative mt-7 grid gap-3 sm:grid-cols-2">
          {roleOptions.map((role) => {
            const Icon = role.icon;
            const active = activeRole === role.id;

            return (
              <motion.button
                key={role.id}
                type="button"
                onClick={() => {
                  setActiveRole(role.id);
                  setLoginSuccess(false);
                  formik.setTouched({});
                  formik.setErrors({});
                }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className={`relative overflow-hidden rounded-[1.5rem] border p-4 text-left transition ${
                  active
                    ? "border-[#C1121F] bg-[#FEF2F2] shadow-lg shadow-[#C1121F]/10"
                    : "border-[#E5E7EB] bg-[#FCFCFD] hover:border-[#FECACA] hover:bg-[#FEF2F2]"
                }`}
              >
                {active && (
                  <motion.div
                    layoutId="activeRoleGlow"
                    className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.12),transparent_45%)]"
                  />
                )}

                <div className="relative flex items-start gap-3">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                      active
                        ? "bg-[#C1121F] text-white"
                        : "bg-white text-[#C1121F]"
                    }`}
                  >
                    <Icon className="text-xl" />
                  </div>

                  <div>
                    <h3 className="font-black text-[#111827]">
                      {role.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold leading-5 text-[#6B7280]">
                      {role.subtitle}
                    </p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Form */}
        <form onSubmit={formik.handleSubmit} className="relative mt-7 space-y-4">
          <FormikInputField
            label="Email Address"
            name="email"
            icon={FaEnvelope}
            type="email"
            formik={formik}
            placeholder={
              activeRole === "donor"
                ? "donor@bloodlink.com"
                : "requester@bloodlink.com"
            }
            onEdit={() => setLoginSuccess(false)}
          />

          <div>
            <label className="mb-2 block text-sm font-black text-[#111827]">
              Password
            </label>

            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#C1121F]" />

              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formik.values.password}
                onChange={(event) => {
                  formik.handleChange(event);
                  setLoginSuccess(false);
                }}
                onBlur={formik.handleBlur}
                placeholder="Enter your password"
                className={`h-14 w-full rounded-2xl border bg-[#FCFCFD] pl-11 pr-12 text-sm font-bold text-[#111827] outline-none transition placeholder:text-[#9CA3AF] focus:bg-white focus:ring-4 ${
                  formik.touched.password && formik.errors.password
                    ? "border-[#EF4444] focus:border-[#EF4444] focus:ring-[#EF4444]/10"
                    : "border-[#E5E7EB] focus:border-[#C1121F] focus:ring-[#C1121F]/10"
                }`}
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] transition hover:text-[#C1121F]"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {formik.touched.password && formik.errors.password && (
              <p className="mt-2 text-xs font-bold text-[#EF4444]">
                {formik.errors.password}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <label className="flex cursor-pointer items-center gap-2 text-sm font-bold text-[#6B7280]">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                checked={formik.values.rememberMe}
                onChange={formik.handleChange}
                className="h-4 w-4 accent-[#C1121F]"
              />
              Remember me
            </label>

            <button
              type="button"
              className="text-left text-sm font-black text-[#C1121F] hover:text-[#780000]"
            >
              Forgot password?
            </button>
          </div>

          {loginSuccess && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border border-[#BBF7D0] bg-[#DCFCE7] p-4 text-sm font-bold text-[#16A34A]"
            >
              Login data saved successfully in localStorage.
            </motion.div>
          )}

          <motion.button
            type="submit"
            disabled={formik.isSubmitting}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            className="relative flex h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-[#C1121F] px-6 text-sm font-black text-white shadow-lg shadow-[#C1121F]/25 transition before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-transform before:duration-700 hover:bg-[#780000] hover:before:translate-x-full disabled:cursor-not-allowed disabled:opacity-70"
          >
            <FaSignInAlt className="relative z-10" />
            <span className="relative z-10">
              Login as {activeRole === "donor" ? "Donor" : "Requester"}
            </span>
          </motion.button>
        </form>

        <div className="relative mt-6 flex flex-col gap-3 border-t border-[#E5E7EB] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold text-[#6B7280]">
            New to BloodLink?
          </p>

          <Link
            to="/become-donor"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-[#E5E7EB] bg-white px-5 py-3 text-sm font-black text-[#780000] transition hover:border-[#C1121F] hover:bg-[#FEF2F2]"
          >
            <FaUserPlus />
            Register as Donor
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

const FormikInputField = ({
  label,
  name,
  icon: Icon,
  formik,
  placeholder,
  type = "text",
  onEdit,
}) => {
  const hasError = formik.touched[name] && formik.errors[name];

  return (
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
          value={formik.values[name]}
          onChange={(event) => {
            formik.handleChange(event);
            onEdit?.();
          }}
          onBlur={formik.handleBlur}
          placeholder={placeholder}
          className={`h-14 w-full rounded-2xl border bg-[#FCFCFD] pl-11 pr-4 text-sm font-bold text-[#111827] outline-none transition placeholder:text-[#9CA3AF] focus:bg-white focus:ring-4 ${
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

export default LoginPage;