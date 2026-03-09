import { motion } from "framer-motion";
import { Clock, TrendingUp, GraduationCap, Rocket, MessageCircle } from "lucide-react";

const highlights = [
  { icon: Clock, text: "Flexible Work Hours" },
  { icon: TrendingUp, text: "Unlimited Income Potential" },
  { icon: GraduationCap, text: "Professional Training" },
  { icon: Rocket, text: "Career Growth Opportunities" },
];

const HeroSection = () => (
  <section id="home" className="gradient-hero pt-28 pb-20 md:pt-36 md:pb-28">
    <div className="section-container text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-5 inline-flex"
      >
        <span className="px-8 py-2.5 rounded-full bg-secondary text-secondary-foreground text-sm font-bold tracking-wide shadow-lg">
          🚀 Career Opportunity
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-[40px] md:text-[72px] font-[900] uppercase tracking-[2px] leading-tight text-secondary drop-shadow-[0_0_24px_hsl(40_95%_55%/0.4)]"
      >
        WE ARE HIRING
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-3 text-[20px] md:text-[28px] font-semibold text-primary-foreground"
      >
        Multiple career opportunities available. Call or WhatsApp for more details.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-3 text-base md:text-lg font-medium text-primary-foreground/80"
      >
        Earn <span className="text-secondary font-extrabold">₹20,000</span> – <span className="text-secondary font-extrabold">₹1,00,000+</span> Monthly Potential &nbsp;|&nbsp; Work From Home &nbsp;|&nbsp; Part-Time or Full-Time
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
      >
        {highlights.map((h, i) => (
          <div key={i} className="bg-primary-foreground/10 backdrop-blur rounded-xl p-4 text-primary-foreground text-center">
            <h.icon className="mx-auto mb-2 text-secondary" size={28} />
            <p className="text-sm font-medium">{h.text}</p>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-10 flex flex-wrap justify-center gap-4"
      >
        <a href="#apply" className="gradient-gold text-secondary-foreground px-8 py-3.5 rounded-xl text-base font-semibold hover:opacity-90 transition-opacity">
          Apply Now
        </a>
        <button
          onClick={() => window.open("https://wa.me/919346622469?text=I%20am%20interested", "_blank")}
          className="flex items-center gap-2 bg-emerald-600 text-primary-foreground px-8 py-3.5 rounded-xl text-base font-semibold hover:bg-emerald-700 transition-colors cursor-pointer"
        >
          <MessageCircle size={20} /> Chat on WhatsApp
        </button>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.65 }}
        className="mt-4 text-sm font-semibold text-secondary animate-pulse"
      >
        ⚡ Limited positions available this month.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-6 text-xs text-primary-foreground/50 max-w-xl mx-auto"
      >
        This website shares an independent opportunity and is not the official recruitment website of any insurance company.
      </motion.p>
    </div>
  </section>
);

export default HeroSection;
