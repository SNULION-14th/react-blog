import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/shared/components";
import { Button } from "@/shared/components";
import logo from "@/assets/logo.png";

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10">
      <Card className="w-full max-w-sm">
        <CardHeader className="items-center">
          <img src={logo} alt="logo" className="h-16 mb-2" />
          <CardTitle className="text-2xl text-center">회원가입</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <div>
            <p className="text-sm font-medium mb-1 text-left">아이디</p>
            <Input type="text" placeholder="아이디를 입력하세요" />
          </div>
          <div>
            <p className="text-sm font-medium mb-1 text-left">비밀번호</p>
            <Input type="password" placeholder="비밀번호를 입력하세요" />
          </div>
          <div>
            <p className="text-sm font-medium mb-1 text-left">비밀번호 확인</p>
            <Input type="password" placeholder="비밀번호를 입력하세요" />
          </div>
          <div>
            <p className="text-sm font-medium mb-1 text-left">이름</p>
            <Input type="text" placeholder="이름을 입력하세요" />
          </div>
          <div>
            <p className="text-sm font-medium mb-1 text-left">이메일</p>
            <Input type="email" placeholder="이메일을 입력하세요" />
          </div>
          <div>
            <p className="text-sm font-medium mb-1 text-left">학교</p>
            <Input type="text" placeholder="학교를 입력하세요" />
          </div>
          <div>
            <p className="text-sm font-medium mb-1 text-left">전공</p>
            <Input type="text" placeholder="전공 입력하세요" />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full text-black font-bold">회원가입</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
