import { Input } from "postcss";

//TODO: 게시글 작성 모달 다이얼로그 구현
export const PostDialog = ({author, onSubmit}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const{title, content, tags} = e.target.elements;
    onSubmit({
      title: title.value,
      content: content.value,
      tags: tags.value.split(",").map(tag => tag.trim()),
      author: author?.username || "null"
    });
  };
  return (
  <>
  <div className="text-lg font-bold mb-4">게시글 작성</div>
  <form onSubmit={handleSubmit} className="flex flex-row gap-5">
    <Input type="text" name="title" placeholder="제목을 입력하세요"/>
    <Input type="text" name="content" placeholder="내용을 입력하세요"/>
    <Input type="text" name="tags" placeholder="태그를 입력하세요"/>
    <button type="submit" className="bg-orange-500 text-white p-2 rounded">작성</button>
  </form>
  </>
  );
};
