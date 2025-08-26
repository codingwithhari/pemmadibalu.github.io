import { Button } from "@/components/ui/button";
import { ChevronDown, Mail, Github, Linkedin } from "lucide-react";

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
        {/* Profile Image */}
        <div className="mb-8 animate-fade-in-up">
          <div className="relative mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow-primary hover-glow-primary">
            <div className="w-full h-full bg-gradient-primary flex items-center justify-center">
              <span className="text-6xl font-bold text-white">PB</span>
            </div>
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

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up animate-delay-400">
          <Button size="lg" className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 transform hover:scale-105">
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          <Button variant="outline" size="lg" className="glass-card hover-glow-accent">
            View My Work
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12 animate-fade-in-up animate-delay-500">
          <Button size="icon" variant="ghost" className="hover-glow-primary rounded-full">
            <Github className="h-6 w-6" />
          </Button>
          <Button size="icon" variant="ghost" className="hover-glow-secondary rounded-full">
            <Linkedin className="h-6 w-6" />
          </Button>
          <Button size="icon" variant="ghost" className="hover-glow-accent rounded-full">
            <Mail className="h-6 w-6" />
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

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 float-animation">
        <div className="w-20 h-20 rounded-full bg-gradient-primary opacity-20 blur-xl"></div>
      </div>
      <div className="absolute bottom-32 right-16 float-animation-delayed">
        <div className="w-32 h-32 rounded-full bg-gradient-accent opacity-15 blur-2xl"></div>
      </div>
      <div className="absolute top-1/2 left-8 float-animation">
        <div className="w-16 h-16 rounded-full bg-gradient-card opacity-25 blur-lg"></div>
      </div>
    </section>
  );
}