import { motion } from "framer-motion";

export function About() {
  const skillCategories = [
    {
      title: "Analytics & Business Intelligence",
      skills: ["Power BI", "Tableau", "Excel (Advanced)", "Dashboard Design", "KPI Development"]
    },
    {
      title: "Data & Programming",
      skills: ["SQL", "Python", "Pandas", "NumPy", "Matplotlib", "Jupyter Notebook", "Data Cleaning", "ETL"]
    },
    {
      title: "Business & Analysis",
      skills: ["Statistical Analysis", "Predictive Modeling", "Data Storytelling", "CRM (Salesforce)", "Stakeholder Communication"]
    }
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3 text-center">
            Background & Expertise
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Final-year BIS student specializing in Data Analytics & Business Intelligence
          </p>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left: About */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <p className="text-base leading-relaxed text-muted-foreground mb-6">
                  I am a final-year Business & Information Systems student specialising in data 
                  analytics and business intelligence. My work focuses on transforming complex 
                  datasets into strategic insights through advanced visualisation, statistical 
                  analysis, and predictive modelling using Power BI, Tableau, SQL, Python, and Excel.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-display font-bold text-foreground mb-4">
                  Core Capabilities
                </h3>
                <div className="space-y-3">
                  {[
                    "Design and deploy interactive BI dashboards that drive operational and strategic decision-making",
                    "Extract, clean, and model large-scale datasets to uncover actionable business insights",
                    "Translate complex business challenges into structured analytical frameworks",
                    "Conduct KPI analysis to identify performance gaps, risks, and growth opportunities",
                    "Communicate data-driven recommendations to technical and non-technical stakeholders"
                  ].map((capability, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground/40 mt-2 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {capability}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Skills */}
            <div className="lg:col-span-3">
              <h3 className="text-xl font-display font-bold text-foreground mb-6">
                Technical Skills
              </h3>
              <div className="space-y-6">
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="border border-border rounded-lg p-5 bg-card hover:border-foreground/20 transition-colors"
                  >
                    <h4 className="text-sm font-semibold text-foreground mb-3">
                      {category.title}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 bg-foreground/5 hover:bg-foreground/10 text-foreground text-sm rounded-md transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
