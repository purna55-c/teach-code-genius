import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Code, Zap, Target } from "lucide-react";
import CodeEditor from "./CodeEditor";

const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Master Programming with
                <span className="bg-gradient-primary bg-clip-text text-transparent"> AI-Powered </span>
                Learning
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Learn to code with interactive tutorials, real-time error detection, personalized exercises, and intelligent debugging suggestions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="glow-primary text-lg px-8">
                Start Learning Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                View Demo
              </Button>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <Card className="bg-card/50 border-border p-4 text-center hover:bg-card/70 transition-smooth">
                <Code className="w-8 h-8 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-foreground mb-1">Code Analysis</h3>
                <p className="text-sm text-muted-foreground">Real-time error detection and optimization suggestions</p>
              </Card>
              <Card className="bg-card/50 border-border p-4 text-center hover:bg-card/70 transition-smooth">
                <Zap className="w-8 h-8 text-accent mx-auto mb-2" />
                <h3 className="font-semibold text-foreground mb-1">Interactive Learning</h3>
                <p className="text-sm text-muted-foreground">Hands-on tutorials with instant feedback</p>
              </Card>
              <Card className="bg-card/50 border-border p-4 text-center hover:bg-card/70 transition-smooth">
                <Target className="w-8 h-8 text-warning mx-auto mb-2" />
                <h3 className="font-semibold text-foreground mb-1">Personalized Exercises</h3>
                <p className="text-sm text-muted-foreground">AI-generated challenges based on your skill level</p>
              </Card>
            </div>
          </div>

          {/* Right Content - Code Editor */}
          <div className="lg:pl-8">
            <CodeEditor />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;