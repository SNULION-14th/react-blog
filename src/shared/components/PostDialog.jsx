import { Button } from "@/shared/components";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { TagBadge } from "./TagBadge";
import { useNavigate } from "react-router";

//TODO: 게시글 작성 모달 다이얼로그 구현
export const PostDialog = ({ createPost, author }) => {
  const [tagText, setTagText] = useState("");
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();
  const handleTag = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const nextId = tags.length > 0 ? tags.at(-1).id + 1 : 1;
      setTags([...tags, { id: nextId, content: tagText }]);
      setTagText("");
    }
    console.log(tags);
  };
  const handleDeleteTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };
  const handlePost = async (e) => {
    e.preventDefault();
    const { title, description } = e.target;
    const post = {
      author: author,
      content: description.value,
      title: title.value,
      tags: tags.map((tag) => tag.content),
    };
    setTags([]);
    await createPost(post, author);
    navigate("/");
  };
  return (
    <>
      <Dialog>
        <DialogTrigger>작성</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>게시글 작성</DialogTitle>
          </DialogHeader>
          <form onSubmit={handlePost}>
            <Input type="text" name="title" placeholder="제목을 입력하세요" />
            <Textarea
              type="text"
              name="description"
              placeholder="내용을 입력하세요"
            />
            <Input
              type="text"
              placeholder="태그 입력 후 Enter"
              value={tagText}
              onChange={(e) => setTagText(e.target.value)}
              onKeyDown={handleTag}
            />
            <div>
              {tags.map((tag) => {
                return (
                  <TagBadge
                    key={tag.id}
                    tag={tag}
                    onClick={() => handleDeleteTag(tag)}
                  />
                );
              })}
            </div>
            <DialogFooter>
              <DialogClose>
                <Button type="submit">작성하기</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
