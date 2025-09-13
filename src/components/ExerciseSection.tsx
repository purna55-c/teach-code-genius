import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Trophy, Zap, CheckCircle, Clock } from "lucide-react";
import { toast } from "sonner";

interface Exercise {
  id: string;
  title: string;
  description: string;
  difficulty: "Easy" | "Medium" | "Hard";
  points: number;
  timeLimit: string;
  category: string;
  completed: boolean;
}

const ExerciseSection = () => {
  const [exercises, setExercises] = useState<Exercise[]>([
    {
      id: "1",
      title: "Two Sum Problem",
      description: "Find two numbers in an array that add up to a target sum.",
      difficulty: "Easy",
      points: 10,
      timeLimit: "15 min",
      category: "Arrays",
      completed: true
    },
    {
      id: "2",
      title: "Binary Tree Traversal",
      description: "Implement inorder, preorder, and postorder tree traversal algorithms.",
      difficulty: "Medium",
      points: 25,
      timeLimit: "30 min",
      category: "Trees",
      completed: false
    },
    {
      id: "3",
      title: "Dynamic Programming Optimization",
      description: "Solve the longest common subsequence problem using dynamic programming.",
      difficulty: "Hard",
      points: 50,
      timeLimit: "45 min",
      category: "Dynamic Programming",
      completed: false
    },
    {
      id: "4",
      title: "Graph Shortest Path",
      description: "Implement Dijkstra's algorithm to find shortest paths in a weighted graph.",
      difficulty: "Hard",
      points: 45,
      timeLimit: "40 min",
      category: "Graphs",
      completed: false
    },
    {
      id: "5",
      title: "String Manipulation",
      description: "Create a function to validate and format different types of input strings.",
      difficulty: "Easy",
      points: 15,
      timeLimit: "20 min",
      category: "Strings",
      completed: false
    },
    {
      id: "6",
      title: "Async Programming Challenge",
      description: "Handle multiple asynchronous operations with proper error handling and timeouts.",
      difficulty: "Medium",
      points: 30,
      timeLimit: "35 min",
      category: "Async/Await",
      completed: false
    }
  ]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-accent text-accent-foreground";
      case "Medium": return "bg-warning text-warning-foreground";
      case "Hard": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const handleStartExercise = (exerciseId: string) => {
    toast.success("Exercise started! Good luck!");
  };

  const generateNewExercise = () => {
    toast.success("New exercise generated based on your skill level!");
  };

  const totalPoints = exercises.reduce((sum, ex) => sum + (ex.completed ? ex.points : 0), 0);
  const completedCount = exercises.filter(ex => ex.completed).length;

  return (
    <section id="exercises" className="py-16 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Coding Exercises</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Challenge yourself with coding problems tailored to your skill level. Get instant feedback and improve your problem-solving abilities.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-card shadow-card border-border">
            <div className="p-6 text-center">
              <Trophy className="w-8 h-8 text-warning mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{totalPoints}</div>
              <div className="text-sm text-muted-foreground">Points Earned</div>
            </div>
          </Card>
          <Card className="bg-gradient-card shadow-card border-border">
            <div className="p-6 text-center">
              <CheckCircle className="w-8 h-8 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{completedCount}</div>
              <div className="text-sm text-muted-foreground">Completed</div>
            </div>
          </Card>
          <Card className="bg-gradient-card shadow-card border-border">
            <div className="p-6 text-center">
              <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-foreground">{exercises.length - completedCount}</div>
              <div className="text-sm text-muted-foreground">Available</div>
            </div>
          </Card>
        </div>

        {/* Generate Exercise Button */}
        <div className="text-center mb-8">
          <Button 
            onClick={generateNewExercise}
            size="lg"
            className="glow-primary"
          >
            <Zap className="w-5 h-5 mr-2" />
            Generate New Exercise
          </Button>
        </div>

        {/* Exercises Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map((exercise) => (
            <Card key={exercise.id} className="bg-gradient-card shadow-card border-border hover:shadow-lg transition-smooth group">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Target className="w-5 h-5 text-primary" />
                    <Badge className={getDifficultyColor(exercise.difficulty)}>
                      {exercise.difficulty}
                    </Badge>
                  </div>
                  {exercise.completed && (
                    <CheckCircle className="w-5 h-5 text-accent" />
                  )}
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                  {exercise.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {exercise.description}
                </p>

                <div className="flex justify-between items-center mb-4">
                  <Badge variant="outline" className="text-xs">
                    {exercise.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    {exercise.timeLimit}
                  </div>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-1">
                    <Trophy className="w-4 h-4 text-warning" />
                    <span className="text-sm font-medium text-foreground">{exercise.points} pts</span>
                  </div>
                </div>

                <Button 
                  className="w-full group-hover:glow-primary transition-smooth"
                  disabled={exercise.completed}
                  onClick={() => handleStartExercise(exercise.id)}
                >
                  {exercise.completed ? "Completed" : "Start Challenge"}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExerciseSection;