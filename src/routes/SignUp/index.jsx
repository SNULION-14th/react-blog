import { Button, Input, AuthCard } from "@/shared/components";

const signUpFields = [
  { id: "username", label: "아이디", type: "text", placeholder: "아이디를 입력하세요" },
  {
    id: "password",
    label: "비밀번호",
    type: "password",
    placeholder: "비밀번호를 입력하세요",
  },
  {
    id: "password-confirmation",
    label: "비밀번호 확인",
    type: "password",
    placeholder: "비밀번호를 다시 입력하세요",
  },
  { id: "name", label: "이름", type: "text", placeholder: "이름을 입력하세요" },
  { id: "email", label: "이메일", type: "email", placeholder: "이메일을 입력하세요" },
  { id: "school", label: "학교", type: "text", placeholder: "학교를 입력하세요" },
  { id: "major", label: "전공", type: "text", placeholder: "전공을 입력하세요" },
];

export default function SignUp() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-5 py-10">
      <AuthCard title="회원가입" description="">
        <form className="space-y-4">
          {signUpFields.map((field) => (
            <div key={field.id} className="space-y-2 text-left">
              <label htmlFor={field.id} className="text-sm font-semibold text-stone-700">
                {field.label}
              </label>
              <Input
                id={field.id}
                type={field.type}
                placeholder={field.placeholder}
                className="h-12 rounded-xl border-stone-200 bg-stone-50"
              />
            </div>
          ))}

          <Button className="h-9 w-full rounded-md bg-stone-100 px-5 text-base font-bold text-black hover:!bg-amber-400 hover:!text-white">
            회원가입
          </Button>
        </form>
      </AuthCard>
    </main>
  );
}
