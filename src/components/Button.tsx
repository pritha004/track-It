import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`flex justify-center items-center gap-2 text-base leading-none ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

const MotionButton = motion(Button);

export default MotionButton;
