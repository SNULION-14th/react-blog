import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/shared/components";
import { Button } from "@/shared/components";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-sm">
        <CardHeader className="items-center">
          <img src={logo} alt="logo" className="h-16 mb-2" />
          <CardTitle className="text-2xl text-center">로그인</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Input type="text" placeholder="아이디를 입력하세요" />
          <Input type="password" placeholder="비밀번호를 입력하세요" />
        </CardContent>
        <CardFooter className="flex flex-row gap-2 justify-center">
          <Button>로그인</Button>
          <Link to="/signup">
            <Button>회원가입</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
