import { motion } from "framer-motion";
import {
  FaTint,
  FaHeartbeat,
  FaAmbulance,
  FaUserShield,
  FaMapMarkerAlt,
  FaClock,
  FaHospital,
  FaHandHoldingMedical,
  FaArrowRight,
} from "react-icons/fa";

const reasons = [
  {
    icon: FaMapMarkerAlt,
    title: "Nearby",
    text: "Local donors",
  },
  {
    icon: FaClock,
    title: "Fast",
    text: "Quick response",
  },
  {
    icon: FaUserShield,
    title: "Safe",
    text: "Verified data",
  },
  {
    icon: FaAmbulance,
    title: "Emergency",
    text: "Urgent support",
  },
];

const floatingIcons = [
  { Icon: FaTint, className: "top-8 left-8 text-[#C1121F]" },
  { Icon: FaHeartbeat, className: "top-12 right-10 text-[#EF4444]" },
  { Icon: FaHospital, className: "bottom-10 left-14 text-[#780000]" },
  { Icon: FaHandHoldingMedical, className: "bottom-12 right-16 text-[#C1121F]" },
  { Icon: FaTint, className: "top-1/2 left-1/3 text-[#EF4444]" },
];

const WhyChooseSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#FCFCFD] px-4 py-12 sm:px-6 lg:px-12">
      {/* Premium Background */}
      <div className="absolute inset-0 -z-30 bg-[#FCFCFD]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,#FEF2F2_0%,transparent_35%),radial-gradient(circle_at_bottom_right,#FECACA_0%,transparent_32%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(193,18,31,0.08),rgba(255,255,255,0.8),rgba(120,0,0,0.08))]" />

      {/* Glow Effects */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-[#EF4444]/20 blur-3xl"
      />

      <motion.div
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#780000]/20 blur-3xl"
      />

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, className }, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -18, 0],
            rotate: [0, 8, -8, 0],
            opacity: [0.12, 0.3, 0.12],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`pointer-events-none absolute ${className} hidden text-4xl md:block`}
        >
          <Icon />
        </motion.div>
      ))}

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-8 max-w-2xl text-center"
        >
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-[#FEF2F2] px-4 py-2 text-xs font-black uppercase tracking-wide text-[#C1121F]">
            <FaHeartbeat className="animate-pulse" />
            Why BloodLink
          </div>

          <h2 className="text-3xl font-black tracking-tight text-[#111827] sm:text-4xl">
            Smart. Fast.
            <span className="bg-gradient-to-r from-[#780000] via-[#C1121F] to-[#EF4444] bg-clip-text text-transparent">
              {" "}
              Life Saving.
            </span>
          </h2>

          <p className="mt-3 text-sm font-semibold text-[#6B7280]">
            One platform. Real emergency support.
          </p>
        </motion.div>

        {/* Small Icon Cards */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group relative overflow-hidden rounded-[1.7rem] border border-[#E5E7EB] bg-white/85 p-5 text-center shadow-xl shadow-red-100/70 backdrop-blur-xl"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#FEF2F2] transition duration-500 group-hover:scale-125" />

              <div className="relative z-10">
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#780000] to-[#C1121F] text-2xl text-white shadow-lg shadow-red-200"
                >
                  <item.icon />
                </motion.div>

                <h3 className="text-lg font-black text-[#111827]">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs font-bold text-[#6B7280]">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mini CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="mx-auto mt-7 flex max-w-3xl flex-col items-center justify-between gap-4 rounded-[1.7rem] bg-gradient-to-r from-[#780000] via-[#C1121F] to-[#EF4444] p-4 text-white shadow-2xl shadow-red-200 sm:flex-row"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-xl">
              <FaTint />
            </div>

            <div>
              <h3 className="text-lg font-black">Need Blood?</h3>
              <p className="text-xs font-semibold text-white/80">
                Create request now.
              </p>
            </div>
          </div>

          <a
            href="/blood-requests"
            className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-black text-[#C1121F] shadow-lg transition hover:scale-105"
          >
            Request
            <FaArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
