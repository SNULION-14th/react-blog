//TODO: 게시글 작성 모달 다이얼로그 구현
import { useState } from "react";
import { Button, Input, TagBadge } from "@/shared/components";

export const PostDialog = ({ user, onSubmit, onClose }) => {
  //1. title, content, currentTag, tags 상태 저장
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [currentTag, setCurrentTag] = useState(""); //입력 중인 tag
  const [tags, setTags] = useState([]); // 확정된 tag들의 리스트

  //2. tag 입력 시 추가
  const addTag = (e) => {
    if (e.nativeEvent.isComposing) return;

    if (e.key === "Enter") {
      e.preventDefault();
      // tags에 currentTag 추가
      setTags([...tags, currentTag]);
      // tag 입력창 초기화
      setCurrentTag("");
    }
  };

  //3. tag 클릭 시 삭제
  const removeTag = (tagToRemove) => {
    setTags(tags.filter((t) => t !== tagToRemove));
  };

  const handleSubmit = async (e) => {
    //브라우저 새로고침 막음
    e.preventDefault();
    //부모 컴포넌트의 handleCreatePost 실행

    await onSubmit({ title, content, tags });
    //모달 닫기
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50">
      {/* 모달 창 */}
      <div className="bg-white w-[500px] rounded-2xl p-6 shadow-xl relative">
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-gray-400 text-2xl hover:text-black"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-6">게시글 작성</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            placeholder="제목을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            placeholder="내용을 입력하세요"
            className="w-full h-32 p-3 border rounded-xl focus:outline-none focus:ring-1 focus:ring-amber-400 resize-none"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />

          <div className="flex flex-col gap-2">
            {/* 태그 입력창 */}
            <Input
              placeholder="태그 입력 후 Enter"
              value={currentTag}
              onChange={(e) => setCurrentTag(e.target.value)}
              onKeyDown={addTag} //엔터 감지
            />

            {/* 추가된 태그들을 보여주는 영역 */}
            <div className="flex flex-wrap gap-1">
              {tags.map((tagName, index) => (
                <TagBadge
                  key={index}
                  tag={{ content: tagName }}
                  onClick={() => removeTag(tagName)}
                />
              ))}
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <Button type="submit" className="px-8 py-2 rounded-xl">
              작성하기
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
