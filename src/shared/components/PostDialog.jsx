//TODO: 게시글 작성 모달 다이얼로그 구현
import { useState } from "react";
import { Input, TagBadge } from "@/shared/components";

export const PostDialog = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  const handleSubmit = () => {
    onSubmit({ title, content, tags });
    setTitle("");
    setContent("");
    setTags([]);
    setTagInput("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[500px] flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold">게시글 작성</h2>
          {/* 클릭하면 onClose 실행 → Home의 setIsOpen(false) → 모달 닫힘 */}
          <button onClick={onClose}>✕</button>
        </div>
        <Input
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="내용을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border rounded p-2 h-24 text-sm "
        />
        <div>
          <Input
            placeholder="태그를 입력 후 Enter"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && tagInput.trim()) {
                setTags((prev) => [...prev, tagInput.trim()]);
                setTagInput("");
              }
            }}
          />
          <div className="flex flex-wrap gap-1 mt-2">
            {tags.map((tag, i) => (
              <TagBadge
                key={i}
                tag={{ content: tag }}
                onClick={() => setTags(tags.filter((_, index) => index !== i))}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="text-black px-4 py-2 rounded"
          >
            작성하기
          </button>
        </div>
      </div>
    </div>
  );
};
