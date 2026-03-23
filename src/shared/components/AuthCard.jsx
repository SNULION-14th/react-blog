import logo from "@/assets/logo.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const AuthCard = ({ title, description, children, footer }) => {
  return (
    <Card className="w-full max-w-md rounded-[2rem] border-stone-200 bg-white/95 shadow-md shadow-amber-100/20 backdrop-blur">
      <CardHeader className="items-center gap-4 pt-10 text-center">
        <img src={logo} alt="SNULION 로고" className="h-20 w-auto object-contain" />
        <div className="space-y-2">
          <CardTitle className="text-3xl font-black tracking-tight text-stone-950">
            {title}
          </CardTitle>
          {description ? (
            <p className="text-sm leading-6 text-stone-500">{description}</p>
          ) : null}
        </div>
      </CardHeader>

      <CardContent className="space-y-6 px-8 pb-8">{children}</CardContent>

      {footer ? <div className="px-8 pb-8">{footer}</div> : null}
    </Card>
  );
};
