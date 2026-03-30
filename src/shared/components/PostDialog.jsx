import { useState } from "react";
import { Input } from "@/shared/components";

export const PostDialog = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);

  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput("");
    }
  };

  const handleSubmit = () => {
    if (!title.trim()) return;
    onSubmit({ title, content, tags });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">게시글 작성</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black text-xl"
          >
            &times;
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <Input
            className="focus-visible:ring-amber-500 focus-visible:ring-2"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="w-full border border-gray-200 rounded-md p-3 text-sm resize-none h-24 focus:outline-none focus:ring-2 focus:ring-amber-500"
            placeholder="내용을 입력하세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div>
            <Input
              className="focus-visible:ring-amber-500 focus-visible:ring-2"
              placeholder="태그 입력 후 Enter"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleTagKeyDown}
            />
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-amber-500 text-white px-2 py-0.5 rounded-full text-xs font-bold cursor-pointer"
                    onClick={() => setTags(tags.filter((t) => t !== tag))}
                  >
                    #{tag} &times;
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="flex justify-end">
            <button
              onClick={handleSubmit}
              className="!bg-stone-200 !text-gray-600 px-4 py-2 rounded-md text-sm font-medium hover:!bg-amber-500 hover:!text-white transition-colors"
            >
              작성하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
