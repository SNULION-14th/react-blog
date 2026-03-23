import { Button as ButtonComponent } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Button = (props) => {
  return (
    <ButtonComponent
      className={cn(
        "p-3 uppercase text-lg bg-stone-200 text-black hover:!bg-amber-400 hover:text-white",
        props.className,
      )}
      {...props}
    >
      {props.children}
    </ButtonComponent>
  );
};
