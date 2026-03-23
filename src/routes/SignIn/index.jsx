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

const SignIn = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[400px]">
        <CardHeader>
          <img src={logoImg} alt="logo" className="w-20 mx-auto" />
          <CardTitle className="text=center text-2xl">로그인</CardTitle>
        </CardHeader>
        <CardContent>
          <Input
            type="text"
            placeholder="아이디를 입력하세요"
            className="mb-4 focus-visible:ring-amber-500 focus-visible:border-amber-500"
          />
          <Input
            type="password"
            placeholder="비밀번호를 입력하세요"
            className="mb-4 focus-visible:ring-amber-500 focus-visible:border-amber-500"
          />
        </CardContent>
        <CardFooter className="flex flex-row justify-center -mt-6">
          <Button
            variant="outline"
            className="w-20 hover:!bg-amber-500 hover:!text-white hover:!border-amber-500 transition-colors"
          >
            로그인
          </Button>
          <Button
            variant="outline"
            className="w-20 hover:!bg-amber-500 hover:!text-white hover:!border-amber-500 transition-colors"
          >
            회원가입
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignIn;
