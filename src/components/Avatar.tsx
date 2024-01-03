import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const avatarVariants = cva(
  "rounded-full text-white flex items-center justify-center",
  {
    variants: {
      variant: {
        default: "bg-primary",
        outline: "border border-primary",
      },
      size: {
        xs: "w-6 h-6",
        default: "w-8 h-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Avatar = ({
  className,
  children,
  variant,
  size,
}: {
  className?: string;
  children: ReactNode;
} & VariantProps<typeof avatarVariants>) => {
  return (
    <div className={cn(avatarVariants({ variant, size, className }))}>
      {children}
    </div>
  );
};

export { Avatar };
