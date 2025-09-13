import { Button } from "@/components/ui/button";
import { Code, BookOpen, Target, BarChart3, User } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center glow-primary">
                <Code className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">CodeLearn</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="#tutorials" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-smooth">
                <BookOpen className="w-4 h-4" />
                <span>Tutorials</span>
              </a>
              <a href="#exercises" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-smooth">
                <Target className="w-4 h-4" />
                <span>Exercises</span>
              </a>
              <a href="#analyzer" className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-smooth">
                <BarChart3 className="w-4 h-4" />
                <span>Code Analyzer</span>
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            <Button variant="default" size="sm" className="glow-primary">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;