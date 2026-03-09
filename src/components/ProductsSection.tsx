import { motion } from "framer-motion";
import { Shield, GraduationCap, Sunset, Users, Landmark, TrendingUp, PiggyBank } from "lucide-react";

const products = [
  { icon: Shield, title: "Protection Plans", desc: "Financial protection plans that provide life coverage to protect families against unexpected events.", color: "from-blue-500 to-blue-700" },
  { icon: GraduationCap, title: "Child Education Planning", desc: "Plans that help parents save and invest for their child's education and future needs.", color: "from-emerald-500 to-emerald-700" },
  { icon: Sunset, title: "Retirement Planning", desc: "Solutions that help individuals build financial security and regular income after retirement.", color: "from-orange-500 to-orange-700" },
  { icon: Users, title: "Family Insurance", desc: "Insurance solutions designed to protect the financial stability of the entire family.", color: "from-pink-500 to-pink-700" },
  { icon: Landmark, title: "Asset Creation Plans", desc: "Savings oriented insurance plans designed to build long-term financial assets.", color: "from-violet-500 to-violet-700" },
  { icon: TrendingUp, title: "Wealth Creation Plans", desc: "Investment-linked insurance plans that help grow wealth while providing life coverage.", color: "from-cyan-500 to-cyan-700" },
  { icon: PiggyBank, title: "Pension Plans", desc: "Retirement income plans that provide regular pension payments after retirement.", color: "from-amber-500 to-amber-700" },
];

const ProductsSection = () => (
  <section id="products" className="py-20 bg-background">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Insurance <span className="text-secondary">Products</span></h2>
        <p className="mt-3 text-muted-foreground max-w-xl mx-auto">A wide range of trusted insurance products you can offer to clients.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {products.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className={`bg-gradient-to-br ${p.color} rounded-xl p-6 card-elevated`}
          >
            <p.icon size={32} className="mb-3 text-primary-foreground" />
            <h3 className="text-base font-semibold text-primary-foreground mb-2">{p.title}</h3>
            <p className="text-sm text-primary-foreground/80">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
