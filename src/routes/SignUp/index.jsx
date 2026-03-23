import logo from "@/assets/logo.png";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button, Input } from "@/shared/components";

//TODO: 회원가입 페이지 구현
export default function SignUp() {
  return (
    <>
      <div>
        <Card>
          <CardHeader>
            <img src={logo} alt="logo"></img>
            <CardTitle>회원가입</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <label>아이디</label>
              <Input type="text" placeholder="아이디를 입력하세요"></Input>
            </div>

            <div>
              <label>비밀번호</label>
              <Input
                type="password"
                placeholder="비밀번호를 입력하세요"
              ></Input>
            </div>

            <div>
              <label>비밀번호 확인</label>
              <Input
                type="password"
                placeholder="비밀번호를 입력하세요"
              ></Input>
            </div>

            <div>
              <label>이름</label>
              <Input type="text" placeholder="이름을 입력하세요"></Input>
            </div>

            <div>
              <label>이메일</label>
              <Input type="text" placeholder="이메일을 입력하세요"></Input>
            </div>

            <div>
              <label>학교</label>
              <Input type="text" placeholder="학교를 입력하세요"></Input>
            </div>

            <div>
              <label>전공</label>
              <Input type="text" placeholder="전공을 입력하세요"></Input>
            </div>
          </CardContent>
          <CardFooter>
            <Button>회원가입</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
