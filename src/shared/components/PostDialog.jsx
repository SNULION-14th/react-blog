//FIXME: 게시글 작성 모달 다이얼로그 구현
import { useState, useTransition } from "react";
import {Button, Input, Textarea, TagBadge} from "@/shared/components";

export const PostDialog = ({isOpen, onClose, onSubmit}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags,setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  if(!isOpen) return null;
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({title, content, tags});

    setTitle("");
    setContent("");
    setTags([]);
    setTagInput("");
    onClose();
  };

  const handleTagKeyDown = (e) => {
    if (e.nativeEvent.isComposing) return;

    if (e.key === "Enter") {
      e.preventDefault();
      const trimmedTag = tagInput.trim();
      
      if (trimmedTag && !tags.includes(trimmedTag)) {
        setTags([...tags, trimmedTag]);
      }
      setTagInput(""); 
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-[500px] p-6 bg-white shadow-xl rounded-2xl">
        
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-xl font-bold">게시글 작성</h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 transition-colors hover:text-gray-700"
            aria-label="닫기"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          <input
            type="text"
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
            required
          />
          
          <textarea
            placeholder="내용을 작성해주세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
            required
          />

          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="태그 입력 후 Enter"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleTagKeyDown}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400"
            />
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-1">
                {tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 text-sm text-white bg-amber-500 rounded-full cursor-pointer hover:bg-red-100 hover:text-red-600"
                    onClick={() => removeTag(tag)}
                    title="클릭하여 삭제"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          
          <div className="flex justify-end mt-2">
            <Button type="submit" className="px-6 py-2 bg-gray-100 text-black hover:bg-gray-200">
              작성하기
            </Button>
          </div>
        </form>

      </div>
    </div>
  );
};