import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/shared/components";
import { Link } from "react-router-dom";
export const SignInDialog = ({ triggerButton }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{triggerButton}</DialogTrigger>
      <DialogContent aria-describedby="dialog-description">
        <DialogHeader>
          <DialogTitle>로그인</DialogTitle>
        </DialogHeader>
        <div>로그인 모달</div>
        <DialogFooter>
          <Link to="/">
            <Button>홈으로</Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
