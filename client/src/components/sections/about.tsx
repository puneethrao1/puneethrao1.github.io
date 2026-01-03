import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const skills = [
  "Tableau", "Power BI", "SQL", "Python (Pandas, NumPy)", 
  "Excel (Advanced)", "Statistical Analysis", "Machine Learning Concepts", 
  "Business Intelligence", "Data Cleaning", "Storytelling"
];

export function About() {
  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Transforming Data into <span className="text-primary">Decisions</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                I am a Business Analytics & Data Visualization student passionate about transforming complex datasets into actionable strategic insights. My focus lies in bridging the gap between raw data and business decision-making through compelling storytelling and intuitive dashboards.
              </p>
              <p>
                With a strong foundation in BI tools and statistical analysis, I help organizations unlock the value hidden within their data. I thrive in environments that challenge me to think critically and design solutions that drive efficiency and growth.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-2xl"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">Technical Skills & Tools</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                  <span className="text-muted-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
