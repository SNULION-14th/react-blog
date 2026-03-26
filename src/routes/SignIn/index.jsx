import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import logo from "@/assets/logo.png";
import { Input } from "@/shared/components/Input";
import { Button } from "@/shared/components/Button";
//TODO: 로그인 페이지 구현
export default function SignIn() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-80">
        <CardHeader>
          <img src={logo} className="w-24 mx-auto"></img>
          <CardTitle>로그인</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            className="h-6 my-2"
            type="text"
            placeholder="아이디를 입력하세요"
          ></Input>
          <Input
            className="h-6 my-2"
            type="text"
            placeholder="비밀번호를 입력하세요"
          ></Input>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button size="sm">로그인</Button>
          <Button size="sm">회원가입</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
