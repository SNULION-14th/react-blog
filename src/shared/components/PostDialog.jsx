import { Input } from "@/shared/components";
import { useState } from "react";

//TODO: 게시글 작성 모달 다이얼로그 구현
export const PostDialog = ({ author, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, content, tags } = e.target.elements;
    onSubmit({
      title: title.value,
      content: content.value,
      tags: tags.value.split(",").map((tag) => tag.trim()),
      author: author?.username || "null",
    });
  };
  const [isOpen, setisOpen] = useState(true);
  return (
    <>
      <button
        onClick={() => setisOpen(false)}
        className="relative top-6 right-6 text-gray-400 hover:text-gray-600"
      >x</button>
      <div className="flex flex-col items-start text-lg font-bold">
        게시글 작성
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <Input type="text" name="title" placeholder="제목을 입력하세요" />
        <Input
          className="pd-4"
          type="text"
          name="content"
          placeholder="내용을 입력하세요"
        />
        <Input type="text" name="tags" placeholder="태그 입력 후 Enter" />
      </form>
      <button
        type="submit"
        className="w-fit flex justify-end bg-orange-500 p-2 rounded"
        onSubmit={handleSubmit}
      >
        작성하기
      </button>
    </>
  );
};
