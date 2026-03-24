import logo from "@/assets/logo.png";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button, Input } from "@/shared/components";

export default function SignIn() {
  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center">
        <Card className="w-md flex flex-col items-center justify-center">
          <CardHeader>
            <img src={logo} alt="logo" className="w-50" />
            <CardTitle className="text-2xl">로그인</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center w-full pb-1 m-2 gap-2">
            <Input type="text" placeholder="아이디를 입력하세요"></Input>
            <Input type="password" placeholder="비밀번호를 입력하세요"></Input>
          </CardContent>
          <CardFooter className="flex flex-row items-center justify-center p-2 mb-5 gap-2">
            <Button variant="default" size="default">
              로그인
            </Button>
            <Button variant="default" size="default">
              회원 가입
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
