import { useContext } from "react"; // 1. useContext 추가
import { UserContext } from "@/shared/context/userContext"; // 2. UserContext 임포트
import { signIn } from "./api";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input, Button } from "@/shared/components";
import logo from "@/assets/logo.png";
import { useNavigate } from "react-router";

export default function SignIn() {
  const navigate = useNavigate();

  // 3. UserContext에서 login 함수를 가져옵니다.
  // 이 함수를 실행해야 전역 유저 상태가 업데이트되고 헤더가 바뀝니다.
  const { login } = useContext(UserContext);

  const handleSignIn = async (e) => {
    e.preventDefault();

    // form 요소에서 name 속성을 가진 input 값 가져오기
    const username = e.target.username.value;
    const password = e.target.password.value;

    try {
      // 4. 기존에 구현된 API 호출
      const user = await signIn(username, password);

      if (user) {
        // 5. ⭐ 중요: 로그인 성공 시 Context에 유저 정보 저장
        // 이 한 줄이 실행되는 순간 Header.jsx의 {user ? ...}가 반응합니다.
        login(user);

        console.log("로그인 성공!", user);

        // 6. 홈으로 이동
        navigate("/");
      } else {
        alert("아이디 또는 비밀번호가 틀렸습니다.");
      }
    } catch (error) {
      console.error("로그인 중 에러 발생:", error);
      alert("로그인 처리 중 오류가 발생했습니다.");
    }
  };

  return (
    <div className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center bg-gray-50">
      <form onSubmit={handleSignIn}>
        <Card className="w-[400px] aspect-square shadow-lg">
          <img src={logo} className="h-[40%] mx-auto mt-4" alt="logo" />
          <CardHeader className="flex items-center !pt-0">
            <CardTitle className="text-2xl font-bold">로그인</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <Input
                name="username" // e.target.username으로 접근 가능하게 함
                type="text"
                placeholder="아이디를 입력해주세요"
                required
              />
              <Input
                name="password" // e.target.password로 접근 가능하게 함
                type="password"
                placeholder="비밀번호를 입력해주세요"
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-center gap-3">
            <Button type="submit" className="w-full">
              로그인
            </Button>
            <Button
              type="button"
              variant="secondary"
              className="w-full"
              onClick={() => navigate("/signup")}
            >
              회원가입
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
