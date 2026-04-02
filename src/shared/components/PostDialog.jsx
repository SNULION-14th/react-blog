//TODO: 게시글 작성 모달 다이얼로그 구현
import { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { Label } from "./Label";
import { Textarea } from "./Textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";

export const PostDialog = ({ author, onCreatePost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [open, setOpen] = useState(false);
  const [tagsInput, setTagsInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tags = tagsInput
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "");

    await onCreatePost(
      {
        title,
        content,
        tags,
      },
      author,
    );

    setTitle("");
    setContent("");
    setTagsInput("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>게시글 작성</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>게시글 작성</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="title">제목</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력하세요"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="content">내용</Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용을 입력하세요"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="tags">태그</Label>
            <Input
              id="tags"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              placeholder="예: react, javascript, likelion"
            />
          </div>

          <DialogFooter>
            <Button type="submit">작성하기</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
