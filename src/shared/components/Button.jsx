import { Button as ButtonComponent } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Button = (props) => {
  return (
    <ButtonComponent
      className={cn(
        "h-8 rounded-lg bg-stone-100 px-6 text-sm font-medium uppercase text-black hover:!bg-amber-400 hover:!text-white",
        props.className
      )}
      {...props}
    >
      {props.children}
    </ButtonComponent>
  );
};
