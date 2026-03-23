import { Button } from "@/shared/components";
import { InputSection } from "@/components/ui/inputSection";
import logo from "@/assets/logo.png";

export default function SignIn() {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">
      <div className="flex flex-col justify-center items-center bg-card text-card-foreground rounded-xl border shadow-sm w-md">
        <img src={logo} className="w-40" />
        <p className="font-bold text-2xl">로그인</p>
        <div className="flex flex-col gap-2 px-10 mt-10 mb-5 w-full">
          <InputSection
            type="text"
            placeholder="아이디를 입력하세요"
          ></InputSection>
          <InputSection
            type="password"
            placeholder="비밀번호를 입력하세요"
          ></InputSection>
        </div>
        <div className="flex gap-2 pb-10">
          <Button>로그인</Button>
          <Button>회원가입</Button>
        </div>
      </div>
    </div>
  );
}
