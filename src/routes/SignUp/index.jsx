//TODO: 회원가입 페이지 구현
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import logoImg from "@/assets/logo.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[400px]">
        <CardHeader>
          <img src={logoImg} alt="logo" className="w-20 mx-auto" />
          <CardTitle className="text=center text-2xl">회원가입</CardTitle>
        </CardHeader>
        <CardContent>
          <label className="flex text-left font-semibold text-gray-700 ml-1">
            아이디
          </label>
          <Input
            type="text"
            placeholder="아이디를 입력하세요"
            className="mb-4  focus-visible:ring-amber-500 focus-visible:border-amber-500"
          />
          <label className="flex text-left font-semibold text-gray-700 ml-1">
            비밀번호
          </label>
          <Input
            type="password"
            placeholder="비밀번호를 입력하세요"
            className="mb-4  focus-visible:ring-amber-500 focus-visible:border-amber-500"
          />
          <label className="flex text-left font-semibold text-gray-700 ml-1">
            비밀번호 확인
          </label>
          <Input
            type="password"
            placeholder="비밀번호를 입력하세요"
            className="mb-4  focus-visible:ring-amber-500 focus-visible:border-amber-500"
          />
          <label className="flex text-left font-semibold text-gray-700 ml-1">
            이름
          </label>
          <Input
            type="name"
            placeholder="이름을 입력하세요"
            className="mb-4  focus-visible:ring-amber-500 focus-visible:border-amber-500"
          />
          <label className="flex text-left font-semibold text-gray-700 ml-1">
            이메일
          </label>
          <Input
            type="email"
            placeholder="이메일을 입력하세요"
            className="mb-4  focus-visible:ring-amber-500 focus-visible:border-amber-500"
          />
          <label className="flex text-left font-semibold text-gray-700 ml-1">
            학교
          </label>
          <Input
            type="text"
            placeholder="학교를 입력하세요"
            className="mb-4  focus-visible:ring-amber-500 focus-visible:border-amber-500"
          />
          <label className="flex text-left font-semibold text-gray-700 ml-1">
            전공
          </label>
          <Input
            type="text"
            placeholder="전공을 입력하세요"
            className="mb-4  focus-visible:ring-amber-500 focus-visible:border-amber-500"
          />
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            회원가입
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;
