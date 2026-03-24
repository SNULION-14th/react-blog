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

export default function SignIn() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[400px]">
        <CardHeader>
          <img src={logo} alt="로고" className="w-35 mx-auto" />
          <CardTitle className="text-center font-bold">로그인</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Input type="text" placeholder="아이디를 입력하세요" />
          <Input type="password" placeholder="비밀번호를 입력하세요" />
        </CardContent>
        <CardFooter className="flex gap-2 justify-center">
          <Button>로그인</Button>
          <Button variant="outline" onClick={() => navigate("/signup")}>
            회원가입
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
