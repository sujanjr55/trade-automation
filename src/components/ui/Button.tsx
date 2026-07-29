import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 min-h-[48px] active:scale-[0.98]",
          {
            "bg-accent text-white shadow-md hover:bg-accent/90 hover:shadow-lg": variant === "default",
            "border-2 border-slate-800 bg-transparent text-slate-800 dark:border-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800": variant === "outline",
            "hover:bg-slate-100 text-slate-700 dark:hover:bg-slate-800 dark:text-slate-300": variant === "ghost",
            "text-accent underline-offset-4 hover:underline": variant === "link",
            "h-12 px-6 py-2": size === "default",
            "h-10 rounded-lg px-4 text-xs min-h-[40px]": size === "sm",
            "h-14 rounded-2xl px-10 min-h-[56px] text-base": size === "lg",
            "h-12 w-12 rounded-xl": size === "icon",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
