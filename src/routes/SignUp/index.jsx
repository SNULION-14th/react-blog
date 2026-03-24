//TODO: 회원가입 페이지 구현
import logo from "@/assets/logo.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md rounded-2xl shadow-md border bg-white">
        <CardHeader className="flex flex-col items-center pt-10 pb-6">
          <img
            src={logo}
            alt="logo"
            className="w-20 h-20 object-contain mb-4"
          />
          <CardTitle className="text-3xl font-bold">회원가입</CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-4 px-8">
          <p className="flex">아이디</p>
          <Input placeholder="아이디를 입력하세요"></Input>
          <p className="flex">비밀번호</p>
          <Input placeholder="비밀번호를 입력하세요"></Input>
          <p className="flex">비밀번호 확인</p>
          <Input placeholder="비밀번호를 입력하세요"></Input>
          <p className="flex">이름</p>
          <Input placeholder="이름을 입력하세요"></Input>
          <p className="flex">이메일</p>
          <Input placeholder="이메일을 입력하세요"></Input>
          <p className="flex">학교</p>
          <Input placeholder="학교를 입력하세요"></Input>
          <p className="flex">전공</p>
          <Input placeholder="전공을 입력하세요"></Input>
        </CardContent>

        <CardFooter className="flex justify-center gap-4 px-8 pb-10 pt-6">
          <Button variant="secondary" size="lg">
            회원가입
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
