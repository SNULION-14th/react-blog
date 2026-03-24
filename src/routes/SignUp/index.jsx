import logo from "@/assets/logo.png";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button, Input } from "@/shared/components";

export default function SignUp() {
  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center">
        <Card className="w-sm flex flex-col items-center justify-center">
          <CardHeader>
            <img className="w-30 h-30" src={logo} alt="logo" />
            <CardTitle className="text-xl">회원가입</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center w-full pb-1 m-2 gap-2 text-left">
            <div className="w-full mb-0.5">
              <div className="text-sm font-semibold mb-1">아이디</div>
              <Input type="text" placeholder="아이디를 입력하세요"></Input>
            </div>

            <div className="w-full mb-0.5">
              <div className="text-sm font-semibold mb-1">비밀번호</div>
              <Input
                type="password"
                placeholder="비밀번호를 입력하세요"
              ></Input>
            </div>

            <div className="w-full mb-0.5">
              <div className="text-sm font-semibold mb-1">비밀번호 확인</div>
              <Input
                type="password"
                placeholder="비밀번호를 입력하세요"
              ></Input>
            </div>

            <div className="w-full mb-0.5">
              <label className="text-sm font-semibold mb-1">이름</label>
              <Input type="text" placeholder="이름을 입력하세요"></Input>
            </div>

            <div className="w-full mb-0.5">
              <label className="text-sm font-semibold mb-1">이메일</label>
              <Input type="text" placeholder="이메일을 입력하세요"></Input>
            </div>

            <div className="w-full mb-0.5">
              <label className="text-sm font-semibold mb-1">학교</label>
              <Input type="text" placeholder="학교를 입력하세요"></Input>
            </div>

            <div className="w-full mb-0.5">
              <label className="text-sm font-semibold mb-1">전공</label>
              <Input type="text" placeholder="전공을 입력하세요"></Input>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-center justify-center w-full pb-1 m-2 gap-2">
            <Button className="w-full">회원가입</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
