import { Button } from "@/components/ui/button";
import { ChevronDown, Mail, Github, Linkedin } from "lucide-react";
import profileImage from "@/assets/profile-image.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Particles */}
      <div className="particles-bg">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 10 + 15}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Profile Image with Neon Effect */}
        <div className="mb-8 animate-fade-in-up">
          <div className="relative mx-auto w-48 h-48 rounded-full overflow-hidden neon-border shadow-glow-primary hover-glow-primary">
            <img 
              src={profileImage} 
              alt="Pemmadi Balu - AI & Data Science Student" 
              className="w-full h-full object-cover animate-hologram"
            />
            {/* Rotating Ring Effect */}
            <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-primary animate-spin" style={{ 
              background: 'conic-gradient(from 0deg, transparent, hsl(var(--primary)), transparent)',
              animation: 'spin 3s linear infinite'
            }}></div>
          </div>
        </div>

        {/* Welcome Text */}
        <div className="mb-4 animate-fade-in-up animate-delay-200">
          <p className="text-muted-foreground text-lg mb-2">Welcome to My Portfolio</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            I'm{" "}
            <span className="gradient-text animate-gradient-shift">
              PEMMADI BALU
            </span>
          </h1>
        </div>

        {/* Description */}
        <div className="mb-8 animate-fade-in-up animate-delay-300">
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            B.Tech Graduate in{" "}
            <span className="gradient-text-accent font-semibold">
              Computer Science & AI
            </span>
            <br />
            Passionate about building intelligent solutions that solve real-world problems
          </p>
        </div>

        {/* Action Buttons with Enhanced Effects */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animate-delay-400">
          <Button size="lg" className="bg-gradient-rainbow hover:shadow-glow-intense transition-all duration-500 transform hover:scale-110 animate-neon-pulse">
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          <Button variant="outline" size="lg" className="glass-card hover-glow-accent neon-border">
            View My Work
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12 animate-fade-in-up animate-delay-500">
          <Button size="icon" variant="ghost" className="hover-glow-primary rounded-full" asChild>
            <a href="https://github.com/PemmadiBalu" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6" />
            </a>
          </Button>
          <Button size="icon" variant="ghost" className="hover-glow-secondary rounded-full" asChild>
            <a href="https://www.linkedin.com/in/balupemmadi" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6" />
            </a>
          </Button>
          <Button size="icon" variant="ghost" className="hover-glow-accent rounded-full" asChild>
            <a href="mailto:balupemmadi44@gmail.com">
              <Mail className="h-6 w-6" />
            </a>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-fade-in-up animate-delay-500">
          <div className="flex flex-col items-center">
            <p className="text-sm text-muted-foreground mb-2">Scroll to explore</p>
            <ChevronDown className="h-6 w-6 text-primary animate-bounce" />
          </div>
        </div>
      </div>

        {/* Floating Neon Orbs with Dynamic Colors */}
        <div className="absolute top-20 left-10 float-animation">
          <div className="w-20 h-20 rounded-full bg-gradient-primary opacity-40 blur-xl animate-pulse"></div>
        </div>
        <div className="absolute bottom-32 right-16 float-animation-delayed">
          <div className="w-32 h-32 rounded-full bg-gradient-secondary opacity-30 blur-2xl animate-pulse animate-delay-300"></div>
        </div>
        <div className="absolute top-1/2 left-8 float-animation">
          <div className="w-16 h-16 rounded-full bg-gradient-accent opacity-50 blur-lg animate-pulse animate-delay-500"></div>
        </div>
        <div className="absolute top-1/3 right-20 float-animation-delayed">
          <div className="w-24 h-24 rounded-full bg-neon-purple opacity-35 blur-xl animate-pulse animate-delay-700"></div>
        </div>
    </section>
  );
}