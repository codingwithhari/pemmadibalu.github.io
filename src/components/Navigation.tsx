import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, User, Code, FolderOpen, Award, Mail } from "lucide-react";
const navItems = [{
  id: "home",
  label: "Home",
  icon: Home
}, {
  id: "about",
  label: "About",
  icon: User
}, {
  id: "skills",
  label: "Skills",
  icon: Code
}, {
  id: "projects",
  label: "Projects",
  icon: FolderOpen
}, {
  id: "certifications",
  label: "Certifications",
  icon: Award
}, {
  id: "contact",
  label: "Contact",
  icon: Mail
}];
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setScrolled(scrollY > 50);

          // Cache section elements to avoid repeated DOM queries
          const sectionElements = navItems.reduce((acc, item) => {
            const element = document.getElementById(item.id);
            if (element) acc[item.id] = element;
            return acc;
          }, {} as Record<string, Element>);

          // Find active section more efficiently
          const current = navItems.find(item => {
            const element = sectionElements[item.id];
            if (element) {
              const rect = element.getBoundingClientRect();
              return rect.top <= 100 && rect.bottom >= 100;
            }
            return false;
          })?.id;
          if (current && current !== activeSection) {
            setActiveSection(current);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };
  return <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-card shadow-card" : "bg-transparent"}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo with Simple Effect */}
            <div className="flex items-center gap-2">
              
              <span className="font-bold text-xl gradient-text">Portfolio</span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map(item => <Button key={item.id} variant="ghost" size="sm" onClick={() => scrollToSection(item.id)} className={`relative transition-all duration-300 ${activeSection === item.id ? "text-primary shadow-glow-primary" : "text-muted-foreground hover:text-foreground"}`}>
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.label}
                  {activeSection === item.id && <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>}
                </Button>)}
            </div>

            {/* Mobile Menu Button */}
            
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isOpen && <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-lg" onClick={() => setIsOpen(false)} />
          <div className="absolute top-0 right-0 w-64 h-full glass-card shadow-2xl">
            <div className="p-6 pt-20">
              <div className="space-y-4">
                {navItems.map(item => <Button key={item.id} variant="ghost" className={`w-full justify-start transition-all duration-300 ${activeSection === item.id ? "bg-primary/20 text-primary shadow-glow-primary" : "text-muted-foreground hover:text-foreground hover:bg-card"}`} onClick={() => scrollToSection(item.id)}>
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.label}
                  </Button>)}
              </div>
            </div>
          </div>
        </div>}

      {/* Floating Navigation Dots (Desktop) */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
        <div className="space-y-4">
          {navItems.map(item => <button key={item.id} onClick={() => scrollToSection(item.id)} className={`block w-3 h-3 rounded-full transition-all duration-300 ${activeSection === item.id ? "bg-primary shadow-glow-primary scale-125" : "bg-muted-foreground/40 hover:bg-muted-foreground"}`} title={item.label} />)}
        </div>
      </div>
    </>;
}