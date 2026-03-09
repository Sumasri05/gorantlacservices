import { motion } from "framer-motion";
import { GraduationCap, Home, BarChart3, Landmark, Briefcase, UserCheck, Heart } from "lucide-react";

const categories = [
  { icon: GraduationCap, label: "Students" },
  { icon: GraduationCap, label: "Teachers" },
  { icon: Home, label: "Housewives" },
  { icon: BarChart3, label: "Sales Professionals" },
  { icon: UserCheck, label: "Business Owners" },
  { icon: Briefcase, label: "IT & Non-IT Employees" },
  { icon: Landmark, label: "Financial Advisors" },
  { icon: Heart, label: "Retired Professionals" },
];

const WhoCanJoinSection = () => (
  <section id="who-can-join" className="py-24 bg-background">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Who Can Join <span className="text-secondary">This Opportunity?</span></h2>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-base">Anyone with ambition and the desire to earn additional income can join this opportunity.</p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
        {categories.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-card card-elevated rounded-xl p-5 flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center shrink-0">
              <c.icon size={20} className="text-primary-foreground" />
            </div>
            <span className="text-sm font-medium text-foreground">{c.label}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 flex flex-wrap justify-center gap-6"
      >
        <div className="bg-muted rounded-xl px-6 py-3 text-center">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">Min. Age</p>
          <p className="text-lg font-bold text-foreground">21+</p>
        </div>
        <div className="bg-muted rounded-xl px-6 py-3 text-center">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">Min. Qualification</p>
          <p className="text-lg font-bold text-foreground">10th Pass</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 text-center"
      >
        <a href="#apply" className="inline-block gradient-gold text-secondary-foreground px-8 py-3.5 rounded-xl text-base font-semibold hover:opacity-90 transition-opacity">
          Apply Now and Start Your Journey
        </a>
      </motion.div>
    </div>
  </section>
);

export default WhoCanJoinSection;
