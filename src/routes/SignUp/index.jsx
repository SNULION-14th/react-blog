//TODO: 회원가입 페이지 구현
import logo from "@/assets/logo.png";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-[400px]">
        <img
          src={logo}
          alt="signup"
          className="w-[200px] h-[200px] mx-auto object-cover"
        />

        <CardContent className="flex flex-col gap-4">
          <p className="text-[30px] font-bold text-center">회원가입</p>
          <p
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            아이디
          </p>
          <Input
            className="focus-visible:ring-amber-500 focus-visible:ring-2 focus-visible:border-transparent selection:bg-amber-300 selection:text-black hover:border-orange-400 hover:border-2"
            type="text"
            placeholder="아이디를 입력하세요"
          />
          <p
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            비밀번호
          </p>
          <Input
            className="focus-visible:ring-amber-500 focus-visible:ring-2 focus-visible:border-transparent selection:bg-amber-300 selection:text-black hover:border-orange-400 hover:border-2"
            type="text"
            placeholder="비밀번호를 입력하세요"
          />
          <p
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            비밀번호 확인
          </p>
          <Input
            className="focus-visible:ring-amber-500 focus-visible:ring-2 focus-visible:border-transparent selection:bg-amber-300 selection:text-black hover:border-orange-400 hover:border-2"
            type="text"
            placeholder="비밀번호를 입력하세요"
          />
          <p
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            이름
          </p>
          <Input
            className="focus-visible:ring-amber-500 focus-visible:ring-2 focus-visible:border-transparent selection:bg-amber-300 selection:text-black hover:border-orange-400 hover:border-2"
            type="text"
            placeholder="이름을 입력하세요"
          />
          <p
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            이메일
          </p>
          <Input
            className="focus-visible:ring-amber-500 focus-visible:ring-2 focus-visible:border-transparent selection:bg-amber-300 selection:text-black hover:border-orange-400 hover:border-2"
            type="text"
            placeholder="이메일을 입력하세요"
          />
          <p
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            학교
          </p>
          <Input
            className="focus-visible:ring-amber-500 focus-visible:ring-2 focus-visible:border-transparent selection:bg-amber-300 selection:text-black hover:border-orange-400 hover:border-2"
            type="text"
            placeholder="학교를 입력하세요"
          />
          <p
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            전공
          </p>
          <Input
            className="focus-visible:ring-amber-500 focus-visible:ring-2 focus-visible:border-transparent selection:bg-amber-300 selection:text-black hover:border-orange-400 hover:border-2"
            type="text"
            placeholder="전공 입력하세요"
          />

          <div>
            <Button
              className="w-full"
              style={{
                backgroundColor: "lightgray",
                color: "black",
                fontWeight: "bold",
                margin: "0 5px",
              }}
            >
              회원가입
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
