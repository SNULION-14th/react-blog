//TODO: 게시글 작성 모달 다이얼로그 구현
import { useState } from "react";
import { Button, Input, Textarea, TagBadge } from "@/shared/components";
import {
  Dialog,
  DialogTrigger,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

export function PostDialog({ onSubmit }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  // 태그 추가
  const handleAddTag = (e) => {
    if (e.key === "Enter" && tagInput.trim() !== "") {
      e.preventDefault();

      if (!selectedTags.find((tag) => tag.content === tagInput.trim())) {
        const newTag = {
          id: Date.now(), // 임시 ID
          content: tagInput.trim(),
        };
        setSelectedTags([...selectedTags, newTag]);
      }
      setTagInput("");
    }
  };

  // 태그 삭제
  const removeTag = (idToRemove) => {
    setSelectedTags(selectedTags.filter((tag) => tag.id !== idToRemove));
  };

  // 작성 완료 버튼 클릭
  const handleSubmit = () => {
    // const tagsToSend = selectedTags.map((tag) => tag.content);
    onSubmit({
      title,
      content,
      tags: selectedTags,
    });
    setTitle("");
    setContent("");
    setSelectedTags([]);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="rounded-full shadow-lg p-6 text-lg">작성</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">게시글 작성</DialogTitle>
          <div className="hidden">
            새로운 게시글의 제목과 내용, 태그를 입력합니다.
          </div>
        </DialogHeader>

        <Input
          id="title"
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Textarea
          id="content"
          placeholder="내용을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <Input
          placeholder="태그 입력 후 Enter"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyUp={handleAddTag}
        />

        <div className="mt-2 flex flex-wrap gap-2">
          {selectedTags.map((item) => (
            <TagBadge
              key={item.id}
              tag={item}
              onClick={() => removeTag(item.id)}
              className="cursor-pointer hover:opacity-70 transition"
            />
          ))}
        </div>
        <DialogFooter>
          <div className="mt-4 flex justify-end">
            <Button onClick={handleSubmit}>작성하기</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default PostDialog;
