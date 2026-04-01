import { Button, Input, Label, TagBadge, Textarea } from "@/shared/components";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { useUser } from "../context";

export const PostDialog = ({ onCreate }) => {
  const { username } = useUser();
  const [open, setOpen] = useState(false);
  const [post, setPost] = useState({
    title: "",
    content: "",
    author: "",
    tags: [],
  });
  const [tag, setTag] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setPost((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(post, username);
    setOpen(false);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (tag.trim()) {
        const newId =
          post.tags.length > 0
            ? Math.max(...post.tags.map((tag) => tag.id)) + 1
            : 0;
        const newTag = { id: newId, content: tag.trim() };
        setPost((prev) => ({ ...prev, tags: [...prev.tags, newTag] }));
        setTag("");
      }
    }
  };

  const handleRemoveTag = (id) => {
    setPost((prevPost) => ({
      ...prevPost,
      tags: prevPost.tags.filter((tag) => tag.id != id),
    }));
  };

  const resetForm = () => {
    setPost({
      title: "",
      content: "",
      author: "",
      tags: [],
    });
    setTag("");
  };

  useEffect(() => {
    setPost((prev) => ({ ...prev, author: username }));
  }, [username]);

  useEffect(() => {
    if (!open) {
      resetForm();
    }
  }, [open]);

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button>작성</Button>
        </DialogTrigger>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle className="text-lg font-bold">
                게시글 작성
              </DialogTitle>
            </DialogHeader>
            <div className="p-1">
              <div className="m-1 p-1">
                <Label htmlFor="title" className="sr-only">
                  제목
                </Label>
                <Input
                  type="text"
                  id="title"
                  value={post.title}
                  placeholder="제목을 입력하세요"
                  onChange={handleInputChange}
                />
              </div>
              <div className="m-1 p-1">
                <Label htmlFor="content" className="sr-only">
                  내용
                </Label>
                <Textarea
                  id="content"
                  value={post.content}
                  placeholder="내용을 입력하세요"
                  onChange={handleInputChange}
                ></Textarea>
              </div>
              <div className="m-1 p-1">
                <Label htmlFor="tags" className="sr-only">
                  태그
                </Label>
                <Input
                  type="text"
                  id="tags"
                  value={tag}
                  placeholder="태그 입력 후 Enter"
                  onChange={(e) => setTag(e.target.value)}
                  onKeyDown={handleEnter}
                />
              </div>
              <div className="p-1">
                {post.tags.map((tag) => (
                  <TagBadge
                    key={tag.id}
                    tag={tag}
                    onClick={() => handleRemoveTag(tag.id)}
                  ></TagBadge>
                ))}
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">작성하기</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};
