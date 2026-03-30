import { useState } from "react";
import { Button } from "./Button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { TagBadge } from "./TagBadge";
import { getPosts, getTags, getPostById } from "@/shared/api";

export const PostDialog = ({ handleCreatePost, author }) => {
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const post = {
      title: form.title.value,
      context: form.context.value,
      tags: tags,
    };

    handleCreatePost(post, author);

    console.log("Submit post success", post);

    setTag("");
    setTags([]);
  };

  const handleTagSubmit = (e) => {
    if (e.key === "Enter" && tag && !tags.map((t) => t).includes(tag)) {
      e.preventDefault();
      e.stopPropagation();
      setTags([...tags, tag]);
      setTag("");
      console.log("Add tag success", tag, tags);
    }
  };

  const handleTagInput = (e) => {
    setTag(e.target.value);
    console.log("Tag change: ", tag);
  };

  const handleTagDelete = (tag) => {
    setTags(tags.filter((t) => t !== tag));
  };

  return (
    <Dialog>
      <form
        id="post-form"
        onSubmit={handleSubmit}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
          }
        }}
      >
        <DialogTrigger asChild>
          <Button variant="outline">작성</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>게시글 작성</DialogTitle>
          </DialogHeader>
          <Input
            id="post-title"
            name="title"
            form="post-form"
            placeholder="제목을 입력하세요"
          />
          <Textarea
            id="post-context"
            name="context"
            form="post-form"
            placeholder="내용을 입력하세요"
          />
          <Input
            id="post-tag"
            name="tag"
            form="post-form"
            value={tag}
            onChange={handleTagInput}
            onKeyDown={handleTagSubmit}
            placeholder="태그 입력 후 Enter"
          />
          <div>
            {tags.map((t) => (
              <TagBadge
                tag={{ id: null, content: t }}
                onClick={() => handleTagDelete(t)}
              ></TagBadge>
            ))}
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit" form="post-form">
                작성하기
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};
