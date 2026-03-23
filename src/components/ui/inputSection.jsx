import { Input, Button } from "@/shared/components";

function InputSection({ className, title, type, placeholder, ...props }) {
  return (
    <div>
      {title ? <p className="text-left text-sm p-1">{title}</p> : null}
      <Input
        className="focus-visible:ring-amber-500 focus-visible:ring-2 focus-visible:border-transparent selection:bg-amber-300 selection:text-black"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export { InputSection };
