import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const cardContainerVariants = cva("rounded-xl py-2 px-4", {
  variants: {
    variant: {
      default: "bg-white",
      outline: "border border-background-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const CardContainer = ({
  className,
  children,
  variant,
}: {
  className?: string;
  children: ReactNode;
} & VariantProps<typeof cardContainerVariants>) => {
  return (
    <div className={cn(cardContainerVariants({ variant, className }))}>
      {children}
    </div>
  );
};

const CardHeader = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return <div className={className}>{children}</div>;
};

const CardBody = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return <div className={className}>{children}</div>;
};

const CardFooter = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return <div className={className}>{children}</div>;
};

export { CardContainer, CardHeader, CardBody, CardFooter };
