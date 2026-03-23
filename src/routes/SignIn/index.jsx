import { Input, Button } from "@/shared/components";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import logo from "@/assets/logo.png";

//TODO: 로그인 페이지 구현
export default function SignIn() {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">
      <div className="flex flex-col justify-center items-center bg-card text-card-foreground rounded-xl border shadow-sm w-md">
        <img src={logo} className="w-40" />
        <p className="font-bold text-2xl">로그인</p>
        <div
          id="input-section"
          className="flex flex-col gap-2 px-10 mt-10 mb-5 w-full"
        >
          <Input
            className="focus-visible:ring-amber-500 focus-visible:ring-2 focus-visible:border-transparent selection:bg-amber-300 selection:text-black"
            type="id"
            placeholder="아이디를 입력하세요"
          />
          <Input
            className="focus-visible:ring-amber-500 focus-visible:ring-2 focus-visible:border-transparent selection:bg-amber-300 selection:text-black"
            type="password"
            placeholder="비밀번호를 입력하세요"
          />
        </div>
        <div className="flex gap-2 pb-10">
          <Button>로그인</Button>
          <Button>회원가입</Button>
        </div>
      </div>
    </div>
  );
}
