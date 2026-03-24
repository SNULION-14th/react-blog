import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/shared/components";
import { Input } from "@/shared/components";
import logo from "@/assets/logo.png";

export default function SignIn() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <Card className="w-full max-w-md shadow-lg rounded-2xl px-4 py-6">
        <CardHeader className="flex flex-col items-center gap-4">
          <img src={logo} alt="logo" className="h-16" />
          <CardTitle className="text-2xl font-bold">로그인</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Input placeholder="아이디를 입력하세요" />
          <Input type="password" placeholder="비밀번호를 입력하세요" />
          <div className="flex justify-center gap-3 mt-2">
            <Button>로그인</Button>
            <Link to="/signup">
              <Button>회원가입</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
