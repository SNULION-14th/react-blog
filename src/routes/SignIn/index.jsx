//TODO: 로그인 페이지 구현
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import logo from "@/assets/logo.png";
import { Input } from "@/components/ui/input";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md rounded-2xl shadow-md border bg-white">
        <CardHeader className="flex flex-col items-center pt-10 pb-6">
          <img
            src={logo}
            alt="logo"
            className="w-20 h-20 object-contain mb-4"
          />
          <CardTitle className="text-3xl font-bold">로그인</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-4 px-8">
          <Input placeholder="아이디를 입력하세요"></Input>
          <Input placeholder="비밀번호를 입력하세요"></Input>
        </CardContent>

        <CardFooter className="flex justify-center gap-4 px-8 pb-10 pt-6">
          <Button variant="secondary" size="default">
            로그인
          </Button>
          <Button variant="secondary" size="default">
            회원가입
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
