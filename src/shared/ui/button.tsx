import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const button = cva("font-semibold transition-colors duration-200 w-full", {
  variants: {
    intent: {
      secondary: "bg-neutral-500 text-neutral-white-100",
      icon: "bg-transparent",
    },
    size: {
      small: "py-[6px] rounded-[6px]",
      large: "py-4 rounded-2",
      icon: "size-4 rounded-[6px]",
    },
    disabled: {
      false: null,
      true: "bg-neutral-600 text-neutral-600 cursor-not-allowed",
    },
  },
  compoundVariants: [
    {
      intent: "secondary",
      disabled: false,
      class: "hover:bg-neutral-400 active:bg-neutral-300",
    },
  ],
  defaultVariants: {
    disabled: false,
    intent: "secondary",
    size: "small",
  },
});

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof button> {}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  disabled,
  ...props
}) => (
  <button
    className={button({ intent, size, disabled, className })}
    disabled={disabled || undefined}
    {...props}
  />
);
