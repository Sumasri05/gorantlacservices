import { motion } from "framer-motion";
import { FileText, BookOpen, DollarSign } from "lucide-react";

const steps = [
  {
    icon: FileText,
    step: "Step 1",
    title: "Apply Online",
    description: "Fill out the application form and connect with the advisor.",
  },
  {
    icon: BookOpen,
    step: "Step 2",
    title: "Attend Training",
    description: "Receive professional guidance and training.",
  },
  {
    icon: DollarSign,
    step: "Step 3",
    title: "Start Earning",
    description: "Begin advising clients and earn commissions.",
  },
];

const HowItWorksSection = () => (
  <section className="py-24 bg-muted">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">How It <span className="text-secondary">Works</span></h2>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Three simple steps to begin your journey with us.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card card-elevated rounded-2xl p-8 text-center"
          >
            <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mx-auto mb-5 shadow-lg">
              <s.icon size={28} className="text-primary-foreground" />
            </div>
            <span className="text-xs font-bold text-secondary uppercase tracking-widest">{s.step}</span>
            <h3 className="text-xl font-bold text-foreground mt-2 mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
