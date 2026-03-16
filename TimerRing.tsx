import { motion } from "framer-motion";

interface TimerRingProps {
  progress: number; // 0 to 1
  timeLeft: number;
  totalTime: number;
}

export function TimerRing({ progress, timeLeft, totalTime }: TimerRingProps) {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - progress * circumference;
  
  // Color transitions from primary -> warning -> destructive
  const getColor = () => {
    if (progress < 0.25) return "stroke-destructive";
    if (progress < 0.5) return "stroke-warning";
    return "stroke-primary";
  };

  return (
    <div className="relative w-40 h-40 flex items-center justify-center">
      <svg className="absolute inset-0 w-full h-full transform -rotate-90">
        {/* Background track */}
        <circle
          cx="80"
          cy="80"
          r={radius}
          className="stroke-muted fill-none"
          strokeWidth="8"
        />
        {/* Progress ring */}
        <motion.circle
          cx="80"
          cy="80"
          r={radius}
          className={`fill-none transition-colors duration-500 ${getColor()}`}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          animate={{ strokeDashoffset }}
          transition={{ duration: 0.5, ease: "linear" }}
        />
      </svg>
      <div className="flex flex-col items-center justify-center z-10">
        <span className="text-4xl font-display font-bold text-foreground">
          {timeLeft}
        </span>
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Secs
        </span>
      </div>
    </div>
  );
}
