// 이 파트는 gemini의 도움을 어마어마하게 받았답니다.
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button, TagBadge } from "@/shared/components";
import { cn } from "@/lib/utils";

// 상단 우측 X 버튼 아이콘
const CloseIcon = ({ onClick }) => (
  <svg
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export const PostDialog = ({ isOpen, onClose, onSubmit, user }) => {
  // 1. 상태 관리
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tagInputValue, setTagInputValue] = useState("");
  const [tagList, setTagList] = useState([]); // [{ id: Date.now(), content: "태그내용" }] 형식

  if (!isOpen) return null;

  // 2. 태그 입력 핸들러 (Enter 감지)
  const handleTagKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // 폼 제출 방지
      const trimmedValue = tagInputValue.trim();

      if (trimmedValue) {
        // 중복 태그 방지
        if (tagList.some((t) => t.content === trimmedValue)) {
          setTagInputValue("");
          return;
        }

        const newTag = {
          id: Date.now(), // 고유 ID 생성
          content: trimmedValue,
        };

        setTagList([...tagList, newTag]);
        setTagInputValue(""); // 입력창 초기화
      }
    }
  };

  // 3. 태그 삭제 핸들러 (TagBadge 클릭 시)
  const handleRemoveTag = (tagId) => {
    setTagList(tagList.filter((tag) => tag.id !== tagId));
  };

  // 4. 최종 제출 핸들러
  const handleFinalSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert("제목과 내용을 모두 입력해 주세요.");
      return;
    }

    // ✅ 수정 포인트: 태그 객체 배열을 서버가 좋아하는 문자열 배열로 변환합니다.
    // 예: [{id: 1, content: "굿"}] -> ["굿"]
    const tagsToSend = tagList.map((tag) => tag.content);

    const postData = {
      title,
      content,
      tags: tagsToSend, // 객체가 아닌 문자열 배열로 전송
    };

    onSubmit(postData, user?.username);

    // 초기화 및 닫기
    setTitle("");
    setContent("");
    setTagList([]);
    onClose();
  };

  return (
    // 모달 배경 (Overlay)
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 p-4">
      {/* 제공된 Card 컴포넌트 바탕 */}
      <Card className="w-full max-w-[600px] bg-white shadow-xl border-none">
        {/* 헤더: 제목 및 X 버튼 */}
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-xl font-bold">게시글 작성</CardTitle>
          <CloseIcon onClick={onClose} />
        </CardHeader>

        <form onSubmit={handleFinalSubmit}>
          <CardContent className="flex flex-col gap-4 pt-4">
            {/* 제목 입력 - 사진처럼 주황색 포커스 테두리 적용 */}
            <input
              type="text"
              placeholder="제목을 입력하세요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-amber-500 transition-all placeholder:text-gray-400"
              autoFocus
            />

            {/* 내용 입력 */}
            <textarea
              placeholder="내용을 입력하세요"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-3 border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-amber-500 min-h-[120px] resize-none transition-all placeholder:text-gray-400"
            />

            {/* 태그 입력 필드 */}
            <div className="flex flex-col gap-2">
              <input
                type="text"
                placeholder="태그 입력 후 Enter"
                value={tagInputValue}
                onChange={(e) => setTagInputValue(e.target.value)}
                onKeyDown={handleTagKeyDown}
                className="w-full p-3 border border-gray-100 rounded-xl outline-none focus:ring-2 focus:ring-amber-500 transition-all placeholder:text-gray-400"
              />

              {/* 추가된 태그 리스트 - 두 번째 사진 형태 */}
              <div className="flex flex-wrap min-h-[40px]">
                {tagList.map((tag) => (
                  <TagBadge
                    key={tag.id}
                    tag={tag}
                    onClick={() => handleRemoveTag(tag.id)}
                    className="cursor-pointer hover:bg-amber-600 transition-colors"
                  />
                ))}
              </div>
            </div>
          </CardContent>

          {/* 푸터: 작성하기 버튼 (오른쪽 정렬) */}
          <CardFooter className="flex justify-end pb-6">
            <Button type="submit" className="px-10 py-6 rounded-xl font-bold">
              작성하기
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};
