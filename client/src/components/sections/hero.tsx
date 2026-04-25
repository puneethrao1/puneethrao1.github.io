import { motion } from "framer-motion";
import { ArrowRight, BarChart2, PieChart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/generated_images/abstract_data_visualization_background_with_glowing_nodes_and_lines_in_dark_blue_and_emerald..png";

export function Hero() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background z-10" />
        <img 
          src={heroBg} 
          alt="Data Visualization Background" 
          className="w-full h-full object-cover opacity-10 mix-blend-overlay"
        />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 leading-tight">
              Hello, I'm <span className="text-gradient">Puneeth Rao</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light mb-8">
              Business Analytics & Data Visualization Student
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {[
              { icon: BarChart2, label: "Data Storytelling" },
              { icon: PieChart, label: "Dashboards & BI" },
              { icon: TrendingUp, label: "Decision Support" },
            ].map((skill, i) => (
              <div 
                key={i}
                className="flex items-center gap-2 px-4 py-2 bg-primary/5 border border-border rounded-full text-sm text-muted-foreground"
              >
                <skill.icon className="w-4 h-4 text-secondary" />
                {skill.label}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base"
              onClick={scrollToProjects}
            >
              View My Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
