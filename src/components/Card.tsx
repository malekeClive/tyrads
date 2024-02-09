import { ReactNode } from "react";

const CardContainer = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return <div className={`card-base ${className}`}>{children}</div>;
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
