import { Button, Input } from "@/shared/components";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[80vh] px-4">
      <Card className="w-full max-w-[400px] border-gray-200 shadow-lg rounded-3xl p-4">
        <CardHeader className="flex  flex-col items-center ">
          <div className="w-40 h-30 mb-4 flex items-center justify-center">
            <img
              src="/src/assets/logo.png"
              alt="logo"
              className="w-full object-contain"
            />
          </div>
          <CardTitle className="text-2xl font-bold">로그인</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Input type="text" placeholder="아이디를 입력하세요" />
          <Input type="password" placeholder="비밀번호를 입력하세요" />
        </CardContent>
        <CardFooter className="px-18 flex flex-row gap-1  justify-center">
          <Button>
            <b>로그인</b>
          </Button>

          <Link to="/SignUp">
            <Button>
              <b>회원가입</b>
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
