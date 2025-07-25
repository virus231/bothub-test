import type { ReactNode } from "react";

interface AnimatedTransitionProps {
  children: ReactNode;
  isTransitioning: boolean;
  className?: string;
}

export const AnimatedTransition = ({ 
  children, 
  isTransitioning, 
  className = "" 
}: AnimatedTransitionProps) => {
  return (
    <div
      className={`transition-all duration-300 ease-in-out ${
        isTransitioning 
          ? "opacity-0 transform translate-y-2" 
          : "opacity-100 transform translate-y-0"
      } ${className}`}
    >
      {children}
    </div>
  );
};