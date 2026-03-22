//TODO: 회원가입 페이지 구현
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import LogoImage from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/shared/components";

export default function SignUp() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[400px]">
        <CardHeader className="text-center">
          <img src={LogoImage} alt="Logo" className="mx-auto h-60 w-60" />
          <CardTitle className="text-xl">회원가입</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="flex items-start ml-1 text-sm font-medium">
              아이디
            </label>
            <Input type="id" placeholder="아이디를 입력하세요" />
          </div>
          <div className="space-y-2">
            <label className="flex items-start ml-1 text-sm font-medium">
              비밀번호
            </label>
            <Input type="password" placeholder="비밀번호를 입력하세요" />
          </div>
          <div className="space-y-2">
            <label className="flex items-start ml-1 text-sm font-medium">
              비밀번호 확인
            </label>
            <Input type="password" placeholder="비밀번호를 다시 입력하세요" />
          </div>
          <div className="space-y-2">
            <label className="flex items-start ml-1 text-sm font-medium">
              이름
            </label>
            <Input type="name" placeholder="이름을 입력하세요" />
          </div>
          <div className="space-y-2">
            <label className="flex items-start ml-1 text-sm font-medium">
              이메일
            </label>
            <Input type="email" placeholder="이메일을 입력하세요" />
          </div>
          <div className="space-y-2">
            <label className="flex items-start ml-1 text-sm font-medium">
              전공
            </label>
            <Input type="major" placeholder="전공을 입력하세요" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-center space-x-2">
          <Button
            variant="default"
            className="w-full text-sm text-gray-500 transition-colors hover:!bg-yellow-50"
          >
            회원가입
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
