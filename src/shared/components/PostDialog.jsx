//TODO: 게시글 작성 모달 다이얼로그 구현
import { useState } from "react";
import { useUser } from "@/shared/context/userContext";
import { Button, Input, TagBadge } from "@/shared/components";
import { FiX } from "react-icons/fi";
import { Textarea } from "@/shared/components";

export const PostDialog = ({ isOpen, onClose }) => {
  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);

  if (!isOpen) return null;

  const handleKeyDown = (e) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === "Enter") {
      e.preventDefault();
      const trimmedTag = tagInput.trim();
      if (trimmedTag && !tags.includes(trimmedTag)) {
        setTags([...tags, trimmedTag]);
        setTagInput("");
      }
    }
  };

  const handleClose = () => {
    setTitle("");
    setContent("");
    setTagInput("");
    setTags([]);
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Title.trim() || !Content.trim()) {
      return;
    }

    const newPost = {
      title: Title,
      content: Content,
      tags: tags.map((tag) => ({ content: tag })),
    };
    onClose(newPost);
    handleClose();
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="fixed inset-0 bg-white bg-opacity-60 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-[600px] shadow-2xl relative">
        <h2 className="text-xl font-bold mb-4">게시글 작성</h2>
        <button
          onClick={() => handleClose()}
          className="text-gray-400 hover:text-gray-600 absolute top-4 right-4"
        >
          <FiX size={18} />
        </button>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            label="제목"
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요"
          />
          <Input
            label="내용을 입력하세요"
            value={Content}
            onChange={(e) => setContent(e.target.value)}
            className="h-40"
            placeholder="내용을 입력하세요"
            required
          />
          <Input
            label="태그 입력 (엔터로 구분)"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="태그 입력 후 Enter"
          />
          <div className="flex flex-wrap gap-1 min-h-[32px]">
            {tags.map((tag, index) => (
              <TagBadge
                key={index}
                tag={{ content: tag }}
                className="bg-amber-500"
                onClick={() => removeTag(index)}
              />
            ))}
          </div>

          <div className="flex justify-end w-full">
            <Button type="submit">작성하기</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
