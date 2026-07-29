"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface SliderProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  value: number;
  onValueChange: (value: number) => void;
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ className, value, onValueChange, min = 0, max = 100, ...props }, ref) => {
    
    const percentage = ((value - Number(min)) / (Number(max) - Number(min))) * 100;

    return (
      <input
        type="range"
        ref={ref}
        min={min}
        max={max}
        value={value}
        onChange={(e) => onValueChange(Number(e.target.value))}
        className={cn(
          "w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent",
          className
        )}
        style={{
          background: `linear-gradient(to right, var(--accent) ${percentage}%, var(--muted) ${percentage}%)`
        }}
        {...props}
      />
    );
  }
);

Slider.displayName = "Slider";

export { Slider };
