import { motion } from "framer-motion";
import { IndianRupee } from "lucide-react";

const tiers = [
  { label: "Starter Income", earning: "₹30,000+", highlight: false },
  { label: "Growing Income", earning: "₹50,000+", highlight: true },
  { label: "Unlimited Potential", earning: "₹1,00,000+", highlight: false },
];

const IncomeSection = () => (
  <section id="income" className="py-20 gradient-hero">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">Income <span className="text-secondary">Opportunity</span></h2>
        <p className="mt-3 text-primary-foreground/70 max-w-xl mx-auto">Explore your earning potential with flexible career opportunities.</p>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {tiers.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`rounded-2xl p-8 text-center ${t.highlight ? "gradient-gold scale-105" : "bg-primary-foreground/10 backdrop-blur"}`}
          >
            <IndianRupee size={28} className={`mx-auto mb-3 ${t.highlight ? "text-secondary-foreground" : "text-secondary"}`} />
            <p className={`text-sm font-medium mb-1 ${t.highlight ? "text-secondary-foreground/80" : "text-primary-foreground/70"}`}>
              {t.label}
            </p>
            <p className={`text-3xl font-bold ${t.highlight ? "text-secondary-foreground" : "text-primary-foreground"}`}>
              {t.earning}
            </p>
            <p className={`text-xs mt-1 ${t.highlight ? "text-secondary-foreground/60" : "text-primary-foreground/50"}`}>Monthly</p>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-primary-foreground/50 text-sm mt-8">
        Earnings depend on effort, performance, and business activity.
      </p>
    </div>
  </section>
);

export default IncomeSection;
