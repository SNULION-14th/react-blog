import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import logoImg from "@/assets/logo.png"; 

export default function SignIn() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <Card className="w-[450px] border-none shadow-none lg:border lg:shadow-sm">
        <CardHeader className="flex flex-col items-center space-y-4 pt-10">
          <div className="w-24 h-24 mb-2 flex items-center justify-center">
            <img src={logoImg} alt="Logo" className="w-full h-full object-contain" />
          </div>
          <CardTitle className="text-2xl font-bold">로그인</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 px-10">
          <div className="space-y-2">
            <Input 
              type="text" 
              placeholder="아이디를 입력하세요" 
              className="h-12 bg-gray-50 border-gray-200 focus-visible:ring-amber-500"
            />
          </div>
          <div className="space-y-2">
            <Input 
              type="password" 
              placeholder="비밀번호를 입력하세요" 
              className="h-12 bg-gray-50 border-gray-200 focus-visible:ring-amber-500"
            />
          </div>
        </CardContent>

        <CardFooter className="flex justify-center gap-3 pb-10 px-10">
          <Button className="flex-1 h-12 bg-gray-100 text-black focus-visible:!bg-amber-500 hover:text-white border-none shadow-none transition-all duration-300" variant="ghost">
            로그인
          </Button>
          <Button variant="ghost" className="flex-1 h-12 bg-gray-100 text-black focus-visible:!bg-amber-500 hover:text-white border-none shadow-none transition-all duration-300"> 
            회원가입
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}