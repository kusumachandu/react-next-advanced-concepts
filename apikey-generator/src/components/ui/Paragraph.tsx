import React, { FC, HTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const paragraphVarients = cva(
  "max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center lg:text-left",
  {
    variants: {
      size: {
        default: "text-base",
        sm: "txt-sm, sm:text-rebase",
      },
      defaultVariants: {
        size: "default",
      },
    },
  }
);

interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVarients> {}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={cn(paragraphVarients({ size, className }))}
      >
        {children}
      </p>
    );
  }
);

Paragraph.displayName = "Paragraph";

export default Paragraph;
