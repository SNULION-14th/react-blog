import { useState } from "react";
import { Button, Input, Textarea, TagBadge } from "@/shared/components";

export const PostDialog = ({ onCreate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [currentTag, setCurrentTag] = useState(""); // 태그 입력창 상태
  const [tags, setTags] = useState([]); // 추가된 태그 목록

  // 1. 모달 닫기 함수
  const handleClose = () => {
    setIsOpen(false);
    setTitle("");
    setContent("");
    setTags([]);
    setCurrentTag("");
  };

  // 2. 태그 입력창에서 Enter 키 누를 때 태그 추가
  const handleTagInput = (e) => {
    if (e.key === "Enter" && currentTag.trim()) {
      e.preventDefault(); // form 제출 방지
      // 중복 태그 방지
      if (!tags.includes(currentTag.trim())) {
        setTags([...tags, currentTag.trim()]);
      }
      setCurrentTag(""); // 입력창 비우기
    }
  };

  // 3. 태그 삭제 함수
  const removeTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  // 4. 작성 완료 버튼 클릭
  const handleSubmit = () => {
    if (!title || !content) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }
    // 부모(Home)의 handleCreatePost 함수 실행
    onCreate({ title, content, tags });
    handleClose(); // 성공 시 모달 닫기
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>작성</Button>

      {/* ✅ 구현 포인트: 이미지와 같은 모달 다이얼로그 */}
      {isOpen && (
        // 모달 배경색
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[100] p-4">
          {/* 모달 본체 */}
          <div className="bg-white p-7 rounded-2xl w-[500px] flex flex-col gap-3 shadow-2xl">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-black">게시글 작성</h2>
              {/* x 버튼 (닫기) */}
              <button
                onClick={handleClose}
                className="text-3xl text-gray-500 hover:text-black"
              >
                ×
              </button>
            </div>

            {/* 제목 입력창 */}
            <Input
              placeholder="제목을 입력하세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-lg"
            />

            {/* 내용 입력창 (Textarea) */}
            <Textarea
              placeholder="내용을 입력하세요"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="text-lg"
            />

            {/* 태그 입력 및 미리보기 영역 */}
            <div className="flex flex-col gap-2">
              <Input
                placeholder="태그 입력 후 Enter"
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                onKeyPress={handleTagInput}
                className="text-base"
              />
              {/* 추가된 태그 미리보기 */}
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {tags.map((tag) => (
                    // TagBadge 컴포넌트 활용 및 클릭 시 삭제 기능 추가
                    <TagBadge
                      key={tag}
                      tag={{ id: tag, content: tag }}
                      onClick={() => removeTag(tag)}
                      className="cursor-pointer hover:bg-opacity-80"
                    />
                  ))}
                </div>
              )}
            </div>

            {/* 작성하기 버튼 */}
            <div className="flex justify-end mt-4">
              <Button onClick={handleSubmit} className="px-6 py-2 text-lg">
                작성하기
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
