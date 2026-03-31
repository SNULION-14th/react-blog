import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/shared/components/Input";
import { Textarea } from "@/shared/components/Textarea";
import { Button } from "@/shared/components/Button";

export const PostDialog = ({ open, onOpenChange, onCreatePost, user }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);

  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      setTags([...tags, { id: Date.now(), content: tagInput.trim() }]);
      setTagInput("");
    }
  };

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) return;
    onCreatePost(
      { title, content, tags },
      user
    );
    setTitle("");
    setContent("");
    setTags([]);
    setTagInput("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>게시글 작성</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <Input
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="내용을 입력하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Input
            type="text"
            placeholder="태그 입력 후 Enter"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagKeyDown}
          />
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {tags.map((tag) => (
                <span
                  key={tag.id}
                  className="bg-amber-500 text-white text-sm px-3 py-1 rounded-full font-bold"
                >
                  #{tag.content}
                </span>
              ))}
            </div>
          )}
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit}>작성하기</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
