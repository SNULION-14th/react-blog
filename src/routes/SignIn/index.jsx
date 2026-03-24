//TODO: 로그인 페이지 구현
import logo from "@/assets/logo.png";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-[450px] h-[450px]">
        <img
          src={logo}
          alt="signin"
          className="w-[200px] h-[200px] mx-auto object-cover"
        />

        <CardContent className="flex flex-col gap-4">
          <p className="text-[30px] font-bold text-center">로그인</p>

          <Input
            className="focus-visible:ring-amber-500 focus-visible:ring-2 focus-visible:border-transparent selection:bg-amber-300 selection:text-black hover:border-orange-400 hover:border-2"
            type="text"
            placeholder="아이디를 입력하세요"
          />
          <Input
            className="focus-visible:ring-amber-500 focus-visible:ring-2 focus-visible:border-transparent selection:bg-amber-300 selection:text-black hover:border-orange-400 hover:border-2"
            type="text"
            placeholder="비밀번호를 입력하세요"
          />

          <div>
            <Button className="w-[100px] my-btn">로그인</Button>
            <Button className="w-[100px] my-btn">회원가입</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
