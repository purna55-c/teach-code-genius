import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, Star, ChevronRight } from "lucide-react";

interface Tutorial {
  id: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  progress: number;
  rating: number;
  topics: string[];
}

const TutorialSection = () => {
  const tutorials: Tutorial[] = [
    {
      id: "1",
      title: "JavaScript Fundamentals",
      description: "Learn the core concepts of JavaScript including variables, functions, and control structures.",
      level: "Beginner",
      duration: "2h 30m",
      progress: 75,
      rating: 4.8,
      topics: ["Variables", "Functions", "Loops", "Objects"]
    },
    {
      id: "2", 
      title: "React Component Patterns",
      description: "Master advanced React patterns including hooks, context, and component composition.",
      level: "Intermediate",
      duration: "3h 15m",
      progress: 45,
      rating: 4.9,
      topics: ["Hooks", "Context", "Components", "State Management"]
    },
    {
      id: "3",
      title: "Algorithm Optimization",
      description: "Deep dive into algorithm analysis, big O notation, and performance optimization techniques.",
      level: "Advanced",
      duration: "4h 20m",
      progress: 0,
      rating: 4.7,
      topics: ["Big O", "Recursion", "Dynamic Programming", "Data Structures"]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner": return "bg-accent text-accent-foreground";
      case "Intermediate": return "bg-warning text-warning-foreground";
      case "Advanced": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="tutorials" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Interactive Tutorials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn programming concepts through hands-on tutorials with real-time feedback and progress tracking.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial) => (
            <Card key={tutorial.id} className="bg-gradient-card shadow-card border-border hover:shadow-lg transition-smooth group">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    <Badge className={getLevelColor(tutorial.level)}>
                      {tutorial.level}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-warning fill-warning" />
                    <span className="text-sm text-muted-foreground">{tutorial.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                  {tutorial.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {tutorial.description}
                </p>

                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Clock className="w-4 h-4 mr-1" />
                  {tutorial.duration}
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="text-foreground font-medium">{tutorial.progress}%</span>
                  </div>
                  <Progress value={tutorial.progress} className="h-2" />
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {tutorial.topics.slice(0, 3).map((topic) => (
                    <Badge key={topic} variant="outline" className="text-xs">
                      {topic}
                    </Badge>
                  ))}
                  {tutorial.topics.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{tutorial.topics.length - 3} more
                    </Badge>
                  )}
                </div>

                <Button className="w-full group-hover:glow-primary transition-smooth">
                  {tutorial.progress > 0 ? "Continue" : "Start Tutorial"}
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TutorialSection;