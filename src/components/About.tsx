import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about leveraging technology to create innovative solutions
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative">
            <Card className="glass-card hover-glow-primary p-8">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-primary relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl font-bold text-white opacity-90">PB</span>
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-accent rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-card rounded-full opacity-30 blur-lg"></div>
              </div>
            </Card>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <Card className="glass-card hover-glow-secondary p-8">
              <CardContent className="p-0">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-bold">Education</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-lg font-semibold gradient-text-accent">
                      B.Tech in Computer Science & Engineering
                    </h4>
                    <p className="text-muted-foreground">
                      Specialization: Artificial Intelligence & Data Science
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Kakinada Institute of Engineering and Technology</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>Class of 2025</span>
                  </div>
                  <Badge variant="secondary" className="mt-2">
                    JNTUK University Affiliated
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card hover-glow-accent p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4">Passion & Vision</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I've always been curious about how things work—especially when it comes to 
                  technology and using it to solve real-life problems. My journey in AI and 
                  Data Science has equipped me with the skills to turn complex data into 
                  actionable insights.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From developing COVID-19 detection systems to creating intelligent chatbots, 
                  I love building solutions that make a difference. I'm constantly learning 
                  and exploring new technologies to stay at the forefront of innovation.
                </p>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <Card className="glass-card text-center p-4 hover-glow-primary">
                <div className="text-2xl font-bold gradient-text">15+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </Card>
              <Card className="glass-card text-center p-4 hover-glow-secondary">
                <div className="text-2xl font-bold gradient-text">5+</div>
                <div className="text-sm text-muted-foreground">Certifications</div>
              </Card>
              <Card className="glass-card text-center p-4 hover-glow-accent">
                <div className="text-2xl font-bold gradient-text">2+</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}