import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import {
  FaTint,
  FaHeartbeat,
  FaHospital,
  FaAmbulance,
  FaUserPlus,
  FaSearchLocation,
  FaHandHoldingMedical,
  FaArrowRight,
  FaPhoneAlt,
  FaWhatsapp,
  FaShieldAlt,
  FaClock,
} from "react-icons/fa";

const floatingIcons = [
  { Icon: FaTint, className: "top-14 left-8 text-[#C1121F]" },
  { Icon: FaHeartbeat, className: "top-24 right-10 text-[#EF4444]" },
  { Icon: FaHospital, className: "bottom-24 left-10 text-[#780000]" },
  { Icon: FaAmbulance, className: "bottom-32 right-14 text-[#C1121F]" },
  { Icon: FaHandHoldingMedical, className: "top-1/2 left-1/4 text-[#EF4444]" },
  { Icon: FaShieldAlt, className: "top-20 left-1/2 text-[#780000]" },
];

const actionCards = [
  {
    icon: FaTint,
    title: "Request Blood",
    text: "Urgent help",
    link: "/blood-requests",
    button: "Create Request",
    gradient: "from-[#780000] to-[#C1121F]",
  },
  
  {
  // <>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, suscipit eos illo est doloribus nisi cupiditate voluptate ab voluptatibus autem mollitia esse recusandae
  //  voluptates, deleniti ipsam fugit. Consectetur, minima. Facilis.</>
    icon: FaSearchLocation,
    title: "Find Donors",
    text: "Nearby heroes",
    link: "/find-donors",
    button: "Find Now",
    gradient: "from-[#C1121F] to-[#EF4444]",
  },
  {
    icon: FaUserPlus,
    title: "Become Donor",
    text: "Save lives",
    link: "/register",
    button: "Join Now",
    gradient: "from-[#EF4444] to-[#C1121F]",
  },
];

const BloodLinkCTA = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#FCFCFD] px-4 py-12 sm:px-6 lg:px-12">
      {/* Premium Background */}
      <div className="absolute inset-0 -z-30 bg-[#FCFCFD]" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,#FEF2F2_0%,transparent_34%),radial-gradient(circle_at_bottom_right,#FECACA_0%,transparent_32%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(193,18,31,0.08),rgba(255,255,255,0.75),rgba(120,0,0,0.08))]" />

      {/* Animated Glow */}
      <motion.div
        animate={{ scale: [1, 1.18, 1], opacity: [0.3, 0.55, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-28 -top-28 h-80 w-80 rounded-full bg-[#EF4444]/25 blur-3xl"
      />

      <motion.div
        animate={{ scale: [1.15, 1, 1.15], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-32 -right-28 h-96 w-96 rounded-full bg-[#780000]/25 blur-3xl"
      />

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, className }, index) => (
        <motion.div
          key={index}
          animate={{
            y: [0, -24, 0],
            rotate: [0, 8, -8, 0],
            opacity: [0.14, 0.35, 0.14],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`pointer-events-none absolute ${className} hidden text-5xl md:block`}
        >
          <Icon />
        </motion.div>
      ))}

      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl items-center">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2.5rem] border border-[#E5E7EB] bg-white/80 p-6 shadow-2xl shadow-red-100/70 backdrop-blur-xl sm:p-8 lg:p-10"
          >
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#FEF2F2]" />

            <div className="relative z-10">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#FEF2F2] px-4 py-2 text-sm font-black text-[#C1121F]">
                <FaHeartbeat className="animate-pulse" />
                BloodLink Action
              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-[#111827] sm:text-5xl lg:text-6xl">
                One Click.
                <span className="block bg-gradient-to-r from-[#780000] via-[#C1121F] to-[#EF4444] bg-clip-text text-transparent">
                  One Life Saved.
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-base font-semibold text-[#6B7280] sm:text-lg">
                Request blood, find donors, or become a lifesaver instantly.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="/blood-requests"
                  className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#780000] to-[#C1121F] px-6 py-4 text-sm font-black text-white shadow-xl shadow-red-200 transition hover:-translate-y-1"
                >
                  <FaTint className="text-lg" />
                  Request Blood
                  <FaArrowRight className="transition group-hover:translate-x-1" />
                </a>

                <a
                  href="/find-donors"
                  className="group inline-flex items-center gap-3 rounded-2xl border border-[#E5E7EB] bg-white px-6 py-4 text-sm font-black text-[#C1121F] shadow-xl shadow-red-100 transition hover:-translate-y-1"
                >
                  <FaSearchLocation className="text-lg" />
                  Find Donor
                  <FaArrowRight className="transition group-hover:translate-x-1" />
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  { icon: FaClock, value: "Fast" },
                  { icon: FaShieldAlt, value: "Safe" },
                  { icon: FaHospital, value: "Local" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -6, scale: 1.03 }}
                    className="rounded-3xl border border-[#E5E7EB] bg-[#FCFCFD] p-4 text-center shadow-lg shadow-red-100"
                  >
                    <item.icon className="mx-auto mb-2 text-2xl text-[#C1121F]" />
                    <p className="text-sm font-black text-[#111827]">
                      {item.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Action Cards */}
          <div className="grid gap-4">
            {actionCards.map((card, index) => (
              <motion.a
                href={card.link}
                key={index}
                initial={{ opacity: 0, x: 35 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.14, duration: 0.6 }}
                whileHover={{ x: 8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-white p-5 shadow-xl shadow-red-100/70"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#FEF2F2] transition duration-500 group-hover:scale-125" />

                <div className="relative z-10 flex items-center justify-between gap-5">
                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className={`flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br ${card.gradient} text-2xl text-white shadow-lg shadow-red-200`}
                    >
                      <card.icon />
                    </motion.div>

                    <div>
                      <h3 className="text-xl font-black text-[#111827]">
                        {card.title}
                      </h3>
                      <p className="text-sm font-bold text-[#6B7280]">
                        {card.text}
                      </p>
                    </div>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FEF2F2] text-[#C1121F] transition group-hover:bg-[#C1121F] group-hover:text-white">
                    <FaArrowRight />
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Emergency Contact Bar */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              className="rounded-[2rem] bg-gradient-to-r from-[#780000] via-[#C1121F] to-[#EF4444] p-5 text-white shadow-2xl shadow-red-200"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-2xl">
                    <FaAmbulance />
                  </div>

                  <div>
                    <h3 className="text-xl font-black">Emergency?</h3>
                    <p className="text-sm font-semibold text-white/80">
                      Connect instantly.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="tel:03XXXXXXXXX"
                    className="flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-black text-[#C1121F] transition hover:scale-105"
                  >
                    <FaPhoneAlt />
                    Call
                  </a>

                  <a
                    href="https://wa.me/923000000000"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 rounded-2xl bg-[#16A34A] px-4 py-3 text-sm font-black text-white transition hover:scale-105"
                  >
                    <FaWhatsapp />
                    Chat
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BloodLinkCTA;
