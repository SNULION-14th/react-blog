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
//TODO: 회원가입 페이지 구현
export default function SignUp() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-80">
        <CardHeader>
          <img src={logo} className="w-24 mx-auto"></img>
          <CardTitle>회원가입</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col justify-center items-start">
          <div className="text-sm">아이디</div>
          <Input
            className="h-6 my-1"
            type="text"
            placeholder="아이디를 입력하세요"
          ></Input>
          <div className="text-sm">비밀번호</div>
          <Input
            className="h-6 my-1"
            type="text"
            placeholder="비밀번호를 입력하세요"
          ></Input>
          <div className="text-sm">비밀번호 확인</div>
          <Input
            className="h-6 my-1"
            type="text"
            placeholder="비밀번호를 입력하세요"
          ></Input>
          <div className="text-sm">이름</div>
          <Input
            className="h-6 my-1"
            type="text"
            placeholder="이름을 입력하세요"
          ></Input>
          <div className="text-sm">이메일</div>
          <Input
            className="h-6 my-1"
            type="text"
            placeholder="이메일을 입력하세요"
          ></Input>
          <div className="text-sm">학교</div>
          <Input
            className="h-6 my-1"
            type="text"
            placeholder="학교를 입력하세요"
          ></Input>
          <div className="text-sm">전공</div>
          <Input
            className="h-6 my-1"
            type="text"
            placeholder="전공을 입력하세요"
          ></Input>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button size="lg">회원가입</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
