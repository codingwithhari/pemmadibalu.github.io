import { Button } from "@/components/ui/button";
import { ChevronDown, Mail, Github, Linkedin } from "lucide-react";


export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Simplified Background - No Particles */}
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="mb-8">
          <div className="mx-auto w-48 h-48 rounded-full overflow-hidden">
            <img 
              src="/lovable-uploads/2fe7f7ee-826c-4a2e-a1d9-559418985ba9.png" 
              alt="Pemmadi Balu - AI & Data Science Student" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Welcome Text */}
        <div className="mb-4">
          <p className="text-muted-foreground text-lg mb-2">Welcome to My Portfolio</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            I'm{" "}
            <span className="gradient-text">
              PEMMADI BALU
            </span>
          </h1>
        </div>

        {/* Description */}
        <div className="mb-8">
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            B.Tech Graduate in{" "}
            <span className="gradient-text-accent font-semibold">
              Computer Science & AI
            </span>
            <br />
            Passionate about building intelligent solutions that solve real-world problems
          </p>
        </div>

        {/* Action Buttons - Simplified */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          <Button variant="outline" size="lg" className="glass-card hover:bg-muted/10">
            View My Work
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <Button size="icon" variant="ghost" className="hover:bg-muted/20 rounded-full" asChild>
            <a href="https://github.com/PemmadiBalu" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6" />
            </a>
          </Button>
          <Button size="icon" variant="ghost" className="hover:bg-muted/20 rounded-full" asChild>
            <a href="https://www.linkedin.com/in/balupemmadi" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6" />
            </a>
          </Button>
          <Button size="icon" variant="ghost" className="hover:bg-muted/20 rounded-full" asChild>
            <a href="mailto:balupemmadi44@gmail.com">
              <Mail className="h-6 w-6" />
            </a>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div>
          <div className="flex flex-col items-center">
            <p className="text-sm text-muted-foreground mb-2">Scroll to explore</p>
            <ChevronDown className="h-6 w-6 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
}