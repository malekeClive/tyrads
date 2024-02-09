import { ReactNode } from "react";

const Avatar = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return <div className={`avatar-base ${className}`}>{children}</div>;
};

export { Avatar };
