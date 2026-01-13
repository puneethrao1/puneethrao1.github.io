import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Telecom Customer Churn Analysis",
    description: "Analyzed 7,043 telecom customers to address 27% churn rate impacting revenue. Built Excel-based KPI dashboards with pivot tables and customer segmentation to identify at-risk segments and retention opportunities.",
    outcome: "Identified key churn drivers and quantified €137K in annual revenue at risk across high-value customer segments.",
    tags: ["Excel", "Customer Analytics", "Churn Analysis", "Business Intelligence"],
    image: "/projects/Excel.png",
    links: { demo: "https://docs.google.com/spreadsheets/d/1LTfEnnINEJJlQpLBF6lzTZRSMlx9Han_/edit?gid=19451180#gid=19451180" }
  },
  {
    title: "Dublin Bikes Usage Analysis Dashboard",
    description: "Analyzed 30 days of bike-sharing data to solve capacity planning challenges. Created interactive Power BI dashboard tracking 180K+ trips, revealing peak demand patterns and station utilization gaps.",
    outcome: "Identified 12 peak usage periods and 5 underutilized locations, enabling data-driven capacity planning and operational optimization.",
    tags: ["Power BI", "Data Visualization", "Public Transport", "Analytics"],
    image: "/projects/PowerBi.png",
    links: { demo: "https://app.powerbi.com/view?r=eyJrIjoiYTk3NTFlYjEtYWZhMC00MGE4LThkZWYtMmQ3OWJiOWJlMmI2IiwidCI6IjVkMGFhNmVhLTY2MjAtNDg2My05ZTIxLTllY2IxNDAyMjJiYyIsImMiOjh9" }
  },
  {
    title: "Dublin Fire & Ambulance Response Dashboard",
    description: "Built Tableau dashboard to analyze 91,867 emergency incidents and improve response time performance. Tracked call density, incident types, and SLA metrics across fire and ambulance services.",
    outcome: "Revealed 15-minute response time gaps at 3 stations and identified priority areas for resource allocation improvements.",
    tags: ["Tableau", "Data Visualization", "Public Safety", "Analytics"],
    image: "/projects/Tableau.png",
    links: { demo: "https://public.tableau.com/app/profile/puneeth.rao/viz/Dublinincidents/Dashboard1" }
  },
  {
    title: "Python E-commerce Analysis",
    description: "Analyzed 500K+ transaction records to uncover revenue drivers and seasonal trends. Used Python, Pandas, and Matplotlib to identify customer purchasing patterns and product performance metrics.",
    outcome: "Discovered 35% revenue spike in Q4, top 20% products driving 65% of sales, and 3 key customer segments for targeted marketing.",
    tags: ["Python", "Pandas", "Data Science", "Jupyter Notebook"],
    image: "/projects/Python.png",
    links: { demo: "https://puneethrao1.github.io/ecommerce_sales_analysis.html" }
  },
  {
    title: "Customer Relationship Management System",
    description: "Designed and deployed Salesforce CRM solution for streamlining sales operations. Implemented lead tracking, opportunity management, automated workflows, and custom reporting dashboards.",
    outcome: "Reduced manual data entry by 40% and improved sales pipeline visibility through automated reporting and workflow optimization.",
    tags: ["Salesforce", "CRM", "Sales Automation", "Workflow Design"],
    links: { demo: "/salesforce-demo" }
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my work in data analytics, dashboard creation, and predictive modeling.
          </p>
        </motion.div>

        <div className="space-y-10 max-w-7xl mx-auto">
          {/* First 4 projects in 2x2 grid */}
          <div className="grid md:grid-cols-2 gap-10">
            {projects.slice(0, 4).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-lg">
                  {project.image && (
                    <div className="w-full h-64 overflow-hidden bg-muted">
                      <img
                        src={project.image}
                        alt={`${project.title} preview`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}
                  
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    {project.outcome && (
                      <div className="p-3 bg-primary/5 border-l-4 border-primary rounded-r-md">
                        <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Impact</p>
                        <p className="text-sm text-foreground/90 font-medium">{project.outcome}</p>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-secondary/10 text-secondary hover:bg-secondary/20 border-transparent">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="mt-auto pt-6 border-t border-border">
                    {project.links.demo && (
                      <a 
                        href={project.links.demo}
                        target={project.links.demo.startsWith('http') ? "_blank" : "_self"}
                        rel={project.links.demo.startsWith('http') ? "noopener noreferrer" : ""}
                        className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" /> View Project
                      </a>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Last project centered */}
          {projects.length > 4 && (
            <div className="flex justify-center">
              <div className="w-full md:w-1/2">
                <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                      {projects[4].title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {projects[4].description}
                    </p>
                    
                    {projects[4].outcome && (
                      <div className="p-3 bg-primary/5 border-l-4 border-primary rounded-r-md">
                        <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Impact</p>
                        <p className="text-sm text-foreground/90 font-medium">{projects[4].outcome}</p>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {projects[4].tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-secondary/10 text-secondary hover:bg-secondary/20 border-transparent">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="mt-auto pt-6 border-t border-border">
                    {projects[4].links.demo && (
                      <a 
                        href={projects[4].links.demo}
                        target={projects[4].links.demo.startsWith('http') ? "_blank" : "_self"}
                        rel={projects[4].links.demo.startsWith('http') ? "noopener noreferrer" : ""}
                        className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" /> View Project
                      </a>
                    )}
                  </CardFooter>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
