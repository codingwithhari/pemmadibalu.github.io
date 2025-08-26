import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Brain, Settings } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    color: "primary",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 75 },
      { name: "HTML/CSS", level: 85 },
      { name: "SQL", level: 80 },
    ]
  },
  {
    title: "Data Science & AI",
    icon: Brain,
    color: "secondary",
    skills: [
      { name: "Machine Learning", level: 85 },
      { name: "Deep Learning", level: 80 },
      { name: "NLP", level: 75 },
      { name: "Computer Vision", level: 70 },
    ]
  },
  {
    title: "Tools & Frameworks",
    icon: Database,
    color: "accent",
    skills: [
      { name: "TensorFlow/Keras", level: 85 },
      { name: "NumPy/Pandas", level: 90 },
      { name: "Matplotlib", level: 80 },
      { name: "OpenCV", level: 75 },
    ]
  },
  {
    title: "Productivity Tools",
    icon: Settings,
    color: "primary",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "Jupyter Notebook", level: 90 },
      { name: "VS Code", level: 90 },
      { name: "MS Office", level: 85 },
    ]
  }
];


export default function Skills() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technical expertise and continuous learning in cutting-edge technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title} 
                className={`glass-card hover-glow-${category.color} animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-${category.color}/20`}>
                      <IconComponent className={`h-6 w-6 text-${category.color}`} />
                    </div>
                    <span className="gradient-text-accent">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skill.name}
                        className="animate-slide-in-right"
                        style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>


        {/* Floating Skill Icons */}
        <div className="absolute -z-10 opacity-10">
          <div className="absolute top-20 left-20 float-animation">
            <Code className="h-16 w-16 text-primary" />
          </div>
          <div className="absolute bottom-32 right-32 float-animation-delayed">
            <Brain className="h-20 w-20 text-secondary" />
          </div>
          <div className="absolute top-1/2 right-20 float-animation">
            <Database className="h-12 w-12 text-accent" />
          </div>
        </div>
      </div>
    </section>
  );
}