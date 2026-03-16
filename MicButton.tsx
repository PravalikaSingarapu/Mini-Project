import { motion } from "framer-motion";
import { Mic, Square } from "lucide-react";
import { cn } from "@/lib/utils";

interface MicButtonProps {
  isRecording: boolean;
  onClick: () => void;
  disabled?: boolean;
}

export function MicButton({ isRecording, onClick, disabled }: MicButtonProps) {
  return (
    <div className="relative flex items-center justify-center">
      {/* Outer Pulse Ring */}
      {isRecording && (
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full bg-primary/50 blur-md pointer-events-none"
        />
      )}
      
      {/* Inner Pulse Ring */}
      {isRecording && (
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 rounded-full bg-primary/30 pointer-events-none"
        />
      )}

      <button
        onClick={onClick}
        disabled={disabled}
        className={cn(
          "relative z-10 w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          isRecording 
            ? "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-destructive/25" 
            : "bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 shadow-primary/25"
        )}
      >
        {isRecording ? (
          <Square className="w-8 h-8 fill-current" />
        ) : (
          <Mic className="w-8 h-8" />
        )}
      </button>
    </div>
  );
}
