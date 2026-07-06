import React from "react";
import { motion } from "framer-motion";
import {
  FaTint,
  FaNotesMedical,
  FaLocationArrow,
  FaUserCheck,
  FaWhatsapp,
  FaHospitalUser,
  FaHeartbeat,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
  FaAmbulance,
  FaHandHoldingMedical,
  FaUserNurse,
  FaSyringe,
  FaHospital,
  FaPlus,
  FaPhoneAlt,
} from "react-icons/fa";

const workflowSteps = [
  {
    number: "01",
    title: "Request Created",
    text: "Blood need added",
    icon: FaNotesMedical,
  },
  {
    number: "02",
    title: "Donor Search",
    text: "Nearby donors found",
    icon: FaLocationArrow,
  },
  {
    number: "03",
    title: "Smart Matching",
    text: "Blood group matched",
    icon: FaUserCheck,
  },
  {
    number: "04",
    title: "Instant Contact",
    text: "Call or WhatsApp",
    icon: FaWhatsapp,
  },
  {
    number: "05",
    title: "Hospital Donation",
    text: "Donor reaches hospital",
    icon: FaHospitalUser,
  },
  {
    number: "06",
    title: "Life Saved",
    text: "Request completed",
    icon: FaHeartbeat,
  },
];

const backgroundIcons = [
  { Icon: FaTint, className: "left-[5%] top-[12%]", size: "text-4xl", color: "text-[#C1121F]" },
  { Icon: FaHeartbeat, className: "left-[18%] top-[28%]", size: "text-5xl", color: "text-[#EF4444]" },
  { Icon: FaShieldAlt, className: "left-[8%] bottom-[18%]", size: "text-4xl", color: "text-[#16A34A]" },
  { Icon: FaClock, className: "left-[28%] bottom-[8%]", size: "text-4xl", color: "text-[#F59E0B]" },
  { Icon: FaAmbulance, className: "right-[6%] top-[14%]", size: "text-5xl", color: "text-[#C1121F]" },
  { Icon: FaHandHoldingMedical, className: "right-[20%] top-[32%]", size: "text-5xl", color: "text-[#EF4444]" },
  { Icon: FaUserNurse, className: "right-[8%] bottom-[18%]", size: "text-4xl", color: "text-[#780000]" },
  { Icon: FaSyringe, className: "right-[28%] bottom-[7%]", size: "text-4xl", color: "text-[#C1121F]" },
  { Icon: FaHospital, className: "left-[42%] top-[8%]", size: "text-4xl", color: "text-[#780000]" },
  { Icon: FaPlus, className: "left-[48%] bottom-[10%]", size: "text-4xl", color: "text-[#EF4444]" },
  { Icon: FaPhoneAlt, className: "left-[2%] top-[48%]", size: "text-3xl", color: "text-[#16A34A]" },
  { Icon: FaTint, className: "right-[3%] top-[50%]", size: "text-5xl", color: "text-[#C1121F]" },
];

const WorkflowSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#FCFCFD] py-24">
      {/* Animated Background Gradients */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.55, 0.8, 0.55],
        }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#FEF2F2] blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.5, 0.75, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        className="absolute -right-32 bottom-10 h-[420px] w-[420px] rounded-full bg-[#FEE2E2] blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, 20, 0],
        }}
        transition={{ duration: 9, repeat: Infinity }}
        className="absolute left-[35%] top-[30%] h-72 w-72 rounded-full bg-[#FEF2F2]/80 blur-3xl"
      />

      {/* Decorative Circles */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#FECACA]"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#FECACA]/80"
      />

      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FECACA]/60" />

      {/* Large Floating Background Icons */}
      {backgroundIcons.map(({ Icon, className, size, color }, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -22, 0],
            rotate: [0, index % 2 === 0 ? 8 : -8, 0],
            scale: [1, 1.08, 1],
            opacity: [0.22, 0.55, 0.22],
          }}
          transition={{
            duration: 4 + index * 0.25,
            repeat: Infinity,
            delay: index * 0.25,
          }}
          className={`absolute hidden h-20 w-20 items-center justify-center rounded-[1.7rem] border border-[#FECACA]/80 bg-white/70 shadow-lg shadow-red-100/60 backdrop-blur-md md:flex ${className}`}
        >
          <Icon className={`${size} ${color}`} />
        </motion.div>
      ))}

      {/* Small Animated Blood Dots */}
      <div className="absolute inset-0 hidden md:block">
        {[...Array(22)].map((_, index) => (
          <motion.span
            key={index}
            animate={{
              y: [0, -18, 0],
              opacity: [0.2, 0.65, 0.2],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 3 + (index % 5),
              repeat: Infinity,
              delay: index * 0.18,
            }}
            className="absolute h-2.5 w-2.5 rounded-full bg-[#C1121F]/35"
            style={{
              left: `${6 + ((index * 11) % 88)}%`,
              top: `${10 + ((index * 17) % 76)}%`,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-[#FECACA] bg-white/80 px-5 py-2.5 text-sm font-semibold text-[#C1121F] shadow-sm backdrop-blur">
            <FaTint className="text-[#EF4444]" />
            BloodLink Workflow
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl lg:text-5xl">
            From Blood Request to{" "}
            <span className="text-[#C1121F]">Life Saving Donation</span>
          </h2>

          <p className="mt-4 text-base text-[#6B7280] sm:text-lg">
            A clear emergency flow for finding, verifying, and contacting nearby donors.
          </p>
        </motion.div>

        {/* Desktop Workflow Diagram */}
        <div className="relative mt-24 hidden lg:block">
          {/* Animated Main Flow Line */}
          <div className="absolute left-0 right-0 top-1/2 h-[4px] -translate-y-1/2 overflow-hidden rounded-full bg-[#FECACA]">
            <motion.div
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
              className="h-full w-1/2 rounded-full bg-gradient-to-r from-transparent via-[#C1121F] to-transparent"
            />
          </div>

          <div className="grid grid-cols-6 gap-5">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;
              const isUp = index % 2 === 0;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: isUp ? -45 : 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.12 }}
                  className={`relative flex ${
                    isUp ? "flex-col" : "flex-col-reverse"
                  } items-center`}
                >
                  {/* Step Card */}
                  <motion.div
                    whileHover={{ y: -10, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 250 }}
                    className={`group relative w-full overflow-hidden rounded-[1.8rem] border border-[#E5E7EB] bg-white/90 p-5 text-center shadow-sm backdrop-blur transition-all duration-300 hover:border-[#FECACA] hover:shadow-2xl hover:shadow-red-100 ${
                      isUp ? "mb-12" : "mt-12"
                    }`}
                  >
                    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#FEF2F2] transition-all duration-300 group-hover:scale-125" />
                    <div className="absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-[#FEE2E2]/80 transition-all duration-300 group-hover:scale-125" />

                    <div className="relative mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FEF2F2] text-[#C1121F] shadow-inner transition-all duration-300 group-hover:bg-[#C1121F] group-hover:text-white">
                      <Icon className="text-2xl" />
                    </div>

                    <span className="relative text-xs font-bold text-[#EF4444]">
                      STEP {step.number}
                    </span>

                    <h3 className="relative mt-1 text-lg font-bold text-[#111827]">
                      {step.title}
                    </h3>

                    <p className="relative mt-2 text-sm text-[#6B7280]">
                      {step.text}
                    </p>
                  </motion.div>

                  {/* Center Pulse Dot */}
                  <motion.div
                    animate={{
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#C1121F] text-white shadow-xl shadow-red-200"
                  >
                    <FaCheckCircle className="text-lg" />
                    <span className="absolute h-14 w-14 animate-ping rounded-full bg-[#C1121F]/25" />
                    <span className="absolute h-20 w-20 rounded-full border border-[#FECACA]" />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Workflow */}
        <div className="relative mt-16 lg:hidden">
          <div className="absolute bottom-0 left-6 top-0 w-[4px] overflow-hidden rounded-full bg-[#FECACA]">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="h-1/3 w-full rounded-full bg-gradient-to-b from-transparent via-[#C1121F] to-transparent"
            />
          </div>

          <div className="space-y-6">
            {workflowSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -26 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex gap-5"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#C1121F] text-white shadow-lg shadow-red-200"
                  >
                    <Icon className="text-lg" />
                    <span className="absolute h-14 w-14 animate-ping rounded-full bg-[#C1121F]/20" />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative flex-1 overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white/90 p-5 shadow-sm backdrop-blur"
                  >
                    <div className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#FEF2F2]" />

                    <div className="relative mb-1 text-xs font-bold text-[#EF4444]">
                      STEP {step.number}
                    </div>

                    <h3 className="relative text-lg font-bold text-[#111827]">
                      {step.title}
                    </h3>

                    <p className="relative mt-1 text-sm text-[#6B7280]">
                      {step.text}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-18 max-w-4xl overflow-hidden rounded-[2rem] border border-[#FECACA] bg-white/85 p-1 shadow-lg shadow-red-100 backdrop-blur"
        >
          <div className="rounded-[1.7rem] bg-[#FEF2F2] px-6 py-5 text-center">
            <p className="text-sm font-bold text-[#780000] sm:text-base">
              Emergency request → verified donor → instant contact → successful donation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkflowSection;