import { Input, Textarea, Button } from "@/shared/components";
import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getPosts, getTags, getPostById } from "@/shared/api";

//TODO: 게시글 작성 모달 다이얼로그 구현
export const PostDialog = ({ author, handleCreatePost }) => {
  const [tagInput, setTagInput] = useState("");
  const [tagList, settagList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const trimmedTag = tagInput.trim();
    const finalTags =
      trimmedTag && !tagList.includes(trimmedTag)
        ? [...tagList, trimmedTag]
        : tagList;
    handleCreatePost(
      {
        title: form.title.value,
        content: form.content.value,
        tags: finalTags,
      },
      author,
    );

    settagList([]);
    setTagInput("");
  };

  const handleTagKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const trimmedTag = tagInput.trim();

      if (trimmedTag && !tagList.includes(trimmedTag)) {
        settagList([...tagList, trimmedTag]);
        setTagInput("");
      }
    }
  };

  const handleRemoveTag = (targetTag) => {
    settagList(tagList.filter((t) => t !== targetTag));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">작성</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg bg-white p-6 rounded-2xl">
        <DialogHeader>
          <DialogTitle>게시글 작성</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input type="text" name="title" placeholder="제목을 입력하세요" />
          <Textarea name="content" placeholder="내용을 입력하세요" />
          <Input
            type="text"
            name="tags"
            placeholder="태그 입력 후 Enter"
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagKey}
          />
          <div className="flex flex-wrap gap-2">
            {tagList.map((tag, index) => (
              <span
                onClick={() => handleRemoveTag(tag)}
                key={index}
                className=" w-fit bg-amber-500 text-white px-4 py-1 rounded-md text-xs font-bold shadow-sm flex items-center gap-2"
              >
                #{tag}
              </span>
            ))}
          </div>

          <DialogFooter>
            <Button type="submit">작성하기</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
