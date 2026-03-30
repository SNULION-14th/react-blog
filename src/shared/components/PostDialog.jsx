import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button, Input, TagBadge, Textarea } from "@/shared/components";

export const PostDialog = ({ triggerButton, onCreatePost, author }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);

  const resetForm = () => {
    setTitle("");
    setContent("");
    setTagInput("");
    setTags([]);
  };

  const handleOpenChange = (nextOpen) => {
    setOpen(nextOpen);

    if (!nextOpen) {
      resetForm();
    }
  };

  const handleTagKeyDown = (e) => {
    if (e.key !== "Enter") return;

    e.preventDefault();

    const nextTag = tagInput.trim();
    if (!nextTag || tags.includes(nextTag)) return;

    setTags((prev) => [...prev, nextTag]);
    setTagInput("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nextTag = tagInput.trim();
    const nextTags = nextTag && !tags.includes(nextTag) ? [...tags, nextTag] : tags;

    await onCreatePost(
      {
        title,
        content,
        tags: nextTags,
      },
      author
    );

    handleOpenChange(false);
  };

  const isDisabled =
    !title.trim() || !content.trim() || (tags.length === 0 && !tagInput.trim());

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{triggerButton}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>게시글 작성</DialogTitle>
        </DialogHeader>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <Input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력해주세요"
          />
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력해주세요"
            rows={5}
          />
          <Input
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagKeyDown}
            placeholder="태그 입력 후 Enter"
          />
          <div className="flex flex-wrap">
            {tags.map((tag) => (
              <TagBadge
                key={tag}
                tag={{ id: tag, content: tag }}
                onClick={() =>
                  setTags((prev) => prev.filter((storedTag) => storedTag !== tag))
                }
              />
            ))}
          </div>
          <div className="flex justify-end">
            <Button type="submit" disabled={isDisabled}>
              작성하기
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
