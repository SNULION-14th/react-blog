import { Label as LabelComponent } from "@/components/ui/label";
import { cn } from "@/lib/utils";
export const Label = ({ children, className, ...props }) => {
  return (
    <LabelComponent
      className={cn("text-sm font-medium pl-1", className)}
      {...props}
    >
      {children}
    </LabelComponent>
  );
};
