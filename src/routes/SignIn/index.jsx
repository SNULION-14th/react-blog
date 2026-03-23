import { Link } from "react-router-dom";
import { Button, Input, AuthCard } from "@/shared/components";
export default function SignIn() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-5 py-10">
      <AuthCard title="로그인" description="">
        <form className="space-y-4">
          <div className="space-y-2 text-left">
            <Input
              id="signin-id"
              type="text"
              placeholder="아이디를 입력하세요"
              className="h-12 rounded-xl border-stone-200 bg-stone-50"
            />
          </div>

          <div className="space-y-2 text-left">
            <Input
              id="signin-password"
              type="password"
              placeholder="비밀번호를 입력하세요"
              className="h-12 rounded-xl border-stone-200 bg-stone-50"
            />
          </div>

          <div className="flex justify-center gap-3 pt-2">
            <Button className="h-9 rounded-md bg-stone-100 px-5 text-base font-bold text-black hover:!bg-amber-400 hover:!text-white">
              로그인
            </Button>
            <Button
              asChild
              className="h-9 rounded-md bg-stone-100 px-5 text-base font-bold text-black hover:!bg-amber-400 hover:!text-white"
            >
              <Link to="/signup">회원가입</Link>
            </Button>
          </div>
        </form>
      </AuthCard>
    </main>
  );
}
