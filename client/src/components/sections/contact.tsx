import { motion } from "framer-motion";
import { Mail, Github, Linkedin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/5 rounded-[100%] blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">Let's Connect</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
            I'm open to new opportunities and collaborations. Feel free to reach out if you'd like to discuss data, tech, or just say hi!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => window.location.href = "mailto:inbox.puneethrao@gmail.com"}
            >
              <Mail className="w-4 h-4 mr-2" />
              Send me an email
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto border-input text-foreground hover:bg-accent hover:text-accent-foreground"
              onClick={() => window.open("https://www.linkedin.com/in/puneeth-rao-4792131ba/", "_blank")}
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto border-input text-foreground hover:bg-accent hover:text-accent-foreground"
              onClick={() => window.open("https://github.com", "_blank")}
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>

          <div className="pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Puneeth Rao Dilip. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
