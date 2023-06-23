import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";

const largeHeadingVarients = cva(
  'max-width-prose text-4xl font-extrabold text-gray-900 dark:text-gray-300 mb-2 text-center lg:text-left leading-tight tracking-tighter',
  {
    variants: {
      size: {
        default: "text-4xl md:text-5xl lg:text-6xl",
        lg: 'text-5xl md:text-6xl lg:text-7xl',
        sm: 'text-2xl md:text-3xl lg:text-4xl',
      },
    },
    defaultVariants: {
      size: 'default',
    }
  }
)

interface LargeHeadingProps extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof largeHeadingVarients>{};

const LargeHeading = forwardRef<HTMLHeadingElement, LargeHeadingProps>(({
  className, size, children, ...props
}, ref) => {
  return (
    <h1
      ref={ref}
      {...props}
      className={cn(largeHeadingVarients({size, className}))}
    >
      {children}
    </h1>
  )
})

LargeHeading.displayName = "LargeHeading";

export default LargeHeading;