import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/shared/components";
import { Link } from "react-router-dom";
export const SignUpDialog = ({ triggerButton }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{triggerButton}</DialogTrigger>
      <DialogContent aria-describedby={undefined}>
        <DialogHeader>
          <DialogTitle>회원가입</DialogTitle>
        </DialogHeader>
        <div>회원가입 모달</div>
        <DialogFooter className="flex !justify-center">
          <Link to="/">
            <Button>홈으로</Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
