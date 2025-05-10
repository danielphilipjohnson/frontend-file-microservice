import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { ColorTokens } from "@/tokens/colors";

const buttonVariants = cva(
  [
    // Base styles
    "inline-flex items-center justify-center",
    "font-bold uppercase tracking-wider",
    "transition-colors duration-200",
    "focus-visible:outline-none focus-visible:ring-2",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    // Cyberpunk-specific clip path
    "clip-path-[polygon(0_0,_100%_0,_100%_70%,_92%_100%,_0_100%)]",
  ],
  {
    variants: {
      variant: {
        default: "bg-cyan-400 text-black hover:bg-cyan-300 focus:bg-cyan-300",
        secondary: "bg-pink-500 text-white hover:bg-pink-400 focus:bg-pink-400",
        outline:
          "border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 focus:bg-cyan-400/10",
        ghost: "text-gray-300 hover:bg-gray-700 focus:bg-gray-700",
        destructive: "bg-red-500 text-white hover:bg-red-400 focus:bg-red-400",
      },
      size: {
        default: "px-4 py-2 text-sm",
        sm: "px-2 py-1 text-xs",
        lg: "px-6 py-3 text-base",
        icon: "p-2 w-10 h-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  color?: keyof (typeof ColorTokens)["cyberpunk"];
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
