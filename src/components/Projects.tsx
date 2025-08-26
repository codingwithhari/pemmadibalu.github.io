import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Eye, Brain, Calculator, MessageSquare } from "lucide-react";

const getProjectLink = (title: string) => {
  switch (title) {
    case "COVID-19 Detection from Chest X-Ray":
      return "https://github.com/PemmadiBalu/COVID_19_XRAY_DETECTION";
    case "GUI Calculator - Python":
      return "https://github.com/PemmadiBalu/python--calculator-";
    case "AI-Powered Chatbot":
      return "https://github.com/PemmadiBalu/simple-ai-chart_bot-";
    default:
      return "https://github.com/PemmadiBalu";
  }
};

const projects = [
  {
    title: "COVID-19 Detection from Chest X-Ray",
    description: "Developed a deep learning-based system to detect COVID-19 infection from chest X-ray images. This project aims to support the medical community by providing a fast and reliable diagnosis method using computer vision.",
    features: [
      "Used Convolutional Neural Networks (CNNs) for image classification",
      "Trained on publicly available datasets of chest X-rays (COVID-positive and normal)",
      "Achieved high accuracy in binary classification (COVID vs. Non-COVID)",
      "Implemented data preprocessing techniques like normalization and augmentation",
      "Built using Python, TensorFlow/Keras, and OpenCV",
      "Evaluated model performance using accuracy, precision, recall, and F1-score"
    ],
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Matplotlib", "Jupyter Notebook"],
    icon: Brain,
    color: "primary",
    image: "/api/placeholder/400/250"
  },
  {
    title: "GUI Calculator - Python",
    description: "Developed a simple yet effective calculator using Python's Tkinter library. The calculator features a clean interface and supports standard mathematical operations with error handling for a smooth user experience.",
    features: [
      "Simple and clean interface using Tkinter",
      "Supports standard mathematical operations",
      "Error handling for invalid inputs",
      "Lightweight, fast, and responsive",
      "Real-time calculation display",
      "Memory functions for advanced calculations"
    ],
    technologies: ["Python", "Tkinter", "GUI Development"],
    icon: Calculator,
    color: "secondary",
    image: "/api/placeholder/400/250"
  },
  {
    title: "AI-Powered Chatbot",
    description: "Created a simple yet effective chatbot using natural language processing (NLP) techniques. The chatbot can understand user queries and provide accurate, relevant responses using machine learning algorithms.",
    features: [
      "Understands and processes natural language input using NLP",
      "Learns from user interactions to improve responses over time",
      "Handles basic conversation and provides helpful information",
      "Machine learning algorithms for intelligent responses",
      "Seamless user experience with real-time interactions",
      "Extensible architecture for domain-specific applications"
    ],
    technologies: ["Python", "NLP", "NLTK", "Machine Learning"],
    icon: MessageSquare,
    color: "accent",
    image: "/api/placeholder/400/250"
  }
];

export default function Projects() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions built with cutting-edge technology
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.title}
                className={`glass-card hover-glow-${project.color} animate-fade-in-up group`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid md:grid-cols-2 gap-8 p-8">
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-xl">
                    <div className={`aspect-video bg-gradient-${project.color} relative group-hover:scale-105 transition-transform duration-500`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <IconComponent className="h-24 w-24 text-white/80" />
                      </div>
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex gap-4">
                          <Button size="sm" variant="secondary" className="bg-white/90 text-black hover:bg-white" asChild>
                            <a href={getProjectLink(project.title)} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              Code
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`p-2 rounded-lg bg-${project.color}/20`}>
                          <IconComponent className={`h-6 w-6 text-${project.color}`} />
                        </div>
                        <h3 className="text-2xl font-bold gradient-text-accent">
                          {project.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold mb-3 text-primary">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.slice(0, 4).map((feature, featureIndex) => (
                          <li 
                            key={featureIndex}
                            className="flex items-start gap-2 text-sm text-muted-foreground animate-slide-in-right"
                            style={{ animationDelay: `${(index * 0.2) + (featureIndex * 0.1)}s` }}
                          >
                            <div className={`w-2 h-2 rounded-full bg-${project.color} mt-2 flex-shrink-0`}></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={tech}
                            variant="secondary" 
                            className="hover:shadow-primary/50 hover:shadow-md transition-all duration-300 animate-scale-in"
                            style={{ animationDelay: `${(index * 0.2) + (techIndex * 0.05)}s` }}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <Button variant="outline" className="glass-card" asChild>
                        <a href={getProjectLink(project.title)} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Certifications Section */}
        <Card id="certifications" className="glass-card hover-glow-accent mb-16">
          <CardHeader>
            <CardTitle className="text-center">
              <span className="gradient-text text-2xl">Certifications & Training</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "Google AI-ML Virtual Internship",
                  organization: "Google & EduSkills",
                  duration: "120 Hours",
                  description: "Short-term internship focused on Artificial Intelligence and Machine Learning concepts, organized by EduSkills in collaboration with Andhra Pradesh State Council of Higher Education."
                },
                {
                  name: "AWS Cloud Computing",
                  organization: "AWS Academy & EduSkills",
                  duration: "10 Weeks",
                  description: "Cloud Virtual Internship covering AWS services, cloud architecture, and deployment strategies. Completed through Kakinada Institute of Engineering and Technology."
                },
                {
                  name: "Infosys Machine Learning with Go",
                  organization: "Infosys Springboard",
                  duration: "Course Completion",
                  description: "Comprehensive course on Machine Learning implementation using Go programming language, covering algorithms and practical applications."
                },
                {
                  name: "Salesforce Developer Virtual Internship",
                  organization: "SmartBridge & Salesforce",
                  duration: "8 Weeks",
                  description: "Virtual internship program covering Salesforce development, including Apex programming, Lightning components, and CRM customization."
                },
                {
                  name: "UiPath RPA Developer Internship",
                  organization: "UiPath & EduSkills",
                  duration: "10 Weeks (8 Weeks Active)",
                  description: "RPA Developer Virtual Internship focusing on automation workflows, bot development, and process automation using UiPath platform."
                },
                {
                  name: "Oneroadmap AI & Data Science",
                  organization: "OneRoadmap",
                  duration: "Certification Test",
                  description: "AI and Data Scientist Certification demonstrating proficiency in artificial intelligence concepts, data analysis, and machine learning techniques."
                },
                {
                  name: "Edyst Python Programming",
                  organization: "Edyst",
                  duration: "Course Completion",
                  description: "Python Programming: Intro & Advanced certification covering fundamental to advanced Python concepts, data structures, and programming methodologies."
                }
              ].map((cert, index) => (
                <Card 
                  key={cert.name}
                  className="glass-card hover-glow-secondary p-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-lg font-semibold gradient-text-accent mb-1">
                        {cert.name}
                      </h4>
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                        <span>{cert.organization}</span>
                        <Badge variant="outline" className="text-xs">
                          {cert.duration}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="glass-card hover-glow-primary p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Interested in <span className="gradient-text">Collaboration?</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300">
              Let's Work Together
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}