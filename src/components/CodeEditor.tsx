import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Bug, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner";

interface CodeError {
  line: number;
  message: string;
  type: "error" | "warning";
}

const CodeEditor = () => {
  const [code, setCode] = useState(`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));`);

  const [errors, setErrors] = useState<CodeError[]>([
    { line: 2, message: "Consider using memoization for better performance", type: "warning" }
  ]);

  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeCode = () => {
    setIsAnalyzing(true);
    
    // Simulate code analysis
    setTimeout(() => {
      const newErrors: CodeError[] = [];
      
      if (code.includes("fibonacci") && !code.includes("memo")) {
        newErrors.push({
          line: 2,
          message: "This recursive function could benefit from memoization to avoid redundant calculations",
          type: "warning"
        });
      }
      
      if (code.includes("console.log")) {
        newErrors.push({
          line: code.split('\n').findIndex(line => line.includes("console.log")) + 1,
          message: "Consider using proper testing instead of console.log",
          type: "warning"
        });
      }
      
      setErrors(newErrors);
      setIsAnalyzing(false);
      
      if (newErrors.length === 0) {
        toast.success("Code analysis complete - No issues found!");
      } else {
        toast.info(`Analysis complete - Found ${newErrors.length} suggestion(s)`);
      }
    }, 1500);
  };

  const runCode = () => {
    toast.success("Code executed successfully!");
  };

  return (
    <Card className="bg-gradient-card shadow-card border-border">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-foreground">Interactive Code Editor</h3>
          <div className="flex space-x-2">
            <Button
              onClick={analyzeCode}
              variant="outline"
              size="sm"
              disabled={isAnalyzing}
              className="text-warning border-warning hover:bg-warning hover:text-warning-foreground"
            >
              <Bug className="w-4 h-4 mr-2" />
              {isAnalyzing ? "Analyzing..." : "Analyze"}
            </Button>
            <Button
              onClick={runCode}
              size="sm"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Play className="w-4 h-4 mr-2" />
              Run
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="code-editor w-full h-64 p-4 rounded-lg border border-border resize-none focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            placeholder="Write your code here..."
          />
          
          {errors.length > 0 && (
            <div className="mt-4 space-y-2">
              <h4 className="text-sm font-medium text-muted-foreground">Code Analysis Results:</h4>
              {errors.map((error, index) => (
                <div
                  key={index}
                  className={`flex items-start space-x-2 p-3 rounded-lg border ${
                    error.type === "error" 
                      ? "border-destructive bg-destructive/10" 
                      : "border-warning bg-warning/10"
                  }`}
                >
                  {error.type === "error" ? (
                    <AlertCircle className="w-4 h-4 text-destructive mt-0.5" />
                  ) : (
                    <CheckCircle className="w-4 h-4 text-warning mt-0.5" />
                  )}
                  <div className="flex-1">
                    <p className="text-sm text-foreground">
                      <span className="font-medium">Line {error.line}:</span> {error.message}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default CodeEditor;