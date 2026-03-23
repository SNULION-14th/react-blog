import logo from "@/assets/logo.png";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button, Input } from "@/shared/components";

//TODO: 로그인 페이지 구현
export default function SignIn() {
  return (
    <>
      <div>
        <Card className="card signin-container">
          <CardHeader className="card signin-header">
            <img src={logo} alt="logo" />
            <CardTitle>로그인</CardTitle>
          </CardHeader>
          <CardContent className="card signin-content">
            <Input type="text" placeholder="아이디를 입력하세요"></Input>
            <Input type="password" placeholder="비밀번호를 입력하세요"></Input>
          </CardContent>
          <CardFooter className="card signin-footer">
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
