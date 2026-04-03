import { useState } from "react";
import { Input, Button, TagBadge } from "@/shared/components";
import { X } from "lucide-react";

export const PostDialog = ({ open, onOpenChange, author, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);

  if (!open) return null;

  const handleAddTag = (e) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key !== "Enter") return;

    e.preventDefault();

    const trimmed = e.currentTarget.value.trim();
    if (!trimmed) return;
    if (tags.includes(trimmed)) {
      setTagInput("");
      return;
    }

    setTags((prev) => [...prev, trimmed]);
    setTagInput("");
  };

  const handleRemoveTag = (targetTag) => {
    setTags((prev) => prev.filter((tag) => tag !== targetTag));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await onSubmit({
      title,
      content,
      tags,
      author,
    });

    setTitle("");
    setContent("");
    setTagInput("");
    setTags([]);
    onOpenChange(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
      <div className="w-[440px] rounded-xl bg-white px-5 py-5 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold">게시글 작성</h2>
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            className="!bg-white text-gray-500 hover:text-gray-700 p-1"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <Input
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="내용을 입력하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[96px] resize-none rounded-md border border-gray-200 px-4 py-3 outline-none focus:border-orange-400"
          />

          <Input
            type="text"
            placeholder="태그 입력 후 Enter"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleAddTag}
          />

          <div className="min-h-[32px] flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <div
                key={idx}
                onClick={() => handleRemoveTag(tag)}
                className="cursor-pointer"
              >
                <TagBadge tag={{ id: idx, content: tag }} />
              </div>
            ))}
          </div>

          <div className="mt-2 flex justify-end">
            <Button type="submit">작성하기</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
