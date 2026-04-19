import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-sans font-medium focus:outline-none focus:ring-2 focus:ring-charcoal focus:ring-offset-2 transition disabled:opacity-50 disabled:pointer-events-none",
          variant === "primary"
            ? "bg-charcoal text-white hover:bg-charcoal/90 shadow-lg"
            : "bg-transparent text-charcoal border border-transparent hover:bg-transparent/5 underline-offset-2",
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
