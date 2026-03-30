import lion from "@/assets/lion.jpeg";
import { useMediaQuery } from "@/shared/hooks";
import { Button } from "@/shared/components";
import { Link } from "react-router-dom";
import { useUser } from "@/shared/context";

export const Header = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const { user, logout, isLoggedIn } = useUser();

  return (
    <div
      className={`sticky bg-white shadow-accent shadow-lg top-0 left-0 z-50 flex items-center justify-between w-full gap-5 px-5 py-2.5 h-20`}
    >
      <Link to="/">
        <div className="flex flex-row items-center gap-5">
          <img src={lion} alt="lion" className="max-h-16 rounded-full" />
          <div className="text-xl">SNULION BLOG</div>
        </div>
      </Link>
      {isLoggedIn ? (
        <div className="flex flex-row gap-5">
          <Button onClick={logout}>logout</Button>
        </div>
      ) : (
        <div className="flex flex-row gap-5">
          <Link to="/signin">
            <Button>sign in</Button>
          </Link>
          <Link to="/signup">
            <Button>sign up</Button>
          </Link>
        </div>
      )}
    </div>
  );
};
