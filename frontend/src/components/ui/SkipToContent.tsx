import React from "react";
import { cn } from "@/lib/utils";

interface SkipToContentProps {
  mainId?: string;
  className?: string;
}

const SkipToContent: React.FC<SkipToContentProps> = ({
  mainId = "main-content",
  className,
}) => {
  return (
    <a
      href={`#${mainId}`}
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-[9999]",
        "-translate-y-[200%]",
        "focus:translate-y-0",
        "bg-primary text-primary-foreground",
        "px-6 py-3 rounded-lg shadow-lg",
        "font-semibold text-base",
        "transition-transform duration-200 ease-out",
        "focus:outline-none focus:ring-4 focus:ring-primary focus:ring-offset-4",
        "focus:shadow-2xl",
        className
      )}
    >
      Saltar para o conteúdo principal
    </a>
  );
};

export default SkipToContent;
