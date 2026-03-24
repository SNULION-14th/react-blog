import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

import { Button, Input } from "@/shared/components";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

//TODO: 회원가입 페이지 구현
export default function SignUp() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[400px]">
        <CardHeader>
          <img src={logo} alt="로고" className="w-35 mx-auto" />
          <CardTitle className="text-center font-bold">회원가입</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-1">
          <p className="text-left font-bold">아이디</p>
          <Input type="text" placeholder="아이디를 입력하세요" />
          <p className="text-left font-bold">비밀번호</p>
          <Input type="password" placeholder="비밀번호를 입력하세요" />
          <p className="text-left font-bold">비밀번호 입력</p>
          <Input type="password" placeholder="비밀번호를 입력하세요" />
          <p className="text-left font-bold">이름</p>
          <Input type="text" placeholder="이름을 입력하세요" />
          <p className="text-left font-bold">이메일</p>
          <Input type="text" placeholder="이메일을 입력하세요" />
          <p className="text-left font-bold">학교</p>
          <Input type="text" placeholder="학교를 입력하세요" />
          <p className="text-left font-bold">전공</p>
          <Input type="text" placeholder="전공을 입력하세요" />
        </CardContent>
        <CardFooter className="flex gap-2 justify-center">
          <Button
            className="w-full"
            variant="outline"
            onClick={() => navigate("/")}
          >
            회원가입
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
