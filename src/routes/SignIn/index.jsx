//TODO: 로그인 페이지 구현
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.png";

export default function SignIn() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-50 p-4">
      <Card className="w-full max-w-lg border border-neutral-100 rounded-2xl">
        <CardHeader className="flex flex-col items-center space-y-6 pt-12 pb-8">
          <img src={logo} className="w-40 h-40 object-contain m-px" />
          <CardTitle className="text-3xl font-bold tracking-tight text-black">
            로그인
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 px-10">
          <Input
            type="text"
            placeholder="아이디를 입력하세요"
            className="w-full text-base py-6 border-neutral-200 placeholder:text-neutral-400 focus-visible:ring-black"
          />
          <Input
            type="password"
            placeholder="비밀번호를 입력하세요"
            className="w-full text-base py-6 border-neutral-200 placeholder:text-neutral-400 focus-visible:ring-black"
          />
        </CardContent>

        <CardFooter className="flex justify-center gap-4 pt-2 pb-12 px-10">
          <Button
            variant="secondary"
            className="text-base font-semibold text-black bg-neutral-100 hover:bg-neutral-200 py-6 px-10"
          >
            로그인
          </Button>
          <Button
            variant="secondary"
            className="text-base font-semibold text-black bg-neutral-100 hover:bg-neutral-200 py-6 px-10"
          >
            회원가입
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
