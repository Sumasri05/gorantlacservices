import { motion } from "framer-motion";
import { Clock, TrendingUp, BookOpen, Award, Plane, Rocket } from "lucide-react";

const benefits = [
  { icon: Clock, title: "Flexible Working Hours", desc: "Choose your own schedule and work at your convenience." },
  { icon: TrendingUp, title: "Unlimited Income Potential", desc: "No cap on earnings — the more you sell, the more you earn." },
  { icon: BookOpen, title: "Training & Mentorship", desc: "Professional training and mentorship to help you succeed." },
  { icon: Award, title: "Rewards & Recognition", desc: "Get recognized for your achievements with awards and incentives." },
  { icon: Plane, title: "Travel Opportunities", desc: "Domestic and international travel opportunities for top performers." },
  { icon: Rocket, title: "Career Growth", desc: "Clear career growth path with leadership opportunities." },
];

const BenefitsSection = () => (
  <section id="benefits" className="py-20 bg-muted">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Benefits of <span className="text-secondary">Joining</span></h2>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Discover what makes this opportunity rewarding.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {benefits.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="bg-card card-elevated rounded-xl p-6 text-center"
          >
            <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center mx-auto mb-4">
              <b.icon size={24} className="text-secondary-foreground" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">{b.title}</h3>
            <p className="text-sm text-muted-foreground">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
