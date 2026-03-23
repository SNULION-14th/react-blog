import { Button } from "@/shared/components";
import { InputSection } from "@/components/ui/inputSection";
import logo from "@/assets/logo.png";

export default function SignUp() {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen">
      <div className="flex flex-col justify-center items-center bg-card text-card-foreground rounded-xl border shadow-sm w-sm">
        <img src={logo} className="w-40" />
        <p className="font-bold text-2xl">회원가입</p>
        <div className="flex flex-col gap-2 px-10 mt-10 mb-5 w-full">
          <InputSection
            title="아이디"
            type="text"
            placeholder="아이디를 입력하세요"
          ></InputSection>
          <InputSection
            title="비밀번호"
            type="password"
            placeholder="비밀번호를 입력하세요"
          ></InputSection>
          <InputSection
            title="비밀번호 확인"
            type="password"
            placeholder="비밀번호를 입력하세요"
          ></InputSection>
          <InputSection
            title="이름"
            type="text"
            placeholder="이름을 입력하세요"
          ></InputSection>
          <InputSection
            title="이메일"
            type="text"
            placeholder="이메일을 입력하세요"
          ></InputSection>
          <InputSection
            title="학교"
            type="text"
            placeholder="학교를 입력하세요"
          ></InputSection>
          <InputSection
            title="전공"
            type="text"
            placeholder="전공 입력하세요"
          ></InputSection>
        </div>
        <div className="pb-5">
          <Button>회원가입</Button>
        </div>
      </div>
    </div>
  );
}
