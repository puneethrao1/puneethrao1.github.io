import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Python E-commerce Analysis",
    description: "Data analysis using Python, Pandas, and visualization libraries. Includes exploratory analysis, statistical insights, and sales trend forecasting.",
    tags: ["Python", "Pandas", "Data Science", "Jupyter Notebook"],
    links: { demo: "https://puneethrao1.github.io/ecommerce_sales_analysis.html" }
  },
  {
    title: "Telecom Customer Churn Analysis",
    description: "Excel analysis of 7,043 telecom customers with 27% churn rate. Features KPI dashboards, pivot tables, and customer segmentation identifying key churn drivers and €137K revenue at risk.",
    tags: ["Excel", "Customer Analytics", "Churn Analysis", "Business Intelligence"],
    links: { demo: "https://docs.google.com/spreadsheets/d/1LTfEnnINEJJlQpLBF6lzTZRSMlx9Han_/edit?gid=19451180#gid=19451180" }
  },
  {
    title: "Dublin Fire & Ambulance Response Dashboard",
    description: "Interactive Tableau dashboard analyzing Dublin's emergency response data including 91,867 incidents, average response time of 39 minutes, call density by station, incident types breakdown, and SLA performance metrics across fire and ambulance services.",
    tags: ["Tableau", "Data Visualization", "Public Safety", "Analytics"],
    links: { demo: "https://public.tableau.com/app/profile/puneeth.rao/viz/Dublinincidents/Dashboard1" }
  },
  {
    title: "Dublin Bikes Usage Analysis Dashboard",
    description: "Interactive Power BI dashboard analyzing a month of Dublin Bikes data, revealing usage patterns, peak hours, station popularity, and user demographics to optimize bike-sharing operations.",
    tags: ["Power BI", "Data Visualization", "Public Transport", "Analytics"],
    links: { demo: "https://app.powerbi.com/view?r=eyJrIjoiYTk3NTFlYjEtYWZhMC00MGE4LThkZWYtMmQ3OWJiOWJlMmI2IiwidCI6IjVkMGFhNmVhLTY2MjAtNDg2My05ZTIxLTllY2IxNDAyMjJiYyIsImMiOjh9" }
  },
  {
    title: "Customer Relationship Management System",
    description: "Fully functional CRM built on Salesforce platform featuring lead tracking, opportunity management, automated workflows, and custom reporting for streamlined sales operations.",
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

        <div className="grid md:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-card border-border hover:border-primary/50 transition-colors duration-300 group">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-8">
          {projects.slice(3).map((project, index) => (
            <motion.div
              key={index + 3}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-card border-border hover:border-primary/50 transition-colors duration-300 group">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
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
      </div>
    </section>
  );
}
